// declaração de variaveis
const icon_category1 = document.getElementById('icon_category-1')
const icon_category2 = document.getElementById('icon_category-2')
const icon_category3 = document.getElementById('icon_category-3')
const icon_category4 = document.getElementById('icon_category-4')

const category1 = document.getElementById('category-1')
const category2 = document.getElementById('category-2')
const category3 = document.getElementById('category-3')
const category4 = document.getElementById('category-4')

const reactionScore = document.getElementById('score-reaction')
const memoryScore = document.getElementById('score-memory')
const verbalScore = document.getElementById('score-verbal')
const visualScore = document.getElementById('score-visual')

const scoreFinal = document.getElementById('scoreFinal')

// Consumindo dados do arquivo JSON e atribuindo aos elementos
fetch('data.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        data = JSON.stringify(data)
        data = JSON.parse(data)
    
    icon_category1.src = data[0].icon
    icon_category2.src = data[1].icon
    icon_category3.src = data[2].icon
    icon_category4.src = data[3].icon
    
    category1.textContent = data[0].category
    category2.textContent = data[1].category
    category3.textContent = data[2].category
    category4.textContent = data[3].category

    reactionScore.textContent = `${data[0].score} / 100`
    memoryScore.textContent = `${data[1].score} / 100`
    verbalScore.textContent = `${data[2].score} / 100`
    visualScore.textContent = `${data[3].score} / 100`

    let resultado = 0

    for(let i = 0; i < 4; i++){
        resultado += parseFloat(data[i].score)
    }

    scoreFinal.innerHTML = Math.floor(resultado/ 4)

    })
    .catch((error)=>{
        console.log(error)
    })