const body = document.getElementsByTagName('body')[0];
const roundText = document.querySelector("#roundText");
const testimonialsSlider = document.querySelector('#testimonialsSlider');
const caseSlider = document.querySelector('#caseSlider');
const blogSlider = document.querySelector('#blogSlider');
const practiceSlider = document.querySelector('#practiceSlider');
const sidebarAccordion = document.querySelector('#sidebarAccordion');
const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');
const navItems = document.querySelectorAll('.nav-list__link');
const submenu = document.querySelectorAll('.nav-sublist');
const moreLink = document.querySelectorAll('.js-open-text');
const hiddenText = document.querySelectorAll('.more-text');
const filterLink = document.querySelectorAll('.filter__list li');
const filterResult = document.querySelector('#filterResult');





function openMenu() {
  menuBtn.classList.add('active');
  menuBtn.innerText = "close";
  nav.classList.add("open");
  body.style.overflow = 'hidden';
}

function closeMenu() {
  menuBtn.classList.remove('active');
  menuBtn.innerText = "menu";
  nav.classList.remove("open");
  navItems.forEach(function (element) {
    element.classList.remove("active");
  });
  submenu.forEach(function (element) {
    element.classList.remove("active");
  });
  body.style.overflow = 'auto';
}

// rounded words on firs screen
function circularWords(words) {
  const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
  };
  const radius = 80;
  const diameter = radius * 2;

  const circle = words;
  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;

  const text = circle.innerText;
  const characters = text.split("");
  circle.innerText = null;

  const startAngle = -90;
  const endAngle = 270;
  const angleRange = endAngle - startAngle;

  const deltaAngle = angleRange / characters.length;
  let currentAngle = startAngle;

  characters.forEach((char, index) => {
    const charElement = document.createElement("span");
    charElement.innerText = char;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${index * deltaAngle}deg)`;
    charElement.style.transform = `${transform} ${rotate}`;

    currentAngle += deltaAngle;
    circle.appendChild(charElement);
  });
}

function showContent() {
  document.querySelector(".main-wrapper").classList.remove("js-fadeIn");
}


for (var i = 0; i < hiddenText.length; i++) {
  hiddenText[i].style.display = "none"; // depending on what you're doing
}
moreLink.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    let hiddenText = this.previousSibling.previousSibling;
    console.log(hiddenText);
    if (hiddenText.style.display === "none") {
      this.innerHTML = "See less";
      hiddenText.style.display = "block";
    } else {
      this.innerHTML = "See more";
      hiddenText.style.display = "none";
    }
  });
})


document.addEventListener("DOMContentLoaded", function () {


  showContent();

  menuBtn.addEventListener('click', function () {
    if (this.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navItems.forEach(function (link) {
    link.addEventListener('click', function () {
      navItems.forEach(function (element) {
        element.classList.remove("active");
      });
      this.classList.add('active');

      submenu.forEach(function (sublist) {
        sublist.classList.remove("active");
      });
      const sublist = this.nextSibling.nextSibling;
      if (sublist != null) {
        sublist.classList.add('active');
      }

    });
  })


  if (sidebarAccordion) {
    const accordionWrapper = document.querySelector('.sidebar-accordion__wrapper');
    const accordionLink = accordionWrapper.querySelectorAll('.sidebar-accordion__link');

    function accordionToggle(e) {
      e.preventDefault();
      const accordionContent = this.nextSibling.nextSibling;
      if (accordionContent.classList.contains('show')) {
        this.classList.remove("minus");
        accordionContent.classList.remove("show");
      } else {
        this.classList.add("minus");
        accordionContent.classList.add("show");
      }
    }

    for (var i = 0; i < accordionLink.length; i++) {
      accordionLink[i].addEventListener("click", accordionToggle);
    }
  }

  if (roundText) {
    circularWords(roundText);
  }

  initPartnersSlider();

  initTestimonialsSlider();
  initPressSlider();
  initCaseSlider();
  // initBlogSlider();
  initPracticeSlider();


  window.addEventListener('resize', function (event) {
    initPartnersSlider();
    initPressSlider();
  });



  function initPartnersSlider() {
    const partnerSlider = document.querySelector('#partnerSlider.slick-slider');
    if (window.innerWidth < 991 && !partnerSlider) {
      $('#partnerSlider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: false,
        autoplaySpeed: 10000,
        mobileFirst: true,
        responsive: [{
            breakpoint: 991,
            settings: 'unslick'
          },
          {
            breakpoint: 180,
            settings: {
              slidesToShow: 2,
              dots: true
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 6
            }
          }
        ]
      });
    }
  }

  function initPressSlider() {
    const partnerSlider = document.querySelector('.press__slider.slick-slider');
    if (window.innerWidth < 991 && !partnerSlider) {
      $('#pressSlider').slick({
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        infinite: false,
        autoplaySpeed: 10000,
        mobileFirst: true,
        responsive: [{
            breakpoint: 991,
            settings: 'unslick'
          },
          {
            breakpoint: 180,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 4,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 6
            }
          }
        ]
      });
    }
  }


  $('#map')[0] ? initMap() : null;

  function initMap() {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(26.114650055305212, -80.14133413459079),
      disableDefaultUI: true,
      styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
              "color": "#e9e9e9"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
              "color": "#f5f5f5"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#ffffff"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#ffffff"
            },
            {
              "lightness": 29
            },
            {
              "weight": 0.2
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
              "color": "#ffffff"
            },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
              "color": "#ffffff"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
              "color": "#f5f5f5"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
              "color": "#dedede"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
              "visibility": "on"
            },
            {
              "color": "#ffffff"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
              "saturation": 36
            },
            {
              "color": "#333333"
            },
            {
              "lightness": 40
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
              "color": "#f2f2f2"
            },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#fefefe"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#fefefe"
            },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            }
          ]
        }
      ]
    };
    var mapElement = document.getElementById('map')
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(26.114611520965816, -80.14121611739628),
      map: map,
      title: 'Meltzer and Bell, P.A',
      icon: 'img/svg/map-point.svg'
    });
  }
});

function initTestimonialsSlider() {
  const counter = document.querySelector('#testimonialsSliderInfo');
  $(testimonialsSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    var i = (currentSlide ? currentSlide : 0) + 1;
    counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  });

  $(testimonialsSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 800,
    fade: true,
    arrows: true,
    prevArrow: $('#testimonialsPrev'),
    nextArrow: $('#testimonialsNext'),
    responsive: [{
      breakpoint: 991,
      settings: {
        adaptiveHeight: true
      }
    }]
  });
}

function initPracticeSlider() {
  const counter = document.querySelector('#practiceSliderInfo');
  $(practiceSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    var i = (currentSlide ? currentSlide : 0) + 1;
    counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  });

  $('#practiceSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 800,
    fade: true,
    arrows: true,
    prevArrow: $('#ptacticePrev'),
    nextArrow: $('#ptacticeNext'),
    responsive: [{
      breakpoint: 575,
      settings: {
        adaptiveHeight: true
      }
    }]
  });
}

function initCaseSlider() {
  const counter = document.querySelector('#caseSliderInfo');
  $(caseSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    var i = (currentSlide ? currentSlide : 0) + 1;
    counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  });

  $('#caseSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 1000,
    arrows: true,
    prevArrow: $('#casePrev'),
    nextArrow: $('#caseNext'),
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}


svg4everybody();

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});


// External js: jquery, isotope.pkgd.js, bootstrap.min.js
$(document).ready(function () {

  // Create object to store filter for each group
  var buttonFilters = {};
  var buttonFilter = '*';
  // Create new object for the range filters and set default values
  // The default values should correspond to the default values from the slider
  // Initialise Isotope
  // Set the item selector
  var $grid = $('.case-wrapper').isotope({
    itemSelector: '.case',
    layout: 'vertical',
    // use filter function
    filter: function () {
      var $this = $(this);
      return $this.is(buttonFilter);
    }
  });

  // Look inside element with .filters class for any clicks on elements with .btn
  $('.filter').on('click', '.filter-btn', function () {

    var $this = $(this);
    // Get group key from parent btn-group (e.g. data-filter-group="color")
    var $buttonGroup = $this.parents('.filter__list');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    buttonFilters[filterGroup] = $this.attr('data-filter');
    // Combine filters or set the value to * if buttonFilters
    buttonFilter = concatValues(buttonFilters) || '*';
    // Log out current filter to check that it's working when clicked
    console.log(buttonFilter)
    // Trigger isotope again to refresh layout
    $grid.isotope();
  });

  // change checked class on btn-filter to toggle which one is active
  $('.filter__list').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.filter-btn', function () {
      $buttonGroup.find('.checked').removeClass('checked');
      $(this).addClass('checked');
    });
  });
});

// Flatten object by concatting values
function concatValues(obj) {
  var value = '';
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}