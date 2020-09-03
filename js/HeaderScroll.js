"use strict";

var headerElement = document.querySelector('#conteudo .header')
var headerImg = document.querySelector('#conteudo .header_img img')
var headerTxt = document.querySelectorAll('#conteudo .text_header a')


function modifySizeOnScroll() {
  window.addEventListener('scroll', function (event) {
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    for(const headerTxtelement of headerTxt){
        if (scrollPos > 10) {
            headerImg.style.height = '12vh';
            headerTxtelement.style.fontSize = '1em';
          }else if (scrollPos == 0) {
            headerImg.style.height = '15vh';
            headerTxtelement.style.fontSize = '1.25em';
          }      
    }
  });
}

modifySizeOnScroll();


/*
const headerElement = document.querySelector('#conteudo .header')
const headerImg = document.querySelector('#conteudo .header_img img')


function modifySizeOnScroll(){


    window.addEventListener('scroll' , function(event){      

        const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop
        

        if(scrollPos > 10){
            headerImg.style.height= '12vh'
        } else if (scrollPos == 0){
            headerImg.style.height= '15vh'
        }      
    })

    
}

modifySizeOnScroll()*/