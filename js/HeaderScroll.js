const headerElement = document.querySelector('#conteudo .header')
const headerImg = document.querySelector('#conteudo .header_img img')


function modifySizeOnScroll(){


    window.addEventListener('scroll' , function(event){      

        var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop
        

        if(scrollPos > 0){
            headerImg.style.height= '12vh'
        } else if (scrollPos == 0){
            headerImg.style.height= '15vh'
        }      
    })

    
}

modifySizeOnScroll()