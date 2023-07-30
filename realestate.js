console.log("hello");
let body = document.querySelector("body");
// let menu = document.querySelector(".menubutton");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let last = document.querySelector(".lastone");
let overlay = document.querySelector(".overlay");
let background = document.querySelector(".background");
let wholebar = document.querySelector(".wholebar");
let mobile = document.querySelector(".mobile");
let hr = document.getElementsByTagName("hr");
let fillOverlay = document.querySelector(".overlay-fill");
let fill = document.querySelector(".fill");
let fill1 = document.querySelector(".fill1");
let fill2 = document.querySelector(".fill2");
let fill3 = document.querySelector(".fill3");
let filter = document.querySelector(".filter");
let search = document.querySelector('#red');
let search2 = document.querySelector("#tewn");
let head = document.querySelector(".head");
let place = document.querySelector("#placeholder");
let dflex = document.querySelector(".d-flex");
let appoint = document.querySelector(".appoint");
let hola = document.querySelector(".hola");
let callingUs = document.querySelector(".callingUs");
let calling = document.querySelector("#calling");
let back = document.querySelector(".back");
let days = document.querySelector(".days");
let confirmed = document.querySelector(".confirmed");
let front = document.querySelector("#front");
let dateButton = document.querySelector("#dateButton");
let bookOverlay = document.querySelector(".book-overlay");
let book = document.querySelector("#booking");
let official = document.querySelector(".official");
let cancel = document.querySelector(".cancel");
let okay = document.querySelector(".ok");
let currDate = document.querySelector(".currDate");
let close = document.querySelector(".close");
//added code
let crossbutton2 = document.querySelector(".crossbutton2");
crossbutton2.addEventListener('click', crossfun);
function crossfun(e) {
    head.classList.remove("remove-head");
    search.classList.remove("remove-search");
    fill.classList.remove("filtering");
    fillOverlay.classList.remove("overlay-fill");
    search2.classList.remove("remove-search");
    body.classList.toggle("stop-scrolling");
}
let crossbokk = document.querySelector(".crossbutton23");
crossbokk.addEventListener('click', corsfn);
function corsfn(e) {
    fill1.classList.remove("filtering");
    // fillOverlay.classList.remove("overlay-fill");
    body.classList.remove("stop-scrolling");
}
function cirsfun1() {
    fill2.classList.remove("filtering");
    // fillOverlay.classList.remove("overlay-fill");
    body.classList.remove("stop-scrolling");
}
function cirsfun2() {
    fill3.classList.remove("filtering");
    // fillOverlay.classList.remove("overlay-fill");
    body.classList.remove("stop-scrolling");
}
//cross fpr looking
let crosslook = document.querySelector(".crossbutton33")
crosslook.addEventListener('click', cirsfun1);

let btnbook = document.getElementById("test2");
btnbook.addEventListener('click', fun22);
function fun22(e) {
    console.log("hello1");
    // fillOverlay.classList.toggle('overlay-fill');
    fill1.classList.toggle("filtering");
    // head.classList.toggle("remove-head");
    body.classList.add("stop-scrolling");
    // search2.classList.toggle("remove-search");
}
let hd2 = document.getElementById('hid2');
hd2.addEventListener('click', fu34);
function fu34(e) {
    // e.preventDefault();
    fill2.classList.toggle("filtering");
    // head.classList.toggle("remove-head");
    body.classList.add("stop-scrolling");
    if (e) {
        e.preventDefault();
    }
}

let heya = document.getElementById("s2")
heya.addEventListener('click', fun22);
appoint.addEventListener('click', fun22);

