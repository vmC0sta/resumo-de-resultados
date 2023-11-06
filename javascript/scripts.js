// declaração de variaveis
const icon_category = document.querySelectorAll('.icon_category')
const categori = document.querySelectorAll('.category')
const reactionScore = document.getElementById('score-reaction')
const memoryScore = document.getElementById('score-memory')
const verbalScore = document.getElementById('score-verbal')
const visualScore = document.getElementById('score-visual')
const scoreFinal = document.getElementById('scoreFinal')
let scores = [ reactionScore, memoryScore, verbalScore, visualScore]
// Consumindo dados do arquivo JSON e atribuindo aos elementos
fetch('data.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        data.map((item,i)=>{
            icon_category[i].src = item.icon
            categori[i].innerHTML = item.category 
        })
        scores.map((item,i)=>{
            item.textContent = `${data[i].score} / 100`
        })
        
        let resultado = data.reduce((total, item)=> {return total + parseFloat(item.score)},0); 

        scoreFinal.innerHTML = Math.floor(resultado/ 4)
    })
    .catch((error)=>{
        console.log(error)
    })