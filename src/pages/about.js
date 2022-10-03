import HalibutsCornerAbout from "../assets/img/online-ordering-header.png";
import HalibutsCornerAboutBody from "../assets/img/about-image.png"
import HalibutsCornerAboutBody2 from "../assets/img/halibuts-corner-about.png";

export function aboutPage() {
    const headline = document.createElement('div');
    headline.id = 'headline';
    body.appendChild(headline);

    const aboutImg = document.createElement("img");
    aboutImg.src = HalibutsCornerAbout;
    aboutImg.id = 'headline-home-2';
    headline.appendChild(aboutImg);    

    const headlineText = document.createElement('div');
    headlineText.id = 'center-text-2';
    headlineText.innerHTML = 'Locally Sourced, Locally Owned'
    headline.appendChild(headlineText);

    const headlineSubText = document.createElement('div');
    headlineSubText.id = 'sub-text-2';
    headlineSubText.innerHTML = 'Provoiding extraordinary rich taste through 100% Fair Trade, locally sourced coffee beans';
    headline.appendChild(headlineSubText);

    const infoBoxOne = document.createElement('div'); 
    infoBoxOne.id = 'info-one';
    body.appendChild(infoBoxOne);
  
    const halibutAbout2 = document.createElement("img");
    halibutAbout2.src = HalibutsCornerAboutBody;
    halibutAbout2.id = 'img';
    infoBoxOne.appendChild(halibutAbout2);
  
    const infoContainer = document.createElement('div');
    infoContainer.id = 'info-container';
    infoBoxOne.appendChild(infoContainer);
  
    const infoHeader = document.createElement('div');
    infoHeader.id = 'info1-header';
    infoHeader.innerHTML = 'Located in Downtown San Diego'
    infoContainer.appendChild(infoHeader);
  
    const subInfoHeader = document.createElement('div');
    subInfoHeader.id = 'sub-info1-header';
    subInfoHeader.innerHTML = 'Halibuts Corner was built around community, and we think coffee envokes togetherness. Everything at Halibuts Corner is ethically sourced from the worlds finest coffee estates.';
    infoContainer.appendChild(subInfoHeader);

    const infoBoxTwo = document.createElement('div');
    infoBoxTwo.id = 'info-two';
    body.appendChild(infoBoxTwo);

    const infoContainer2 = document.createElement('div');
    infoContainer2.id = 'info-container-2';
    infoBoxTwo.appendChild(infoContainer2);

    const infoHeader2 = document.createElement('div');
    infoHeader2.id = 'info1-header';
    infoHeader2.innerHTML = 'Supporting local business'
    infoContainer2.appendChild(infoHeader2);

    const subHeaderContainer = document.createElement('div');
    subHeaderContainer.id = 'subheader2-container';
    infoContainer2.appendChild(subHeaderContainer);

    const subInfoHeader2 = document.createElement('div');
    subInfoHeader2.id = 'sub-info2-header';
    subInfoHeader2.innerHTML = 'Halibuts Corner was founded by owners: Emma and Angel Ortega to honor Halibut "The Bubz" Ortega';
    subHeaderContainer.appendChild(subInfoHeader2);

    const subInfoHeader3 = document.createElement('div');
    subInfoHeader3.id = 'sub-info2-header';
    subInfoHeader3.innerHTML = '30 percent of proceeds from Halibuts Corner go directly to animal shelters across San Diego, to help pets find their forever home. '
    subHeaderContainer.appendChild(subInfoHeader3);

    const halibutHome = document.createElement("img");
    halibutHome.src = HalibutsCornerAboutBody2;
    halibutHome.id = 'img';
    infoBoxTwo.appendChild(halibutHome);
}
