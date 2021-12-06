'use strict';


function titleClickHandler(event) {

  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
  event.preventDefault();

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArcicles = document.querySelectorAll('.post');
  for (let activeArcicle of activeArcicles) {
    activeArcicle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector:', articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const correctArticle = document.querySelector(articleSelector);

  /* [DONE] add class 'active' to the correct article */
  console.log(correctArticle.classList);
  correctArticle.classList.add('active');
}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';


function generateTitleLinks(customSelector = '') {
  console.log('Start function "generateTitleLinks"!');

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';

  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  for (let article of articles) {

    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');

    /* [DONE] find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] get the title from the title element */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* [DONE] create html of the link */
    titleList.insertAdjacentHTML('beforeend', linkHTML);
  }
  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks(); //wywolanie funkcji


function generateTags() {
  console.log('Start function "generateTags"!');

  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* [DONE] START LOOP: for every article: */
  for (let article of articles) {
  
    /* [DONE] find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
 
    /* [DONE] make html variable with empty string */
    let HTML = '';
    
    /* [DONE] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    /* [DONE] split tags into array */
    const articleTagsArray = articleTags.split(' ');
    
    /* [DONE] START LOOP: for each tag */
    for(let tag of articleTagsArray){

      /* [DONE] generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

      /* [DONE] add generated code to html variable */
      HTML = HTML + linkHTML;
    
      /* [DONE] END LOOP: for each tag */
    }
  
    /* [DONE] insert HTML of all the links into the tags wrapper */
    tagsWrapper.insertAdjacentHTML('beforeend', HTML);
  }

  /* [DONE] END LOOP: for every article: */
}
generateTags();


function tagClickHandler(event){
  console.log('Start function tagClickHandler!');
  console.log('Tag was clicked!');

  /* [DONE] prevent default action for this event */
  event.preventDefault();
  
  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('Constant tag:', tag);

  /* [DONE] find all tag links with class active */
  const activeTags = document.querySelectorAll('.tags a.active');

  /* [DONE] START LOOP: for each active tag link */
  for (let tagLink of activeTags) {

    /* [DONE] remove class active */
    tagLink.classList.remove('active');

    /* [DONE] END LOOP: for each active tag link */
  }

  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('href');

  /* [DONE] START LOOP: for each found tag link */
  for (let foundTagLink of tagLinks) {

    /* [DONE] add class active */
    foundTagLink.classList.add('active');

    /* [DONE] END LOOP: for each found tag link */
  }

  /* [DONE] execute function "generateTitleLinks" with article selector as argument */
}


function addClickListenersToTags(){
  console.log('Start function addClickListenersToTags!');

  /* [DONE] find all links to tags */
  const links = document.querySelectorAll('.post-tags a');

  /* [DONE] START LOOP: for each link */
  for (let link of links) {

    /* [DONE] add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);

    /* [DONE] END LOOP: for each link */
  }
}
addClickListenersToTags();