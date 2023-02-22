let closing = document.getElementById('closing')
let modal = document.getElementById('modal')
let opener = document.getElementById('caller')
let body = document.querySelector('body')

opener.addEventListener('click', function(){
    modal.classList.toggle('inviz')
    body.style.overflow = 'hidden'
})
closing.addEventListener('click', function(){
    modal.classList.toggle('inviz')
    body.style.overflow = 'auto'
})

let src = ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
"https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg",
"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"];

let img = document.getElementById("image");
img.src = src[0];

let left = document.querySelector(".prev");
let right = document.querySelector(".next");
let current;

function lefter(){
    for(let i=0; i<src.length; i++){
        if(img.src == src[i]){
        current = i;
        break}
    }
    if(current == 0){
        current = src.length-1;
        img.src = src[current]
    }
    else{
        img.src = src[current-1];
    }
}

function righter(elem){
    for(let i=0; i<src.length; i++){
        if(img.src == src[i]){
        current = i;
        break;}
    }
    if(current == src.length-1){
        current = 0;
        img.src = src[current]
    }
    else{
        img.src = src[current+1];
    }
}

left.addEventListener("click", lefter);
right.addEventListener("click", righter);

let items = document.querySelectorAll('.counter')
console.log(items)

items.forEach((item) => {
    item.innerHTML = 0;
    let value = +item.getAttribute('data-num')
    let incr = value / 20
    function Changenumber(){
        if(+item.innerHTML < value){
            let val = +item.innerHTML
            item.innerHTML = val+Math.round(incr)
            setTimeout(Changenumber,100)
        }
        else{   
            item.innerHTML = value;
        }
    }
    Changenumber()
})