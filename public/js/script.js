const btnMobile = document.querySelector('.btn--mobile');
const nav = document.querySelector('nav');
const off = document.querySelector('.container--project.off');

off.addEventListener('click', (e) =>{
    e.preventDefault();
})

btnMobile.addEventListener('click', () =>{
    nav.classList.toggle('active');
});

function closeMenu(){
    if(nav.classList.contains('active')){
        nav.classList.remove('active');
    }
}

const text = document.querySelector('#write'); 

function animation(text) {
    const textArray = text.innerHTML.split('');

    //iniciar vazio
    text.innerHTML = " ";

    textArray.forEach(function(letter, index){
        setTimeout(function(){ text.innerHTML += letter },80 * index)
    })
}

animation(text)
