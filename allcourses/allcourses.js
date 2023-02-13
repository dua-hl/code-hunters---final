import {contentItem,dropdown,titelNav,links,titlteCourses,courseBranch,categories,allcourses,webDesign,webDesignNew,webDesignLaunched,graphicDesign,graphicDesignNew,graphicDesignLaunched,marketing,marketingNew,marketingLaunched,carouselPoints,allPages,points,pagesContent,from,to,pagesContentItem,allCoursesF,webDesignF,webDesignNewF,webDesignLaunchedF,graphicDesignF,graphicDesignNewF,graphicDesignLaunchedF,marketingF,marketingNewF,marketingLaunchedF,empty} from '../main.js'



for (let i=0;i<contentItem.length;i++){
    contentItem[i].addEventListener('click',function(e){
        e.preventDefault();
    dropdown[i].classList.remove('visually-hidden');

    })
}

categories();
empty();
allCoursesF();

// function displaycontent(){

//     // links[i].addEventListener('click',function(){
    
    
    
//     // })
// }
//     displaycontent()