//suggestion box start
let suggestion = [
    "Adelaide", "Armidale", "Albany",
    "Brisbane", "Bayside", "Canberra", "Central Queensland", "Cairns",
    "Drawin", "Devon Port", "Eastern Melbourne", "East Coast", "Eastern Adelaide",
    "Frankston", "Fitzroy", "Gold Coast", "Gladstone", "Gippsland West",
    "Hobart", "Hurstville", "Inner East Melbourne", "Ipswich", "Jimboomba", "Junee",
    "Kimberley", "Knox City", "Liverpool", "Limestone Coast", "Melbourne - Northern Region", "Melbourne City - Greater Region",
    "North Coast", "North East Perth", "Perth", "Port Stephens", "Quandong", "Quambatook", "Queensferry",
    "Raglan", "Ravenhall", "Ravenswood",
    "San Remo", "Samaria", "Taabinga", "Tabilk", "Table Top", "Uarbry", "Ucarty West", "Valdora", "Vale View",
    "Wabonga", "Waanyarra"
]
const searchWrapper = document.querySelector(".search-input");
const inputbox = searchWrapper.querySelector("input");
const suggbox = searchWrapper.querySelector(".autocom-box");

inputbox.onkeyup = (e) => {
    let userData = e.target.value;
    let empArr = [];
    if (userData) {
        empArr = suggestion.filter((d) => {
            return d.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        empArr = empArr.map((d) => {
            return d = '<li>' + d + '</li>'
        })
        console.log(empArr);
        searchWrapper.classList.add("active");
        showSuggestion(empArr);
        let allList = suggbox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }

    }
    else {
        searchWrapper.classList.remove("active");

    }
}
function select(ele) {
    let selectData = ele.textContent;
    inputbox.value = selectData;
}

function showSuggestion(l) {
    let listData;
    if (!l.length) {
        userValue = inputbox.value;
        listData = '<li' + userValue + '</li>'
    }
    else {
        listData = l.join('');
    }
    suggbox.innerHTML = listData;
}
//suggestion box end-----
//make a call and calendar code begins---
let n = 0;
appoint.addEventListener('click', funct);
function funct(e) {
    n++;
}
callingUs.addEventListener("click", function () {
    if (n % 2 == 0) {
        calling.classList.remove("remove");
        appoint.disabled = true;
    }
});

function toggleButton() {
}
let arr3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dates = new Date();
let currYear = dates.getFullYear();
let currMonth = dates.getMonth();

function perform() {
    if (currMonth < 11) {
        currMonth++;
        currDate.innerHTML = `${arr3[currMonth]} ${currYear}`;
        rendercalender();
        official.textContent = currDate.innerHTML;
    }
    else if (currMonth >= 12) {
        currMonth = 0;
        currYear++;
        currDate.innerHTML = `${arr3[currMonth]} ${currYear}`;
        rendercalender();
        official.textContent = currDate.innerHTML;
    }
}

function confirmedBooked() {
    confirmed.textContent = `${currYear} ${currMonth}`;
}

close.addEventListener("click", function () {
    calling.classList.toggle("remove");
    appoint.disabled = false;
})
///make a call and calendar code ends---
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// fade in  and slide in animation
const fader = document.querySelectorAll(".fade-in");
const slider = document.querySelectorAll(".slide-in");
const fades = document.querySelectorAll(".fade-in1");

const options = {
    threshold: 1,
    // rootMargin: "0px 0px -50px 0px"

};
const opt = {
    threshold: 0,
    // rootMargin: "0px 0px -50px 0px"
}
const appearOn = new IntersectionObserver(function (entries, appearOn) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOn.unobserve(entry.target);
        }
    })
}, options);
const changeOn = new IntersectionObserver(function (entries, changeOn) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            changeOn.unobserve(entry.target);
        }
    })
}, opt);
fader.forEach(f => {
    appearOn.observe(f);
})
fades.forEach(l => {
    appearOn.observe(l);
})
slider.forEach(s => {
    changeOn.observe(s);
})
const hidenLines = document.querySelectorAll(".hideThem");
const changeText = document.getElementById('btnClick');
function showThem() {
    for (let i = 0; i < hidenLines.length; i++) {
        hidenLines[i].style.opacity = 1;
    }
    changeText.innerText = 'Show Less';
    changeText.classList.remove("necheLeja");
    changeText.classList.add("uparLeja");
    changeText.onclick = hideText;
}
function hideText() {
    for (let i = 0; i < hidenLines.length; i++) {
        hidenLines[i].style.opacity = 0;
    }
    changeText.innerText = 'Show More';
    changeText.classList.remove("uparLeja");
    changeText.classList.add("necheLeja");
    changeText.onclick = showThem;
}
//loader code begins
let loader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    loader.classList.add("preloader--hidden")
})
let load2 = document.querySelector(".logo")
load2.addEventListener("click", () => {
    window.addEventListener("load", () => {
        loader.classList.add("preloader--hidden")
    })
    window.location.reload(true);
})

