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

import {webdesignMain,categories,coursesNav,graphicedesignMain,marketingMain} from '../../main.js'

// search input+button in navbar
let searchButton=document.getElementById('searchbutton');
let searchInput=document.getElementById('searchinput');
let content=[];
let included=[];

let searchContent=document.querySelectorAll(".searchContent");
let topics=document.querySelectorAll(".topics");
let searchResult=document.getElementById('searchResult');
let enterValue=document.getElementById('entervalue');
let searchDiv = document.getElementById('searchdiv');
let enterValueDiv =document.getElementById('entervaluediv');
let closesearch = document.getElementById('close');

searchButton.addEventListener('click',function(){

    if(searchInput.value!=''){
        data='';
        for(let i=0;i<searchContent.length;i++){
            if(searchContent[i].innerHTML.includes(searchInput.value)){
                visible()
                included.push(searchContent[i].innerHTML);
                display();
            }
        }
        empty();
        invisible();
    }

    else if(searchInput.value==''){
        enterValueDiv.style.cssText="visibility:visible;";
        searchInput.addEventListener('focus',function(){
        enterValueDiv.style.cssText="visibility:hidden;";
        })

    }
})

window.addEventListener('mousemove',function closeenterValueDiv(){
    enterValueDiv.style.cssText="visibility:hidden;";
})

function visible(){
    searchDiv.style.cssText="visibility:visible";
}

let contentresult =included;
let data="";

function display(){

    contentresult =included;
    data="";
    for(let i=0;i<included.length;i++){

    data+=`
    <a href="#">
    <div class="bg-danger rounded">
    ${contentresult}
    </div>
    </a>
    `
    }
    searchResult.innerHTML=data;
}

function empty(){
    included=[];
}

function invisible(){
    closesearch.addEventListener('click',function(){
        searchDiv.style.cssText="visibility:invisible";
        searchInput.value='';
        enterValueDiv.style.cssText="visibility:hidden;";
    })
}


// ***************
// window
let start=document.getElementById('start');
let concept=document.getElementById('concept');
let vision=document.getElementById('vision');
let windowContent=document.querySelectorAll('.window-content');
let about = document.querySelectorAll('.about-item');
let closeWindow = document.querySelectorAll('.close')
let allBgWindow=document.getElementById('all-bg-window');
let navbar=document.getElementById('navbar');
let windowHeader=document.getElementById('window-header');
let butt1 =document.getElementById('butt1');
let butt2 =document.getElementById('butt2')


for(let i=0;i<windowContent.length;i++){

    about[i].addEventListener('click',function(){
        navbar.style.cssText='opacity:0';
        butt1.style.cssText='opacity:0';
        butt2.style.cssText='opacity:0';
        windowHeader.style.cssText='visibility:hidden';
        windowContent[i].classList.remove('visually-hidden');
        windowContent[i].style.cssText='animation-name: scaling;animation-duration: .7s;';
        allBgWindow.classList.remove('visually-hidden');
    }) 

    closeWindow[i].addEventListener('click',function(){
        navbar.style.cssText='opacity:1';
        butt1.style.cssText='opacity:1';
        butt2.style.cssText='opacity:1';
        windowHeader.style.cssText='visibility:visibile';
        windowContent[i].style.cssText='animation-name: none;';
        windowContent[i].classList.add('visually-hidden');
        allBgWindow.classList.add('visually-hidden');

    }) 

}




// why
let animate = document.querySelectorAll('.animate');
let heartBeat = document.querySelectorAll('.heartBeat');

for(let i=0;i<animate.length;i++){

    animate[i].addEventListener('mouseenter',function animationHeart(){

    heartBeat[i].classList.add('animate__heartBeat');
})
}

// counter
var count= document.getElementsByClassName("content");
console.log(count);

let countt=[];

for(let i=0;i<count.length;i++){
    countt.push(count[i]);
}

console.log(countt);

let index;

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

    setInterval(updated0,10);
    setInterval(updated1,250);
    setInterval(updated2,80);


// in-numbers:
let alertSection = document.getElementById('alert');;
let inNumbers = document.getElementById('in-numbers');
let noItem = document.querySelectorAll('.no-item');
let delay='';

inNumbers.addEventListener('mouseenter',function display(){

    setTimeout(alertdisplay,4000);

})

// clearTimeout(delay);


function alertdisplay(){

    alertSection.classList.remove("visually-hidden");
    alertSection.classList.add("animate__animated","animate__heartBeat");
    for(let i=0;i<noItem.length;i++){
        noItem[i].classList.add('visually-hidden');
    }
}

document.addEventListener('dblclick',function closealert(){
    alertSection.classList.add("visually-hidden");
    for(let i=0;i<noItem.length;i++){
        noItem[i].classList.remove('visually-hidden');
    }
    alertSection.classList.remove("animate__animated","animate__heartBeat");

})



// let closealert = document.getElementById('close');

// closealert.addEventListener('click', function alertremove(){
//     alertSection.classList.add("visually-hidden");
//     upto0=0;
//     upto1=0;
//     upto2=0;
// })

