function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();
function gooey() {
  Shery.imageEffect("#rowimg,#row1div2", {
    style: 6,
    gooey: true,
  });
}
gooey();
function mouseFollower() {
  Shery.mouseFollower({
    skew: true,
    duration: 0.5,
  });
}
mouseFollower();
function magnet() {
  Shery.makeMagnet("#nav #right a", {});
}
magnet();

function cursor() {
  var cursor = document.querySelector("#crs");
  var main = document.querySelector("#main");

  document.addEventListener("mousemove", function (e) {
    gsap.to("#crs", {
      left: e.x,
      top: e.y,
    });
  });
}
cursor();
//   main.addEventListener("mousemove", function (e) {
//     cursor.style.left=e.x+"px";
//     cursor.style.top=e.y+"px";

function loader() {
  var tl = gsap.timeline();
  tl.from("#loader-data h1", {
    y: 450,
    stagger: 0.5,
    delay: 0.4,
    durations: 1.5,
  })
    .to("#loader", {
      opacity: "0",
      stagger: 0.4,
      durations: 1.2,
      delay: 0.8,
    })
    .from("#page1", {
      y: 800,
      stagger: 0.4,
      delay: 0.8,
      PointerEvent: "none",
      durations: 2.1,
    })
    .from("#content h1", {
      opacity: 1,
      stagger: 2,
      durations: 3,
      delay: 0.6,
    });
}
loader();

function sheryAnimation() {
  var row1h1 = document.querySelector("#row1h1");
  var row1h2 = document.querySelector("#row1h2");
  var rowpart1 = document.querySelector("#rowpart1");

  var row2h1 = document.querySelector("#row2h1");
  var row2h2 = document.querySelector("#row2h2");
  var rowpart2 = document.querySelector("#rowpart2");

  var olga1 = document.querySelector("#olga1");
  var olga2 = document.querySelector("#olga2");
  var row2part2 = document.querySelector(".row2part2");

  var olgapart1 = document.querySelector("#olgapart1");
  var olgapart2 = document.querySelector("#olgapart2");
  var row2part3 = document.querySelector(".row2part3");

  var row3h1 = document.querySelector("#row3h1");
  var row3h2 = document.querySelector("#row3h2");
  var row3part1 = document.querySelector(".row3part1");

  var row3h3 = document.querySelector("#row3h3");
  var row3h4 = document.querySelector("#row3h4");
  var row3part3 = document.querySelector(".row3part3");
  rowpart1.addEventListener("mouseenter", function () {
    row1h1.style.top = "-20%";
    row1h2.style.top = "0%";
  });
  rowpart1.addEventListener("mouseleave", function () {
    row1h1.style.top = "0%";
    row1h2.style.top = "20%";
  });

  rowpart2.addEventListener("mouseenter", function () {
    row2h1.style.top = "-20%";
    row2h2.style.top = "0%";
  });
  rowpart2.addEventListener("mouseleave", function () {
    row2h1.style.top = "0%";
    row2h2.style.top = "20%";
  });

  row2part2.addEventListener("mouseenter", function () {
    olga1.style.top = "-20%";
    olga2.style.top = "0%";
  });
  row2part2.addEventListener("mouseleave", function () {
    olga1.style.top = "0%";
    olga2.style.top = "20%";
  });

  row2part3.addEventListener("mouseenter", function () {
    olgapart1.style.top = "-20%";
    olgapart2.style.top = "0%";
  });
  row2part3.addEventListener("mouseleave", function () {
    olgapart1.style.top = "0%";
    olgapart2.style.top = "20%";
  });

  row3part1.addEventListener("mouseenter", function () {
    row3h1.style.top = "-20%";
    row3h2.style.top = "0%";
  });
  row3part1.addEventListener("mouseleave", function () {
    row3h1.style.top = "0%";
    row3h2.style.top = "20%";
  });

  row3part3.addEventListener("mouseenter", function () {
    row3h3.style.top = "-20%";
    row3h4.style.top = "0%";
  });
  row3part3.addEventListener("mouseleave", function () {
    row3h3.style.top = "0%";
    row3h4.style.top = "20%";
  });
}
sheryAnimation();

var grow1 = document.querySelector("#grow");
var centerimg = document.querySelector("#centerimg");
var border = document.querySelector(".border");
var border1 = document.querySelector(".border1");
var border2 = document.querySelector(".border2");
var video = document.querySelector("#video");
var container = document.querySelector("#container");
var circle = document.querySelector("#circle");
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var mouseFollower = document.querySelector(".mouseFollower");
var img = document.querySelector("#container-img");
var grow = -1;

setInterval(() => {
  if (grow < 101) {
    grow++;
    grow1.innerHTML = grow++;
  }
}, 50);

function flagAnimation() {
  border.addEventListener("mouseenter", function () {
    gsap.to("#centerimg", {
      opacity: 1,
    });
  });

  border.addEventListener("mouseleave", function () {
    gsap.to("#centerimg", {
      opacity: 0,
    });
  });

  document.addEventListener("mousemove", function (det) {
    gsap.to("#centerimg", {
      left: det.x,
      top: det.y,
    });
  });

  border1.addEventListener("mouseenter", function () {
    gsap.to("#centerimg", {
      opacity: 1,
    });
  });

  border1.addEventListener("mouseleave", function () {
    gsap.to("#centerimg", {
      opacity: 0,
    });
  });

  border2.addEventListener("mouseenter", function () {
    gsap.to("#centerimg", {
      opacity: 1,
    });
  });

  border2.addEventListener("mouseleave", function () {
    gsap.to("#centerimg", {
      opacity: 0,
    });
  });
}
flagAnimation();

container.addEventListener("mouseenter", function () {
  container.addEventListener("mousemove", function (dets) {
    gsap.to("#circle", {
      left: dets.x - 540,
      top: dets.y - 100,
    });
  });
  mouseFollower.style.opacity = 0;
});

container.addEventListener("mouseleave", function () {
  gsap.to("#circle", {
    left: "60%",
    top: "-2%",
  });
  video.pause();
  video.style.opacity = 0;
  img.style.opacity = 1;
  play.style.opacity = 1;
  pause.style.opacity = 0;
});
var flag = 0;
container.addEventListener("click", function () {
  if (flag == 0) {
    video.play();
    video.style.opacity = 1;
    img.style.opacity = 0;
    play.style.opacity = 0;
    pause.style.opacity = 1;
    flag = 1;
  } else {
    video.pause();
    video.style.opacity = 0;
    img.style.opacity = 1;
    play.style.opacity = 1;
    pause.style.opacity = 0;
    flag = 0;
  }
});

function textAnimation() {
  var select = document.querySelector("#page5 #header");
  var first = document.querySelector("#page5 #first");
  var second = document.querySelector("#page5 #secondh1");

  select.addEventListener("mouseenter", function () {
    var tl = gsap.timeline();
    tl.to("#first span", {
      opacity: 0,
      stagger: 0.03,
      duration: 0.1,
    }).to("#header #secondh1 span", {
      opacity: 1,
      stagger: 0.03,
      duration: 0.1,
    });
  });

  select.addEventListener("mouseleave", function () {
    var tl = gsap.timeline();
    tl.to("#header #secondh1 span", {
      opacity: 0,
      stagger: 0.03,
      duration: 0.3,
    }).to("#first span", {
      opacity: 1,
      stagger: 0.03,
      duration: 0.3,
    });
  });
}
textAnimation();
