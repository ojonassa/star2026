create type public.email_status as enum ('queued', 'sent', 'failed');
create table public.email_logs (
  id bigint generated always as identity primary key,
  recipient text not null,
  subject text not null,
  template_type text not null,
  status public.email_status not null default 'queued',
  provider_message_id text,
  error_message text,
  sent_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
alter table public.email_logs enable row level security;
create policy "admins read email logs" on public.email_logs for select to authenticated using (public.is_admin());
create policy "admins manage email logs" on public.email_logs for all to authenticated using (public.is_admin()) with check (public.is_admin());
