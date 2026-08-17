create extension if not exists pgcrypto;

create type public.content_status as enum ('draft', 'published', 'cancelled');
create type public.registration_status as enum ('active', 'cancelled');

create table public.event_settings (
  id uuid primary key default gen_random_uuid(),
  name text not null default 'STAR — Semana de Tecnologia de Araguaína',
  edition text,
  subtitle text,
  starts_on date,
  ends_on date,
  venue text,
  address text,
  contact_email text,
  instagram_url text,
  logo_url text,
  hero_image_url text,
  primary_color text not null default '#111827',
  secondary_color text not null default '#2563EB',
  accent_color text not null default '#22C55E',
  certificate_min_attendance_percent numeric(5,2) not null default 75,
  privacy_notice text,
  registrations_open boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.banners (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.event_settings(id) on delete cascade,
  title text not null,
  subtitle text,
  image_url text not null,
  link_url text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.participants (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  cpf text not null,
  birth_date date not null,
  email text not null,
  phone text,
  institution text,
  city text,
  privacy_acknowledged_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint participants_cpf_digits check (cpf ~ '^[0-9]{11}$')
);

create unique index participants_cpf_unique on public.participants(cpf);
create index participants_email_idx on public.participants(lower(email));

create table public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.event_settings(id) on delete cascade,
  participant_id uuid not null references public.participants(id) on delete cascade,
  status public.registration_status not null default 'active',
  registered_at timestamptz not null default now(),
  cancelled_at timestamptz,
  unique(event_id, participant_id)
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.event_settings(id) on delete cascade,
  title text not null,
  slug text not null,
  description text not null,
  instructor_name text not null,
  instructor_bio text,
  image_url text,
  starts_at timestamptz,
  ends_at timestamptz,
  room text,
  capacity integer not null default 0 check (capacity >= 0),
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(event_id, slug),
  constraint course_time_order check (ends_at is null or starts_at is null or ends_at > starts_at)
);

create table public.course_registrations (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  participant_id uuid not null references public.participants(id) on delete cascade,
  status public.registration_status not null default 'active',
  registered_at timestamptz not null default now(),
  cancelled_at timestamptz,
  unique(course_id, participant_id)
);

create index course_registrations_course_status_idx on public.course_registrations(course_id, status);

create table public.event_days (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.event_settings(id) on delete cascade,
  event_date date not null,
  label text,
  checkin_open boolean not null default false,
  token_hash text,
  token_rotated_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(event_id, event_date)
);

create table public.attendance (
  id uuid primary key default gen_random_uuid(),
  event_day_id uuid not null references public.event_days(id) on delete cascade,
  participant_id uuid not null references public.participants(id) on delete cascade,
  checked_in_at timestamptz not null default now(),
  source text not null default 'qr',
  unique(event_day_id, participant_id)
);

create table public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role text not null default 'admin' check (role in ('admin','superadmin')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.audit_logs (
  id bigint generated always as identity primary key,
  admin_user_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.event_settings enable row level security;
alter table public.banners enable row level security;
alter table public.participants enable row level security;
alter table public.event_registrations enable row level security;
alter table public.courses enable row level security;
alter table public.course_registrations enable row level security;
alter table public.event_days enable row level security;
alter table public.attendance enable row level security;
alter table public.admin_users enable row level security;
alter table public.audit_logs enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_users au
    where au.user_id = auth.uid() and au.active = true
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

create policy "public read event settings" on public.event_settings
for select to anon, authenticated using (true);

create policy "public read active banners" on public.banners
for select to anon, authenticated using (active = true);

create policy "public read published courses" on public.courses
for select to anon, authenticated using (status = 'published');

create policy "admins manage event settings" on public.event_settings
for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage banners" on public.banners
for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage courses" on public.courses
for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage participants" on public.participants
for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage event registrations" on public.event_registrations
for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage course registrations" on public.course_registrations
for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage event days" on public.event_days
for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage attendance" on public.attendance
for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins read admin users" on public.admin_users
for select to authenticated using (public.is_admin());
create policy "admins read audit logs" on public.audit_logs
for select to authenticated using (public.is_admin());

-- Public inserts are intentionally NOT granted via RLS.
-- Public registration/check-in must be performed by trusted server-side handlers.

create or replace function public.updated_at_trigger()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger event_settings_updated_at before update on public.event_settings
for each row execute function public.updated_at_trigger();
create trigger banners_updated_at before update on public.banners
for each row execute function public.updated_at_trigger();
create trigger participants_updated_at before update on public.participants
for each row execute function public.updated_at_trigger();
create trigger courses_updated_at before update on public.courses
for each row execute function public.updated_at_trigger();
create trigger event_days_updated_at before update on public.event_days
for each row execute function public.updated_at_trigger();
