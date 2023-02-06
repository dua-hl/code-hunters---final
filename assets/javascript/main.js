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
        invisible();
    }
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
    document.body.addEventListener('dblclick',function(){
        searchDiv.style.cssText="visibility:invisible";
        searchInput.value='';
        enterValueDiv.style.cssText="visibility:hidden;";
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