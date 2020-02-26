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
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }