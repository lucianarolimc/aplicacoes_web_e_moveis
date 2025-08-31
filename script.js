// obter referência aos links
const link_educacao = document.getElementById("linkEducacao");
const link_sobremim = document.getElementById("linkSobreMim");
const link_portfolio = document.getElementById("linkPortifolio");
const link_contatos = document.getElementById("linkContatos");
const conteudo_artigo = document.getElementById("conteudo");
const formulario_contato = document.getElementById("formularioContato")


// itens da formação acadêmica
let items = [
    "<p>Engenharia da Computação - Universidade Federal do Amazonas (UFAM) - 2015</p>",
    "<p>Mestrado em Engenharia Elétrica - Universidade Federal do Amazonas (UFAM) - 2024</p>",
    "<p>Engenharia de Software - UNINTER - 2025 a 2029</p>"
];

// itens de idiomas
let items2 = [
    "<p>Inglês - EF English Live - 2020</p>",
];

// itens de portfólio
let itens_portifolio = [
    "<a href='https://github.com/lucianarolimc/' target='_blank'>Visitar GitHub</a>",
];

// lista de elementos que serão exibidos em formação acadêmica
const itens_educacao = [items[0], items[1], items[2]];

// concatena cada item da list na string ulEducacao
let ulEducacao = '<ul>';
itens_educacao.forEach(item => {
    ulEducacao += `<li>${item}</li>`;
});
ulEducacao += '</ul>';

// subtítulos
const titulo1 = "<h1>Educação</h1>";
const titulo2 = "<h3>Formação Acadêmica</h3>";
const titulo3 = "<h3>Idiomas</h3>";
const titulo_portfolio = "<h1>Portfólio</h1>";

// lista de elementos que serão exibidos - cursos
const itens_educacao2 = [items2[0]];

// concatena cada item da list na string ulEducacao2
let ulEducacao2 = '<ul>';
itens_educacao2.forEach(item => {
    ulEducacao2 += `<li>${item}</li>`;
});
ulEducacao2 += '</ul>';

// evento de escuta do link Educação
link_educacao.addEventListener("click", function(event){
    event.preventDefault();

    // exibe o conteúdo do artig
    conteudo_artigo.style.display = 'block';

    // esconde o conteúdo do formulário
    formulario_contato.style.display = 'none';

    // altera o conteúdo do artigo
    document.getElementById('conteudo').innerHTML = titulo1 + titulo2 + ulEducacao + titulo3 + ulEducacao2;
})

// evento de escuta do link Portfólio
link_portfolio.addEventListener("click", function(event){
    event.preventDefault();

    // exibe o conteúdo do artigo
    conteudo_artigo.style.display = 'block';

    // esconde o conteúdo do formulário
    formulario_contato.style.display = 'none';

    // altera o conteúdo do artigo
    document.getElementById('conteudo').innerHTML = titulo_portfolio + itens_portifolio;
})

// evento de escuta do link Contatos
link_contatos.addEventListener("click", function(event){
    event.preventDefault();

    // esconde o conteúdo do artigo principal
    conteudo_artigo.style.display = 'none';

    // exibe o formulário
    formulario_contato.style.display = 'block';

})

// salvar o conteúdo de "Sobre Mim"
const conteudoArtigo = document.getElementById("conteudo").innerHTML;
localStorage.setItem("conteudoOriginal", conteudoArtigo);
console.log("Conteúdo salvo no localStorage!")

// recuperar o conteúdo salvo e exibí-lo toda vez 
// que o link "Sobre Mim" for clicado
document.getElementById("linkSobreMim").addEventListener("click", () => {
    const conteudoSalvo = localStorage.getItem("conteudoOriginal");

    if(conteudoSalvo) {
        document.getElementById("conteudo").innerHTML = conteudoSalvo;
        console.log("Conteúdo recuperado e exibido!")
    } else {
        document.getElementById(conteudo).innerHTML = "Nenhum conteúdo salvo ainda";
    }

    // exibe o conteúdo do artigo
    conteudo_artigo.style.display = 'block';

    // esconde o formulário
    formulario_contato.style.display = 'none';
})

function mostrarMensagemERedirecionar(){

    const campo_nome = document.getElementById("nome").value;
    const campo_email = document.getElementById("email").value;
    const campo_mensagem = document.getElementById("caixaTexto").value;

    // só exibe a mensagem se todos os campos não estiverem vazios
    if(campo_nome.trim()  === "" || campo_email.trim() === "" || campo_mensagem.trim() === ""){
        alert('Campo Vazio');      
        return false;
    } else {
        // exibe a mensagem
        alert("Formulário enviado com sucesso!");
    }
  
}



