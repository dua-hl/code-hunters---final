// navbar of courses
let navbar = document.getElementById('navbar');

function navbarDisplayF(){
  navbar.innerHTML=`
  <div class="container">
  <div class="collapse navbar-collapse pb-lg-2 pb-md-0 d-flex" id="navbarSupportedContent">
  <div class="nav-left col-10">
  <ul class="d-flex flex-row pt-md-2 navbar-nav me-auto mb-2 mb-lg-0 gap-3 ps-4 animate__animated animate__fadeIn">
    <li class="nav-item px-md-0 col-md-3">
      <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
    </li>

    <li class="m-auto col-md-9 text-center">
      <h2 id="titelofnav">All Courses</h2>
    </li>
  </ul>
  </div>

  <div class="nav-right col-2 text-end">
  <form role="search" class="d-flex position-relative">
      <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search" id="searchinput">
      <a href="#" class=" position-relative" id="searchbutton">Search</a>
      
      <div id="searchdiv" class="searchdiv">
      <div id="searchResult" class="searchResult">
      </div>
      <div class="closesearchresult" id="close">
        <a><i class="fa-regular fa-circle-xmark position-fixed"></i></a> 
      </div>
      <div class="searchResult-arrow" id="searchResult-arrow"></div>
      </div>

      <div class="entervaluediv" id="entervaluediv">
      <div id="entervalue" class=" entervalue">Enter a topic to search about</div>
      <div class="entervalue-arrow" id="entervalue-arrow"></div>
    </div>  
  </form>
  </div>
  </div>
  </div>
  `

}

// courses
// content left
let coursePagesMenu=document.getElementById('courses-content-left')

function coursesMenu(){

  coursePagesMenu.innerHTML=`
  <ul class="content-list">
        <li class="content-item">
            <div class="change-co1 titlte-ofcourses"> 
            <a href="../webdesign/webdesign.html" class="p-2 links">Web Design</a>
            </div>
            <ul class="dropdown">
                <a href="../webdesign/webnew.html" class="course-branch links"><li>New courses</li></a>
                <a href="../webdesign/weblaunched.html" class="course-branch links"><li>Launched courses</li></a>
            </ul>
        </li>

        <li class="content-item">
            <div class="change-co2 titlte-ofcourses"> 
            <a href="../graphic design/graphicdesign.html" class="p-2 links">Graphic Design</a>
            </div>
            <ul class="dropdown">
                <a href="../graphic design/graphicnew.html" class="course-branch links" ><li>New courses</li></a>
                <a href="../graphic design/graphiclaunched.html" class="course-branch links"><li>Launched courses</li></a>
            </ul>
        </li>

        <li class="content-item">
            <div class="change-co3 titlte-ofcourses"> 
            <a href="../marketing/marketing.html" class="p-2 links">Marketing</a>
            </div>
            <ul class="dropdown" >
                <a href="../marketing/marketingnew.html" class="course-branch links"><li>New courses</li></a>
                <a href="../marketing/marketinglaunched.html" class="course-branch links"><li>Launched courses</li></a>
            </ul>
        </li>
    </ul>`
}

// content right

let contentItem = document.querySelectorAll('.content-item');
let dropdown = document.querySelectorAll('.dropdown');

let titlteCourses = document.querySelectorAll('.titlte-ofcourses');

let courseBranch = document.querySelectorAll('course-branch');
let carouselPoints = document.getElementById("carouselpoints");
let allPages = document.getElementById("allpages");
let points = '';
let pagesContent = '';
let from = 0;
let to = 5;
let pagesContentItem = '';

let coursesNav = document.querySelectorAll('.courses .nav-item');
let coursContent = document.querySelectorAll('.courses .coursefromjs');

