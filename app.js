$(document).ready(function () {
  var ventana = $(window).width();
  var visible = $("#menu-light").css("display");
  var flex = $("#menu-light").css("flex-flow");
  if (ventana < 900 && flex == "row nowrap") {
    $("#menu-light").css("flex-flow", "column");
    $("#menu-light").css("display", "none");
  }
  var cw = $("#user1").width();
  var cw2 = $("#user2").width();
  $("#user1").css({
    height: cw + "px",
  });
  $("#user2").css({
    height: cw2 + "px",
  });
  $("#places").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplaySpeed: 10,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".persons").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(window).resize(function () {
  resizeLogo();
});
$(document).ready(function () {
  resizeLogo();
});

function resizeLogo() {
  setTimeout(function () {
    $width1 = $("#user1").width();
    $width2 = $("#user2").width();
    $width = $(window).width();
    $("#user1").css("height", $width1);
    $("#user2").css("height", $width2);
  }, 100);
}

$(window).ready(function () {
  $("#menu").click(function () {
    var visible = $("#menu-light").css("display");
    if (visible == "none") {
      //$("#menu-header").css("right", 0);
      $("#menu-light").css("display", "flex");
    }

    if (visible == "flex") {
      //$("#menu-header").css("right", 100 + "vh");
      $("#menu-light").css("display", "none");
    }
  });
});
$(window).resize(function () {
  var ventana = $(window).width();
  var visible = $("#menu-light").css("display");
  var flex = $("#menu-light").css("flex-flow");
  if (ventana > 900) {
    $("#menu-light").css("display", "flex");
    $("#menu-light").css("flex-flow", "row nowrap");
  }
  if (ventana < 900 && flex == "row nowrap") {
    $("#menu-light").css("flex-flow", "column");
    $("#menu-light").css("display", "none");
  }
});
