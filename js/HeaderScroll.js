"use strict";

var headerElement = document.querySelector('#conteudo .header');
var headerImg = document.querySelector('#conteudo .header_img img');
var toTopArrow = document.querySelector('.arrow-top');

function modifySizeOnScroll() {
  window.addEventListener('scroll', function (event) {
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    if (window.screen.width > 1100) {
      if (scrollPos > 10) {
        headerImg.style.height = '12vh';
        toTopArrow.style.display = 'block';
      } else if (scrollPos == 0) {
        headerImg.style.height = '15vh';
        toTopArrow.style.display = 'none';
      }
    } else if (window.screen.width <= 1100) {
      if (scrollPos > 10) {
        headerImg.style.height = '11vh';        
      } else if (scrollPos == 0) {
        headerImg.style.height = '13vh';    
      }
    }
  });
}

modifySizeOnScroll();



/*const headerElement = document.querySelector('#conteudo .header')
const headerImg = document.querySelector('#conteudo .header_img img')
const toTopArrow = document.querySelector('.arrow-top')


function modifySizeOnScroll(){


    window.addEventListener('scroll' , function(event){      

        const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop
        
        if(window.screen.width > 1100){
          if(scrollPos > 10){
            headerImg.style.height= '12vh'
            toTopArrow.style.display = 'block'
          } else if (scrollPos == 0){
            headerImg.style.height= '15vh'
            toTopArrow.style.display = 'none'
          } 
        }else if(window.screen.width <= 1100){
          if(scrollPos > 10){
            headerImg.style.height= '11vh'
            toTopArrow.style.display = 'block'
          } else if (scrollPos == 0){
            headerImg.style.height= '13vh'
            toTopArrow.style.display = 'none'
            
          } 
        }
             
    })

    
}

modifySizeOnScroll() */