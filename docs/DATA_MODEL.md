# Modelo de Dados

## event_settings
Configuração única/por edição do evento.

## banners
Itens do carrossel público.

## participants
Dados pessoais do participante.

## event_registrations
Vínculo participante-evento.

## courses
Minicursos.

## course_registrations
Matrículas nos minicursos.

## event_days
Cada dia do evento e status do check-in.

## attendance
Presenças diárias.

## admin_users
Perfis autorizados no admin.

## audit_logs
Auditoria de alterações administrativas.

## Relacionamentos
- participant 1:N event_registrations
- event_settings 1:N courses
- participant N:N courses por course_registrations
- event_settings 1:N event_days
- participant N:N event_days por attendance
