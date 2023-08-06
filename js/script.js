document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtn = document.querySelector(".dropdown-btn");
    var dropdownContent = document.querySelector(".dropdown-content");
  
    dropdownBtn.addEventListener("click", function() {
      dropdownContent.classList.toggle("show");
    });
  });
  