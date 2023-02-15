import * as AllData from '../main.js'



for (let i=0;i<AllData.contentItem.length;i++){
    AllData.contentItem[i].addEventListener('click',function(){
        AllData.dropdown[i].classList.remove('visually-hidden');

    })
}

AllData.titelNav.innerHTML='Graphic Design - Launched Courses';
AllData.empty();
AllData.graphicDesignNewF();