function handleSearch() {
    const selectedOption = document.querySelector('.homefield select').value;
    const searchText = document.querySelector('.search-input input').value.trim().toLowerCase();
    const rentSection = document.querySelector('.section.rent');
    const boxes = rentSection.querySelectorAll('.box');

    let foundVisible = false;
    let firstMatchingBox = null; // Store the first matching box

    // Show only the boxes with the selected option and matching search text
    boxes.forEach(box => {
        const checkKarText = box.querySelector('.checkKar').textContent.trim();
        const textCheckText = box.querySelector('.textCheck').textContent.trim().toLowerCase();

        const isMatchingOption =
            (selectedOption === '0' && (checkKarText === 'House' || checkKarText === 'House and Land' || checkKarText === 'Townhouse' || checkKarText === 'Apartment')) ||
            (selectedOption === '1' && (checkKarText === 'House' || checkKarText === 'House and Land')) ||
            (selectedOption === '2' && checkKarText === 'Townhouse') ||
            (selectedOption === '3' && checkKarText === 'Apartment') ||
            (selectedOption === '4' && checkKarText === 'Land');
        const isMatchingSearch = textCheckText.includes(searchText);
        box.style.display = isMatchingOption && isMatchingSearch ? 'block' : 'none';

        // If the box is a recent sale, show it only if selectedOption is not '0' (not 'House')
        if (isMatchingOption && isMatchingSearch && !foundVisible) {
            firstMatchingBox = box;
            foundVisible = true;
        }
    });

    if (firstMatchingBox) {
        firstMatchingBox.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleRecentSales() {
    const rec1 = document.getElementById('rec1');
    const chose1 = document.getElementById('chose1');
    const dropdownItem = document.getElementById('s1');

    if (chose1.textContent !== 'Sold') {
        // If the property is not marked as "Sold," mark it as "Sold" and hide the dropdown option
        chose1.textContent = 'Sold';
        // dropdownItem.style.display = 'none';

        // Remove the property from the buy options and search results
        const rentSection = document.querySelector('.section.rent');
        const boxes = rentSection.querySelectorAll('.box');
        boxes.forEach(box => {

            if (box.id !== 'rec1') {
                box.style.display = 'none';
            }
        });

        rec1.scrollIntoView(scrollOptions);
    }
}

// "Search" button
const searchButton = document.getElementById('red');
searchButton.addEventListener('click', handleSearch);

// Add event listener to the search input to handle real-time search
const searchInput = document.querySelector('.search-input input');
searchInput.addEventListener('input', handleSearch);

// Add event listener to the "Recent Sales" option
const recentSalesOption = document.getElementById('s1');
recentSalesOption.addEventListener('click', handleRecentSales);


const resi = document.querySelector('.resi');
const hoyse = document.querySelector('.hlan');
const appart = document.querySelector('.towna');
const all = document.querySelector('.all1');
const dpmenu = document.querySelector('.dpmenu');
const hidi = document.getElementById('hid1');
const land = document.getElementById('buylan');

function handleSearch1() {
    const rentSection = document.querySelector('.section.rent');
    const boxes = rentSection.querySelectorAll('.box');

    let firstMatchingBox = null;

    boxes.forEach(box => {
        const checkKarText = box.querySelector('.checkKar').textContent.trim();
        const isMatchingOption = checkKarText === 'House';

        if (isMatchingOption) {
            firstMatchingBox = box;
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });

    if (firstMatchingBox) {
        firstMatchingBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function handleSearch2() {
    const rentSection = document.querySelector('.section.rent');
    const boxes = rentSection.querySelectorAll('.box');

    let firstMatchingBox = null;

    // Show only the boxes with the selected option and hide the rest
    boxes.forEach(box => {
        const checkKarText = box.querySelector('.checkKar').textContent.trim();
        const isMatchingOption = checkKarText === 'House and Land';

        if (isMatchingOption) {
            box.style.display = 'block';
            if (!firstMatchingBox) {
                firstMatchingBox = box;
            }
        } else {
            box.style.display = 'none';
        }
    });

    if (firstMatchingBox) {
        firstMatchingBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function handleSearch3() {
    const rentSection = document.querySelector('.section.rent');
    const boxes = rentSection.querySelectorAll('.box');

    let firstMatchingBox = null;

    // Show only the boxes with the selected option and hide the rest
    boxes.forEach(box => {
        const checkKarText = box.querySelector('.checkKar').textContent.trim();
        const isMatchingOption = checkKarText === 'Townhouse' || checkKarText === 'Apartment';

        if (isMatchingOption) {
            box.style.display = 'block';
            if (!firstMatchingBox) {
                firstMatchingBox = box;
            }
        } else {
            box.style.display = 'none';
        }
    });

    if (firstMatchingBox) {
        firstMatchingBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function handlesearch4() {
    const rentSection = document.querySelector('.section.rent');
    const boxes = rentSection.querySelectorAll('.box');

    let firstMatchingBox = null;

    // Show only the boxes with the selected option and hide the rest
    boxes.forEach(box => {
        const checkKarText = box.querySelector('.checkKar').textContent.trim();
        const isMatchingOption = checkKarText === 'Townhouse' || checkKarText === 'Apartment' || checkKarText === 'House' || checkKarText === 'House and Land' || checkKarText === 'Land';

        if (isMatchingOption) {
            box.style.display = 'block';
            if (!firstMatchingBox) {
                firstMatchingBox = box;
            }
        } else {
            box.style.display = 'none';
        }
    });

    if (firstMatchingBox) {
        firstMatchingBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
function handlesearch5() {
    const rentSection = document.querySelector('.section.rent');
    const boxes = rentSection.querySelectorAll('.box');

    let firstMatchingBox = null;

    // Show only the boxes with the selected option and hide the rest
    boxes.forEach(box => {
        const checkKarText = box.querySelector('.checkKar').textContent.trim();
        const isMatchingOption = checkKarText === 'Land';

        if (isMatchingOption) {
            box.style.display = 'block';
            if (!firstMatchingBox) {
                firstMatchingBox = box;
            }
        } else {
            box.style.display = 'none';
        }
    });

    if (firstMatchingBox) {
        firstMatchingBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// let hd1 = document.getElementById('hid1');
// let hd2 = document.getElementById('hid2');
// function hndlsr() {
//     hd1.style.display = 'block';
//     hd2.style.display = 'block';
//     dpmenu.style.height = '280px';
// }
resi.addEventListener('click', handleSearch1);
// hoyse.addEventListener('click', hndlsr);\
hidi.addEventListener('click', handleSearch2);
appart.addEventListener('click', handleSearch3);
all.addEventListener('click', handlesearch4);
land.addEventListener('click', handlesearch5);

function handleHashChange() {
    const hashValue = window.location.hash;
    if (hashValue === '#handlesearch4') {
        handlesearch4();
    }
    if (hashValue === '#handleSearch1') {
        handleSearch1();
    }

    if (hashValue === '#handleSearch2') {
        handleSearch2()
    }
    if (hashValue === '#handleSearch3') {
        handleSearch3();
    }
    if (hashValue === '#handlesearch5') {
        handlesearch5();
    }
    if (hashValue === '#fu34') {
        fu34();
    }
    if (hashValue === '#fun22') {
        fun22();
    }
}
handleHashChange();
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('message', function (event) {
    if (event.data === 'openFu34') {
        fu34();
    }
    if (event.data === 'openFun22') {
        fun22();
    }
});