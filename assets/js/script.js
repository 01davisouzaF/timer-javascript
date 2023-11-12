function timer() {
    
    const display = document.querySelector('.display');
    let seconds = 0;
    let timer;

    function getTimeFromSeconds(seconds) {
        let date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR',{
            timeZone: 'UTC',
        });
    }

    function startTime() {
        timer = setInterval(() => {
            seconds++;
            display.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', (e) =>{
        const el = e.target;

        if(el.classList.contains('start')) {
            display.classList.remove('pauseClass')
            clearInterval(timer);
            startTime();
        }

        if(el.classList.contains('pause')) {
            display.classList.add('pauseClass')
            clearInterval(timer);
        }

        if(el.classList.contains('reset')) {
            display.classList.remove('pauseClass')
            clearInterval(timer);
            display.innerHTML = '00:00:00';
            seconds = 0
        }
    });
}

timer();

