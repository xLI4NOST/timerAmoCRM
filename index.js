


const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
timerEl.textContent = '00' + (' : ') + '00' + (' : ') + '00'

let intervalId
const createTimerAnimator = () => {

    return (time) => {
        if (intervalId) clearInterval(intervalId)
      const visibleResult =()=>{

          const formatter = Intl.NumberFormat(undefined, {
              minimumIntegerDigits: 2
          });

          const hours = formatter.format ( Math.floor(time / 60 / 60) )
          const minutes = formatter.format( Math.floor(time / 60) - (hours * 60) )
          const seconds = formatter.format ( time % 60 )


          timerEl.textContent = `${hours} : ${minutes} : ${seconds}`
      }
      visibleResult()

       intervalId= setInterval(()=>{
           if (time > 0){

               visibleResult(time --)

           }else {

               clearInterval(intervalId)

           }
       }, 1000)

    };

};


const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);
    animateTimer(seconds);
    inputEl.value = '';
});
