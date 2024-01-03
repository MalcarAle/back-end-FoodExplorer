<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=265073&height=120&section=header"/>

<p align="center">
  <h1 align="center"><a href="https://explorerfood.netlify.app/">ExplorerFood - Rocketseat Explorer :rocket: </a></h1>
</p>

<p align="center">
  <img width="400" height="72" src="https://user-images.githubusercontent.com/106932234/204160165-1936c0db-539f-4a11-bf5e-1f3d3f789896.png">
</p>

Bem-vindo ao ExplorerFood, o projeto final do curso Rocketseat Explorer.
<br>
O desafio engloba desenvolver o front-end e o back-end da aplicação, além de realizar o deploy.

---

## 💻 Sobre

O ExplorerFood representa uma plataforma online exclusiva para estabelecimentos gastronômicos. Após a conclusão do registro, os usuários têm à disposição a criação de pedidos e o acompanhamento em tempo real de seu status. Adicionalmente, a plataforma oferece recursos como personalização de perfil, filtragem de favoritos, busca avançada e um canal direto de comunicação com o restaurante. O carrinho de compras é totalmente interativo, proporcionando aos usuários a escolha entre duas formas de pagamento: cartão ou Pix. Os administradores possuem total controle sobre a gestão de pratos, desde a criação até a remoção, além da habilidade de atualizar dinamicamente o status dos pedidos, refletindo instantaneamente para os consumidores. O projeto apresenta diversas características adicionais, incluindo a flexibilidade de personalizar o tema da página, ajustar o perfil do usuário (avatar, nome e senha) e proporcionar uma experiência visual envolvente. Destaca-se que o design é adaptável para diversos dispositivos!

Este repositório abrange os arquivos do Frontend em React.js e do BackEnd em Node.js.

---

## 🖼️ Layout

Abaixo algumas imagens do layou, este modelo para DeskTop:

![explorerfood vercel app_](https://user-images.githubusercontent.com/106932234/204163348-5f06ae24-3ede-4bae-b68a-770493d1a286.png)

![explorerfood vercel app_ (1)](https://user-images.githubusercontent.com/106932234/204163350-1d4c8a96-f68a-4eb0-aa8e-5343e2681749.png)

Você pode visualizar o layout completo do projeto através [DESSE LINK](https://www.figma.com/file/LOMJWIopGI0VwmAU9aT2YS/food-explorer-v2?node-id=201-1532&t=zm3uJVZpfRMLBSLd-0). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

---

## 🧑‍💻 Tecnologias

Aqui algumas das tecs utilizadas no projeto:

### Front

- `ReactJS`
- `Vite`
- `Axios`
- `swiper`
- `LocalStorage`
- `styled-components`
- `react-router-dom`
- `react-select`
- `react-input-mask`
- `react-icons`

### Back

- `Node.js`
- `Express`
- `SQLite`
- `Knex.js`
- `Autenticação`
- `JWT`
- `Middlewares`
- `Upload de imagens`
- `API Restful`
- `Cors`
- `PM2`
- `Deploy e utilização do render`
- `Variáveis de ambiente`
- `Testes automatizados`
- `Jest`

---

## 🚀 Como iniciar

Clone o projeto para o local desejado em seu computador.

````bash
$ git clone git@github.com:andreviapiana/ExplorerFood.git


#### 💻 Executando o FrontEnd
```bash

# Faça a instalação das dependencias
$ npm install

# Agora inicie o servidor do FrontEnd
$ npm run dev

# O terminal irá exibir o endereço local onde a aplicação está sendo executada. Basta digitar o mesmo endereço em seu navegador preferido. O endereço usado na criação do projeto foi este:

  http://localhost:5173/
````

<br>

#### 🚧 Executando o BackEnd

```bash
# No BackEnd insira uma porta e um secret no arquivo .env vazio
  AUTH_SECRET=
  PORT=

# Faça a instalação das dependencias
$ npm install

# Agora inicie o servidor do BackEnd
$ npm run dev
```

<br>

## Endpoints

OBS: Você pode criar os endpoints abaixo e realizar os testes

### Users

`POST`:

```bash
/users/
```

para criar um usurário administrador, basta fazer uma requisição em /users/, informando o nome, email, senha e isAdmin = 1; (int).

### Authenticate (login)

`POST`:

```bash
/sessions/
```

### Favorites (pratos favoritos do usuário)

`POST`:

```bash
/favorites/
```

`GET`:

```bash
/favorites/
```

`DELETE`:

```bash
/favorites/:id
```

### Dishes

`POST`:

```bash
/dishes/
```

`PUT`:

```bash
/dishes/:id
```

`DELETE`:

```bash
/dishes/:id
```

`GET`:

```bash
/dishes/
```

`GET`:

```bash
/dishes/:id
```

`PATCH`:

```bash
/dishes/photo/:id
```

### Requests (produtos adicionados no carrinho)

`POST`:

```bash
/requests/
```

`GET`:

```bash
/requests/
```

`DELETE`:

```bash
/requests/:id
```

### Purchases (compras finalizadas)

`POST`:

```bash
/purchases/
```

`GET`:

```bash
/purchases/
```

`PATCH`:

```bash
/purchases/:id
```


<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=265073&height=120&section=footer"/>
