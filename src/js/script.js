const body = document.getElementsByTagName('body')[0];
const roundText = document.querySelector("#roundText");
const testimonialsSlider = document.querySelector('#testimonialsSlider');
const caseSlider = document.querySelector('#caseSlider');
const blogSlider = document.querySelector('#blogSlider');
const practiceSlider = document.querySelector('#practiceSlider');
const sidebarAccordion = document.querySelector('#sidebarAccordion');
const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');
const navItems = document.querySelectorAll('.nav-list a');
const submenu = document.querySelectorAll('.nav-sublist');
const moreLink = document.querySelectorAll('.js-open-text');
const hiddenText = document.querySelectorAll('.more-text');
const filterLink = document.querySelectorAll('.filter__list li');
const header = document.querySelector('.header');
const innerHeader = document.querySelector('.header_inner');
const logoImg = document.querySelector('.logo img');
const logoSource = document.querySelector('.logo source');

function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    let val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

function setInnerHeader() {
  logoImg.setAttribute('src', logoWhiteUrl);
  logoSource.setAttribute('srcset', logoWhiteUrl);
  header.classList.add("header_inner");
}

function setHomeHeader() {
  logoImg.setAttribute('src', logoBlackUrl);
  logoSource.setAttribute('srcset', logoBlackUrl);
  header.classList.remove("header_inner");
}

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


for (let i = 0; i < hiddenText.length; i++) {
  hiddenText[i].style.display = "none"; // depending on what you're doing
}
moreLink.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    let hiddenText = this.previousSibling.previousSibling;
    if (hiddenText.style.display === "none") {
      this.innerHTML = "See less";
      hiddenText.style.display = "block";
    } else {
      this.innerHTML = "See more";
      hiddenText.style.display = "none";
    }
  });
})

function fixedHeader() {
  if (window.scrollY > 1 && window.innerWidth <= 767) {
    header.style.backgroundColor = "#ffffff";
    innerHeader.style.backgroundColor = "#8B0C1D";
  } else {
    header.style.backgroundColor = "rgba(#fff, .4)";
    innerHeader.style.backgroundColor = "transparent";
  }
}

