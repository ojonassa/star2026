# Arquitetura

## Aplicação
Monólito Next.js App Router.

### Camadas
- `app/(public)`: páginas públicas.
- `app/admin`: painel administrativo.
- `app/api`: endpoints controlados pelo servidor.
- `lib/supabase`: clients browser/server/admin.
- `lib/validation`: schemas Zod.
- `lib/services`: regras de negócio.
- `components`: UI reutilizável.

## Supabase
- Postgres: dados do evento.
- Auth: administradores.
- Storage: banners/logo/imagens.

## Segurança
O browser público nunca recebe service role. Cadastros públicos passam por handlers server-side, que validam entrada, aplicam rate limit simples quando possível e executam apenas operações necessárias.

## Rotas propostas
### Públicas
- `/`
- `/inscricao`
- `/minicursos`
- `/minicursos/[slug]`
- `/check-in`
- `/privacidade`

### Admin
- `/admin/login`
- `/admin`
- `/admin/configuracoes`
- `/admin/banners`
- `/admin/minicursos`
- `/admin/participantes`
- `/admin/matriculas`
- `/admin/check-in`
- `/admin/presencas`
- `/admin/exportacoes`

## Endpoints principais
- `POST /api/registrations`
- `POST /api/course-registrations`
- `POST /api/check-in`
- `POST /api/admin/checkin-days/:id/rotate-token`
- `GET /api/admin/exports/participants.csv`
- `GET /api/admin/exports/course/:id.csv`

## Estratégia de autenticação
Participante não cria conta.
Administrador usa Supabase Auth.
Middleware protege `/admin/*` exceto login.
Além do login, confirmar que `auth.uid()` existe em `admin_users` com `active=true`.

## UI
Mobile-first, acessível, visual tecnológico, sem excesso de animações. Paleta configurável por CSS variables carregadas das configurações do evento.
