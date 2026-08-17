# Roadmap em etapas pequenas

## Fase 0 — Bootstrap
Objetivo: projeto rodando localmente.
- Criar Next.js com TypeScript, App Router, Tailwind e ESLint.
- Instalar dependências essenciais.
- Criar `.env.example`.
- Criar estrutura de diretórios.
- Criar `PROGRESS.md`.

Limite: não implementar features.

## Fase 1 — Banco e Supabase
- Aplicar migration inicial.
- Criar clients Supabase browser/server/admin.
- Configurar Storage bucket para mídia.
- Criar seed de `event_settings`.

Aceite: conexão funciona e migration sobe limpa.

## Fase 2 — Landing page
- Hero.
- Carrossel de banners.
- Cards de minicursos publicados.
- CTAs.
- Rodapé/política.
- Tema dinâmico pelas configurações.

Aceite: responsivo em 360px e desktop.

## Fase 3 — Inscrição geral
- Formulário.
- Validação Zod.
- Validação de CPF.
- Persistência.
- Tratamento de duplicidade.
- Mensagens de sucesso/erro.

Aceite: participante válido entra uma única vez.

## Fase 4 — Matrícula em minicursos
- Página/listagem.
- Detalhe.
- Autenticação leve por CPF + nascimento.
- Verificação de inscrição geral.
- Capacidade e duplicidade.

Aceite: não ultrapassar vagas nem duplicar matrícula.

## Fase 5 — Auth e shell do admin
- Login Supabase Auth.
- Proteção de rotas.
- Sidebar/topbar.
- Dashboard inicial.

Aceite: usuário não autorizado não acessa `/admin`.

## Fase 6 — CRUD administrativo
- Configurações.
- Banners + upload.
- Minicursos.
- Participantes.
- Matrículas.

Aceite: CRUD funcional e validado.

## Fase 7 — Check-in QR
- CRUD de dias do evento.
- Abrir/fechar check-in.
- Gerar/regenerar token.
- Gerar QR Code.
- Tela pública de check-in.
- Criar presença idempotente.

Aceite: presença única por participante/dia.

## Fase 8 — Presenças e exportação
- Dashboard por dia.
- Busca/filtros.
- Elegibilidade para certificado.
- CSV geral.
- CSV por minicurso.

Aceite: CSV abre corretamente e contém colunas previstas.

## Fase 9 — Qualidade e deploy
- Testes dos fluxos críticos.
- Revisão de acessibilidade.
- Revisão de segurança.
- Build produção.
- Documentação de deploy.

Aceite: produção navegável e fluxos críticos testados.

## Backlog pós-MVP
- Lista de espera.
- E-mail de confirmação.
- Certificado PDF automático.
- Check-in específico de minicurso.
- PWA/offline para recepção.
- Múltiplas edições do STAR.
- Relatórios avançados.
