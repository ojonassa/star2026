# STAR — Semana de Tecnologia de Araguaína

Pacote de handoff para desenvolvimento autônomo com Codex.

## Objetivo
Construir um sistema web para divulgação e gestão do evento STAR, incluindo inscrições, minicursos, check-in diário via QR Code, painel administrativo, exportação de dados para certificados e configurações visuais.

## Stack alvo
- Next.js 16+ (App Router, TypeScript)
- Tailwind CSS
- Supabase Postgres
- Supabase Auth (somente administradores)
- Supabase Storage (logos/banners)
- Zod para validação
- React Hook Form para formulários
- QR Code gerado pela aplicação
- Deploy: Vercel inicialmente; manter compatibilidade com Netlify/Cloudflare quando possível

## Ordem de leitura para Codex
1. `AGENTS.md`
2. `docs/PRODUCT_SPEC.md`
3. `docs/ARCHITECTURE.md`
4. `docs/DATA_MODEL.md`
5. `docs/SECURITY_LGPD.md`
6. `docs/ROADMAP.md`
7. `docs/ACCEPTANCE_CRITERIA.md`
8. `docs/DEPLOYMENT.md`
9. `docs/CODEX_MASTER_PROMPT.md`
10. Migrations `supabase/migrations/001_initial_schema.sql` até `005_security_and_checkin_fixes.sql`, nesta ordem.

## Regra principal

Não implementar funcionalidades fora do escopo atual sem registrá-las como TODO. Cada fase deve terminar compilando, lintando e com os critérios de aceite atendidos antes de avançar.

## Executar localmente

1. Instale as dependências: `npm install`.
2. Copie `.env.example` para `.env.local` e preencha as variáveis do Supabase e, quando houver envio de e-mail, do Resend.
3. Aplique as migrations em `supabase/migrations` na ordem numérica em um projeto Supabase.
4. Execute `npm run dev`.

Variáveis externas: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `EMAIL_FROM` e `EMAIL_FROM_NAME`.

Nunca versione `.env.local` ou qualquer chave, senha, token ou string de conexão. Apenas `.env.example`, sem valores sensíveis, deve ser versionado.
