"use stric"

const esquerdo = document.querySelector(".esquerdo");
const modelo1 = document.querySelector("#modelo1");

esquerdo.addEventListener("click", function(){

    if(!document.querySelector(".detalhesCarro1")){

        let item = document.createElement("div");
        item.classList.add("detalhesCarro1");
    
        let containerTitulo = document.createElement("nav");
        containerTitulo.classList.add("containerNomeCarro");
    
        let titulo = document.createElement("h4");
        titulo.classList.add("tituloCarro");
        titulo.textContent = "Porsche Cayene"

        let botao = document.createElement("bottom");
        botao.classList.add("deletarDetalhes");
        botao.textContent = "Fechar"

        item.appendChild(containerTitulo);
        containerTitulo.appendChild(titulo);
        containerTitulo.appendChild(botao)
    
        modelo1.appendChild(item);    
        
        let del = document.querySelector(".deletarDetalhes");

        del.addEventListener("click", ()=>{ modelo1.removeChild(item)})

    }
})