import * as AllData from '../main.js'



for (let i=0;i<AllData.contentItem.length;i++){
    AllData.contentItem[i].addEventListener('click',function(){
        AllData.dropdown[i].classList.remove('visually-hidden');

    })
}

AllData.navbarDisplayF();
AllData.coursesMenu();
AllData.categories();
AllData.empty();
AllData.allCoursesF();
AllData.footerdisplayF();

