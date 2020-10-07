const menu = document.querySelector('.menu')
const btnMenu_open = document.querySelector('.btnMenu_open')
const btnMenu_close = document.querySelector('.btnMenu_close')
const btnMenu_itens = document.querySelectorAll('.menu-item-action')



btnMenu_open.addEventListener('click', function(event){
    menu.classList.add('menu_open')
})

btnMenu_close.addEventListener('click', function(event){
    menu.classList.remove('menu_open')
})


for(const item of btnMenu_itens){
    item.addEventListener('click', function(event){
        menu.classList.remove('menu_open')
    })
}

