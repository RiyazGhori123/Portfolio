let words = document.querySelectorAll(" .word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });

});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";            
        }, i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
});
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000)


// skills
  
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointMarked[i].classList.add('marked');
    }
});

// mix it up portfolio section

var mixer = mixitup('.portfolio-gallery');

// active menu

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', activeMenu);


// Sticky navbar

const header = document.querySelector("header");
window.addEventListener('scroll',function(){
    header.classList.toggle("sticky",this.window.scrollY > 50);
})

// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    // toggle visual state and aria attribute for accessibility
    const nowOpen = menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
    menuIcon.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");   
        }
        else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const tabIndicator = document.querySelector('.tab-indicator');

    // Function to set indicator position
    function setIndicatorPosition(button) {
        const buttonRect = button.getBoundingClientRect();
        const containerRect = button.parentElement.getBoundingClientRect();
        tabIndicator.style.left = `${buttonRect.left - containerRect.left}px`;
        tabIndicator.style.width = `${buttonRect.width}px`;
    }

    function switchTab(e) {
        const targetTab = e.target.dataset.tab;
        const targetPane = document.getElementById(targetTab);

        // Update buttons
        tabBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Update content
        tabPanes.forEach(pane => pane.classList.remove('active'));
        targetPane.classList.add('active');

        // Move indicator
        setIndicatorPosition(e.target);
    }

    // Add click handlers
    tabBtns.forEach(btn => btn.addEventListener('click', switchTab));

    // Initialize indicator position
    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn) {
        setIndicatorPosition(activeBtn);
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const currentActive = document.querySelector('.tab-btn.active');
        if (currentActive) {
            setIndicatorPosition(currentActive);
        }
    });
});


