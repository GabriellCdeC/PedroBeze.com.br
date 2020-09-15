const elements = document.querySelectorAll('#menu li')
const menu = document.querySelector('#menuToggle')

console.log(menu)

for(const element of elements){
    element.addEventListener('click', function(event){
            menu.style.zIndex = 0
    })
}