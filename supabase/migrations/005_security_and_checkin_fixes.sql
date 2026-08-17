-- Correções rastreáveis da auditoria externa; não altera migrations anteriores.
revoke all on function public.register_for_course(uuid, text, date) from public, anon, authenticated;
grant execute on function public.register_for_course(uuid, text, date) to service_role;

create or replace function public.perform_checkin(p_token text, p_cpf text, p_birth_date date)
returns text language plpgsql security definer set search_path = public as $$
declare v_day_id uuid; v_event_id uuid; v_participant_id uuid;
begin
  select id, event_id into v_day_id, v_event_id from public.event_days where checkin_open and token_hash = encode(digest(p_token, 'sha256'), 'hex');
  if not found then return 'invalid_token'; end if;
  select id into v_participant_id from public.participants where cpf = regexp_replace(p_cpf, '\D', '', 'g') and birth_date = p_birth_date;
  if not found then return 'participant_not_found'; end if;
  if not exists (select 1 from public.event_registrations where event_id = v_event_id and participant_id = v_participant_id and status = 'active') then return 'registration_required'; end if;
  insert into public.attendance(event_day_id, participant_id) values(v_day_id, v_participant_id) on conflict(event_day_id, participant_id) do nothing;
  if found then return 'checked_in'; end if;
  return 'already_checked_in';
end; $$;
revoke all on function public.perform_checkin(text, text, date) from public, anon, authenticated;
grant execute on function public.perform_checkin(text, text, date) to service_role;
