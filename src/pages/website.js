import { homeBody } from "./home.js";
import { aboutPage } from "./about.js";
import { menu } from "./menu.js";
import '../styles/home.css';

let mainBodyNode;

function headerPage() {
    
    const content = document.getElementById('content');

    const head = document.createElement('div');
    content.appendChild(head);
    head.classList.add('container');

    const header = document.createElement('div');
    header.innerHTML = 'Halibuts Corner';
    header.classList.add('header');
    head.appendChild(header);

    const subheader = document.createElement('div');
    subheader.classList.add('menu-header');
    head.appendChild(subheader);

    const list = document.createElement('ul');
    list.classList.add('menu-items');
    subheader.appendChild(list);
    
    const a = document.createElement('button');
    a.textContent = 'About'
    a.addEventListener('click' , function() {
        mainBody(aboutPage);
        return;
    })
    list.appendChild(a);

    const b = document.createElement('button');
    b.textContent = 'Home'
    b.addEventListener('click', function() {
        mainBody(homeBody);
        return;
    })
    list.appendChild(b);

    const c = document.createElement('button');
    c.textContent = 'Menu'
    c.addEventListener('click', function(){
        mainBody(menu);
        return;
    })
    list.appendChild(c);
}
function mainBody(func) {
    const body = document.createElement('div');
    body.id = 'body';
    content.appendChild(body);
    mainBodyNode = body;
    func();
}
function footerPage() {
    const footer = document.createElement('div');
    footer.id = 'footer';
    body.appendChild(footer);

    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    footer.appendChild(footerContainer);

    const phone = document.createElement('div');
    phone.innerHTML = '+1 619 397-5000'
    const address = document.createElement('div');
    address.innerHTML = 'E and J Street San Diego, CA 92110, US'
    const rights = document.createElement('div');
    rights.innerHTML = 'Halibuts Corner Coffee 2022 | All Right Reserved.';

    footerContainer.appendChild(phone);
    footerContainer.appendChild(address);
    footerContainer.appendChild(rights);
}
export function loadPage() {
    headerPage();
    mainBody();
    footerPage();
}