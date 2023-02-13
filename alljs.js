
for (let i=0;i<contentItem.length;i++){
    contentItem[i].addEventListener('click',function(e){
        e.preventDefault();
    dropdown[i].classList.remove('visually-hidden');

    })
}


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







