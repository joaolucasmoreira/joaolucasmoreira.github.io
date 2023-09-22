function openContent(event, nomeArtigo) {
    var i, article_content, linkToArticle;
    article_content = document.getElementsByClassName("article-content");
    for (i = 0; i < article_content.length; i++) {
      article_content[i].style.display = "none";
    }
    linkToArticle = document.getElementsByClassName("linkToArticle");
    for (i = 0; i < linkToArticle.length; i++) {
      linkToArticle[i].className = linkToArticle[i].className.replace(" active", "");
    }
    document.getElementById(nomeArtigo).style.display = "block";
    event.currentTarget.className += " active";
  }
  
  var url_atual = window.location.href;
  var artigoPadrao=''
  var a = url_atual.indexOf('#')
  for(var i=a+1; i<url_atual.length;i++){
    artigoPadrao+=url_atual[i]
  }
  if(artigoPadrao==url_atual){
    document.getElementById('artigo1').click();
  }else{
    document.getElementById(`${artigoPadrao}`).click();
  }