window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    document.getElementById("img").className = "test";

  } else {
    document.getElementById("img").className = "";
  }
}
