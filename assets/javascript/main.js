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

// why
let whyAnimate = document.getElementById('why-animate');

window.addEventListener('scroll',function printe(){

    if(window.scrollY==100){
        whyAnimate.classList.add('animate__heartBeat');
    }

    console.log(window.scrollY)

})



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
let alertSection = document.getElementById('alert');

window.addEventListener('scroll',function display(){

    if(window.scrollY==900){
        setInterval(alertdisplay,4000);
    }

})

function alertdisplay(){

    alertSection.classList.remove("visually-hidden");
    alertSection.classList.add("animate__animated","animate__heartBeat");
}

document.addEventListener('dblclick',function closealert(){
    alertSection.classList.add("visually-hidden");
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
var firstName=document.getElementById("firstName")
var lastName=document.getElementById("lastName")
var phone=document.getElementById("phone")
var message=document.getElementById("message")
var btn=document.getElementById("btn")

//validation
firstName.onkeyup=function(){
    pattern=/^[A-Z][a-z]{2,10}$/
    if(pattern.test(firstName.value)){
        firstName.classList.remove('is-invalid')
      firstName.classList.add('is-valid')
    }
    
    else
    {
        firstName.classList.remove('is-invalid')
        firstName.classList.add('is-invalid')
    }
}
lastName.onkeyup=function(){
    pattern=/^[A-Z][a-z]{2,10}$/
    if(pattern.test(lastName.value)){
        lastName.classList.remove('is-invalid')
      lastName.classList.add('is-valid')
    }
    
    else
    {
        lastName.classList.remove('is-invalid')
        lasttName.classList.add('is-invalid')
    }
}

phone.onkeyup=function(){
    pattern=/^\d{10}$/
    if(pattern.test(phone.value)){
        phone.classList.remove('is-invalid')
      phone.classList.add('is-valid')
    }
    
    else
    {
        phone.classList.remove('is-invalid')
        phone.classList.add('is-invalid')
    }
}
message.onkeyup=function(){
    pattern=/^[a-z]{2,50}$/
    if(pattern.test(message.value)){
        message.classList.remove('is-invalid')
     message.classList.add('is-valid')
    }
    
    else
    {
        message.classList.remove('is-invalid')
        message.classList.add('is-invalid')
    }
}
function clearInputs(){
    firstNameame.value=''
         lastName.value=''
    phone.value=''
    message.value=''
}

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
   
    Swal.fire(
        'Thank you!',
        'Your message sent successfuly',
        'success'
      )
  });



// **********


    
