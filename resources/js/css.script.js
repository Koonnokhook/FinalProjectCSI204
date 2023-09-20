function openCity(evt, cityName) {
    var tablinks = document.querySelectorAll(".tablink");
    var cities = document.querySelectorAll(".city");
  
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
      cities[i].classList.remove("active");
    }
  
    evt.currentTarget.classList.add("active");
    document.querySelector("#" + cityName).classList.add("active");
  }
  