alter table public.admin_users add column if not exists email text;
alter table public.admin_users add column if not exists team text check (team in ('coordination','development','marketing','credentialing','support'));
alter table public.admin_users add column if not exists updated_at timestamptz not null default now();
update public.admin_users au set email = u.email from auth.users u where au.user_id = u.id and au.email is null;
create unique index if not exists admin_users_email_unique on public.admin_users(lower(email));
create trigger admin_users_updated_at before update on public.admin_users for each row execute function public.updated_at_trigger();