document.addEventListener("DOMContentLoaded", function () {

  if (innerHeader) {
    setInnerHeader();
  } else {
    setHomeHeader();
  }

  window.addEventListener('scroll', function (e) {
    fixedHeader();
  });

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

    for (let i = 0; i < accordionLink.length; i++) {
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
    let mapOptions = {
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
    let mapElement = document.getElementById('map')
    let map = new google.maps.Map(mapElement, mapOptions);
    let marker = new google.maps.Marker({
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
    let i = (currentSlide ? currentSlide : 0) + 1;
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
    let i = (currentSlide ? currentSlide : 0) + 1;
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
    let i = (currentSlide ? currentSlide : 0) + 1;
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
  let webP = new Image();
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

$(document).ready(function () {
  if ($('.case-wrapper').length > 0) {
    let $filterCount = $('#filterResult');
    let itemSelector = ".case";
    let item = $('.case');
    let $checkboxes = $('.filter-item');
    let $container = $('.case-wrapper').isotope({
      itemSelector: itemSelector
    });
    let iso = $container.data('isotope');

    //Ascending order
    let responsiveIsotope = [
      [480, 4],
      [720, 6]
    ];
    let itemsPerPageDefault = 5;
    let itemsPerPage = defineItemsPerPage();
    let currentNumberPages = 1;
    let currentPage = 1;
    let currentFilter = '*';
    let filterAttribute = 'data-filter';
    let filterValue = "";
    let pageAttribute = 'data-page';
    let pagerClass = 'pagination';

    // update items based on current filters    
    function changeFilter(selector) {
      $container.isotope({
        filter: selector
      });
    }

    //grab all checked filters and goto page on fresh isotope output
    function goToPage(n) {
      currentPage = n;
      let selector = itemSelector;
      let exclusives = [];
      // for each box checked, add its value and push to array
      $checkboxes.each(function (i, elem) {
        if (elem.checked) {
          selector += (currentFilter != '*') ? '.' + elem.value : '';
          exclusives.push(selector);
        }
      });
      // smash all values back together for 'and' filtering
      filterValue = exclusives.length ? exclusives.join('') : '*';

      // add page number to the string of filters
      let wordPage = currentPage.toString();
      filterValue += ('.' + wordPage);

      changeFilter(filterValue);
    }

    // determine page breaks based on window width and preset values
    function defineItemsPerPage() {
      let pages = itemsPerPageDefault;

      for (let i = 0; i < responsiveIsotope.length; i++) {
        if ($(window).width() <= responsiveIsotope[i][0]) {
          pages = responsiveIsotope[i][1];
          break;
        }
      }
      return pages;
    }

    function setPagination() {
      let SettingsPagesOnItems = function () {
        let itemsLength = $container.children(itemSelector).length;

        let pages = Math.ceil(itemsLength / itemsPerPage);
        let item = 1;
        let page = 1;
        let selector = itemSelector;
        let exclusives = [];
        // for each box checked, add its value and push to array
        $checkboxes.each(function (i, elem) {
          if (elem.checked) {
            selector += (currentFilter != '*') ? '.' + elem.value : '';
            exclusives.push(selector);
          }
        });
        // smash all values back together for 'and' filtering
        filterValue = exclusives.length ? exclusives.join('') : '*';
        // find each child element with current filter values
        $container.children(filterValue).each(function () {
          let itemCount = $container.children(filterValue).length
          $filterCount.text(itemCount);
          if (item > itemsPerPage) {
            page++;
            item = 1;
          }
          // add page number to element as a class
          wordPage = page.toString();

          let classes = $(this).attr('class').split(' ');
          let lastClass = classes[classes.length - 1];
          // last class shorter than 4 will be a page number, if so, grab and replace
          if (lastClass.length < 4) {
            $(this).removeClass();
            classes.pop();
            classes.push(wordPage);
            classes = classes.join(' ');
            $(this).addClass(classes);
          } else {
            // if there was no page number, add it
            $(this).addClass(wordPage);
          }
          item++;
        });
        currentNumberPages = page;
      }();

      // create page number navigation
      let CreatePagers = function () {

        let $isotopePager = ($('.' + pagerClass).length == 0) ? $('<div class="' + pagerClass + '"></div>') : $('.' + pagerClass);

        $isotopePager.html('');
        if (currentNumberPages > 1) {
          for (let i = 0; i < currentNumberPages; i++) {
            let $pager = $('<a href="javascript:void(0);" ' + pageAttribute + '="' + (i + 1) + '"></a>');
            $pager.html(i + 1);

            $pager.click(function () {
              let page = $(this).eq(0).attr(pageAttribute);
              goToPage(page);
              $pager.removeClass('active');
              $(".pagination a").not(this).removeClass('active');
              $(this).addClass('active');
            });
            $pager.appendTo($isotopePager);
          }
        }
        $container.after($isotopePager);
      }();
    }
    // remove checks from all boxes and refilter
    function clearAll() {
      $checkboxes.each(function (i, elem) {
        if (elem.checked) {
          elem.checked = null;
        }
      });
      currentFilter = '*';
      setPagination();
      goToPage(1);
    }

    setPagination();
    goToPage(1);

    //event handlers
    $checkboxes.change(function () {
      let filter = $(this).attr(filterAttribute);
      currentFilter = filter;
      setPagination();
      goToPage(1);
      if (iso.filteredItems.length == 0) {
        $filterCount.text(iso.filteredItems.length);

      }
    });

    $('#clear-filters').click(function () {
      clearAll()
    });

    $(window).resize(function () {
      itemsPerPage = defineItemsPerPage();
      setPagination();
      goToPage(1);
    });

  }
});