# Segurança e LGPD

## Dados tratados
Nome, CPF, data de nascimento e e-mail são dados pessoais. Devem ser coletados apenas para finalidades informadas, como inscrição, controle de presença e emissão de certificados.

## Regras do MVP
- Exibir aviso de privacidade no formulário.
- Registrar aceite/ciência e timestamp.
- Nunca mostrar CPF completo em listagens públicas.
- No admin, mascarar CPF por padrão e revelar apenas quando necessário.
- Não logar CPF/data de nascimento em console, analytics ou mensagens de erro.
- RLS habilitado em tabelas com dados pessoais.
- Service role somente no servidor.
- Não incluir segredos no Git.
- Exportações administrativas devem exigir sessão autorizada.
- Criar procedimento documentado para excluir/corrigir cadastro quando solicitado pela instituição.

## Observação de arquitetura
Para o MVP acadêmico, o CPF normalizado pode permanecer em coluna privada protegida por RLS e acesso server-side. Se o sistema evoluir para uso institucional real, considerar criptografia de campo e política formal de retenção.
