let contentItem=document.querySelectorAll('.content-item');
let dropdown=document.querySelectorAll('.dropdown');

console.log(dropdown);

for (let i=0;i<contentItem.length;i++){
    contentItem[i].addEventListener('click',function(e){
        e.preventDefault();
    dropdown[i].classList.remove('visually-hidden');

    })
}


let titelNav = document.getElementById('titelofnav');
let  titlteCourses = document.querySelectorAll('.titlte-ofcourses');
let  courseBranch = document.querySelectorAll('.course-branch');
let contentRight=document.getElementById('content-right');
let webdesignHtml=document.getElementById('webdesign');
let graphicdesigHtml=document.getElementById('graphicdesig');
let marketingHtml=document.getElementById('marketing');

let allcourses =[

    {
        courseCategory:"webdesign",
        courseName:"Full Stack",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"Launched",
    }
,
    {
        courseCategory:"webdesign",
        courseName:"Full Stack",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"Launched",
    }
,
    {
        courseCategory:"marketing",
        courseName:"Marketing",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"new",
    }
, 
    {
        courseCategory:"webdesign",
        courseName:"Computer Science",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"new",
    }
,
    {
        courseCategory:"webdesign",
        courseName:"Computer Science",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"new",
    }
,
    {
        courseCategory:"graphicdesig",
        courseName:"Photoshop",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"Launched",
    }
,
    {
        courseCategory:"graphicdesig",
        courseName:"Photoshop",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"Launched",
    }
,    
    {
        courseCategory:"marketing",
        courseName:"Marketing",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"Launched",
    }
,
    {
        courseCategory:"graphicdesig",
        courseName:"Photoshop",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"Launched",
    }
,
    {
        courseCategory:"marketing",
        courseName:"Marketing",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"new",
    }
,    
    {
        courseCategory:"marketing",
        courseName:"Marketing",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"Launched",
    }
,   
    {
        courseCategory:"marketing",
        courseName:"Marketing",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"new",
    }
,    
    {
        courseCategory:"marketing",
        courseName:"Marketing",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"new",
    }
,
    {
        courseCategory:"webdesign",
        courseName:"Computer Science",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"new",
    }
];

let webDesign=[];
let webDesignNew=[];
let webDesignLaunched=[];

let graphicDesign=[];
let graphicDesignNew=[];
let graphicDesignLaunched=[];

let marketing=[];
let marketingNew=[];
let marketingLaunched=[];

let allNewCourses=[];


for(let i=0;i<allcourses.length;i++){

    if(allcourses[i].courseCategory=="webdesign"){
        webDesign.push(allcourses[i]);
    }else if(allcourses[i].courseCategory=="graphicdesig"){
        graphicDesign.push(allcourses[i]);
    }
    else if(allcourses[i].courseCategory=="marketing"){
        marketing.push(allcourses[i]);
    }

    if(allcourses[i].courseCategory=="webdesign" && allcourses[i].courseStart=="new"){
        webDesignNew.push(allcourses[i]);
    }else if(allcourses[i].courseCategory=="webdesign" && allcourses[i].courseStart=="Launched"){
        webDesignLaunched.push(allcourses[i]);
    }

    if(allcourses[i].courseCategory=="graphicdesig" && allcourses[i].courseStart=="new"){
        graphicDesignNew.push(allcourses[i]);
    }else if(allcourses[i].courseCategory=="graphicdesig" && allcourses[i].courseStart=="Launched"){
        graphicDesignLaunched.push(allcourses[i]);
    }

    if(allcourses[i].courseCategory=="marketing" && allcourses[i].courseStart=="new"){
        marketingNew.push(allcourses[i]);
    }else if(allcourses[i].courseCategory=="marketing" && allcourses[i].courseStart=="Launched"){
        marketingLaunched.push(allcourses[i]);
    }
}

let carouselPoints=document.getElementById("carouselpoints");
let allPages=document.getElementById("allpages");
let points='';
let pagesContent='';
let from=0;
let to=5;
let pagesContentItem='';

if(titelNav.innerHTML=='All Courses'){
    empty();
    allCoursesF();
}

