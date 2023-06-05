const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date(); /*VARIAVEL DATA DE HOJE = NOVA DATA ()*/
    let hr = dateToday.getHours(); /* VARIAVEL HR = DATA DE AGORA.HORA DE AGORA (estou pegando a hora de agora)*/
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    /* esses IF são para acrescentar um ZERO a frente das horas, minutos e segundos*/
    if(hr < 10) hr = '0' + hr; /*SE (a HORA FOR MENOR QUE 10) a HORA =vai receber um 0 MAIS a HORA*/
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    horas.textContent = hr; /*textContent significa para mudar o texto, nesse caso, mudar a hora que estava no index que é 00, para a hora de agora*/
    minutos.textContent = min;
    segundos.textContent = sec;
})


