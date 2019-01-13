//get the number of buttons on the page
var numberOfDrumButtons = document.querySelectorAll(".sound").length;

/*add an eventListener to each button that will play the corresponding
sound when the button is pressed*/
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".sound")[i].addEventListener("click", function() {
    var tagClass = this.classList[0];
    //call the button animation function on the clicked button
    buttonAnimation(tagClass);
    switch (tagClass) {
      case "twoBros":
        var sound0 = new Audio('sounds/twoBros.mp3');
        sound0.play();
        break;
      case "freshAvo":
        var sound1 = new Audio('sounds/freshAvo.mp3');
        sound1.play();
        break;
      case "croissant":
        var sound2 = new Audio('sounds/croissant.mp3');
        sound2.play();
        break;
      case "countryBoy":
        var sound3 = new Audio('sounds/countryBoy.mp3');
        sound3.play();
        break;
      case "meToo":
        var sound4 = new Audio('sounds/meToo.mp3');
        sound4.play();
        break;
      case "jared":
        var sound5 = new Audio('sounds/jared.mp3');
        sound5.play();
        break;
      case "noSleep":
        var sound6 = new Audio('sounds/noSleep.mp3');
        sound6.play();
        break;
      case "dudes":
        var sound7 = new Audio('sounds/dudes.mp3');
        sound7.play();
        break;
      case "beef":
        var sound8 = new Audio('sounds/beef.mp3');
        sound8.play();
        break;
      case "yoyo":
        var sound9 = new Audio('sounds/yoyo.mp3');
        sound9.play();
        break;
      case "yeet":
        var sound10 = new Audio('sounds/yeet.mp3');
        sound10.play();
        break;
      case "roadWork":
        var sound11 = new Audio('sounds/roadWork.mp3');
        sound11.play();
        break;
      case "wontHesitate":
        var sound12 = new Audio('sounds/wontHesitate.mp3');
        sound12.play();
        break;
      case "roommates":
        var sound13 = new Audio('sounds/roommates.mp3');
        sound13.play();
        break;
      case "chickenStrips":
        var sound14 = new Audio('sounds/chickenStrips.mp3');
        sound14.play();
        break;
      case "chipotle":
        var sound15 = new Audio('sounds/chipotle.mp3');
        sound15.play();
        break;
      case "churchGirl":
        var sound16 = new Audio('sounds/churchGirl.mp3');
        sound16.play();
        break;
      case "crackKid":
        var sound17 = new Audio('sounds/crackKid.mp3');
        sound17.play();
        break;
      case "crocs":
        var sound18 = new Audio('sounds/crocs.mp3');
        sound18.play();
        break;
      case "freakinBats":
        var sound19 = new Audio('sounds/freakinBats.mp3');
        sound19.play();
        break;
      case "heyDuck":
        var sound20 = new Audio('sounds/heyDuck.mp3');
        sound20.play();
        break;
      case "juan":
        var sound21 = new Audio('sounds/juan.mp3');
        sound21.play();
        break;
      case "mothertrucker":
        var sound22 = new Audio('sounds/mothertrucker.mp3');
        sound22.play();
        break;
      case "oovoo":
        var sound23 = new Audio('sounds/oovoo.mp3');
        sound23.play();
        break;
      case "target":
        var sound24 = new Audio('sounds/target.mp3');
        sound24.play();
        break;
      case "wednesday":
        var sound25 = new Audio('sounds/wednesday.mp3');
        sound25.play();
        break;
      default:
    }
  });
}
/*applies the pressed class to the clicked button then removes it
after 6 seconds (when sound clip ends)*/
function buttonAnimation(currentClass) {
  var activeButton = document.querySelector("." + currentClass);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 6000);
}
