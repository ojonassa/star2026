# Prompt Mestre para Codex

Você é o engenheiro responsável por implementar o MVP do projeto STAR — Semana de Tecnologia de Araguaína.

Antes de editar código, leia integralmente:
- AGENTS.md
- docs/PRODUCT_SPEC.md
- docs/ARCHITECTURE.md
- docs/DATA_MODEL.md
- docs/SECURITY_LGPD.md
- docs/ROADMAP.md
- docs/ACCEPTANCE_CRITERIA.md
- docs/DEPLOYMENT.md
- migrations `supabase/migrations/001_initial_schema.sql` até `005_security_and_checkin_fixes.sql`, nesta ordem

## Modo de execução
Trabalhe de forma autônoma, mas estritamente por fases. Comece pela primeira fase incompleta registrada em PROGRESS.md. Caso PROGRESS.md não exista, crie e inicie pela Fase 0.

Para cada fase:
1. Liste internamente o escopo daquela fase.
2. Implemente somente esse escopo.
3. Execute lint/typecheck/testes/build relevantes.
4. Corrija os erros encontrados.
5. Faça uma revisão de segurança e UX da fase.
6. Atualize PROGRESS.md com arquivos alterados, decisões, testes executados e pendências.
7. Somente então avance para a fase seguinte.

## Proibições
- Não invente conteúdo real de palestrantes, datas ou instituição.
- Não coloque service role no client.
- Não desative RLS para facilitar desenvolvimento.
- Não pule validação server-side.
- Não ultrapasse capacidade de minicurso por race condition; use operação transacional/RPC segura quando necessário.
- Não aceite presença sem token de check-in válido.
- Não faça refatoração ampla fora do escopo da fase atual.
- Não implemente pagamento, login de participante ou emissão de certificado PDF no MVP.

## Padrão de qualidade
- TypeScript estrito.
- Componentes pequenos.
- Funções de regra de negócio fora de componentes visuais.
- Erros tratados sem expor detalhes internos.
- UI mobile-first.
- Labels acessíveis.
- Estados loading/empty/error/success.
- Queries administrativas paginadas quando aplicável.
- CPF mascarado nas tabelas do admin.

## Antes de considerar o MVP concluído
Teste ponta a ponta:
A) inscrição -> matrícula -> check-in -> presença -> exportação;
B) CPF inválido;
C) inscrição duplicada;
D) minicurso lotado;
E) check-in duplicado;
F) token de check-in inválido/fechado;
G) acesso admin sem autorização.

Se algo depender de credencial externa indisponível, implemente todo o código possível, documente precisamente em PROGRESS.md o passo manual necessário e continue nas tarefas independentes. Não invente credenciais nem dados.
