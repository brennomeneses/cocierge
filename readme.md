
# Cocierge
### Integrantes
- Anderson Neumann
- Brenno Araujo
- Eduardo Ribeiro
## Design Patterns
Foram aplicados no projeto somente dois Design Patterns no projeto.
- Factory (No back-end nos controllers).
- Singletone (No front-end nas paginas).

## Banco de dados & Back-end:
Foi utilizado o banco de dados PostgreSQL, o back-end é uma API Restful feita em Typescript com Express e Prisma.

![](https://i.imgur.com/xOm7P00.png)

_Tabelas do banco de dados_
O relacionamento entre tabelas foi escrito usando o PrismaSchema, que está na pasta `prisma/`

## Interface e Front-end
O front-end foi feito em Electron com HTML

![](https://i.imgur.com/0Gg2ZvC.png)

_Tela inicial do projeto_

## Iniciar o projeto.
1. Clone o projeto
```bash
$ git clone https://github.com/brennomeneses/cocierge.git
$ cd cocierge/
```
2. Crie e configure o arquivo `.env` na raiz do projeto, `DATABASE_URL` é o arquivo de configuração do prisma:
```env
DATABASE_URL="postgresql://admin:12345@localhost:5432/pg_cocierge?schema=public"
```
3. Instale as dependências
```bash
$ yarn # ou yarn install
```
4. Inicie o projeto
```bash
$ yarn dev # ou yarn start
```
Isso irá iniciar o back-end, para inciar o front-end rode os comandos:
1. Mude para o diretório web
```bash
$ cd web/
```
2. Instale as dependências
```bash
$ yarn # ou yarn install
```
3. Inicie o projeto.
```bash
$ yarn start
```


