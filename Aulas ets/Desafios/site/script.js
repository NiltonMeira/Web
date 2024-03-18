const imagem_relogio = document.getElementById("imagem-visualizacao");
const texto_cor = document.getElementById("nome-cor-selecionada");
const imagem_miniatura0 = document.getElementById("0-imagem-miniatura");
const imagem_miniatura1 = document.getElementById("1-imagem-miniatura");
const imagem_miniatura2 = document.getElementById("2-imagem-miniatura");
const titulo = document.getElementById("titulo-produto");

let cor = 'azul-inverno' ;
let pos = '1';
let tamanho = '45 mm';

function trocaCor()
{
    const check = document.querySelector('[name="opcao-cor"]:checked').id
    switch (check){
        case "0-cor":
            cor = 'verde-cipreste'

            titulo.innerHTML = `Pulseira loop esportiva ${cor} para caixa de ${tamanho}`
            texto_cor.innerHTML = "Cor Verde Cipreste"           
            break;
        
        case "1-cor":
            
            cor = 'azul-inverno'

            titulo.innerHTML = `Pulseira loop esportiva ${cor} para caixa de ${tamanho}`
            texto_cor.innerHTML = "Cor Azul Inverno"       
            break;
        
        case "2-cor":
            cor = 'meia-noite'

            titulo.innerHTML = `Pulseira loop esportiva ${cor} para caixa de ${tamanho}`
            texto_cor.innerHTML = "Cor Meia Noite" 
            break;  
        
        case "3-cor":
            cor = 'estelar'

            titulo.innerHTML = `Pulseira loop esportiva ${cor} para caixa de ${tamanho}`
            texto_cor.innerHTML = "Cor Estelar"
            break; 

        case "4-cor":            
            cor = 'rosa-claro'

            titulo.innerHTML = `Pulseira loop esportiva ${cor} para caixa de ${tamanho}`
            texto_cor.innerHTML = "Cor Rosa Claro"
            break; 
    }   

    imagem_relogio.setAttribute('src',`./imagens/opcoes-cores/imagens-${cor}/imagem-${pos}.jpeg`); 
    imagem_miniatura0.setAttribute('src', `./imagens/opcoes-cores/imagens-${cor}/imagem-0.jpeg`)
    imagem_miniatura1.setAttribute('src', `./imagens/opcoes-cores/imagens-${cor}/imagem-1.jpeg`)
    imagem_miniatura2.setAttribute('src', `./imagens/opcoes-cores/imagens-${cor}/imagem-2.jpeg`)
}

function trocarImagem(){
    const check_position = document.querySelector('[name="opcao-imagem"]:checked').id

    pos = check_position[0];
    
    console.log(check_position);
    imagem_relogio.setAttribute('src', `./imagens/opcoes-cores/imagens-${cor}/imagem-${pos}.jpeg`)
}

function trocarTamanho(){
    const check_tamanho = document.querySelector('[name="opcao-tamanho"]:checked').id
    if(check_tamanho[0] == 0)
    {
        tamanho = "41 mm"
        imagem_relogio.classList.add("caixa-pequena")

    }
    else{
        tamanho = "45 mm"
        imagem_relogio.classList.remove("caixa-pequena")
    }
    
    titulo.innerHTML = `Pulseira loop esportiva ${cor} para caixa de ${tamanho}`


}