// closealert.addEventListener('click', clearInterval(alertdisplay));


// team
let team = document.getElementById('team');
let teamAnimation = document.getElementById('teamanimation')

team.addEventListener('mouseenter',function animationHeart(){
teamAnimation.classList.add('animate__fadeInUp');
})


let seeMore= document.getElementById("seemore");
let seeLess= document.getElementById("seeless");
let viewAllTeam = document.getElementById('viewteam');

seeMore.addEventListener('click',function seemore(){
    console.log('dua');
    viewAllTeam.classList.remove("visually-hidden");
    viewAllTeam.classList.add('visible');
    viewAllTeam.style.cssText='padding-top:10px;';


    seeMore.classList.add('visually-hidden');

    seeLess.classList.remove("visually-hidden");
    seeLess.classList.add('visible');

})

seeLess.addEventListener('click',function seeless(){
    console.log('dua');
    viewAllTeam.classList.remove("visible");
    viewAllTeam.classList.add('visually-hidden');

    seeMore.classList.remove("visually-hidden");
    seeMore.classList.add('visible');

    seeLess.classList.remove("visible");
    seeLess.classList.add('visually-hidden');
})


// courses:

webdesignMain();

coursesNav[1].addEventListener('click',function(){
    graphicedesignMain();
})

coursesNav[2].addEventListener('click',function(){
    marketingMain();
})



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

// clear
let input1=document.getElementById('send1');
let input2=document.getElementById('send2');
let textarea1=document.getElementById('textarea1');
let textarea2=document.getElementById('textarea2');
let clear1=document.getElementById('clear1');
let clear2=document.getElementById('clear2');

clear1.addEventListener('click', function clear1(){
    input1.value='';
    textarea1.value='';
})

clear2.addEventListener('click', function clear2(){
    input2.value='';
    textarea2.value='';
})

// contact us section
// contact us section
var firstName=document.getElementById("firstName")
var lastName=document.getElementById("lastName")
var phone=document.getElementById("phone")
var message=document.getElementById("message")


//validation
firstName.onkeyup=function(){
   let pattern=/^[a-zA-Z]{3,10}$/
    if(pattern.test(firstName.value)){
        firstName.classList.remove('is-invalid')
      firstName.classList.add('is-valid')
      if(firstName.value==''){
        firstName.classList.remove('is-valid')
        firstName.classList.remove('is-invalid')
    }
    }
    
    else
    {
        firstName.classList.remove('is-valid')
        firstName.classList.add('is-invalid')
        if(firstName.value==''){
            firstName.classList.remove('is-valid')
            firstName.classList.remove('is-invalid')
        }
    }
}

firstName.addEventListener('blur',function(){
    console.log('dua')
    firstName.classList.remove('is-valid')
    firstName.classList.remove('is-invalid')
})

lastName.onkeyup=function(){
    let pattern=/^[a-zA-Z]{3,10}$/
     if(pattern.test(lastName.value)){
        lastName.classList.remove('is-invalid')
        lastName.classList.add('is-valid')
       if(lastName.value==''){
        lastName.classList.remove('is-valid')
        lastName.classList.remove('is-invalid')
     }
     }
     
     else
     {
        lastName.classList.remove('is-valid')
        lastName.classList.add('is-invalid')
         if(lastName.value==''){
            lastName.classList.remove('is-valid')
            lastName.classList.remove('is-invalid')
         }
     }
 }
 
 lastName.addEventListener('blur',function(){
     console.log('dua')
     lastName.classList.remove('is-valid')
     lastName.classList.remove('is-invalid')
 })

 phone.onkeyup=function(){
    let pattern=/^[0-9]{8,15}$/;     
    if(pattern.test(phone.value)){
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
       if(phone.value==''){
        phone.classList.remove('is-valid')
        phone.classList.remove('is-invalid')
     }
     }
     
     else
     {
        phone.classList.remove('is-valid')
        phone.classList.add('is-invalid')
         if(phone.value==''){
            phone.classList.remove('is-valid')
            phone.classList.remove('is-invalid')
         }
     }
 }

 phone.addEventListener('blur',function(){
    console.log('dua')
    phone.classList.remove('is-valid')
    phone.classList.remove('is-invalid')
})

message.onkeyup=function(){
    let pattern=/^[a-z]{0,100}$/;    
    if(pattern.test(message.value)){
        
       if(message.value==''){
        message.classList.remove('is-valid')
        message.classList.remove('is-invalid')
     }
     }
     
     else
     {
        message.classList.remove('is-valid')
        message.classList.add('is-invalid')
         if(message.value==''){
            message.classList.remove('is-valid')
            message.classList.remove('is-invalid')
         }
     }
 }

 message.addEventListener('blur',function(){
    message.classList.remove('is-valid')
    message.classList.remove('is-invalid')
})

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
    firstName.value=''
    lastName.value=''
phone.value=''
message.value=''
    Swal.fire(
        'Thank you!',
        'Your message sent successfuly',
        'success'
      )
  });


// **********


    
