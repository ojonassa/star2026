# Deploy

## Recomendação inicial
- Banco/Auth/Storage: Supabase Free.
- Frontend/backend Next.js: Netlify Free como primeira opção para custo previsível; a plataforma oferece suporte atual ao Next.js/App Router e o plano gratuito usa limites rígidos.
- Vercel pode ser usada para desenvolvimento pessoal/academico, mas revisar os termos do plano Hobby antes de adotar em uso institucional.

## Alternativas
- Vercel Hobby, observando os termos de uso do plano.
- Cloudflare Workers/Pages com adaptador apropriado.

## Variáveis
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL`

## Checklist
1. Criar projeto Supabase.
2. Aplicar, nesta ordem, as migrations `001_initial_schema.sql`, `002_storage_and_seed.sql`, `003_course_registration_rpc.sql`, `004_checkin_rpc.sql` e `005_security_and_checkin_fixes.sql`.
3. Criar usuário admin no Auth.
4. Inserir `auth.users.id` em `admin_users`.
5. Configurar bucket `event-media`.
6. Configurar envs no provedor.
7. Fazer deploy.
8. Testar inscrição em produção.
9. Testar matrícula.
10. Testar check-in com QR em celular real.
11. Testar exportação CSV.
