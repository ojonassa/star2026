# Manual do Projeto STAR

## 1. Objetivo

O STAR é o sistema web da Semana de Tecnologia de Araguaína.

O sistema contempla:

* divulgação do evento;
* banners;
* minicursos;
* inscrição de participantes;
* matrícula em minicursos;
* check-in por QR Code;
* controle de presença;
* administração de participantes;
* administração de usuários;
* exportações CSV/XLSX;
* comunicação por e-mail;
* personalização visual;
* dados para emissão de certificados.

---

# 2. Stack

O projeto utiliza:

* Next.js 16;
* React;
* TypeScript;
* Tailwind CSS;
* Supabase;
* PostgreSQL;
* Supabase Auth;
* Supabase Storage;
* Resend para e-mail;
* Vitest;
* Git/GitHub.

---

# 3. Pré-requisitos para desenvolvimento

Instalar:

## Node.js

Versão mínima:

```text
Node.js 20.9+
```

Recomendação:

```text
Node.js 20 LTS ou superior compatível.
```

Verificar:

```bash
node --version
```

## npm

```bash
npm --version
```

## Git

```bash
git --version
```

## VS Code

Recomendado como editor do projeto.

---

# 4. Acesso ao GitHub

O responsável pelo repositório deve adicionar os desenvolvedores como colaboradores.

No GitHub:

```text
Repository
→ Settings
→ Collaborators
→ Add people
```

Cada desenvolvedor deve usar a própria conta GitHub.

Não compartilhar usuário/senha do GitHub.

---

# 5. Baixar o projeto

Primeira vez:

```bash
git clone URL_DO_REPOSITORIO
```

Depois:

```bash
cd NOME_DO_REPOSITORIO
```

Exemplo:

```bash
git clone https://github.com/USUARIO/REPOSITORIO.git
cd REPOSITORIO
```

---

# 6. Instalar dependências

Na raiz do projeto:

```bash
npm install
```

Nunca copiar `node_modules` de outro computador.

Cada desenvolvedor deve executar `npm install`.

---

# 7. Variáveis de ambiente

O projeto utiliza `.env.local`.

Criar a partir de:

```text
.env.example
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

O arquivo terá variáveis semelhantes a:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000

RESEND_API_KEY=
EMAIL_FROM=
EMAIL_FROM_NAME=STAR
```

## IMPORTANTE

Nunca enviar `.env.local` para o GitHub.

Nunca colocar:

* service role;
* secret key;
* Resend API key;
* senha;
* connection string;

em arquivos versionados.

`.env.local` deve permanecer ignorado pelo Git.

As credenciais devem ser fornecidas aos desenvolvedores por um canal privado.

---

# 8. Atenção à Service Role

`SUPABASE_SERVICE_ROLE_KEY` possui privilégios elevados.

Ela:

* nunca deve aparecer no frontend;
* nunca deve usar prefixo `NEXT_PUBLIC_`;
* nunca deve ser publicada no GitHub;
* nunca deve ser enviada em grupo público.

Somente código server-side pode utilizá-la.

---

# 9. Rodar localmente

Execute:

```bash
npm run dev
```

Abrir:

```text
http://localhost:3000
```

Admin:

```text
http://localhost:3000/admin/login
```

---

# 10. Primeira compilação

No modo desenvolvimento, a primeira abertura de uma rota pode ser mais lenta devido à compilação do Next.js.

Para comparar com comportamento de produção:

```bash
npm run build
npm start
```

Depois abrir:

```text
http://localhost:3000
```

---

# 11. Comandos de validação

Antes de enviar alterações:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

O ideal é que todos passem.

---

# 12. Fluxo Git recomendado

Antes de trabalhar:

```bash
git checkout main
git pull
```

Criar branch:

```bash
git checkout -b nome-da-tarefa
```

Exemplos:

```bash
git checkout -b fix/minicurso-form
```

```bash
git checkout -b feat/pagina-programacao
```

Depois:

```bash
git add .
git commit -m "fix: preserve minicurso form data"
git push -u origin nome-da-tarefa
```

Abrir Pull Request no GitHub.

---

# 13. Não trabalhar todos diretamente na main

Fluxo recomendado:

```text
main
  ↑
Pull Request
  ↑
branch individual
```

Exemplo:

```text
Gabriel
→ feat/melhoria-dashboard

Italo
→ fix/responsividade

Arthur
→ feat/programacao
```

