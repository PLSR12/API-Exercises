<h1 align="center">
 API-BlogMovie
</h1>

<h3 align="center">
  Let's know this repositories.
</h3>

<br>

<p align="center">
  <a href="#house-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-installation">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## :house: About the project

Aplicação completa de uma blog.

Na criação da API foi utilizado Express, yup, a biblioteca uuid, e o Sequelize para fazer a conexão com os bancos de dados que é o Postgres.

Na parte da tela do administrador , foi utilizado a biblioteca MUI para o uso dos ícones e criação das tabelas
<br>

## :computer: Technologies

![JAVASCRIPT](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NODE](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![POSTGRESQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

Made with ♥ by Pedro Dos Santos :wave: [Get in touch!](https://www.linkedin.com/in/pedro-lucas-dos-santos/)

## :house: Routes

### get `/articles`

### get `/articles/:id`

### delete `/articles/:id`

### post `/articles`

<p> Objeto esperado: 
{
   "file":"exemplo.jpg",
   "title":"exemplo",
   "preview":"exemplo preview",
   "content":"exemplo content",
   "category_id":1
}
</p>

### put `/articles/:id`

<p> Objeto esperado: 
{
   "file":"exemplo.jpg",
   "title":"exemplo",
   "preview":"exemplo preview",
   "content":"exemplo content",
   "category_id":1
}
</p>

### get `/category`

### get `/category/:id`

### delete `/category/:id`

### post `/category`

<p> Objeto esperado: 
{
   "file":"exemplo.jpg",
   "name":"exemplo"
}
</p>

### put `/category/:id`

<p> Objeto esperado: 
{
   "file":"exemplo.jpg",
   "name":"exemplo"
}
</p>

### post `/users`

<p> Objeto esperado: 
{
    "email" : "exemplo7@gmail.com",
    "password" : "abc123",
    "name": "exemplo",
    "admin":true
}
</p>

### post `/sessions`

<p> Objeto esperado:

{
"email": "Pedrolucasdossantos7@gmail.com",
"password": "abc123"
}

</p>

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
