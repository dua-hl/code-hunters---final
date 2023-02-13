let contentItem = document.querySelectorAll('.content-item');
let dropdown = document.querySelectorAll('.dropdown');

let titelNav = document.getElementById('titelofnav');
let titlteCourses = document.querySelectorAll('.titlte-ofcourses');
let navbar = document.getElementById('navbar');
let links = document.querySelectorAll('.links');
let formButton = document.querySelectorAll('.form-button');

let courseBranch = document.querySelectorAll('course-branch');
let carouselPoints = document.getElementById("carouselpoints");
let allPages = document.getElementById("allpages");
let points = '';
let pagesContent = '';
let from = 0;
let to = 5;
let pagesContentItem = '';

let allcourses = [

    {
        courseCategory: "webdesign",
        courseName: "Full Stack",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"
    }
    ,
    {
        courseCategory: "webdesign",
        courseName: "Full Stack",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "webdesign",
        courseName: "Computer Science",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "webdesign",
        courseName: "Computer Science",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "graphicdesig",
        courseName: "Photoshop",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "graphicdesig",
        courseName: "Photoshop",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "graphicdesig",
        courseName: "Photoshop",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "Launched",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "marketing",
        courseName: "Marketing",
        courseCaption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi, culpa facilis porro a nobis corrupti rerum nisi perspiciatis molestiae laborum ducimus. Repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, earum veritatis? Facere qui mollitia voluptatum sequi modi,",
        courseTrainer: "Tariq Shreem",
        coursePrice: "250$",
        courseTime: "3 lecture/week",
        courseStart: "new",
        startDate: "2-3-2023"

    }
    ,
    {
        courseCategory: "webdesign",
        courseName: "Computer Science",
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
        <div class="${allcourses[j].courseCategory}" id="${allcourses[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${allcourses[j].courseName}<span class="${allcourses[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${allcourses[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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
formButton[i].innerHTML="Registration Form"
} else {formButton[i].innerHTML="Course Tasks"} 
}
}


function webDesignF() {
    navbar.style.cssText = "background-color: rgb(90, 88, 88);";

    for (let i = 0; i < (webDesign.length / 5) - 1; i++) {

        points += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i + 1}"><h5>Page ${i + 2}</h5></button>
        `
    }

    carouselPoints.innerHTML = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;


    for (let i = 0; i < (webDesign.length / 5) - 1; i++) {
        pagesContent += `
            <div class="pages carousel-item" id="slide${i + 1}">
        
        
            </div>
        `
    }

    allPages.innerHTML = `<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

    let pagesClass = document.querySelectorAll('.pages');


    for (let i = 0; i < (webDesign.length / 5); i++) {

        pagesContentItem = '';
        for (let j = from; j < to; j++) {
            if (j > webDesign.length - 1) {
                break;
            }

            pagesContentItem += `
        <div class="${webDesign[j].courseCategory}" id="${webDesign[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${webDesign[j].courseName}<span class="${webDesign[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${webDesign[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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


    }

    let formButton = document.querySelectorAll('.form-button');

    for (let i = 0; i < (allcourses.length); i++) {
    
    if(allcourses[i].courseStart=="new"){
    formButton[i].innerHTML="Registration Form"
    } else {formButton[i].innerHTML="Course Tasks"} 
    }

}

function webDesignNewF() {
    navbar.style.cssText = "background-color: rgb(90, 88, 88);";

    for (let i = 0; i < (webDesignNew.length / 5) - 1; i++) {

        points += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i + 1}"><h5>Page ${i + 2}</h5></button>
        `
    }

    carouselPoints.innerHTML = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;


    for (let i = 0; i < (webDesignNew.length / 5) - 1; i++) {
        pagesContent += `
            <div class="pages carousel-item" id="slide${i + 1}">
        
        
            </div>
        `
    }

    allPages.innerHTML = `<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

    let pagesClass = document.querySelectorAll('.pages');


    for (let i = 0; i < (webDesignNew.length / 5); i++) {

        pagesContentItem = '';
        for (let j = from; j < to; j++) {
            if (j > webDesignNew.length - 1) {
                break;
            }

            pagesContentItem += `
        <div class="${webDesignNew[j].courseCategory}" id="${webDesignNew[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${webDesignNew[j].courseName}<span class="${webDesignNew[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${webDesignNew[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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
    formButton[i].innerHTML="Registration Form"
    } else {formButton[i].innerHTML="Course Tasks"} 
    }

}

function webDesignLaunchedF() {
    navbar.style.cssText = "background-color: rgb(90, 88, 88);";

    for (let i = 0; i < (webDesignLaunched.length / 5) - 1; i++) {

        points += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i + 1}"><h5>Page ${i + 2}</h5></button>
        `
    }

    carouselPoints.innerHTML = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"><h5>Page 1</h5></button>` + points;


    for (let i = 0; i < (webDesignLaunched.length / 5) - 1; i++) {
        pagesContent += `
            <div class="pages carousel-item" id="slide${i + 1}">
        
        
            </div>
        `
    }

    allPages.innerHTML = `<div class="pages carousel-item active" id="slide0"></div>` + pagesContent;

    let pagesClass = document.querySelectorAll('.pages');


    for (let i = 0; i < (webDesignLaunched.length / 5); i++) {

        pagesContentItem = '';
        for (let j = from; j < to; j++) {
            if (j > webDesignLaunched.length - 1) {
                break;
            }

            pagesContentItem += `
        <div class="${webDesignLaunched[j].courseCategory}" id="${webDesignLaunched[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${webDesignLaunched[j].courseName}<span class="${webDesignLaunched[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${webDesignLaunched[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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
formButton[i].innerHTML="Registration Form"
} else {formButton[i].innerHTML="Course Tasks"} 
}

}

function graphicDesignF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<(graphicDesign.length/5)-1;i++){

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
        <div class="${graphicDesign[j].courseCategory}" id="${graphicDesign[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${graphicDesign[j].courseName}<span class="${graphicDesign[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${graphicDesign[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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

}

let formButton = document.querySelectorAll('.form-button');

for (let i = 0; i < (allcourses.length); i++) {

if(allcourses[i].courseStart=="new"){
formButton[i].innerHTML="Registration Form"
} else {formButton[i].innerHTML="Course Tasks"} 
}

}

function graphicDesignNewF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<(graphicDesignNew.length/5)-1;i++){

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
        <div class="${graphicDesignNew[j].courseCategory}" id="${graphicDesignNew[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${graphicDesignNew[j].courseName}<span class="${graphicDesignNew[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${graphicDesignNew[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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
}

let formButton = document.querySelectorAll('.form-button');

for (let i = 0; i < (allcourses.length); i++) {

if(allcourses[i].courseStart=="new"){
formButton[i].innerHTML="Registration Form"
} else {formButton[i].innerHTML="Course Tasks"} 
}

}

function graphicDesignLaunchedF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<(graphicDesignLaunched.length/5)-1;i++){

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
        <div class="${graphicDesignLaunched[j].courseCategory}" id="${graphicDesignLaunched[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${graphicDesignLaunched[j].courseName}<span class="${graphicDesignLaunched[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${graphicDesignLaunched[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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

}

let formButton = document.querySelectorAll('.form-button');

for (let i = 0; i < (allcourses.length); i++) {

if(allcourses[i].courseStart=="new"){
formButton[i].innerHTML="Registration Form"
} else {formButton[i].innerHTML="Course Tasks"} 
}

}

function marketingF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<(marketing.length/5)-1;i++){

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
        <div class="${marketing[j].courseCategory}" id="${marketing[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${marketing[j].courseName}<span class="${marketing[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${marketing[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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

    pagesClass[i].innerHTML=pagesContentItem;




from+=5;
to+=5;

}

let formButton = document.querySelectorAll('.form-button');

for (let i = 0; i < (allcourses.length); i++) {

if(allcourses[i].courseStart=="new"){
formButton[i].innerHTML="Registration Form"
} else {formButton[i].innerHTML="Course Tasks"} 
}

}

function marketingNewF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<(marketingNew.length/5)-1;i++){

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
        <div class="${marketingNew[j].courseCategory}" id="${marketingNew[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${marketingNew[j].courseName}<span class="${marketingNew[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${marketingNew[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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
}

let formButton = document.querySelectorAll('.form-button');

for (let i = 0; i < (allcourses.length); i++) {

if(allcourses[i].courseStart=="new"){
formButton[i].innerHTML="Registration Form"
} else {formButton[i].innerHTML="Course Tasks"} 
}

}

function marketingLaunchedF() {
    navbar.style.cssText="background-color: rgb(90, 88, 88);";

    for(let i=0;i<(marketingLaunched.length/5)-1;i++){

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
        <div class="${marketingLaunched[j].courseCategory}" id="${marketingLaunched[j].courseCategory} ">
        <div class="content-right-item d-flex">
        <div class="py-3 col-8">
        <a href="" class="searchContent neworlaunched text-capitalize" id="coursename">${marketingLaunched[j].courseName}<span class="${marketingLaunched[j].courseStart} ms-4">NEW</span></a>
        <p class="searchContent" id="coursecaption">${marketingLaunched[j].courseCaption}</p>
        </div>
  
      
        <div class="course-item-desc col-4">
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
}

let formButton = document.querySelectorAll('.form-button');

for (let i = 0; i < (allcourses.length); i++) {

if(allcourses[i].courseStart=="new"){
formButton[i].innerHTML="Registration Form"
} else {formButton[i].innerHTML="Course Tasks"} 
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

export {
    contentItem,
    dropdown,
    titelNav,
    titlteCourses,
    courseBranch,
    allcourses,
    links,
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
    categories,
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
}

