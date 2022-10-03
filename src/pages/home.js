//module
import halibutHomeImage from "../assets/img/halibuts-corner-home.png";
import halibutHomeImage2 from "../assets/img/halibuts-corner-home2.png";
import halibutHeadline from "../assets/img/halibut-cafe-home.png";
import '../styles/home.css';


export function homeBody() {
      
      //headline
      const headline = document.createElement('div');
      headline.id = 'headline';
      body.appendChild(headline);
      
      const headlinePhoto = document.createElement('img');
      headlinePhoto.src = halibutHeadline;
      headlinePhoto.id = 'headline-home';
      headline.appendChild(headlinePhoto);
  
      const headlineText = document.createElement('div');
      headlineText.id = 'center-text';
      headlineText.innerHTML = 'SAN DIEGO, CA'
      headline.appendChild(headlineText);
  
      const headlineSubText = document.createElement('div');
      headlineSubText.id = 'sub-text';
      headlineSubText.innerHTML = 'EST. 2022';
      headline.appendChild(headlineSubText);
  
  
      //info box 1
      const infoBoxOne = document.createElement('div'); 
      infoBoxOne.id = 'info-one';
      body.appendChild(infoBoxOne);
  
      const halibutHome2 = document.createElement("img");
      halibutHome2.src = halibutHomeImage2;
      halibutHome2.id = 'img';
      infoBoxOne.appendChild(halibutHome2);
  
      const infoContainer = document.createElement('div');
      infoContainer.id = 'info-container';
      infoBoxOne.appendChild(infoContainer);
  
      const infoHeader = document.createElement('div');
      infoHeader.id = 'info1-header';
      infoHeader.innerHTML = 'Order ahead of time for convienent pick-up.'
      infoContainer.appendChild(infoHeader);
  
      const subInfoHeader = document.createElement('div');
      subInfoHeader.id = 'sub-info1-header';
      subInfoHeader.innerHTML = 'Order through phone and we will have it ready in 15-30 minutes to pick up. Last order is at 1:30 p.m';
      infoContainer.appendChild(subInfoHeader);
  
      //info box 2
      const infoBoxTwo = document.createElement('div');
      infoBoxTwo.id = 'info-two';
      body.appendChild(infoBoxTwo);
  
      const infoContainer2 = document.createElement('div');
      infoContainer2.id = 'info-container-2';
      infoBoxTwo.appendChild(infoContainer2);
  
      const infoHeader2 = document.createElement('div');
      infoHeader2.id = 'info1-header';
      infoHeader2.innerHTML = 'Outside patio dining avaliable all-day.'
      infoContainer2.appendChild(infoHeader2);
  
      const subHeaderContainer = document.createElement('div');
      subHeaderContainer.id = 'subheader2-container';
      infoContainer2.appendChild(subHeaderContainer);
  
      const subInfoHeader2 = document.createElement('div');
      subInfoHeader2.id = 'sub-info2-header';
      subInfoHeader2.innerHTML = 'Mon-Thu 7:30 a.m-2:00 p.m';
      subHeaderContainer.appendChild(subInfoHeader2);
  
      const subInfoHeader3 = document.createElement('div');
      subInfoHeader3.id = 'sub-info2-header';
      subInfoHeader3.innerHTML = 'Fri 7:30 a.m-3:00 p.m';
      subHeaderContainer.appendChild(subInfoHeader3);
  
      const halibutHome = document.createElement("img");
      halibutHome.src=halibutHomeImage;
      halibutHome.id = 'img';
      infoBoxTwo.appendChild(halibutHome);
}