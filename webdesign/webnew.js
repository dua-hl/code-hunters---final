import * as AllData from '../main.js'



for (let i=0;i<AllData.contentItem.length;i++){
    AllData.contentItem[i].addEventListener('click',function(){
        AllData.dropdown[i].classList.remove('visually-hidden');

    })
}

AllData.navbarDisplayF();
let titelNav = document.getElementById('titelofnav');

titelNav.innerHTML='Web Design - New Courses';
AllData.coursesMenu();
AllData.empty();
AllData.webDesignNewF();
AllData.footerdisplayF();

