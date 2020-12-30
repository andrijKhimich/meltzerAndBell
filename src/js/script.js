const humburger = $(".js-humburger");
const headerMenu = $(".menu");
const scrollBtn = $(".scroll-btn");
const header = $(".header");
const logoImg = $(".logo img");

function setInnerHeader() {
  logoImg.attr("src", logoBlackUrl);
  header.addClass("header_inner");
}

function setHomeHeader() {
  logoImg.attr("src", logoMainUrl);
  header.removeClass("header_inner");
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
    icon: '../img/svg/map-point.svg'
  });
}

// function initMap() {

//   let mapPos = {
//     lat: 51.528414,
//     lng: -0.275301
//   };
//   let markerPos = {
//     lat: 51.528414,
//     lng: -0.275301
//   };

//   const map = new google.maps.Map(document.getElementById('contacts-map'), {
//     zoom: 16,
//     center: mapPos,
//     disableDefaultUI: false,
//     styles: [{
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#e9e9e9"
//           },
//           {
//             "lightness": 17
//           }
//         ]
//       },
//       {
//         "featureType": "landscape",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#f5f5f5"
//           },
//           {
//             "lightness": 20
//           }
//         ]
//       },
//       {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [{
//             "color": "#ffffff"
//           },
//           {
//             "lightness": 17
//           }
//         ]
//       },
//       {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [{
//             "color": "#ffffff"
//           },
//           {
//             "lightness": 29
//           },
//           {
//             "weight": 0.2
//           }
//         ]
//       },
//       {
//         "featureType": "road.arterial",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#ffffff"
//           },
//           {
//             "lightness": 18
//           }
//         ]
//       },
//       {
//         "featureType": "road.local",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#ffffff"
//           },
//           {
//             "lightness": 16
//           }
//         ]
//       },
//       {
//         "featureType": "poi",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#f5f5f5"
//           },
//           {
//             "lightness": 21
//           }
//         ]
//       },
//       {
//         "featureType": "poi.park",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#dedede"
//           },
//           {
//             "lightness": 21
//           }
//         ]
//       },
//       {
//         "elementType": "labels.text.stroke",
//         "stylers": [{
//             "visibility": "on"
//           },
//           {
//             "color": "#ffffff"
//           },
//           {
//             "lightness": 16
//           }
//         ]
//       },
//       {
//         "elementType": "labels.text.fill",
//         "stylers": [{
//             "saturation": 36
//           },
//           {
//             "color": "#333333"
//           },
//           {
//             "lightness": 40
//           }
//         ]
//       },
//       {
//         "elementType": "labels.icon",
//         "stylers": [{
//           "visibility": "off"
//         }]
//       },
//       {
//         "featureType": "transit",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#f2f2f2"
//           },
//           {
//             "lightness": 19
//           }
//         ]
//       },
//       {
//         "featureType": "administrative",
//         "elementType": "geometry.fill",
//         "stylers": [{
//             "color": "#fefefe"
//           },
//           {
//             "lightness": 20
//           }
//         ]
//       },
//       {
//         "featureType": "administrative",
//         "elementType": "geometry.stroke",
//         "stylers": [{
//             "color": "#fefefe"
//           },
//           {
//             "lightness": 17
//           },
//           {
//             "weight": 1.2
//           }
//         ]
//       }
//     ]
//   });

//   const markerIcon = {
//     url: '/wp-content/themes/stoneworld/assets/img/location.svg',
//     scaledSize: new google.maps.Size(60, 60),
//     origin: new google.maps.Point(0, 0),
//     anchor: new google.maps.Point(30, 60)
//   };

//   const marker = new google.maps.Marker({
//     position: markerPos,
//     map: map,
//     icon: markerIcon
//   });
// }

function showContent() {
  $(".main-wrapper").removeClass("js-fadeIn");
}

$(document).ready(function () {
  // if ($('.inner-page').length > 0) {
  //   setInnerHeader();
  // } else {
  //   setHomeHeader();
  // }
  showContent();

  // humburger.click(function () {
  //   if ($(this).hasClass('open')) {
  //     closeMenu();
  //   } else {
  //     openMenu();
  //   }
});

// slow scroll to id

//   scrollBtn.click(function (e) {
//     e.preventDefault();
//     let link = $($(this).attr('href'))
//     $('html, body').animate({
//       scrollTop: link.offset().top
//     }, 1000);
//   });

//   showOnScroll($(window).scrollTop());

//   $(window).scroll(function () {
//     const scrollValue = $(this).scrollTop();
//     showOnScroll(scrollValue);
//     scrollValue >= 1 ? closeMenu() : null;

//     if (scrollValue > 1) {
//       header.addClass('sticky');
//     } else {
//       header.removeClass('sticky');
//       // logoImg.attr("src", logoColorUrl);
//     }
//   });

// $('.home-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000
// });
// $('.testimonials-slider__wrapper').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000,
//   arrows: true,
//   prevArrow: $('.testimonials-slider_prev'),
//   nextArrow: $('.testimonials-slider_next')
// });
// });
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