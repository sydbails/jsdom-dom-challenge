document.addEventListener('DOMContentLoaded', (event) => {
    let timeCounter = document.getElementById('counter')
    let numberInCounter = 0
    let decrementCounter = document.getElementById('-')
    let incrementCounter = document.getElementById('+')
    let pauseButton = document.getElementById('pause')
    let commentForm = document.getElementById('input-field')
    let submitButton = document.getElementById('submit')
    let commentList = document.getElementById('list')



    submitButton.addEventListener("click", (event) => {
        event.preventDefault()
            const newComment = commentForm.value
            const ul = document.createElement('ul')
            const list = document.createElement('li')
            list.innerText = newComment
            ul.appendChild(list)
            commentList.appendChild(ul)
    })

    pauseButton.addEventListener("click", function(){
        if (pauseButton.innerHTML === 'Pause'){
            decrementCounter.disabled = true;
            incrementCounter.disabled = true;
            pauseButton.innerHTML = 'Resume'
        }
            else {
                    pauseButton.innerHTML = 'Pause'
                    decrementCounter.disabled = false;
                    incrementCounter.disabled = false;
                
            }

    })

    decrementCounter.addEventListener("click", function(){
        numberInCounter--;
        timeCounter.innerText =  numberInCounter;
    })

    incrementCounter.addEventListener("click", function(){
        numberInCounter++;
        timeCounter.innerText =  numberInCounter;
    })

    function incrementTimeWhenLoaded() {
        setInterval(addSecondToTimeCounter, 1000)
    }

    function addSecondToTimeCounter() {
        numberInCounter++;
        timeCounter.innerText = numberInCounter;
        }


incrementTimeWhenLoaded()
});