// inserisco dinamicamente i link della main-nav attraverso Vue

var app=new Vue({
  el:"#app",

  data:{
    active: false,
    arraySocial:[

    ],
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
    ]
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
