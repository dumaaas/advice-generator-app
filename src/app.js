const fetchAdvice = (() => {
    var advice_id = document.getElementById('advice_id');
    var advice_text = document.getElementById('advice_text');
    var advice_dice = document.getElementById('advice_dice');
    var advice_block = document.getElementById('advice_block');

    advice_dice.classList.remove('rotate-anim-back')
    advice_dice.classList.remove('rotate-anim');
    advice_dice.classList.add('give-advice');
    advice_dice.classList.add('rotate-anim');
    advice_block.classList.remove('fadeIn');

    advice_block.classList.add('fadeOut');
    setTimeout(() => {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => {
                advice_id.innerText = 'Advice #' + data.slip.id;
                advice_text.innerText = data.slip.advice;
                advice_block.classList.remove('fadeOut');
                advice_block.classList.add('fadeIn');
                advice_dice.classList.add('rotate-anim-back')
                advice_dice.classList.remove('give-advice');
            }).catch(() => {
                advice_block.classList.remove('fadeOut');
                advice_block.classList.add('fadeIn');
                advice_id.innerText = 'Advice';
                advice_text.innerText = 'Error. Please try again.';
                advice_dice.classList.add('rotate-anim-back')
                advice_dice.classList.remove('give-advice');
            })
    }, 1500)
})