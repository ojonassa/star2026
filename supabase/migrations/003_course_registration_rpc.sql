create or replace function public.register_for_course(
  p_course_id uuid,
  p_cpf text,
  p_birth_date date
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_participant_id uuid;
  v_event_id uuid;
  v_capacity integer;
  v_starts_at timestamptz;
  v_ends_at timestamptz;
begin
  select c.event_id, c.capacity, c.starts_at, c.ends_at into v_event_id, v_capacity, v_starts_at, v_ends_at
  from courses c where c.id = p_course_id and c.status = 'published' for update;
  if not found then return 'course_unavailable'; end if;

  select p.id into v_participant_id from participants p where p.cpf = regexp_replace(p_cpf, '\D', '', 'g') and p.birth_date = p_birth_date;
  if not found then return 'participant_not_found'; end if;
  if not exists (select 1 from event_registrations er where er.event_id = v_event_id and er.participant_id = v_participant_id and er.status = 'active') then return 'registration_required'; end if;
  if exists (select 1 from course_registrations cr where cr.course_id = p_course_id and cr.participant_id = v_participant_id and cr.status = 'active') then return 'already_registered'; end if;
  if v_starts_at is not null and v_ends_at is not null and exists (
    select 1 from course_registrations cr join courses c on c.id = cr.course_id
    where cr.participant_id = v_participant_id and cr.status = 'active' and c.starts_at is not null and c.ends_at is not null
      and c.starts_at < v_ends_at and c.ends_at > v_starts_at
  ) then return 'schedule_conflict'; end if;
  if (select count(*) from course_registrations where course_id = p_course_id and status = 'active') >= v_capacity then return 'full'; end if;
  insert into course_registrations (course_id, participant_id) values (p_course_id, v_participant_id);
  return 'registered';
end;
$$;

revoke all on function public.register_for_course(uuid, text, date) from public;