Depois de revisão:

```text
merge → main
```

A `main` representa a versão publicada.

---

# 14. Banco de dados

O banco está no Supabase.

As alterações estruturais são controladas por migrations em:

```text
supabase/migrations/
```

Nunca alterar manualmente uma migration antiga já aplicada.

Para mudanças novas:

```text
009_nome_da_alteracao.sql
010_nome_da_alteracao.sql
...
```

---

# 15. Regra de migrations

Antes de criar migration:

1. verificar a migration mais recente;
2. criar novo número sequencial;
3. não sobrescrever migrations antigas;
4. testar SQL;
5. documentar no `PROGRESS.md`.

---

# 16. Funcionalidades públicas

## Página inicial

Deve apresentar:

* nome do evento;
* informações;
* banners;
* minicursos;
* CTAs;
* inscrição.

## Inscrição

Dados principais:

* nome;
* CPF;
* nascimento;
* e-mail.

Também podem existir:

* telefone;
* instituição;
* curso;
* cidade.

## Minicursos

O participante pode:

* consultar;
* visualizar detalhes;
* verificar horário;
* consultar vagas;
* matricular-se.

## Check-in

Fluxo:

```text
QR Code
→ CPF
→ Data de nascimento
→ validação
→ presença
```

---

# 17. Administração

A área `/admin` é restrita.

Módulos existentes ou previstos:

* Dashboard;
* Participantes;
* Minicursos;
* Matrículas;
* Presenças;
* Check-in;
* Banners;
* Comunicação;
* Exportações;
* Usuários;
* Configurações.

---

# 18. Usuários administrativos

Cada integrante deve possuir conta própria.

Não compartilhar contas.

Dados:

* nome;
* e-mail;
* equipe;
* status.

Equipes:

* Coordenação;
* Desenvolvimento;
* Divulgação;
* Credenciamento;
* Apoio.

---

# 19. Primeiro acesso

Novo usuário recebe uma senha temporária.

Fluxo:

```text
E-mail + senha temporária
→ Login
→ Troca obrigatória de senha
→ Painel administrativo
```

Após alterar a senha:

```text
must_change_password = false
```

---

# 20. Exclusão de usuários

A exclusão administrativa é uma operação excepcional.

Somente integrantes da equipe:

```text
development
```

podem executá-la.

Outros administradores podem continuar usando as funcionalidades permitidas pelo sistema, mas não excluir usuários.

Sempre preferir:

```text
Desativar
```

quando a intenção for apenas retirar acesso.

---

# 21. Banners

O módulo permite administrar banners do carrossel.

Imagem recomendada:

```text
1600 × 600 px
```

Proporção aproximada:

```text
8:3
```

Formatos:

* WebP;
* JPG;
* PNG.

Preferência:

```text
WebP
```

Campos:

* imagem;
* título;
* subtítulo;
* link;
* nova aba;
* ordem;
* ativo/inativo.

---

# 22. Minicursos

Imagem recomendada:

```text
1200 × 675 px
```

Proporção:

```text
16:9
```

Dados:

* título;
* slug;
* ministrante;
* bio;
* descrição;
* vagas;
* início;
* fim;
* local;
* imagem;
* status.

---

# 23. Participantes

O módulo administrativo deve permitir consultar:

* dados;
* inscrição;
* minicursos;
* presenças;
* frequência;
* elegibilidade para certificado.

CPF deve permanecer mascarado em listagens quando possível.

---

# 24. Check-in

O QR representa um dia/sessão válida de check-in.

Não representa diretamente um participante.

Fluxo:

```text
QR
→ token
→ CPF + nascimento
→ participante
→ inscrição ativa
→ presença
```

Presença deve ser idempotente.

Uma pessoa não deve gerar duas presenças no mesmo dia.

---

# 25. Comunicação por e-mail

O projeto utiliza uma camada server-side para envio.

Tipos previstos:

* confirmação de inscrição;
* confirmação de matrícula;
* comunicações administrativas;
* avisos do evento.

Falha de e-mail não deve apagar/cancelar uma inscrição válida.

Consultar `email_logs` para diagnosticar falhas.

---

# 26. Exportações

Formatos:

* CSV;
* XLSX.

CSV para Excel brasileiro deve utilizar:

```text
UTF-8 com BOM
separador ;
```

Cada propriedade deve aparecer em sua própria coluna.