let allcourses = [

    {
        courseID:"c1",
        courseCategory: "webdesign",
        courseName: "Full Stack",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"
    }
    ,
    {
        courseID:"c2",
        courseCategory: "webdesign",
        courseName: "Full Stack",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c3",
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c4",
        courseCategory: "webdesign",
        courseName: "Computer Science",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c5",
        courseCategory: "webdesign",
        courseName: "Computer Science",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c6",
        courseCategory: "graphicdesig",
        courseName: "Photoshop",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
      courseID:"c6",
      courseCategory: "graphicdesig",
      courseName: "Photoshop",
      courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
      courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
      courseTrainer: "Tariq Shreem",
      coursePrice: "250$",
      courseTime: "3 lecture/week",
      courseStart: "new",
      startDate: "2-3-2023"

  }
    ,
    {
        courseID:"c7",
        courseCategory: "graphicdesig",
        courseName: "Photoshop",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c8",
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c9",
        courseCategory: "graphicdesig",
        courseName: "Photoshop",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c10",
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c11",
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c12",
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c13",
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseID:"c14",
        courseCategory: "webdesign",
        courseName: "Computer Science",
        courseCaptionmain:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
];

let webDesign = [];
let webDesignNew = [];
let webDesignLaunched = [];

let graphicDesign = [];
let graphicDesignNew = [];
let graphicDesignLaunched = [];

let marketing = [];
let marketingNew = [];
let marketingLaunched = [];


function categories() {
    for (let i = 0; i < allcourses.length; i++) {
        if (allcourses[i].courseCategory == "webdesign") {
            webDesign.push(allcourses[i]);
        } else if (allcourses[i].courseCategory == "graphicdesig") {
            graphicDesign.push(allcourses[i]);
        }
        else if (allcourses[i].courseCategory == "marketing") {
            marketing.push(allcourses[i]);
        }

        if (allcourses[i].courseCategory == "webdesign" && allcourses[i].courseStart == "new") {
            webDesignNew.push(allcourses[i]);
        } else if (allcourses[i].courseCategory == "webdesign" && allcourses[i].courseStart == "Launched") {
            webDesignLaunched.push(allcourses[i]);
        }

        if (allcourses[i].courseCategory == "graphicdesig" && allcourses[i].courseStart == "new") {
            graphicDesignNew.push(allcourses[i]);
        } else if (allcourses[i].courseCategory == "graphicdesig" && allcourses[i].courseStart == "Launched") {
            graphicDesignLaunched.push(allcourses[i]);
        }

        if (allcourses[i].courseCategory == "marketing" && allcourses[i].courseStart == "new") {
            marketingNew.push(allcourses[i]);
        } else if (allcourses[i].courseCategory == "marketing" && allcourses[i].courseStart == "Launched") {
            marketingLaunched.push(allcourses[i]);
        }
    }
}

categories();

function webdesignMain(){
  let courseDesc='';
console.log(webDesign.length)

for(let i=0;i<6;i++){
  if(i>=webDesign.length){
    break;
  }
  courseDesc+=`
  <div class="courses-details col-6 position-relative my-1">
  <div class='new-label ${webDesign[i].courseStart}'>
  <button class="button-53 d-flex gap-2 align-items-center justify-content-center" role="button">
    <h3>New</h3>
    <i class="fa-solid fa-fire"></i>
  </button>
</div>
  <div class="d-flex">

  <div class="image col-4">
    <img src="assets/images/suggestions/New folder/how-to-give-great-code-reviews-when-youre-new-to-a-system.jpg" alt="portfolio1" class="w-100">
  </div>

  <div class="col-8">
  <div class="courses-underimg">
  <a href="./webdesign/webdesign.html#${webDesign[i].courseID}" class="searchContent">${webDesign[i].courseName}</a>
  <p class="searchContent">${webDesign[i].courseCaptionmain}</p>
  </div>
</div>

</div>  
<div class="d-flex border-top py-2 px-2">
<div class="col-6 px-2">
    <i class="fa-regular fa-clock"></i>
    <span class="ps-2">${webDesign[i].startDate}</span>
</div>

<div class="col-6 text-end px-2">
    <i class="fa-regular fa-calendar-days"></i>
    <span class="ps-2">${webDesign[i].courseTime}</span>
</div>
</div> 
</div>
  
 `
}


coursContent[0].innerHTML=courseDesc;

}

function graphicedesignMain(){

  let courseDesc='';

for(let i=0;i<6;i++){

  if(i>=graphicDesign.length){
    break;
  }
  courseDesc+=`
  <div class="courses-details col-6 position-relative my-1">
  <div class='new-label ${graphicDesign[i].courseStart}'>
  <button class="button-53 d-flex gap-2 align-items-center justify-content-center" role="button">
    <h3>New</h3>
    <i class="fa-solid fa-fire"></i>
  </button>
</div>
  <div class="d-flex">

  <div class="image col-4">
    <img src="assets/images/suggestions/New folder/how-to-give-great-code-reviews-when-youre-new-to-a-system.jpg" alt="portfolio1" class="w-100">
  </div>

  <div class="col-8">
  <div class="courses-underimg">
  <a href="./graphic design/graphicdesign.html#${graphicDesign[i].courseID}" class="searchContent">${graphicDesign[i].courseName}</a>
  <p class="searchContent">${graphicDesign[i].courseCaptionmain}</p>
  </div>
</div>

</div>  
<div class="d-flex border-top py-2 px-2">
<div class="col-6 px-2">
    <i class="fa-regular fa-clock"></i>
    <span class="ps-2">${graphicDesign[i].startDate}</span>
</div>

<div class="col-6 text-end px-2">
    <i class="fa-regular fa-calendar-days"></i>
    <span class="ps-2">${graphicDesign[i].courseTime}</span>
</div>
</div> 
</div>
  
  `

}
coursContent[1].innerHTML=courseDesc;
}

function marketingMain(){
  let courseDesc='';

for(let i=0;i<6;i++){
  if(i>=marketing.length){
    break;
  }

  courseDesc+=`
  <div class="courses-details col-6 position-relative my-1">
  <div class='new-label ${marketing[i].courseStart}'>
  <button class="button-53 d-flex gap-2 align-items-center justify-content-center" role="button">
    <h3>New</h3>
    <i class="fa-solid fa-fire"></i>
  </button>
</div>
  <div class="d-flex">

  <div class="image col-4">
    <img src="assets/images/suggestions/New folder/how-to-give-great-code-reviews-when-youre-new-to-a-system.jpg" alt="portfolio1" class="w-100">
  </div>

  <div class="col-8">
  <div class="courses-underimg">
  <a href="./marketing/marketing.html#${marketing[i].courseID}" class="searchContent">${marketing[i].courseName}</a>
  <p class="searchContent">${marketing[i].courseCaptionmain}</p>
  </div>
</div>

</div>  
<div class="d-flex border-top py-2 px-2">
<div class="col-6 px-2">
    <i class="fa-regular fa-clock"></i>
    <span class="ps-2">${marketing[i].startDate}</span>
</div>

<div class="col-6 text-end px-2">
    <i class="fa-regular fa-calendar-days"></i>
    <span class="ps-2">${marketing[i].courseTime}</span>
</div>
</div> 
</div>
  
  `
  if(i>marketing.length){
    break;
   }

}
coursContent[2].innerHTML=courseDesc;
}

function allCoursesF() {
    navbar.style.cssText = "background-color: rgb(90, 88, 88);";

    for (let i = 0; i < (allcourses.length / 5) - 1; i++) {

        points += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i + 1}"><h5>Page ${i + 2}</h5></button>
        `
    }

    carouselPoints.innerHTML = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;


    for (let i = 0; i < (allcourses.length / 5) - 1; i++) {
        pagesContent += `
            <div class="pages carousel-item" id="slide${i + 1}">
        
        
            </div>
        `
    }

    allPages.innerHTML = `<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

    let pagesClass = document.querySelectorAll('.pages');


    for (let i = 0; i < (allcourses.length / 5); i++) {

        pagesContentItem = '';
        for (let j = from; j < to; j++) {
            if (j > allcourses.length - 1) {
                break;
            }

            pagesContentItem += `
        <div class="${allcourses[j].courseCategory}" id="${allcourses[j].courseID}">
        <div class="content-right-item d-lg-flex">
        <div class="py-3 col-lg-8 padding-md">
        <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${allcourses[j].courseName}<span class="${allcourses[j].courseStart} ms-4">NEW</span></h3>
        <p class="searchContent" id="coursecaption">${allcourses[j].courseCaption}</p>
        </div>
  
            <div class="course-item-desc col-lg-4">
            <div>
            <div>
                <div class="px-3 py-3" id="bordertop">
  
                  <div class="d-flex gap-2">
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${allcourses[j].startDate}</span></div>
                    </div>
  
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${allcourses[j].courseTrainer}</span></div>
                    </div>
                  </div>
  
                  <div class="d-flex gap-2">
                    <div class="d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                      <div class="text-start"><span class="ps-2 " id="courseprice">${allcourses[j].coursePrice}</span></div>
                    </div>
    
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${allcourses[j].courseTime}</span></div>
                    </div>
                </div>
  
                <div class="w-100 buttons pt-3 text-center">
                  <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                  <button class="w-75 text-capitalize form-button"><a href="#"></a></button>
                </div>
  
              </div>
  
            </div>
        </div>
        </div>
  
  
      </div>
      </div> 
    `;
        }
        pagesClass[i].innerHTML = pagesContentItem;

        from += 5;
        to += 5;


}

let formButton = document.querySelectorAll('.form-button');

for (let i = 0; i < (allcourses.length); i++) {

if(allcourses[i].courseStart=="new"){
formButton[i].innerHTML="<a href='http://127.0.0.1:5500/registration%20form/regform.html'>Registration Form</a>"
} else {formButton[i].innerHTML="Course Tasks"} 
}
}

function webDesignF() {

    navbar.style.cssText = "background-color: rgb(90, 88, 88);";

    for (let i = 0; i < Math.floor((webDesign.length / 5)) ; i++) {
      if((webDesign.length)%5==0){
        break;
      }
        points += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i + 1}"><h5>Page ${i + 2}</h5></button>
        `
    }

    carouselPoints.innerHTML = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;


    for (let i = 0; i < Math.floor((webDesign.length / 5)); i++) {
      if((webDesign.length)%5==0){
        break;
      }
        pagesContent += `
            <div class="pages carousel-item" id="slide${i + 1}">
        
        
            </div>
        `
    }

    allPages.innerHTML = `<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

    let pagesClass = document.querySelectorAll('.pages');


    for (let i = 0; i <= Math.floor ((webDesign.length / 5)); i++) {

        pagesContentItem = '';
        for (let j = from; j < to; j++) {
            if (j > webDesign.length) {
                to=webDesign.length;
              }            

            pagesContentItem += `
        <div class="${webDesign[j].courseCategory}" id="${webDesign[j].courseID}">
        <div class="content-right-item d-lg-flex">
        <div class="py-3 col-lg-8 padding-md">
        <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${webDesign[j].courseName}<span class="${webDesign[j].courseStart} ms-4">NEW</span></h3>
        <p class="searchContent" id="coursecaption">${webDesign[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-lg-4">
            <div>
            <div>
                <div class="px-3 py-3" id="bordertop">
  
                  <div class="d-flex gap-2">
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${webDesign[j].startDate}</span></div>
                    </div>
  
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${webDesign[j].courseTrainer}</span></div>
                    </div>
                  </div>
  
                  <div class="d-flex gap-2">
                    <div class="d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                      <div class="text-start"><span class="ps-2 " id="courseprice">${webDesign[j].coursePrice}</span></div>
                    </div>
    
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${webDesign[j].courseTime}</span></div>
                    </div>
                </div>
  
                <div class="w-100 buttons pt-3 text-center">
                  <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                  <button class="w-75 text-capitalize form-button"><a href="#"></a></button>
                </div>
  
              </div>
  
            </div>
        </div>
        </div>
  
  
      </div>
      </div> 
        `;
        }

        pagesClass[i].innerHTML = pagesContentItem;




        from += 5;
        to += 5;


        let formButton = document.querySelectorAll('.form-button');

        for (let k = 0; k < (webDesign.length); k++) {
    
          if(webDesign[k].courseStart=="new"){
          formButton[k].innerHTML="<a href='../registration form/regform.html'>Registration Form</a>"
          } else {formButton[k].innerHTML="View Tasks"} 
          }


    }

}

function webDesignNewF() {
    navbar.style.cssText = "background-color: rgb(90, 88, 88);";

    for (let i = 0; i < Math.floor((webDesignNew.length / 5)); i++) {
      if((webDesignNew.length)%5==0){
        break;
      }
        points += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i + 1}"><h5>Page ${i + 2}</h5></button>
        `
    }

    carouselPoints.innerHTML = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;


    for (let i = 0; i < Math.floor((webDesignNew.length / 5)); i++) {
      if((webDesignNew.length)%5==0){
        break;
      }
        pagesContent += `
            <div class="pages carousel-item" id="slide${i + 1}">
        
        
            </div>
        `
    }

    allPages.innerHTML = `<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

    let pagesClass = document.querySelectorAll('.pages');


    for (let i = 0; i <Math.floor ((webDesign.length / 5)); i++) {

      if (to > webDesignNew.length) {
        to=webDesignNew.length;
      }  

        pagesContentItem = '';
        for (let j = from; j < to; j++) {
            if (j > webDesignNew.length) {
                break;
            }

            pagesContentItem += `
        <div class="${webDesignNew[j].courseCategory}">
        <div class="content-right-item d-lg-flex">
        <div class="py-3 col-lg-8 padding-md">
        <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${webDesignNew[j].courseName}<span class="${webDesignNew[j].courseStart} ms-4">NEW</span></h3>
        <p class="searchContent" id="coursecaption">${webDesignNew[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-lg-4">
            <div>
            <div>
                <div class="px-3 py-3" id="bordertop">
  
                  <div class="d-flex gap-2">
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${webDesignNew[j].startDate}</span></div>
                    </div>
  
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${webDesignNew[j].courseTrainer}</span></div>
                    </div>
                  </div>
  
                  <div class="d-flex gap-2">
                    <div class="d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                      <div class="text-start"><span class="ps-2 " id="courseprice">${webDesignNew[j].coursePrice}</span></div>
                    </div>
    
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${webDesignNew[j].courseTime}</span></div>
                    </div>
                </div>
  
                <div class="w-100 buttons pt-3 text-center">
                  <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                  <button class="w-75 text-capitalize form-button"><a href="../registration form/regform.html">Registraion Form</a></button>
                </div>
  
              </div>
  
            </div>
        </div>
        </div>
  
  
      </div>
      </div> 
        `;



        }

        pagesClass[i].innerHTML = pagesContentItem;




        from += 5;
        to += 5;

    }

}

function webDesignLaunchedF() {
    navbar.style.cssText = "background-color: rgb(90, 88, 88);";

    for (let i = 0; i < Math.floor((webDesignLaunched.length / 5)); i++) {
      if((webDesignLaunched.length)%5==0){
        break;
      }
        points += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i + 1}"><h5>Page ${i + 2}</h5></button>
        `
    }

    carouselPoints.innerHTML = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;


    for (let i = 0; i < Math.floor((webDesignLaunched.length / 5)); i++) {
        pagesContent += `
            <div class="pages carousel-item" id="slide${i + 1}">
        
        
            </div>
        `
    }

    allPages.innerHTML = `<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

    let pagesClass = document.querySelectorAll('.pages');


    for (let i = 0; i < (webDesignLaunched.length / 5); i++) {
      if (to > webDesignLaunched.length) {
        to=webDesignLaunched.length;
      }  
        pagesContentItem = '';
        for (let j = from; j < to; j++) {
          if (j > webDesignLaunched.length) {
            to=webDesignLaunched.length;
          } 

            pagesContentItem += `
        <div class="${webDesignLaunched[j].courseCategory}">
        <div class="content-right-item d-lg-flex">
        <div class="py-3 col-lg-8 padding-md">
        <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${webDesignLaunched[j].courseName}<span class="${webDesignLaunched[j].courseStart} ms-4">NEW</span></h3>
        <p class="searchContent" id="coursecaption">${webDesignLaunched[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-lg-4">
            <div>
            <div>
                <div class="px-3 py-3" id="bordertop">
  
                  <div class="d-flex gap-2">
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${webDesignLaunched[j].startDate}</span></div>
                    </div>
  
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${webDesignLaunched[j].courseTrainer}</span></div>
                    </div>
                  </div>
  
                  <div class="d-flex gap-2">
                    <div class="d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                      <div class="text-start"><span class="ps-2 " id="courseprice">${webDesignLaunched[j].coursePrice}</span></div>
                    </div>
    
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${webDesignLaunched[j].courseTime}</span></div>
                    </div>
                </div>
  
                <div class="w-100 buttons pt-3 text-center">
                  <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                  <button class="w-75 text-capitalize form-button"><a href="#">View Tasks</a></button>
                </div>
  
              </div>
  
            </div>
        </div>
        </div>
  
  
      </div>
      </div> 
        `;



        }

        pagesClass[i].innerHTML = pagesContentItem;




        from += 5;
        to += 5;

    }

}

function graphicDesignF() {

    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<(Math.floor((graphicDesign.length / 5)));i++){
      if((graphicDesign.length)%5==0){
        break;
      }

        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;
        
 
        for(let i=0;i<(Math.floor((graphicDesign.length / 5)));i++){
          if((graphicDesign.length)%5==0){
            break;
          }
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }
 
        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;
 
        let pagesClass=document.querySelectorAll('.pages');
 
 
 for(let i=0;i<=Math.floor((graphicDesign.length/5));i++){

    pagesContentItem='';
  if(to>graphicDesign.length){
    to=graphicDesign.length;
  }

    for(let j=from;j<to;j++){
        pagesContentItem+=`
        <div class="${graphicDesign[j].courseCategory}" id="${graphicDesign[j].courseID}">
        <div class="content-right-item d-lg-flex">
        <div class="py-3 col-lg-8 padding-md">
        <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${graphicDesign[j].courseName}<span class="${graphicDesign[j].courseStart} ms-4">NEW</span></h3>
        <p class="searchContent" id="coursecaption">${graphicDesign[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-lg-4">
            <div>
            <div>
                <div class="px-3 py-3" id="bordertop">
  
                  <div class="d-flex gap-2">
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${graphicDesign[j].startDate}</span></div>
                    </div>
  
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${graphicDesign[j].courseTrainer}</span></div>
                    </div>
                  </div>
  
                  <div class="d-flex gap-2">
                    <div class="d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                      <div class="text-start"><span class="ps-2 " id="courseprice">${graphicDesign[j].coursePrice}</span></div>
                    </div>
    
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${graphicDesign[j].courseTime}</span></div>
                    </div>
                </div>
  
                <div class="w-100 buttons pt-3 text-center">
                  <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                  <button class="w-75 text-capitalize form-button"><a href="#"></a></button>
                </div>
  
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

let formButton = document.querySelectorAll('.form-button');

for (let k = 0; k < (graphicDesign.length); k++) {


if(graphicDesign[k].courseStart=="new"){
formButton[k].innerHTML="<a href='../registration form/regform.html'>Registration Form</a>"
} else {formButton[k].innerHTML="View Tasks"} 
}

}

}

function graphicDesignNewF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<Math.floor((graphicDesignNew.length / 5));i++){
      if((graphicDesignNew.length)%5==0){
        break;
      }
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;
        
 
        for(let i=0;i<Math.floor((graphicDesignNew.length / 5));i++){
          if((graphicDesignNew.length)%5==0){
            break;
          }
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }
 
        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;
 
        let pagesClass=document.querySelectorAll('.pages');
 
 
 for(let i=0;i<(graphicDesignNew.length/5);i++){
  if(to>graphicDesignNew.length){
    to=graphicDesignNew.length;
  }
    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>graphicDesignNew.length-1){
            break;
        }
 
        pagesContentItem+=`
        <div class="${graphicDesignNew[j].courseCategory}">
        <div class="content-right-item d-lg-flex">
        <div class="py-3 col-lg-8 padding-md">
        <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${graphicDesignNew[j].courseName}<span class="${graphicDesignNew[j].courseStart} ms-4">NEW</span></h3>
        <p class="searchContent" id="coursecaption">${graphicDesignNew[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-lg-4">
            <div>
            <div>
                <div class="px-3 py-3" id="bordertop">
  
                  <div class="d-flex gap-2">
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${graphicDesignNew[j].startDate}</span></div>
                    </div>
  
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${graphicDesignNew[j].courseTrainer}</span></div>
                    </div>
                  </div>
  
                  <div class="d-flex gap-2">
                    <div class="d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                      <div class="text-start"><span class="ps-2 " id="courseprice">${graphicDesignNew[j].coursePrice}</span></div>
                    </div>
    
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${graphicDesignNew[j].courseTime}</span></div>
                    </div>
                </div>
  
                <div class="w-100 buttons pt-3 text-center">
                  <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                  <button class="w-75 text-capitalize form-button"><a href="../registration form/regform.html">Registraion Form</a></button>
                </div>
  
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

function graphicDesignLaunchedF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<Math.floor((graphicDesignLaunched.length / 5));i++){
      if((graphicDesignLaunched.length)%5==0){
        break;
      }
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;
        
 
        for(let i=0;i<Math.floor((graphicDesignLaunched.length / 5));i++){
          if((graphicDesignLaunched.length)%5==0){
            break;
          }
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }
 
        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;
 
        let pagesClass=document.querySelectorAll('.pages');
 
 
        for(let i=0;i<(graphicDesignLaunched.length/5);i++){
          if(to>graphicDesignLaunched.length){
            to=graphicDesignLaunched.length;
          }
    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>graphicDesignLaunched.length-1){
            break;
        }
 
        pagesContentItem+=`
        <div class="${graphicDesignLaunched[j].courseCategory}">
        <div class="content-right-item d-lg-flex">
        <div class="py-3 col-lg-8 padding-md">
        <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${graphicDesignLaunched[j].courseName}<span class="${graphicDesignLaunched[j].courseStart} ms-4">NEW</span></h3>
        <p class="searchContent" id="coursecaption">${graphicDesignLaunched[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-lg-4">
            <div>
            <div>
                <div class="px-3 py-3" id="bordertop">
  
                  <div class="d-flex gap-2">
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${graphicDesignLaunched[j].startDate}</span></div>
                    </div>
  
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${graphicDesignLaunched[j].courseTrainer}</span></div>
                    </div>
                  </div>
  
                  <div class="d-flex gap-2">
                    <div class="d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                      <div class="text-start"><span class="ps-2 " id="courseprice">${graphicDesignLaunched[j].coursePrice}</span></div>
                    </div>
    
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${graphicDesignLaunched[j].courseTime}</span></div>
                    </div>
                </div>
  
                <div class="w-100 buttons pt-3 text-center">
                  <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                  <button class="w-75 text-capitalize form-button"><a href="#">View Tasks</a></button>
                </div>
  
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

function marketingF() {
  navbar.style.cssText = "background-color: rgb(90, 88, 88);";

  for (let i = 0; i < (marketing.length / 5) - 1; i++) {

      points += `
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i + 1}"><h5>Page ${i + 2}</h5></button>
      `
  }

  carouselPoints.innerHTML = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;


  for (let i = 0; i < (marketing.length / 5) - 1; i++) {
      pagesContent += `
          <div class="pages carousel-item" id="slide${i + 1}">
      
      
          </div>
      `
  }

  allPages.innerHTML = `<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

  let pagesClass = document.querySelectorAll('.pages');


  for (let i = 0; i < (marketing.length / 5); i++) {

      pagesContentItem = '';
      for (let j = from; j < to; j++) {
          if (j > marketing.length - 1) {
              break;
          }

          pagesContentItem += `
      <div class="${marketing[j].courseCategory}" id="${marketing[j].courseID}">
      <div class="content-right-item d-lg-flex">
      <div class="py-3 col-lg-8 padding-md">
      <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${marketing[j].courseName}<span class="${marketing[j].courseStart} ms-4">NEW</span></h3>
      <p class="searchContent" id="coursecaption">${marketing[j].courseCaption}</p>
      </div>

    
      <div class="course-item-desc col-lg-4">
          <div>
          <div>
              <div class="px-3 py-3" id="bordertop">

                <div class="d-flex gap-2">
                  <div class=" d-flex py-2 gap-1 col-6">
                    <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                    <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${marketing[j].startDate}</span></div>
                  </div>

                  <div class=" d-flex py-2 gap-1 col-6">
                    <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                    <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${marketing[j].courseTrainer}</span></div>
                  </div>
                </div>

                <div class="d-flex gap-2">
                  <div class="d-flex py-2 gap-1 col-6">
                    <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                    <div class="text-start"><span class="ps-2 " id="courseprice">${marketing[j].coursePrice}</span></div>
                  </div>
  
                  <div class=" d-flex py-2 gap-1 col-6">
                    <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                    <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${marketing[j].courseTime}</span></div>
                  </div>
              </div>

              <div class="w-100 buttons pt-3 text-center">
                <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                <button class="w-75 text-capitalize form-button"><a href="#"></a></button>
              </div>

            </div>

          </div>
      </div>
      </div>


    </div>
    </div> 
  `;
      }
      pagesClass[i].innerHTML = pagesContentItem;

      from += 5;
      to += 5;


}

let formButton = document.querySelectorAll('.form-button');

for (let i = 0; i < (marketing.length); i++) {

if(marketing[i].courseStart=="new"){
formButton[i].innerHTML="<a href='../registration form/regform.html'>Registration Form</a>"
} else {formButton[i].innerHTML="Course Tasks"} 
}
}

function marketingNewF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<Math.floor((marketingNew.length / 5));i++){
      if((marketingNew.length)%5==0){
        break;
      }
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;
        
 
        for(let i=0;i<Math.floor((marketingNew.length / 5));i++){
          if((marketingNew.length)%5==0){
            break;
          }
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }
 
        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;
 
        let pagesClass=document.querySelectorAll('.pages');
 
 
 for(let i=0;i<Math.floor((marketing.length / 5));i++){

  if(to>marketingNew.length){
    to=marketingNew.length;
  }
    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>marketingNew.length-1){
            break;
      }
 
        pagesContentItem+=`
        <div class="${marketingNew[j].courseCategory}">
        <div class="content-right-item d-lg-flex">
        <div class="py-3 col-lg-8 padding-md">
        <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${marketingNew[j].courseName}<span class="${marketingNew[j].courseStart} ms-4">NEW</span></h3>
        <p class="searchContent" id="coursecaption">${marketingNew[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-lg-4">
            <div>
            <div>
                <div class="px-3 py-3" id="bordertop">
  
                  <div class="d-flex gap-2">
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${marketingNew[j].startDate}</span></div>
                    </div>
  
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${marketingNew[j].courseTrainer}</span></div>
                    </div>
                  </div>
  
                  <div class="d-flex gap-2">
                    <div class="d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                      <div class="text-start"><span class="ps-2 " id="courseprice">${marketingNew[j].coursePrice}</span></div>
                    </div>
    
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${marketingNew[j].courseTime}</span></div>
                    </div>
                </div>
  
                <div class="w-100 buttons pt-3 text-center">
                  <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                  <button class="w-75 text-capitalize form-button"><a href="../registration form/regform.html">Registraion Form</a></button>
                </div>
  
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

function marketingLaunchedF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<Math.floor((marketingLaunched.length / 5));i++){
      if((marketingLaunched.length)%5==0){
        break;
      }
        points+=`
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}"><h5>Page ${i+2}</h5></button>
        `
        }
        
        carouselPoints.innerHTML=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;
        
 
        for(let i=0;i<Math.floor((marketingLaunched.length / 5));i++){
          if((marketingLaunched.length)%5==0){
            break;
          }
            pagesContent+=`
            <div class="pages carousel-item" id="slide${i+1}">
        
        
            </div>
        `
        }
 
        allPages.innerHTML=`<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;
 
        let pagesClass=document.querySelectorAll('.pages');
 
 
 for(let i=0;i<(marketingLaunched.length/5);i++){

  if(to>marketingLaunched.length){
    to=marketingLaunched.length;
  }
    pagesContentItem='';
    for(let j=from;j<to;j++){
        if(j>marketingLaunched.length-1){
            break;
        }
 
        pagesContentItem+=`
        <div class="${marketingLaunched[j].courseCategory}">
        <div class="content-right-item d-lg-flex">
        <div class="py-3 col-lg-8 padding-md">
        <h3 class="searchContent neworlaunched text-capitalize" id="coursename">${marketingLaunched[j].courseName}<span class="${marketingLaunched[j].courseStart} ms-4">NEW</span></h3>
        <p class="searchContent" id="coursecaption">${marketingLaunched[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-lg-4">
            <div>
            <div>
                <div class="px-3 py-3" id="bordertop">
  
                  <div class="d-flex gap-2">
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${marketingLaunched[j].startDate}</span></div>
                    </div>
  
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-chalkboard-user icon"></i></div>   
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetrainer">${marketingLaunched[j].courseTrainer}</span></div>
                    </div>
                  </div>
  
                  <div class="d-flex gap-2">
                    <div class="d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-solid fa-sack-dollar icon"></i></div> 
                      <div class="text-start"><span class="ps-2 " id="courseprice">${marketingLaunched[j].coursePrice}</span></div>
                    </div>
    
                    <div class=" d-flex py-2 gap-1 col-6">
                      <div class="text-start"><i class="fa-regular fa-calendar-days icon"></i></div>
                      <div class="text-start"><span class="ps-2 text-capitalize" id="coursetime">${marketingLaunched[j].courseTime}</span></div>
                    </div>
                </div>
  
                <div class="w-100 buttons pt-3 text-center">
                  <button class="my-2 w-75 text-capitalize"><a href="#">Download Course Plan</a></button>
                  <button class="w-75 text-capitalize form-button"><a href="#">View Tasks</a></button>
                </div>
  
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

function empty() {
    points = '';
    pagesContent = '';
    from = 0;
    to = 5;
    pagesContentItem = '';
    carouselPoints.innerHTML = '';
    allPages.innerHTML = '';
}

// registration form
let selectCourse=document.getElementById('inputState');
let options='';

function selectCourseF(){
for(let i=0;i<allcourses.length;i++){
  options+=`
  <option>${allcourses[i].courseName}</option>
  `
}

  selectCourse.innerHTML= `<option selected>Choose...</option>`+options
}

// validation
var firstName=document.getElementById("firstName")
var lastName=document.getElementById("lastName")
var phone=document.getElementById("phone")
var message=document.getElementById("message")

function firsNAmeVal(){
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
}

function lastNAmeVal(){
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
}

function PhoneVal(){
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
}

function messageVal(){
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
}

// footer
let footerDisplay=document.getElementById('footer')

function footerdisplayF(){
footerDisplay.innerHTML=`
<div class="container">
  
  <div class="f-item d-flex">
  <div class="col-3">
  <a href="#">
  <img src="../assets/images/logo.png" alt="logo" class="w-100">
  </a>
  </div> 

  <div class="col-9">
  <h3 class="text-start searchContent">Knowledge Academy</h3>
  <p class="text-start searchContent">Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
  </div>

  </div>
  
  <div class="f-item">
  <h3 class="searchContent">Quick Links</h3>
  <ul>
  <li class="f-list-item">
      <a href="./allcourses/allcourses.html" class="searchContent">All courses</a>
  </li>
  
  <li class="f-list-item">
    <a href="#team" class="searchContent">Our team</a>
  </li>
  
  <li class="f-list-item">
      <a href="#header" class="searchContent">Home</a>
  </li>

  </ul>
  </div>
  
  <div class="f-item">
      <h3 class="searchContent">Programs</h3>
      <ul>
      <li class="f-list-item">
          <a target="_blank" href="https://code.visualstudio.com/" class="searchContent">Visual Studio Code</a>
      </li>
      
      <li class="f-list-item">
          <a target="_blank" href="https://visualstudio.microsoft.com/free-developer-offers/" class="searchContent">Visual Studio</a>
      </li>
      
      <li class="f-list-item">
          <a target="_blank" href="https://sourceforge.net/projects/codeblocks/" class="searchContent">Code blocks</a>
      </li>
      
      </ul>
  </div>
  
  <div class="f-item">
      <h3 class="searchContent">Contact</h3>
      <ul>
      <li class="f-list-item">
          <a target="_blank" href="https://wa.me/+970592100103" class="searchContent">Whatsapp Number</a>
      </li>
      
      <li class="f-list-item">
          <a target="_blank" href="mailto:Knowledgeacademy@gmail.com" class="searchContent">Email Adress</a>
      </li>

      <li class="f-list-item">
        <a target="_blank" href="https://www.facebook.com/eknowledge.learn/" class="searchContent">Facebook Page</a>
      </li>
       
      </ul>
  </div>
  
  </div>
`
console.log('dua')
}

export {
    contentItem,
    dropdown,
    titlteCourses,
    courseBranch,
    allcourses,
    webDesign,
    webDesignNew,
    webDesignLaunched,
    graphicDesign,
    graphicDesignNew,
    graphicDesignLaunched,
    marketing,
    marketingNew,
    marketingLaunched,
    carouselPoints,
    allPages,
    points,
    pagesContent,
    from,
    to,
    pagesContentItem,
    coursesNav,
    coursesMenu,
    categories,
    webdesignMain,
    graphicedesignMain,
    marketingMain,
    allCoursesF,
    webDesignF,
    webDesignNewF,
    webDesignLaunchedF,
    graphicDesignF,
    graphicDesignNewF,
    graphicDesignLaunchedF,
    marketingF,
    marketingNewF,
    marketingLaunchedF,
    empty,
    selectCourseF,
    messageVal,
    PhoneVal,
    lastNAmeVal,
    firsNAmeVal,
    navbarDisplayF,
    footerdisplayF,
}
