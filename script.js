document.addEventListener('DOMContentLoaded',function(){
  var botao = document.getElementById('rolar-pagina');
  botao.addEventListener('click',function(){
    var rolagem=700;
    window.scrollBy({
      top:rolagem,
      behavior:'smooth'
    });
  });
});