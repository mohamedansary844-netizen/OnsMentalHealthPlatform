(function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
  })(window.jQuery);

// Toggle login form visibility
function toggleLoginForm() {
  document.getElementById("loginForm").classList.toggle("active");
}

// Toggle password visibility
document.getElementById("togglePassword").onclick = function() {
  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.innerHTML = "&#128064;"; // Eye-off icon
  } else {
      passwordInput.type = "password";
      this.innerHTML = "&#128065;"; // Eye icon
  }
};

// Validate form
function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  if (username === "" || password === "") {
      errorMessage.style.display = "block";
      return false;
  } else {
      errorMessage.style.display = "none";
      return true;
  }
}

function filterTherapists() {
  const selectedCities = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.id);
  const selectedGenderInput = document.querySelector('input[name="gender"]:checked');
  const selectedGender = selectedGenderInput ? selectedGenderInput.id : 'allGender'; // التحقق من وجود قيمة في selectedGender

  const therapistCards = document.querySelectorAll('.card-container');

  therapistCards.forEach(card => {
    const cardCity = card.getAttribute('data-city');
    const cardGender = card.getAttribute('data-gender');

    const isCityMatched = selectedCities.length === 0 || selectedCities.includes(cardCity);
    const isGenderMatched = selectedGender === 'allGender' || cardGender === selectedGender;

    if (isCityMatched && isGenderMatched) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  })
}
const chartsData = [
  { id: 'chart1', data: [30, 70], labels: ['Help Available', 'No Help'], colors: ['#ff69b4', '#9370db'] },
  { id: 'chart2', data: [50, 50], labels: ['Accurate Assessments', 'Inaccurate'], colors: ['#ffb6c1', '#20b2aa'] },
  { id: 'chart3', data: [40, 60], labels: ['Affordable', 'Not Affordable'], colors: ['#ffa07a', '#ff6347'] },
  { id: 'chart4', data: [60, 40], labels: ['Stigma-Free', 'Stigmatized'], colors: ['#add8e6', '#ff1493'] },
  { id: 'chart5', data: [70, 30], labels: ['Comprehensive', 'Limited'], colors: ['#9370db', '#ffb6c1'] },
  { id: 'chart6', data: [77, 23], labels: ['Supportive Community', 'No Community'], colors: ['#ff69b4', '#7b68ee'] },
];

chartsData.forEach(chart => {
  const ctx = document.getElementById(chart.id).getContext('2d');
  new Chart(ctx, {
      type: 'pie',
      data: {
          labels: chart.labels,
          datasets: [{
              data: chart.data,
              backgroundColor: chart.colors,
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false,
              },
          }
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Bootstrap carousel
  var carouselElement = document.getElementById('carouselExample2Controls');
  var carousel = new bootstrap.Carousel(carouselElement, {
      interval: 1000, // Change the slide every 5 seconds
      pause: 'hover' // Pause the carousel when hovering over it
  });

  // Add event listeners for the next and previous buttons
  var prevButton = document.querySelector('.carousel-control-prev');
  var nextButton = document.querySelector('.carousel-control-next');

  prevButton.addEventListener('click', function () {
      carousel.prev(); // Go to the previous slide
  });

  nextButton.addEventListener('click', function () {
      carousel.next(); // Go to the next slide
  });
});

