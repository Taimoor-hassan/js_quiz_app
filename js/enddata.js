let name=sessionStorage.getItem('name');
let points=sessionStorage.getItem('points');
let time=sessionStorage.getItem('time');

document.querySelector('span.name').innerHTML=name;
document.querySelector('span.points').innerHTML=points;
document.querySelector('span.time').innerHTML=time;
