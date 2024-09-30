/** sicky side menu **/
document.getElementsByClassName("navbar")[0].style.setProperty('background-color', 'transparent', 'important');

window.addEventListener('load', function () {
  stickyfunc();
  hotfixScrollSpy();
  window.scrollBy(0,1);
})

window.onscroll = function() {
  stickyfunc();
  scrollIndicator()
};
var sideMenu = document.getElementsByClassName("sideMenu");
var mybutton = document.getElementById("btn-back-to-top");

function stickyfunc() {
  for (var i=0, item; item = sideMenu[i]; i++) {
    var sticky = item.offsetTop - 100;
    if (window.pageYOffset >= sticky) {
      item.style.position = "sticky";
      item.style.top = "60px";
    } else {
      item.style.position = "";
      item.style.top = "";
    }
  }
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
    document.getElementsByClassName("navbar")[0].style.setProperty('background-color', '');
  } else {
    mybutton.style.display = "none";
    document.getElementsByClassName("navbar")[0].style.setProperty('background-color', 'transparent', 'important');
  }
}

/** dark/light theme icon **/
var icon = document.getElementById("icon");

if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light"){
  icon.src = "https://static.igem.wiki/teams/4129/wiki/image-icons/moon.png";
  document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
  icon.src = "https://static.igem.wiki/teams/4129/wiki/image-icons/sun.png";
  document.body.classList.add("dark-theme");
}
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")){
    icon.src = "https://static.igem.wiki/teams/4129/wiki/image-icons/sun.png";
    localStorage.setItem("theme", "dark");
  } else{
    icon.src = "https://static.igem.wiki/teams/4129/wiki/image-icons/moon.png";
    localStorage.setItem("theme", "light");
  }
    }

/** b2top **/
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/** Scroll spy**/
function hotfixScrollSpy() {
    var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    let curScroll = getCurrentScroll();
    dataSpyList.forEach(function (dataSpyEl) {
        let offsets = bootstrap.ScrollSpy.getInstance(dataSpyEl)['_offsets'];
        for(let i = 0; i < offsets.length; i++){
            offsets[i] += curScroll;
        }
    })
}

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

/** scroll progress **/
var bar = document.getElementById("bar");

function scrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = 100;

  if (height > 0) {
    scrolled = (winScroll / height) * 100;
  }

  bar.style.height = scrolled + "%";
}
