// in numbers section
// counter:
// let content = document.getElementById('content').innerHTML;

// let counter=0;

// let myInterval=setInterval(display);


// function display(){

//     counter++;
//     content=counter;
//     console.log(content);
//     if(counter>=100){
//     clearInterval(myInterval);
//     }

// }

var count= document.getElementsByClassName("content");
console.log(count);

let countt=[];

for(let i=0;i<count.length;i++){
countt.push(count[i]);
}
console.log(countt);

let index;


setInterval(updated0,10);
setInterval(updated1,250);
setInterval(updated2,80);


let upto0=0;
let upto1=0;
let upto2=0;


function updated0(){
    countt[0].innerHTML=++upto0;
    if(upto0===1000)
    {
    upto0=0;
    }
}

function updated1(){
    countt[1].innerHTML=++upto1;
    if(upto1===25)
    {
    upto1=0;
    }
}

function updated2(){
    countt[2].innerHTML=++upto2;
    if(upto2===200)
    {
    upto2=0;
    }
}


// in-numbers:
let alertSection = document.getElementById('alert');

let stopAlert=setInterval(alertdisplay,5000);


function alertdisplay(){

    alertSection.classList.remove("visually-hidden");
    alertSection.classList.add("animate__animated","animate__heartBeat");

}

let closealert = document.getElementById('close');

closealert.addEventListener('click', function alertremove(){

    alertSection.classList.add("visually-hidden");
    upto0=0;
    upto1=0;
    upto2=0;

})



// courses:

let button4 = document.querySelectorAll('.button-4');

for(let i=0;i<button4.length;i++){
if(button4[i].innerHTML=='All Level'){
    button4[i].style.cssText="background-color:rgb(62, 174, 21,.5); border-color:rgb(62, 174, 21)"
} else if (button4[i].innerHTML=='Begginer'){
    button4[i].style.cssText="background-color:rgb(161, 87, 236,.6); border-color:rgb(161, 87, 236);"
}
}


// feedback
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