for(let i=0;i<titlteCourses.length;i++){

    titlteCourses[i].addEventListener('click',function(){
    titelNav.innerHTML=titlteCourses[i].innerText;

    if(titelNav.innerHTML=='All Courses'){
        empty();
   
       for(let i=0;i<(allcourses.length/5)-1;i++){
   
           points+=`
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
           `
           }
           
           carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;
           
   
           for(let i=0;i<(allcourses.length/5)-1;i++){
               pagesContent+=`
               <div class="pages carousel-item" id="slide${i+1}">
           
           
               </div>
           `
           }
   
           allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;
   
           let pagesClass=document.querySelectorAll('.pages');
   
   
   for(let i=0;i<(allcourses.length/5);i++){
   
       pagesContentItem='';
       for(let j=from;j<to;j++){
           if(j>allcourses.length-1){
               break;
           }
   
           pagesContentItem+=`
           <div class="${allcourses[j].courseCategory}" id="${allcourses[j].courseCategory}">
           <div class="content-right-item">
           <div class="py-3">
           <a href="" class="searchContent neworlaunched" id="coursename">${allcourses[j].courseName}<span class="${allcourses[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
           <p class="searchContent" id="coursecaption">${allcourses[j].courseCaption}</p>
           </div>
   
           <div class="border-top">
               <div>
                   <div class="d-flex py-3 px-2" id="bordertop">
                       <div class="col-4 px-2">
                           <i class="fa-solid fa-chalkboard-user icon"></i>                            
                           <span class="ps-2" id="coursetrainer">${allcourses[j].courseTrainer}</span>
                       </div>
   
                       <div class="col-3 text-end px-2">
                           <i class="fa-solid fa-sack-dollar icon"></i>                            
                           <span class="ps-2" id="courseprice">${allcourses[j].coursePrice}</span>
                       </div>
       
                       <div class="col-5 text-end px-2">
                           <i class="fa-regular fa-calendar-days icon"></i>
                           <span class="ps-2" id="coursetime">${allcourses[j].courseTime}</span>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </div> 
   
           `;
   
   
   
       }
   
       pagesClass[i].innerHTML=pagesContentItem;
   
   
   
   
   from+=5;
   to+=5;
   
   
   
   
   // console.log(pagesClass[i].innerHTML);
   
   }
   }
   
   
   if(titelNav.innerHTML=='Web Design'){
   
       empty();
       webDesignF();
      
   }

   if(titelNav.innerHTML=='Graphic Design'){
   
    empty();
    graphicDesignF()
    
}

if(titelNav.innerHTML=='Marketing'){
   
    empty();
    marketingF()
    
}

})

}

for(let j=0;j<courseBranch.length;j++){
    courseBranch[j].addEventListener('click',function(){
    if(j<2){
        titelNav.innerText=`Web Design - ${courseBranch[j].innerText} `;


    }    

    else if(j<4){
        titelNav.innerText=`Graphic Design - ${courseBranch[j].innerText} `;
    }  

    else if(j<6){
        titelNav.innerText=`Marketing - ${courseBranch[j].innerText} `;
    }
     
    if(titelNav.innerText=='Web Design - New courses'){       
            empty();
            webDesignNewF();         
    }

    else if(titelNav.innerText=='Web Design - Launched courses'){
        empty();
        webDesignLaunchedF();    
    }

    else if(titelNav.innerText=='Graphic Design - New courses'){
        empty();
        graphicDesignNewF();    
    }
    else if(titelNav.innerText=='Graphic Design - Launched courses'){
        empty();
        graphicDesignLaunchedF();
    }

    else if(titelNav.innerText=='Marketing - New courses'){
        empty();
        marketingNewF();  
    }
    else if(titelNav.innerText=='Marketing - Launched courses'){
        empty();
        marketingLaunchedF();  
    }


})
}

function allCoursesF(){
    for(let i=0;i<(allcourses.length/5)-1;i++){

        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;
        
 
        for(let i=0;i<(allcourses.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }
 
        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;
 
        let pagesClass=document.querySelectorAll('.pages');
 
 
 for(let i=0;i<(allcourses.length/5);i++){
 
    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>allcourses.length-1){
            break;
        }
 
        pagesContentItem+=`
        <div class="${allcourses[j].courseCategory}" id="${allcourses[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${allcourses[j].courseName}<span class="${allcourses[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${allcourses[j].courseCaption}</p>
        </div>
 
        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${allcourses[j].courseTrainer}</span>
                    </div>
 
                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${allcourses[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${allcourses[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 
 
        `;
 
 
 
    }
 
    pagesClass[i].innerHTML=pagesContentItem;
 
 
 
 
 from+=5;
 to+=5;
 
 
 
 
 // console.log(pagesClass[i].innerHTML);
 
 }
}


