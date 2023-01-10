// use a loop to avoid writing the same code multiple times and used the class drum to select for 
// the query that if in case in future we introduce more buttons and to avoid ambiguity
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
          var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);

butttonAnimation(buttonInnerHtml);
          });
}

//detecting the key

document.addEventListener("keypress",function(event){
     makeSound(event.key);

     butttonAnimation(event.key)
});

function makeSound(key){
     switch (key) {
          case "w":
               var tom1 = new Audio('sounds/tom-1.mp3');
               tom1.play();
               break;
          

          case "a":
               var tom2 = new Audio('sounds/tom-2.mp3');
               tom2.play();
               break;
          


          case "s":
               var tom3 = new Audio('sounds/tom-3.mp3');
               tom3.play();
               break;
      


          case "d":
               var tom4 = new Audio('sounds/tom-4.mp3');
               tom4.play();
               break;
         


          case "j":
               var crash = new Audio('sounds/crash.mp3');
               crash.play();
               break;
          

          case "k":
               var kickb = new Audio('sounds/Kick-bass.mp3');
               kickb.play();
               break;
        

          case "l":
               var snare = new Audio('sounds/snare.mp3');
               snare.play();
               break;
          default:
}
}

function butttonAnimation(currentkey){

     var activeButton=document.querySelector("."+ currentkey);
     activeButton.classList.add("pressed"); 

     setTimeout(function(){
          activeButton.classList.remove("pressed");
     },100);
}