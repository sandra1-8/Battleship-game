let littlesquares = document.querySelectorAll('.smallsquare')
let resetButton = document.getElementById('reset-button')
let giphy = {
    0: "https://media.giphy.com/media/10UeedrT5MIfPG/giphy.gif",
    1: "https://media.giphy.com/media/13Qumr2SLqrl5e/giphy.gif",
    2: "https://media.giphy.com/media/ZechFo0yBIQpEve1Sm/giphy.gif",
    3: "https://media.giphy.com/media/qugzlUdW5CkeI/giphy.gif",
    4: "https://media.giphy.com/media/UZvzszZSBdT0Y/giphy.gif"
}

littlesquares.forEach(smallsquare =>{
    smallsquare.addEventListener('click',function handleClick(){
        if(smallsquare.children.length<1){
            const change = document.createElement('img')
            let randgif = Math.floor(Math.random() * 16)
            change.src = giphy[randgif % Object.keys(giphy).length]
            smallsquare.append(change)
        }
    })
})

resetButton.addEventListener('click',function handleReset(){
    littlesquares.forEach(smallsquare =>{
        if(smallsquare.children.length>0)
            smallsquare.children[0].remove()
    })
})