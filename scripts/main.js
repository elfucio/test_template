/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showFeaturesDropdown() {
    document.getElementById("featuresDropdown").classList.toggle("show");
}
function showSupportDropdown() {
  document.getElementById("supportDropdown").classList.toggle("show");
}
function showBusinessNumDropdown() {
  document.getElementById("businessDropdown").classList.toggle("show");
}
function showVoipDropdown() {
  document.getElementById("voipDropdown").classList.toggle("show");
}
function showLocalNumDropdown() {
  document.getElementById("localNumDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

  // burger menu

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
  // $("body").toggleClass("locked");
});

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".hand-phone__picture__img").toggleClass("hand-phone__picture__img--remove");
});

$('.overlay').click(function() {
  $(this).removeClass('open');
  $('.navBurger').removeClass('active');
});
