'use strict'

async function pesquisarFotos(raca){
    const url = `https://picsum.photos/v2/list?page=2&limit=100`
    const response = await fetch(url)
    const data = await response.json()


    return data.message
}


function criarImagem(link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link

    galeria.appendChild(novaImg)
}


async function preencherFotos (){
    const raca = document.getElementById('raca').value
    const fotos = await pesquisarFotos(raca)
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('')
    console.log(fotos)
    fotos.forEach(criarImagem)
    
}



document.getElementById('pesquisar')
        .addEventListener('click', preencherFotos)
