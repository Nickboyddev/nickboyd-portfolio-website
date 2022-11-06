// PRELOADER //

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
	setTimeout(()=>{
		splash.classList.add('display-none');
	}, 5000);
})





// Cursor circle effect //

let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach(link =>{
    link.addEventListener("mouseover", ()=>{
    innerCursor.classList.add("grow");
});
link.addEventListener("mouseleave", ()=>{
    innerCursor.classList.remove("grow");
});
});


// Span 3D effect //

const menuItems = [...document.querySelectorAll('.hovereffect')];

menuItems.forEach(item => {

let word = item.children[0].children[0].innerText.split('');
item.children[0].innerHTML = '';
word.forEach((letter, idx) => {
    item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
})

let cloneDiv = item.children[0].cloneNode(true);
cloneDiv.style.position = 'relative';
cloneDiv.style.left = '0'
cloneDiv.style.top = '-1rem';
item.appendChild(cloneDiv)
})