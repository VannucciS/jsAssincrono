/*
Atividade: API "catAPI"
Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
*/

const url = "https://thatcopy.pw/catapi/rest"
const catBtn = document.getElementById('catBtn')
const catImg = document.getElementById('catImg')

catBtn.addEventListener("click", getCatImg)

function getCatImg() {
    fetch(url)
        .then(response => response.json)
        .then(cat => {
            catImg.innerHTML = `<img src=${data.file}`

        })
}

