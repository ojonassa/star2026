alter table public.admin_users add column if not exists must_change_password boolean not null default true;

-- Contas existentes já são administradas por pessoas conhecidas; não forçar uma
-- troca inesperada. Novas contas criadas pelo fluxo direto recebem true.
update public.admin_users set must_change_password = false where must_change_password = true and created_at < now();
