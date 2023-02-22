let parent = document.getElementById('wrapper')
let content = [{url: 'https:images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Iphone 11', status: 'true', model: 'Iphone' },
{url: 'https://images.pexels.com/photos/12794493/pexels-photo-12794493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name: 'Iphone 12', status: 'true', model: 'Iphone'},
{url: 'https://images.pexels.com/photos/10921041/pexels-photo-10921041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name: 'Iphone 13', status: 'true', model: 'Iphone'},
{url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name: 'Iphone 14', status: 'true', model: 'Iphone'},
{url: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name: 'Ipad 2', status: 'true', model: 'Ipad'},
{url: 'https://kaz-shop.net/_sh/2001/200170m.jpg',name: 'Ipad 3', status: 'true', model: 'Ipad'},
{url: 'https://cdn.shoplightspeed.com/shops/662820/files/47521502/image.jpg',name: 'Ipad 4', status: 'true', model: 'Ipad'},
{url: 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220309095541108805/220310170014593663.png@webp',name: 'Ipad 5', status: 'true', model: 'Ipad'},
{url: 'https://images.satu.kz/189319019_apple-macbook-air.jpg',name: 'Macbook1', status: 'true', model: 'Macbook'},
{url: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg',name: 'Macbook2', status: 'true', model: 'Macbook'},
{url: 'https://i.pcmag.com/imagery/reviews/01mBttlv1qMiXYpc1bfOj1h-1..v1657726621.jpg',name: 'Macbook3', status: 'true', model: 'Macbook'},
{url: 'https://i.pcmag.com/imagery/reviews/05CbcW9cP4o0rqbCnVB2OFZ-1.fit_lim.size_1200x630.v1584707541.jpg',name: 'Macbook Air', status: 'true', model: 'Macbook'},
]

const DEVICES = {
    Iphone: 'Iphone',
    Ipad: 'Ipad',
    Macbook: 'Macbook'
}

let todo = []
let statusshow = []

if(localStorage.getItem('status')){
    content = JSON.parse(localStorage.getItem('status'))
}


if(localStorage.getItem('todo')){
    todo = JSON.parse(localStorage.getItem('todo'))
}


if(todo.length>0){
    for(let item in todo){
        for(x in content){
            if(content[x].url==todo[item].url){
                delete content[x]
            }
        }
    }
}

if(statusshow.length>0){
    for(let item in statusshow){
        for(x in content){
            if(content[x].url == statusshow[item].url){

            }
        }
    }
}

let shop = document.createElement('div')
shop.classList.add('shop')


function caption(){
    let header = document.createElement('h1')
    header.innerHTML = 'Apple products shop'
    let div = document.createElement('div')
    let select = document.createElement('select')
    select.id = 'selector'; 
    let option = document.createElement('option')
    let option1 = document.createElement('option')
    let option2 = document.createElement('option')
    let option3 = document.createElement('option')
    let button = document.createElement('button')
    button.innerHTML = 'filter'
    button.id = 'filtr'
    option.innerHTML = 'all' 
    option1.innerHTML = DEVICES.Iphone
    option2.innerHTML = DEVICES.Ipad
    option3.innerHTML = DEVICES.Macbook
    select.append(option)
    select.append(option1)
    select.append(option2)
    select.append(option3)
    div.append(select)
    div.append(button)
    parent.append(header)
    parent.append(div)
    parent.append(shop)
}

function creator(){
    let shop_item = document.createElement('div')
    shop_item.classList.add('shop_item')
    let img = document.createElement('img')
    let cap = document.createElement('div')
    cap.classList.add('cap')
    let par = document.createElement('div')
    par.classList.add('par')
    let paragraph = document.createElement('p')
    cap.append(par)
    let div = document.createElement('div')
    let deleteButton = document.createElement('button')
    let statusButton = document.createElement('button')
    deleteButton.classList.add('delete_button')
    statusButton.classList.add('status_button')
    let status = document.createElement('div')
    status.innerHTML = 'Нет в наличии'
    deleteButton.innerHTML = 'Delete'
    statusButton.innerHTML = 'IsinStock'
    par.append(paragraph)
    div.append(deleteButton)
    div.append(statusButton)
    cap.append(par)
    cap.append(div)
    status.classList.add('block','show')
    shop_item.append(status)
    shop_item.append(img)
    shop_item.append(cap)
    return{
        shop_item,
        img,
        paragraph,
        deleteButton,
        statusButton,
        status
    }
}

function contenter(array){    
    for(let i in array){
        if((array[i] !== undefined)){
        let items = creator()
        items.img.src = array[i].url
        items.paragraph.innerHTML = array[i].name
        if(array[i].status == 'false'){
            items.status.classList.toggle('show')
        }
        items.deleteButton.addEventListener('click', function(){
            items.shop_item.remove()
            todo.push(array[i])
            localStorage.setItem('todo', JSON.stringify(todo))
            delete array[i]
            console.log(JSON.stringify(array))
            console.log(array.length)
        })
        items.statusButton.addEventListener('click', function(){
            items.status.classList.toggle('show')
            let classes = [...items.status.classList]
            if(classes.includes('show')){
                array[i].status = 'true'
                localStorage.setItem('status',JSON.stringify(array))
            }
            else{
                array[i].status = 'false'
                localStorage.setItem('status',JSON.stringify(array))
            }
        })
        shop.append(items.shop_item)
    }
}
}
function filtration(obj){
    let items = creator()
    items.img.src = obj.url
    items.paragraph.innerHTML = obj.name
    shop.append(items.shop_item)
}


caption()
contenter(content)

let filter = document.getElementById('filtr')

filter.addEventListener('click', function(){
    let select = document.getElementById('selector')
    if(select.value == 'all'){
        shop.innerHTML = ""
        contenter(content)
    }
    else{
    shop.innerHTML = ""  
    for(let item of content){
        if(item !== undefined){
        if(item.model == select.value){
            filtration(item)
        }
    }
    }
    }

})