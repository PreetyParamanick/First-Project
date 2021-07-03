var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = time;
document.getElementById('timeshow').innerHTML = dateTime;

let button = document.querySelector('#btn');
let div = document.querySelector('#timeshow');

button.addEventListener('click',()=>{
    if(div.style.display=='none'){
        div.style.display = 'block';
    }else{
        div.style.display = 'none';
    }
})