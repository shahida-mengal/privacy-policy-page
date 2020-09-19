//side bar menu function

function openNav() {
    document.getElementById('side-menu').style.width = "250px";
    document.getElementById('side-menu').style.display = "block";
    
};

function closeNav(){
    document.getElementById('side-menu').style.width = "0px";
};

window.onresize = function() {
    console.log(window.innerWidth);
    if(window.innerWidth > 992){
      document.getElementById('side-menu').style.width = "100vw";
      document.getElementById('side-menu').style.display = "flex";
    }
    if(window.innerWidth < 992){
      document.getElementById('side-menu').style.width = "0";
      document.getElementById('side-menu').style.display = "none";
    }
}

//updown button function

var mybutton = document.getElementById("updown");
      
      
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}