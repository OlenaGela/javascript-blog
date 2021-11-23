'use strict';

function titleClickHandler(event){
    
    const clickedElement = this;

    console.log('Link was clicked!');
    console.log(event);

    event.preventDefault();
    
    /* [DONE] remove class 'active' from all article links  */
  
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
  
    console.log('clickedElement:', clickedElement);

    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
  
    const activeArcicles = document.querySelectorAll('.post')

    for(let activeArcicle of activeArcicles){
    activeArcicle.classList.remove('active')
    }

    /* [DONE] get 'href' attribute from the clicked link */
    
    const articleSelector = clickedElement.getAttribute('href');
    
    console.log('articleSelector:', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const correctArticle = document.querySelector(articleSelector);

    console.log('');
  
    /* [DONE] add class 'active' to the correct article */

    console.log(correctArticle.classList);
    correctArticle.classList.add('active');

  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';


function generateTitleLinks(){

  console.log('Link was generated!');

  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

  console.log('title List:', titleList);
  
  titleList.innerHTML = '';


  /* [DONE] for each arcicle */

  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){

    /* [IN PROGRESS] get the article id */

    /* find yhe title element */

    /* get the title from the title element */

    /* create html of the link */

    /* insert link into titleList */


  }
}

generateTitleLinks(); //wywołanie funkcji