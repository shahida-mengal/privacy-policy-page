function cartButtonEvent(){
    document.getElementById("add-to-cart-list-holder").style.display = "flex";
}
function closeCartList(){
    document.getElementById("add-to-cart-list-holder").style.display = "none";
}

let cartList = document.getElementById("add-to-cart-list-holder");
      
      
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    cartList.style.top = "65px";
    
  } else {
    cartList.style.top = "186px";
  }
}