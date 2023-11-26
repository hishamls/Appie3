const h1 = document.querySelector("h1");
const myName = "Hisham Sakr";

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// **********************************//
// SET CURRENT YEAR IN FOOTER
// **********************************//
const yearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

// **********************************//
// Make mobile navigation work
// **********************************//
const btnNav1 = document.querySelector(".btn-mobile-nav");
const btnNav = document.querySelector("#btn-header-nav");
const headerEl = document.querySelector(".header");
// const btnNavListEl = document.querySelector(".btn-nav-header");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-toggle"); //
});

btnNav1.addEventListener("click", function () {
  headerEl.classList.toggle("nav-toggle"); //
});

document.onkeyup = (e) => {
  if (e.key === "Escape") {
    headerEl.classList.toggle("nav-toggle");
  }
};
// btnNavListEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-toggle");
// });
//////??????????????????I need toggle in .li-nav-header

// **********************************//
// Make  navigation smoothly
// **********************************//
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    ////////////////////////////////
    // Close mobile navigation/////////////////
    if (link.classList.contains("btn-nav-header"))
      headerEl.classList.toggle("nav-toggle");
  });
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////SCROLL BAR/////////////////////////////
let scrollerEl = document.querySelector(".scroller");
//scrollHeight = entire content & padding (visible or not)
//clientHeight = visible content & padding

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight; //only visible

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollerEl.style.width = `${(scrollTop / height) * 100}%`;
});

//////LIGHT AND DARK//////////
let btnDark = document.querySelector("#btn-dark");
let header = document.querySelector(".header");
let bodyEl = document.querySelector(".body"); // not working
let secHero = document.querySelector(".sec-hero");

btnDark.onclick = () => {
  btnDark.classList.toggle("dark");
  header.classList.toggle("dark");
  secHero.classList.toggle("dark");
  bodyEl.classList.toggle("dark"); // not working
};
////UP BUTTON/////
let upBtn = document.createElement("button");
upBtn.textContent = "Up";
// upBtn.innerHTML = "&uparrow;";
document.body.append(upBtn);
upBtn.style.cssText =
  " display: none; cursor: pointer;background-color: #f23d6d;color: white;font-weight: bold;padding: 3px 6px;border-radius: 5px;position: fixed;bottom: 20px;right: 20px;";

window.onscroll = () => {
  if (window.scrollY >= 600) {
    // console.log(`Scrolling value is ${scrollY}`);
    upBtn.style.display = "block";
  } else upBtn.style.display = "none";
};

upBtn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
//////////////////////////////////////////////////////
/////////////////////////Toggle Button////////////////
//////////////////////////////////////////////////////
// You can also make it with js toggle class
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-toggle");
});
//////////////////////PROGRESS BARS//////////////////////////////////////////////////