function webDesignF(){
    for(let i=0;i<((webDesign.length/5))-1;i++){
   
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;

        for(let i=0;i<(webDesign.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }

        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

        let pagesClass=document.querySelectorAll('.pages');


    for(let i=0;i<(webDesign.length/5);i++){

    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>webDesign.length-1){
            break;
        }

        pagesContentItem+=`
        <div class="${webDesign[j].courseCategory}" id="${webDesign[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${webDesign[j].courseName}<span class="${webDesign[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${webDesign[j].courseCaption}</p>
        </div>

        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${webDesign[j].courseTrainer}</span>
                    </div>

                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${webDesign[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${webDesign[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 

        `;



    }

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;




}
}

function webDesignNewF(){
    for(let i=0;i<((webDesignNew.length/5))-1;i++){
        
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;

        for(let i=0;i<(webDesignNew.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }

        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

        let pagesClass=document.querySelectorAll('.pages');


    for(let i=0;i<(webDesignNew.length/5);i++){

    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>webDesignNew.length-1){
            break;
        }

        pagesContentItem+=`
        <div class="${webDesignNew[j].courseCategory}" id="${webDesignNew[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${webDesignNew[j].courseName}<span class="${webDesignNew[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${webDesignNew[j].courseCaption}</p>
        </div>

        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${webDesignNew[j].courseTrainer}</span>
                    </div>

                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${webDesignNew[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${graphicDesign[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 

        `;



    }

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;




}
}

function webDesignLaunchedF(){
    for(let i=0;i<((webDesignLaunched.length/5))-1;i++){
    
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;

        for(let i=0;i<(webDesignLaunched.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }

        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

        let pagesClass=document.querySelectorAll('.pages');


    for(let i=0;i<(webDesignLaunched.length/5);i++){

    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>webDesignLaunched.length-1){
            break;
        }

        pagesContentItem+=`
        <div class="${webDesignLaunched[j].courseCategory}" id="${webDesignLaunched[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${webDesignLaunched[j].courseName}<span class="${webDesignLaunched[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${webDesignLaunched[j].courseCaption}</p>
        </div>

        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${webDesignLaunched[j].courseTrainer}</span>
                    </div>

                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${webDesignLaunched[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${webDesignLaunched[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 

        `;



    }

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;




}
}

function graphicDesignF(){
    for(let i=0;i<((graphicDesign.length/5))-1;i++){

        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;

        for(let i=0;i<(graphicDesign.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }

        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

        let pagesClass=document.querySelectorAll('.pages');


    for(let i=0;i<(graphicDesign.length/5);i++){

    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>graphicDesign.length-1){
            break;
        }

        pagesContentItem+=`
        <div class="${graphicDesign[j].courseCategory}" id="${graphicDesign[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${graphicDesign[j].courseName}<span class="${graphicDesign[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${graphicDesign[j].courseCaption}</p>
        </div>

        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${graphicDesign[j].courseTrainer}</span>
                    </div>

                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${graphicDesign[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${graphicDesign[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 

        `;



    }

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;




}
}

function graphicDesignNewF(){
     
    for(let i=0;i<((graphicDesignNew.length/5))-1;i++){
    
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;

        for(let i=0;i<(graphicDesignNew.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }

        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

        let pagesClass=document.querySelectorAll('.pages');


    for(let i=0;i<(graphicDesignNew.length/5);i++){

    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>graphicDesignNew.length-1){
            break;
        }

        pagesContentItem+=`
        <div class="${graphicDesignNew[j].courseCategory}" id="${graphicDesignNew[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${graphicDesignNew[j].courseName}<span class="${graphicDesignNew[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${graphicDesignNew[j].courseCaption}</p>
        </div>

        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${graphicDesignNew[j].courseTrainer}</span>
                    </div>

                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${graphicDesignNew[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${graphicDesignNew[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 

        `;



    }

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;




}


}

