const $generate = document.getElementById('color');


let hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];




document.addEventListener('click', e => {
    if (e.target === $generate){
        let color ="#";
        for (let i = 0; i < 6; i++) {
            color += hex[randomNumb()]
        }
        document.body.style.background = color;
    }
})


function randomNumb(){
    return Math.floor(Math.random() * hex.length)
}
