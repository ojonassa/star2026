# AGENTS.md — Regras do projeto STAR

## Missão
Construir o MVP do sistema STAR com foco em confiabilidade operacional durante o evento, simplicidade de manutenção e proteção de dados pessoais.

## Regras obrigatórias
1. Trabalhar em fases pequenas conforme `docs/ROADMAP.md`.
2. Não avançar de fase se `npm run build`, lint ou testes da fase falharem.
3. Nunca expor `SUPABASE_SERVICE_ROLE_KEY` no browser.
4. Formulários públicos devem chamar Route Handlers/Server Actions controlados pelo servidor.
5. CPF deve ser normalizado para apenas dígitos antes de persistência/comparação.
6. Validar CPF formalmente e validar data de nascimento.
7. Não retornar CPF completo em endpoints públicos.
8. Aplicar RLS no Supabase e princípio de menor privilégio.
9. Operações administrativas exigem usuário autenticado e registro em `admin_users` ativo.
10. Registrar ações administrativas relevantes em `audit_logs`.
11. Check-in deve ser idempotente: repetir a mesma confirmação no mesmo dia não pode criar presença duplicada.
12. Inscrição em minicurso deve respeitar capacidade máxima e impedir duplicidade.
13. Não permitir matrícula em minicursos com conflito de horário, caso datas/horários estejam cadastrados.
14. Todos os estados vazios, loading, erros e sucessos devem ser tratados visualmente.
15. Layout deve funcionar em mobile primeiro.
16. Não inventar logos, nomes de palestrantes ou datas reais. Usar placeholders claramente identificados quando faltarem dados.
17. Manter `.env.example` atualizado.
18. Ao final de cada fase, atualizar `PROGRESS.md` com o que foi feito, pendências e decisões.

## Definition of Done por fase
- Código compila.
- Tipagem sem erro.
- Lint sem erro grave.
- Fluxo principal testado manualmente ou via teste automatizado apropriado.
- Nenhum segredo commitado.
- Migrações reexecutáveis em ambiente limpo.
- Critérios de aceite da fase atendidos.

## Limites
- Não implementar pagamento.
- Não implementar emissão oficial de certificado no MVP; apenas elegibilidade e exportação dos dados necessários.
- Não implementar login para participante no MVP.
- Não usar Google Forms como fonte primária se Supabase estiver configurado.
- Não criar microserviços separados.
- Não adicionar bibliotecas sem necessidade clara.
