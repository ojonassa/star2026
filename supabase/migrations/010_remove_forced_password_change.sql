-- A troca de senha passa a ser opcional. A coluna é mantida por compatibilidade
-- com instalações existentes, mas não bloqueia mais o acesso administrativo.
alter table public.admin_users alter column must_change_password set default false;
update public.admin_users set must_change_password = false where must_change_password = true;
