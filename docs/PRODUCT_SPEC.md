# Product Spec — STAR

## 1. Visão
O STAR é o portal oficial da Semana de Tecnologia de Araguaína. O sistema deve divulgar o evento, receber inscrições, organizar minicursos, registrar presença diária e fornecer dados confiáveis para emissão de certificados pela instituição.

## 2. Perfis
### Participante
- Consulta informações do evento.
- Faz inscrição geral.
- Matricula-se em minicursos.
- Realiza check-in diário via QR Code usando CPF + data de nascimento.

### Administrador
- Gerencia configurações do evento.
- Gerencia banners, palestrantes/minicursos.
- Consulta e edita inscrições.
- Acompanha lotação de minicursos.
- Visualiza presenças por dia.
- Gera QR Code diário.
- Exporta CSV para apoio à emissão de certificados.

## 3. Página pública
Seções mínimas:
- Hero com nome STAR, edição/ano, data e local configuráveis.
- CTA “Inscreva-se”.
- Carrossel de banners configurável pelo admin.
- Destaques/palestrantes (opcional no MVP, podendo ser representados via banners).
- Lista de minicursos com título, ministrante, descrição, data/horário, local, vagas e botão de matrícula.
- Programação resumida (campo configurável ou conteúdo estático inicial).
- Informações de localização/contato.
- Rodapé com política de privacidade.

## 4. Inscrição geral
Campos mínimos obrigatórios:
- Nome completo
- CPF
- Data de nascimento
- E-mail

Campos recomendados:
- Telefone/WhatsApp (opcional)
- Instituição/curso (opcional)
- Cidade (opcional)
- Consentimento/ciência de tratamento de dados

Regras:
- CPF válido e único por evento.
- E-mail válido.
- Data de nascimento válida e não futura.
- Participante recebe mensagem de confirmação na tela.
- Reenvio com mesmo CPF não cria duplicidade.

## 5. Minicursos
Cada minicurso contém:
- Título
- Slug
- Descrição
- Ministrante
- Mini bio do ministrante (opcional)
- Data
- Hora inicial/final
- Local/sala
- Capacidade
- Status: rascunho/publicado/cancelado
- Imagem opcional

Matrícula:
- Exige inscrição geral prévia.
- Participante informa CPF + data de nascimento para autenticação simples do vínculo.
- Impede duplicidade.
- Impede matrícula acima da capacidade.
- Se lotado, mostrar “Lotado”.
- Preparar modelo para lista de espera futura, mas não implementar nesta versão.

## 6. Check-in diário
Fluxo:
1. Admin abre tela de check-in do dia.
2. Sistema gera QR Code com URL contendo identificador/token do dia.
3. Participante escaneia na entrada.
4. Página solicita CPF e data de nascimento.
5. Servidor valida participante inscrito + token válido + dia ativo.
6. Presença é registrada.
7. Tela mostra confirmação, nome do participante e data/hora.

Regras:
- Uma presença por participante/dia.
- Repetição retorna “presença já registrada” sem duplicar.
- Token diário deve poder ser invalidado/regenerado.
- Check-in pode ser aberto/fechado manualmente pelo admin.

## 7. Admin
Dashboard:
- Total de inscritos.
- Inscritos por dia (opcional).
- Total de minicursos.
- Matrículas por minicurso.
- Presenças por dia.
- Indicador de ocupação dos minicursos.

Módulos:
- Evento/Configurações
- Banners
- Minicursos
- Participantes/Inscrições
- Matrículas
- Dias do evento / Check-in
- Presenças
- Exportações
- Administradores (somente superadmin, fase posterior se necessário)

## 8. Configuração visual
Pelo admin, quando possível:
- Logo
- Favicon (opcional)
- Cor primária
- Cor secundária
- Cor de destaque
- Banner/hero
- Nome oficial do evento
- Subtítulo
- Local
- Datas
- Contato
- Instagram/site

As cores devem virar CSS variables para evitar recompilar o projeto.

## 9. Exportação para certificados
CSV mínimo:
- Nome completo
- CPF
- Data de nascimento
- E-mail
- Quantidade de dias presentes
- Percentual de presença
- Elegível para certificado (sim/não)
- Minicursos matriculados

O percentual mínimo de presença deve ser configurável no admin.

## 10. Valor agregado recomendado
- Contador de vagas em minicursos.
- Filtro de minicursos por dia.
- Dashboard de presença em tempo real (refresh simples, sem necessidade de realtime no MVP).
- Exportação CSV por minicurso.
- QR Code diário regenerável.
- Critério automático de elegibilidade para certificado.
- Auditoria básica de ações administrativas.
