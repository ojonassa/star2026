# Procedimento operacional LGPD

## Solicitações de titular

1. A instituição responsável deve confirmar a identidade do solicitante por canal oficial antes de alterar dados.
2. Localize o participante pelo CPF apenas em ambiente administrativo autorizado.
3. Para correção, altere somente os dados confirmados e registre `action=update` em `audit_logs` sem colocar CPF ou data de nascimento em `metadata`.
4. Para exclusão, avalie a necessidade institucional de retenção de dados para presença e certificados. Quando não houver retenção exigida, exclua o participante; as relações dependentes usam `on delete cascade`.
5. Registre a conclusão da solicitação sem dados pessoais no log de auditoria e comunique o titular pelo canal institucional.

## Limites

- Nunca encaminhar CPF ou data de nascimento em planilhas, e-mail ou logs sem necessidade autorizada.
- Service role somente pode ser usado em servidor confiável.
- A política de retenção e o canal oficial de atendimento devem ser definidos pela instituição antes da produção.
