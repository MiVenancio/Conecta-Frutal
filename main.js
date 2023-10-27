var meuBotao = document.getElementById("meuBotao");
var divExibicao = document.getElementById("exibicao");

meuBotao.addEventListener('click',function(){
    divExibicao.textContent = "O botão foi clicado e o conteúdo foi alterado."
})
