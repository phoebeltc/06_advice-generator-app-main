let url = "https://api.adviceslip.com/advice";

let adviceId = document.querySelector('#adviceId');
let advice = document.querySelector('#advice');
let fetchButton = document.querySelector('#fetchApiButton');


const getAdviceResult = async() => {

    const res = await fetch(url);
    const data = await res.json();
    
    return data 
}

getAdviceResult()
.then(data => {
    adviceId.innerHTML = data.slip.id;
    advice.innerHTML =  `\“` + data.slip.advice + `\”`;
})

.catch(err => {
    console.log(err);
})


fetchButton.addEventListener('click', (e)=> {
    e.preventDefault();

    getAdviceResult()
    .then(data => {
        adviceId.innerHTML = data.slip.id;
        advice.innerHTML =  `\“` + data.slip.advice + `\”`;
    })

    .catch(err => {
        console.log(err);
    })
});