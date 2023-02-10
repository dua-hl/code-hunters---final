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
        courseName:"Software Development",
        courseCaption:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?",
        courseTrainer:"Tariq Shreem",
        coursePrice:"250$",
        courseTime:"3 lecture/week",
        courseStart:"new",
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
        courseCategory:"graphicdesign",
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
    }else if(allcourses[i].courseCategory=="graphicdesign"){
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

    if(allcourses[i].courseCategory=="graphicdesign" && allcourses[i].courseStart=="new"){
        graphicDesignNew.push(allcourses[i]);
    }else if(allcourses[i].courseCategory=="graphicdesign" && allcourses[i].courseStart=="Launched"){
        graphicDesignLaunched.push(allcourses[i]);
    }

    if(allcourses[i].courseCategory=="marketing" && allcourses[i].courseStart=="new"){
        marketingNew.push(allcourses[i]);
    }else if(allcourses[i].courseCategory=="marketing" && allcourses[i].courseStart=="Launched"){
        marketingLaunched.push(allcourses[i]);
    }
}

console.log(webDesign);
console.log(marketingNew);
console.log(allNewCourses);

let newc ='';
let launchedc ='';
let data='';

if(titelNav.innerHTML=='All Courses'){
    empty();
    webDesignNewF();

    webdesignHtml.innerHTML=data;

    data='';
    graphicDesignNewF();
    graphicdesigHtml.innerHTML=data;

    data='';
    marketingNewF();
    marketingHtml.innerHTML=data;
}

for(let i=0;i<titlteCourses.length;i++){

    titlteCourses[i].addEventListener('click',function(){
    titelNav.innerHTML=titlteCourses[i].innerText;
    empty();

    if(titelNav.innerHTML=='Web Design'){
        data='';
        webDesignF();

        webdesignHtml.innerHTML=data;

    }else if(titelNav.innerHTML=='Graphic Design'){
        data='';
        graphicDesignF();
        graphicdesigHtml.innerHTML=data;
    
    }else if(titelNav.innerHTML=='Marketing'){
        data='';
        marketingF()
        marketingHtml.innerHTML=data;
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
        data='';
        webDesignNewF();
        webdesignHtml.innerHTML=data;
    
    }

    else if(titelNav.innerText=='Web Design - Launched courses'){

        empty();
        data='';
        webDesignLaunchedF();
        webdesignHtml.innerHTML=data;
    
    }

    else if(titelNav.innerText=='Graphic Design - New courses'){

        empty();
        data='';
        graphicDesignNewF();
        graphicdesigHtml.innerHTML=data;
    
    }
    else if(titelNav.innerText=='Graphic Design - Launched courses'){

        empty();
        data='';
        graphicDesignLaunchedF();
        graphicdesigHtml.innerHTML=data;
    
    }

    else if(titelNav.innerText=='Marketing - New courses'){
        console.log("new")

        empty();
        data='';
        marketingNewF();
        marketingHtml.innerHTML=data;
    
    }
    else if(titelNav.innerText=='Marketing - Launched courses'){
console.log("launched")
        empty();
        data='';
        marketingLaunchedF();
        marketingHtml.innerHTML=data;
    
    }


})
}

function empty(){
    webdesignHtml.innerHTML='';
    graphicdesigHtml.innerHTML='';
    marketingHtml.innerHTML='';
}

function webDesignF(){
    newc ='';
    launchedc ='';
    for(let j=0;j<webDesign.length;j++){
        if(webDesign[j].courseStart=="new"){
        newc+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${webDesign[j].courseName}<span> <img src="assets/images/new.png" alt="new" id="newimg"></span></h3>
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
            `
    } else {
        launchedc+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${webDesign[j].courseName}</h3>
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
            `
    }

    data=newc+launchedc;

}
}

function webDesignNewF(){
    for(let j=0;j<webDesignNew.length;j++){
        data+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${webDesignNew[j].courseName}<span> <img src="assets/images/new.png" alt="new" id="newimg"></span></h3>
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
                            <span class="ps-2" id="coursetime">${webDesignNew[j].courseTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
    }
}

function webDesignLaunchedF(){
    for(let j=0;j<webDesignLaunched.length;j++){
        data+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${webDesignLaunched[j].courseName}<span> <img src="assets/images/new.png" alt="new" id="newimg" class="visually-hidden"></span></h3>
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
            `
    }
}

function graphicDesignF(){
    newc ='';
    launchedc ='';
    for(let j=0;j<graphicDesign.length;j++){
        if(graphicDesign[j].courseStart=="new"){
        newc+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${graphicDesign[j].courseName}<span> <img src="assets/images/new.png" alt="new" id="newimg"></span></h3>
            <p class="searchContent" id="coursecaption">${graphicDesign[j].courseCaption}</p>
            </div>

            <div class="border-top">
                <div>
                    <div class="d-flex py-3 px-2">
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
            `
    
    } else {
        launchedc+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${graphicDesign[j].courseName}</h3>
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
            `
    }

    data=newc+launchedc;

}
}

function graphicDesignNewF(){
    for(let j=0;j<graphicDesignNew.length;j++){
        data+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${graphicDesignNew[j].courseName}<span> <img src="assets/images/new.png" alt="new" id="newimg"></span></h3>
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
            `
    }
}

function graphicDesignLaunchedF(){
    for(let j=0;j<graphicDesignLaunched.length;j++){
        data+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${graphicDesignLaunched[j].courseName}<span> <img src="assets/images/new.png" alt="new" id="newimg" class="visually-hidden"></span></h3>
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
            `
    }
}

function marketingF(){
    newc ='';
    launchedc ='';
    for(let j=0;j<marketing.length;j++){
        if(marketing[j].courseStart=="new"){
        newc+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${marketing[j].courseName}<span> <img src="assets/images/new.png" alt="new" id="newimg"></span></h3>
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
            `
    } else {
        launchedc+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${marketing[j].courseName}</h3>
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
            `
    }

    data=newc+launchedc;

}
}

function marketingNewF(){
    for(let j=0;j<marketingNew.length;j++){
        data+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${marketingNew[j].courseName}<span> <img src="assets/images/new.png" alt="new" id="newimg"></span></h3>
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
            `
    }
}

function marketingLaunchedF(){
    for(let j=0;j<marketingLaunched.length;j++){
        data+=`
        <div class="content-right-item">
            <div class="py-3">
            <h3 class="searchContent" id="coursename">${marketingLaunched[j].courseName}<span> <img src="assets/images/new.png" alt="new" id="newimg" class="visually-hidden"></span></h3>
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
            `
    }
}