function graphicDesignLaunchedF(){
    for(let i=0;i<((graphicDesignLaunched.length/5))-1;i++){
    
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;

        for(let i=0;i<(graphicDesignLaunched.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }

        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

        let pagesClass=document.querySelectorAll('.pages');


    for(let i=0;i<(graphicDesignLaunched.length/5);i++){

    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>graphicDesignLaunched.length-1){
            break;
        }

        pagesContentItem+=`
        <div class="${graphicDesignLaunched[j].courseCategory}" id="${graphicDesignLaunched[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${graphicDesignLaunched[j].courseName}<span class="${graphicDesignLaunched[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${graphicDesignLaunched[j].courseCaption}</p>
        </div>

        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${graphicDesignLaunched[j].courseTrainer}</span>
                    </div>

                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${graphicDesignLaunched[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${graphicDesignLaunched[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 

        `;



    }

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;




}
}

function marketingF(){
    for(let i=0;i<((marketing.length/5))-1;i++){

        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;

        for(let i=0;i<(marketing.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }

        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

        let pagesClass=document.querySelectorAll('.pages');


    for(let i=0;i<(marketing.length/5);i++){

    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>marketing.length-1){
            break;
        }

        pagesContentItem+=`
        <div class="${marketing[j].courseCategory}" id="${marketing[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${marketing[j].courseName}<span class="${marketing[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${marketing[j].courseCaption}</p>
        </div>

        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${marketing[j].courseTrainer}</span>
                    </div>

                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${marketing[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${marketing[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 

        `;



    }

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;




}
}

function marketingNewF(){
    for(let i=0;i<((marketingNew.length/5))-1;i++){
    
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;

        for(let i=0;i<(marketingNew.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }

        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

        let pagesClass=document.querySelectorAll('.pages');


    for(let i=0;i<(marketingNew.length/5);i++){

    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>marketingNew.length-1){
            break;
        }

        pagesContentItem+=`
        <div class="${marketingNew[j].courseCategory}" id="${marketingNew[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${marketingNew[j].courseName}<span class="${marketingNew[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${marketingNew[j].courseCaption}</p>
        </div>

        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${marketingNew[j].courseTrainer}</span>
                    </div>

                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${marketingNew[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${marketingNew[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 

        `;



    }

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;




}
}

function marketingLaunchedF(){
    for(let i=0;i<((marketingLaunched.length/5))-1;i++){
    
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;

        for(let i=0;i<(marketingLaunched.length/5)-1;i++){
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }

        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

        let pagesClass=document.querySelectorAll('.pages');


    for(let i=0;i<(marketingLaunched.length/5);i++){

    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>marketingLaunched.length-1){
            break;
        }

        pagesContentItem+=`
        <div class="${marketingLaunched[j].courseCategory}" id="${marketingLaunched[j].courseCategory}">
        <div class="content-right-item">
        <div class="py-3">
        <a href="" class="searchContent neworlaunched" id="coursename">${marketingLaunched[j].courseName}<span class="${marketingLaunched[j].courseStart}"> <img src="assets/images/new.png" alt="new"></span></a>
        <p class="searchContent" id="coursecaption">${marketingLaunched[j].courseCaption}</p>
        </div>

        <div class="border-top">
            <div>
                <div class="d-flex py-3 px-2" id="bordertop">
                    <div class="col-4 px-2">
                        <i class="fa-solid fa-chalkboard-user icon"></i>                            
                        <span class="ps-2" id="coursetrainer">${marketingLaunched[j].courseTrainer}</span>
                    </div>

                    <div class="col-3 text-end px-2">
                        <i class="fa-solid fa-sack-dollar icon"></i>                            
                        <span class="ps-2" id="courseprice">${marketingLaunched[j].coursePrice}</span>
                    </div>
    
                    <div class="col-5 text-end px-2">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <span class="ps-2" id="coursetime">${marketingLaunched[j].courseTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> 

        `;



    }

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;




}

}

function empty(){
    points='';
     pagesContent='';
     from=0;
     to=5;
     pagesContentItem='';
     carouselPoints.innerHTML='';
     allPages.innerHTML='';
     pagesClass=[];
}
