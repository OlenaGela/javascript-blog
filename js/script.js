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

console.log(optArticleTagsSelector);

function generateTitleLinks() {
  console.log('Start function "generateTitleLinks"!');

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log('Title List:', titleList);

  titleList.innerHTML = '';

  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {

    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');
    console.log('articleId:', articleId);

    /* [DONE] find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] get the title from the title element */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML:', linkHTML);

    /* [DONE] create html of the link */
    titleList.insertAdjacentHTML('beforeend', linkHTML);
  }
  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks(); //wywolanie funkcji
console.log('Function was generated!');


function generateTags() {

  console.log('Start function "generateTags"!');

  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('Finded all arcicles:', articles);

  /* [DONE] START LOOP: for every article: */
  for (let article of articles) {
  
    console.log('START LOOP, find the article:', article);
  
    /* [DONE] find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log('Find tags wrapper:', tagsWrapper);
 
    /* [DONE] make html variable with empty string */
    let HTML = '';
    console.log('HTML variable with empty string was created', HTML);

    /* [DONE] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags:', articleTags);

    /* [DONE] split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('articleTagsArray:', articleTagsArray);
    
    /* [DONE] START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log('tag:', tag);

      /* [DONE] generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log('linkHTML:', linkHTML);

      /* [DONE] add generated code to html variable */
      HTML = HTML + linkHTML;
      console.log('HTML variable:', HTML);
    
    /* [DONE] END LOOP: for each tag */
    }
  
  /* [DONE] insert HTML of all the links into the tags wrapper */
  tagsWrapper.insertAdjacentHTML('beforeend', HTML);
  console.log('Created tag wrapper:', tagsWrapper);
  }

  /* [DONE] END LOOP: for every article: */
}

generateTags();
console.log('Tags was generated!');