# Critérios de Aceite Globais

1. Usuário consegue visualizar o evento no celular.
2. Carrossel exibe somente banners ativos, na ordem configurada.
3. Usuário consegue se inscrever com Nome, CPF, nascimento e e-mail.
4. CPF inválido é rejeitado.
5. Mesmo CPF não gera duas inscrições no mesmo evento.
6. Usuário inscrito consegue se matricular em minicurso com vagas.
7. Minicurso lotado rejeita nova matrícula.
8. Admin autenticado consegue criar/editar/desativar minicursos.
9. Admin consegue cadastrar e ordenar banners.
10. Admin consegue mudar logo e cores sem alterar código, se Supabase Storage estiver configurado.
11. Admin consegue criar/abrir um dia de check-in e exibir QR Code.
12. QR Code leva à tela correta com token do dia.
13. CPF + nascimento corretos registram presença.
14. Dados incorretos não registram presença.
15. Mesmo participante não gera presença duplicada no mesmo dia.
16. Admin consegue consultar presentes por dia.
17. Sistema calcula elegibilidade de certificado conforme percentual configurado.
18. Admin consegue exportar CSV.
19. Dados pessoais não estão acessíveis por select público anônimo.
20. Build de produção passa sem erros.
