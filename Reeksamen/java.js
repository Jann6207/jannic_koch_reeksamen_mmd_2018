$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPaaMenubutton);
    }

function trykPaaMenubutton(){
    console.log("Tryk paa menubutton");
    $("nav").slideToggle(".hidden");
    $(".menubutton").toggleClass("kryds");
   
  
    
    
}





