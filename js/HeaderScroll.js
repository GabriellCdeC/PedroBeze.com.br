const headerElement = document.querySelector('#conteudo .header')
const headerImg = document.querySelector('#conteudo .header_img img')

function modifySizeOnScroll(){
    window.addEventListener('scroll' , function(event){
     
        headerImg.style.height= '12vh'
    })
}

modifySizeOnScroll()