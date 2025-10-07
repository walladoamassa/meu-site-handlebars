const express = require('express');
const { engine } = require('express-handlebars'); 

const app = express();
const PORT = 3000;

app.engine('handlebars', engine({
    defaultLayout: 'main', 
    layoutsDir: './views/layouts', 
    partialsDir: './views/partials' 
}));

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', { 
        titulo: 'Meu Site com Handlebars', 
        mensagem: 'Olá, mundo! 👋' 
    });
});

app.get('/usuarios', (req, res) => {
    const listaUsuarios = [
        { nome: "Wallison Souza", idade: 25, ativo: true },
        { nome: "Alice", idade: 30, ativo: true },
        { nome: "Bob", idade: 22, ativo: false }
    ];

    res.render('lista', { 
        titulo: 'Lista de Usuários', 
        usuarios: listaUsuarios,     
        temUsuarios: listaUsuarios.length > 0 
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});