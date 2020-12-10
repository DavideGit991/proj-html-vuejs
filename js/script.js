// inserisco dinamicamente i link della main-nav attraverso Vue

var app=new Vue({
  el:"#app",

  data:{
    active: false,
    descrizioneNav:"Avada & Associates legal team announce deal to open up oil & gas ",
    logo:"img/avada-law-logo.png",
    arraySocial:["fab fa-facebook-square","fab fa-twitter-square","fab fa-instagram","fab fa-youtube-square"],
    arrayLink:[
      {
        nome:"Home"
      },
      {
        nome:"Who We Are"
      },
      {
        nome:"What We Do"
      },
      {
        nome:"Where We Work"
      },
      {
        nome:"Carrers"
      },
      {
        nome:"News"
      },
      {
        nome:"Contact"
      }
    ],
    numeroTel:"1.800.555.6789",
    infoFooter:"© Copyright 2012 - 2020   |   Avada Theme by Theme Fusion   |   All Rights Reserved   |   Powered by " ,
    linkWordPress:"WordPress"
  },


// funzione per far scomparire la mini-nav allo scroll della pagina bind class riga 17 39 html
 mounted(){
 window.document.onscroll = () => {
     let navBar = document.getElementById('main-nav');
     if(window.scrollY > navBar.offsetTop){
       this.active = true;
       } else {
       this.active = false;
     }
   }
 }






});