---

# 27. O que testar

## Inscrição

* CPF válido;
* CPF inválido;
* inscrição válida;
* duplicidade;
* nascimento incompatível;
* e-mail de confirmação.

## Minicurso

* criação;
* edição;
* upload;
* capacidade;
* horário;
* slug;
* erros por campo;
* preservar formulário após erro;
* matrícula;
* duplicidade;
* lotação;
* conflito.

## Usuários

* criação;
* senha temporária;
* troca de senha;
* login;
* desativação;
* reativação;
* exclusão apenas por Desenvolvimento.

## Banners

* upload;
* edição;
* link;
* ordem;
* ativação;
* exclusão.

## Check-in

* QR válido;
* QR inválido;
* CPF correto;
* CPF incorreto;
* nascimento incorreto;
* check-in duplicado;
* dia fechado.

## Comunicação

* e-mail de inscrição;
* e-mail de minicurso;
* comunicação manual;
* falha do provedor;
* `email_logs`.

## Exportação

* CSV;
* XLSX;
* acentuação;
* colunas;
* datas;
* percentuais.

---

# 28. Como documentar bugs

Ao encontrar problema, registrar:

## Página

Exemplo:

```text
/admin/minicursos
```

## Passos

```text
1. Abrir minicursos.
2. Preencher formulário.
3. Informar slug inválido.
4. Clicar em salvar.
```

## Esperado

```text
Erro apenas no campo slug e demais dados preservados.
```

## Obtido

```text
Formulário foi apagado.
```

## Evidência

Anexar:

* print;
* vídeo;
* erro do navegador;
* erro do terminal.

---

# 29. GitHub Issues

Preferencialmente criar um Issue para cada bug.

Título:

```text
[BUG] Formulário de minicurso perde dados
```

Descrição:

```text
Página:
Ambiente:
Passos:
Resultado esperado:
Resultado atual:
Print:
```

Não agrupar 10 bugs diferentes em um único Issue.

---

# 30. Deploy

A produção deve ser ligada ao GitHub.

Fluxo:

```text
Desenvolvedor
→ branch
→ Pull Request
→ merge na main
→ deploy automático
```

A branch de produção é:

```text
main
```

---

# 31. Variáveis de produção

As variáveis NÃO ficam no GitHub.

Devem ser cadastradas diretamente na plataforma de hospedagem.

Necessárias:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_SITE_URL

RESEND_API_KEY
EMAIL_FROM
EMAIL_FROM_NAME
```

---

# 32. Após publicar

Atualizar:

```text
NEXT_PUBLIC_SITE_URL
```

para a URL real.

Exemplo:

```text
https://star-evento.netlify.app
```

Também revisar no Supabase:

```text
Authentication
→ URL Configuration
```

Adicionar a URL de produção onde necessário.

---

# 33. Regras para desenvolvedores

Antes de começar:

```bash
git pull
```

Antes de commit:

```bash
npm run lint
npm run typecheck
npm test
```

Antes de Pull Request:

```bash
npm run build
```

Nunca:

* commitar `.env.local`;
* subir secrets;
* alterar migration antiga aplicada;
* trabalhar diretamente em produção sem teste;
* apagar dados reais para testar.

---

# 34. Checklist antes de liberar o STAR

* [ ] Home funcionando.
* [ ] Responsividade validada.
* [ ] Inscrição funcionando.
* [ ] Participante salvo no Supabase.
* [ ] E-mail testado.
* [ ] Minicurso criado.
* [ ] Matrícula funcionando.
* [ ] Lotação funcionando.
* [ ] Login administrativo funcionando.
* [ ] Primeiro acesso funcionando.
* [ ] Troca de senha funcionando.
* [ ] Banners funcionando.
* [ ] Upload funcionando.
* [ ] QR funcionando.
* [ ] Check-in funcionando.
* [ ] Duplicidade bloqueada.
* [ ] Presenças visíveis.
* [ ] CSV funcionando.
* [ ] XLSX funcionando.
* [ ] RLS testada.
* [ ] Nenhum secret no GitHub.
* [ ] Build de produção passando.

# 35. Estado do projeto

O STAR ainda está em fase de validação.

Qualquer problema encontrado deve ser documentado antes de correções amplas.

Prioridade atual:

1. estabilidade;
2. testes;
3. segurança;
4. operação do evento;
5. melhorias visuais.
