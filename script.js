// var Controller = new ScrollMagic.Controller();
// var myScene = new ScrollMagic.Scene({
//   triggerElement: '.h1div',
//   triggerHook: 0.355,
//   reverse: false
// })
// .setClassToggle('.hidden', 'showtext')
// // .addIndicators()
// .addTo(Controller);

$('#neonthis1').novacancy({
  'reblinkProbability': 0.5,
  'blinkMin': 0.2,
  'blinkMax': 0.6,
  'loopMin': 2,
  'loopMax': 2,
  'color': '#FF6700',
  'glow': null,
  'off': 2,
  'blink': 0,
  'autoOn': true
})

$('#neonthis2').novacancy({
  'reblinkProbability': 0.5,
  'blinkMin': 0.2,
  'blinkMax': 0.6,
  'loopMin': 2,
  'loopMax': 2,
  'color': '#FF6700',
  'glow': null,
  'off': 2,
  'blink': 0,
  'autoOn': true
})


const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;

  let loopTimeout;


  // Create Noise
  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xff000000;
      }
    }

    noiseData.push(idata);
  };

  // Play Noise
  const paintNoise = () => {
    if (frame === 9) {
      frame = 0;
    } else {
      frame++;
    }

    ctx.putImageData(noiseData[frame], 0, 0);
  };

  const loop = () => {
    paintNoise(frame);

    loopTimeout = window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, (1000 / 25));
  };

  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;

    canvas.width = wWidth;
    canvas.height = wHeight;

    for (let i = 0; i < 10; i++) {
      createNoise();
    }

    loop();
  };

  let resizeThrottle;
  const reset = () => {
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeThrottle);

      resizeThrottle = window.setTimeout(() => {
        window.clearTimeout(loopTimeout);
        setup();
      }, 200);
    }, false);
  };

  const init = (() => {
    canvas = document.getElementById('noise');
    ctx = canvas.getContext('2d');

    setup();
  })();
};

noise();


const mySong = document.getElementById("song");
const icon = document.getElementById("imgborder");
document.getElementById("song").loop = true;
icon.addEventListener('click', () => {
  icon.classList.toggle("imageborder-active");
  if (mySong.paused) {
    mySong.play();
    icon.src = "musicicon.png";
  } else {
    mySong.pause();
    icon.src = "musicicon.png";
  }
});


const title1 = document.querySelector(".h1div");
const title2 = document.querySelector(".h2div");
const title3 = document.querySelector(".welcome");
const title4 = document.querySelector(".loc");
const title5 = document.querySelector(".title-box-3");
const img1 = document.querySelector(".hoverimg1");
const img2 = document.querySelector(".hoverimg2");
const img3 = document.querySelector(".hoverimg3");
const img4 = document.querySelector(".hoverimg4");
const img5 = document.querySelector(".hoverimg5");


function myFunction(x) {
  if (x.matches) {

  } else {

    title1.addEventListener('mouseenter', () => {
      img1.classList.add("showimg");
    })
    title1.addEventListener('mouseleave', () => {
      img1.classList.remove("showimg");
    })
    title2.addEventListener('mouseenter', () => {
      img2.classList.add("showimg");
    })
    title2.addEventListener('mouseleave', () => {
      img2.classList.remove("showimg");
    })
    title3.addEventListener('mouseenter', () => {
      img3.classList.add("showimg");
    })
    title3.addEventListener('mouseleave', () => {
      img3.classList.remove("showimg");
    })
    title4.addEventListener('mouseenter', () => {
      img4.classList.add("showimg");
    })
    title4.addEventListener('mouseleave', () => {
      img4.classList.remove("showimg");
    })
    title5.addEventListener('mouseenter', () => {
      img5.classList.add("showimg");
    })
    title5.addEventListener('mouseleave', () => {
      img5.classList.remove("showimg");
    })
    title1.addEventListener('mousemove', (e) => {
      img1.style.right = e.clientX * 0.15 + -10 + 'px';
      img1.style.top = -e.clientY * 0.15 + 5 + 'px';
    })
    title2.addEventListener('mousemove', (e) => {
      img2.style.right = e.clientX * 0.15 + -10 + 'px';
      img2.style.top = -e.clientY * 0.15 + 40 + 'px';
    })
    title3.addEventListener('mousemove', (e) => {
      img3.style.right = e.clientX * 0.15 + -10 + 'px';
      img3.style.top = -e.clientY * 0.15 + 5 + 'px';
    })
    title4.addEventListener('mousemove', (e) => {
      img4.style.right = e.clientX * 0.15 + -10 + 'px';
      img4.style.top = -e.clientY * 0.15 + 130 + 'px';
    })
    title5.addEventListener('mousemove', (e) => {
      img5.style.right = e.clientX * 0.15 + -160 + 'px';
      img5.style.top = -e.clientY * 0.15 + 30 + 'px';
    })


  }
}

  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x)
  x.addListener(myFunction)



// swiper
const swiper = new Swiper('.swiper-container', {

  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// navbar
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1s ease forwards ${index / 5 + 0.5}s`;
      }
    });
    burger.classList.toggle("toggle");
  });

}
navSlide();

// cursor
function e(e) {
  var r = 0.3;
  n.hasClass("grab") && (r = 0.05),
    t.each(function(t, n) {
      $(this).hasClass("fixit") ||
        (1 == t ?
          TweenLite.to($(this), r, {
            x: e.pageX,
            y: e.pageY
          }) :
          TweenLite.to($(this), 0.05, {
            x: e.pageX,
            y: e.pageY
          }));
    }),
    n.each(function(t, n) {
      $(this).hasClass("drag-active") &&
        TweenLite.to($(this), 0.05, {
          x: e.pageX,
          y: e.pageY
        });
    }),
    i.each(function(t, n) {
      $(this).hasClass("is-active") &&
        TweenLite.to($(this), 0.5, {
          x: e.pageX,
          y: e.pageY
        });
    });
}
TweenMax.lagSmoothing(0);
$(".is-draggable").on("mousemove", this.moveDrag),
  $(".is-draggable").on("mouseleave", this.hideDrag),
  $(".is-target").on("mousemove", this.moveHover),
  $(".is-target").on("mouseleave", this.hideHover),
  $("body").mouseover(function() {
    $(this).css({
      cursor: "none"
    });
  });
var t = $(".box"),
  n = ($(".cursor .loading"), $(".drag")),
  i = $(".tooltipCursor");
TweenLite.to(t.eq(1), 0, {
    scale: 1,
    opacity: 1,
    overwrite: "all"
  }),
  $(document).on("mousemove", e),
  $(document).mouseleave(function() {
    t.each(function(e, t) {
      TweenMax.set($(this), {
        scale: 0,
        delay: 0
      });
    });
  }),
  $(document).mouseenter(function() {
    t.each(function(e, t) {
      TweenMax.set($(this), {
        scale: 1,
        delay: 0
      });
    });
  });

//skew
const content = document.querySelector(".skew");
const maxSkew = 15;
const maxRotate = 10;

let currentPosition = window.pageYOffset;

function skewEffect() {
  const newPosition = window.pageYOffset;
  const dif = newPosition - currentPosition;

  let skew = dif * 2;
  let rotate = dif * 0.2;
  if (skew > maxSkew || skew < -maxSkew) {
    if (skew > 0) {
      skew = maxSkew;
    } else if (skew < 0) {
      skew = -maxSkew;
    }
  }
  if (rotate > maxRotate || rotate < -maxRotate) {
    if (rotate > 0) {
      rotate = maxRotate;
    } else if (skew < 0) {
      rotate = -maxRotate;
    }
  }

  content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;
  currentPosition = newPosition;
  requestAnimationFrame(skewEffect);
}
skewEffect();

//navLogo
const text = baffle(".data");
text.set({
  characters: '░▓▓░▒█▒▒▓▓▓██▒░▓█▓█▒░░▒░░░░▓█',
  speed: 160
});
text.start();
text.reveal(7000, 7600);

//lax
"use strict";
! function() {
  var lax = function() {
    for (var lax = {
        elements: []
      }, lastY = 0, transforms = {
        "data-lax-opacity": function(t, a) {
          t.opacity = a
        },
        "data-lax-translate": function(t, a) {
          t.transform += " translate(".concat(a, "px, ").concat(a, "px)")
        },
        "data-lax-translate-x": function(t, a) {
          t.transform += " translateX(".concat(a, "px)")
        },
        "data-lax-translate-y": function(t, a) {
          t.transform += " translateY(".concat(a, "px)")
        },
        "data-lax-scale": function(t, a) {
          t.transform += " scale(".concat(a, ")")
        },
        "data-lax-scale-x": function(t, a) {
          t.transform += " scaleX(".concat(a, ")")
        },
        "data-lax-scale-y": function(t, a) {
          t.transform += " scaleY(".concat(a, ")")
        },
        "data-lax-skew": function(t, a) {
          t.transform += " skew(".concat(a, "deg, ").concat(a, "deg)")
        },
        "data-lax-skew-x": function(t, a) {
          t.transform += " skewX(".concat(a, "deg)")
        },
        "data-lax-skew-y": function(t, a) {
          t.transform += " skewY(".concat(a, "deg)")
        },
        "data-lax-rotate": function(t, a) {
          t.transform += " rotate(".concat(a, "deg)")
        },
        "data-lax-brightness": function(t, a) {
          t.filter += " brightness(".concat(a, "%)")
        },
        "data-lax-contrast": function(t, a) {
          t.filter += " contrast(".concat(a, "%)")
        },
        "data-lax-hue-rotate": function(t, a) {
          t.filter += " hue-rotate(".concat(a, "deg)")
        },
        "data-lax-blur": function(t, a) {
          t.filter += " blur(".concat(a, "px)")
        },
        "data-lax-invert": function(t, a) {
          t.filter += "  invert(".concat(a, "%)")
        },
        "data-lax-saturate": function(t, a) {
          t.filter += "  saturate(".concat(a, "%)")
        },
        "data-lax-grayscale": function(t, a) {
          t.filter += "  grayscale(".concat(a, "%)")
        },
        "data-lax-bg-pos": function(t, a) {
          t.backgroundPosition = "".concat(a, "px ").concat(a, "px")
        },
        "data-lax-bg-pos-x": function(t, a) {
          t.backgroundPositionX = "".concat(a, "px")
        },
        "data-lax-bg-pos-y": function(t, a) {
          t.backgroundPositionY = "".concat(a, "px")
        }
      }, _crazy = "", i = 0; i < 100; i++) _crazy += " " + window.innerHeight * (i / 100) + " " + 360 * Math.random() + ", ";

    function intrp(t, a) {
      for (var e = 0; t[e][0] <= a && void 0 !== t[e + 1];) e += 1;
      var n = t[e][0],
        r = void 0 === t[e - 1] ? n : t[e - 1][0],
        o = t[e][1],
        l = void 0 === t[e - 1] ? o : t[e - 1][1];
      return Math.min(Math.max((a - r) / (n - r), 0), 1) * (o - l) + l
    }
    return lax.presets = {
      linger: function(t) {
        return {
          "data-lax-translate-y": "(vh*0.7) 0, 0 200, -500 0"
        }
      },
      lazy: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
        return {
          "data-lax-translate-y": "(vh) 0, (-elh) ".concat(t)
        }
      },
      eager: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
        return {
          "data-lax-translate-y": "(vh) 0, (-elh) -".concat(t)
        }
      },
      slalom: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 50;
        return {
          "data-lax-translate-x": "vh ".concat(t, ", (vh*0.8) ").concat(-t, ", (vh*0.6) ").concat(t, ", (vh*0.4) ").concat(-t, ", (vh*0.2) ").concat(t, ", (vh*0) ").concat(-t, ", (-elh) ").concat(t)
        }
      },
      crazy: function(t) {
        return {
          "data-lax-hue-rotate": _crazy
        }
      },
      spin: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 360;
        return {
          "data-lax-rotate": "(vh) 0, (-elh) ".concat(t)
        }
      },
      spinRev: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 360;
        return {
          "data-lax-rotate": "(vh) 0, (-elh) ".concat(-t)
        }
      },
      spinIn: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 360;
        return {
          "data-lax-rotate": "vh ".concat(t, ", (vh*0.5) 0")
        }
      },
      spinOut: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 360;
        return {
          "data-lax-rotate": "(vh*0.5) 0, -elh ".concat(t)
        }
      },
      blurInOut: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 40;
        return {
          "data-lax-blur": "(vh) ".concat(t, ", (vh*0.8) 0, (vh*0.2) 0, 0 ").concat(t)
        }
      },
      blurIn: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 40;
        return {
          "data-lax-blur": "(vh) ".concat(t, ", (vh*0.7) 0")
        }
      },
      blurOut: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 40;
        return {
          "data-lax-blur": "(vh*0.3) 0, 0 ".concat(t)
        }
      },
      fadeInOut: function() {
        return {
          "data-lax-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0"
        }
      },
      fadeIn: function() {
        return {
          "data-lax-opacity": "(vh) 0, (vh*0.7) 1"
        }
      },
      fadeOut: function() {
        return {
          "data-lax-opacity": "(vh*0.3) 1, 0 0"
        }
      },
      driftLeft: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
        return {
          "data-lax-translate-x": "vh ".concat(t, ", -elh ").concat(-t)
        }
      },
      driftRight: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
        return {
          "data-lax-translate-x": "vh ".concat(-t, ", -elh ").concat(t)
        }
      },
      leftToRight: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
          "data-lax-translate-x": "vh 0, -elh (vw*".concat(t, ")")
        }
      },
      rightToLeft: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
          "data-lax-translate-x": "vh 0, -elh (vw*".concat(-t, ")")
        }
      },
      zoomInOut: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .2;
        return {
          "data-lax-scale": "(vh) ".concat(t, ", (vh*0.8) 1, (vh*0.2) 1, -elh ").concat(t)
        }
      },
      zoomIn: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .2;
        return {
          "data-lax-scale": "(vh) ".concat(t, ", (vh*0.7) 1")
        }
      },
      zoomOut: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .2;
        return {
          "data-lax-scale": "(vh*0.3) 1, -elh ".concat(t)
        }
      },
      speedy: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 30;
        return {
          "data-lax-skew-x": "(vh) ".concat(t, ", -elh ").concat(-t)
        }
      },
      swing: function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 30;
        return {
          "data-lax-skew-y": "(vh) ".concat(t, ", -elh ").concat(-t)
        }
      }
    }, lax.addPreset = function(t, a) {
      lax.presets[t] = a
    }, lax.setup = function(t) {
      lax.populateElements()
    }, lax.removeElement = function(a) {
      var t = this.elements.findIndex(function(t) {
        return t.el = a
      }); - 1 < t && this.elements.splice(t, 1)
    }, lax.addElement = function(el) {
      var o = {
          el: el,
          transforms: []
        },
        presetNames = el.attributes["data-lax-preset"] && el.attributes["data-lax-preset"].value;
      presetNames && (presetNames.split(" ").forEach(function(t) {
        var a = t.split("-"),
          e = lax.presets[a[0]];
        if (e) {
          var n = e(a[1]);
          for (var r in n) el.setAttribute(r, n[r])
        } else console.error("preset ".concat(a[0], " is not defined"))
      }), el.setAttribute("data-lax-anchor", "self"), el.attributes.removeNamedItem("data-lax-preset"));
      var useGpu = !(el.attributes["data-lax-use-gpu"] && "false" === el.attributes["data-lax-use-gpu"].value);
      if (useGpu && (el.style["-webkit-backface-visibility"] = "hidden"), el.attributes["data-lax-use-gpu"] && el.attributes.removeNamedItem("data-lax-use-gpu"), o.optimise = !1, el.attributes["data-lax-optimize"] && "true" === el.attributes["data-lax-optimize"].value) {
        o.optimise = !0;
        var bounds = el.getBoundingClientRect();
        el.setAttribute("data-lax-opacity", "".concat(-bounds.height - 1, " 0, ").concat(-bounds.height, " 1, ").concat(window.innerHeight, " 1, ").concat(window.innerHeight + 1, " 0")), el.attributes.removeNamedItem("data-lax-optimize")
      }
      for (var i = 0; i < el.attributes.length; i++) {
        var a = el.attributes[i],
          bits = a.name.split("-");
        if ("lax" === bits[1])
          if ("data-lax-anchor" === a.name) {
            o["data-lax-anchor"] = "self" === a.value ? el : document.querySelector(a.value);
            var rect = o["data-lax-anchor"].getBoundingClientRect();
            o["data-lax-anchor-top"] = Math.floor(rect.top) + window.scrollY
          } else o.transforms[a.name] = a.value.replace(new RegExp("vw", "g"), window.innerWidth).replace(new RegExp("vh", "g"), window.innerHeight).replace(new RegExp("elh", "g"), el.clientHeight).replace(new RegExp("elw", "g"), el.clientWidth).replace(new RegExp("-vw", "g"), -window.innerWidth).replace(new RegExp("-vh", "g"), -window.innerHeight).replace(new RegExp("-elh", "g"), -el.clientHeight).replace(new RegExp("-elw", "g"), -el.clientWidth).replace(/\s+/g, " ").split(",").map(function(x) {
            return x.trim().split(" ").map(function(y) {
              return "(" === y[0] ? eval(y) : parseFloat(y)
            })
          }).sort(function(t, a) {
            return t[0] - a[0]
          })
      }
      lax.elements.push(o), lax.updateElement(o)
    }, lax.populateElements = function() {
      lax.elements = [];
      var t = Object.keys(transforms).map(function(t) {
        return "[".concat(t, "]")
      }).join(",");
      t += ",[data-lax-preset]", document.querySelectorAll(t).forEach(this.addElement)
    }, lax.updateElement = function(t) {
      var a = lastY,
        e = t["data-lax-anchor-top"] ? t["data-lax-anchor-top"] - a : a,
        n = {
          transform: "",
          filter: ""
        };
      for (var r in t.transforms) {
        var o = t.transforms[r],
          l = transforms[r],
          c = intrp(o, e);
        if (!l) return void console.error("lax: " + r + " is not supported");
        l(n, c)
      }
      for (var i in n) 0 === n.opacity ? t.el.style.opacity = 0 : t.el.style[i] = n[i]
    }, lax.update = function(t) {
      lastY = t, lax.elements.forEach(lax.updateElement)
    }, lax
  }();
  "undefined" != typeof module && void 0 !== module.exports ? module.exports = lax : window.lax = lax
}();

window.onload = function() {
  lax.setup() // init

  document.addEventListener('scroll', function(e) {
    lax.update(window.scrollY) // update every scroll
  }, false)
}

//landing page

const loadtexts = document.querySelectorAll('.loadtext');
loadtexts.forEach(loadtext => {
  loadtext.classList.add('opacity1');
});

TweenMax.to(
  ".loadcon",
  2, {
    x: "100%",
    ease: Expo.easeInOut,
    delay: 7,
  },
);
TweenMax.staggerFrom(
  ".loadtext",
  1, {
    x: "-80",
    ease: Power3.easeInOut,
    opacity: "0",
  },
  2
);
TweenMax.staggerTo(
  ".loadtext",
  0.8, {
    x: "80",
    ease: Power3.easeInOut,
    delay: 1.2,
    opacity: "0",
  },
  2
);
TweenMax.staggerFrom(
  ".blocks > li",
  3, {
    x: "-1600",
    delay: 4.2,
    ease: Expo.easeInOut,
  },
  0.16
);
TweenMax.staggerTo(
  ".blocks > li",
  2.6, {
    x: "1600",
    delay: 6.8,
    ease: Expo.easeInOut,
  },
  0.2
);







const ctx = c.getContext("2d");
const rAF = requestAnimationFrame;
const m = {
  x: 0,
  y: 0,
  a: 0,
  e: false
};

class Letters {
  constructor(x, y, char, font, color, radius) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.font = font;
    this.color = color;
    this.radius = 0;
    this.oriRad = radius;
    this.i = 20;
    this.maxSize = 30;
    this.minSize = 20;
    this.v = 5;
    this.dist = 0;
    this.friction = 0.9;
    this.K = 0.2; // Spring constant: The Spring Constant is the amount of force required to move the spring a fixed amount of distance.
    this.vel = {
      x: 0,
      y: 0
    };
    this.o = {
      x: 0,
      y: 0,
      a: 0
    };
  }

  angleChars() {
    if (this.radius < this.oriRad) this.radius += this.v;

    const dx = m.x - this.x;
    const dy = m.y - this.y;

    this.dist = Math.hypot(dx, dy);
    m.a = Math.atan2(dy, dx);

    const ax = Math.cos(m.a) * this.radius;
    const ay = Math.sin(m.a) * this.radius;

    this.o.x = lerp(ax, this.o.x, 0.1);
    this.o.y = lerp(ay, this.o.y, 0.1);

    this.dist < this.radius + 10
      ? this.i < this.maxSize
        ? ((this.dist = this.radius),
          (this.i += this.v - 4),
          (this.font = `600 ${this.i}px Arial`))
        : null
      : this.i > this.minSize
      ? ((this.i -= this.v - 4), (this.font = `600 ${this.i}px Arial`))
      : null;
  }

  onMouseLeave() {
    const forceX = this.K * (0 - this.o.x);
    const forceY = this.K * (0 - this.o.y);

    this.o.x += this.vel.x = (this.vel.x + forceX) * this.friction;
    this.o.y += this.vel.y = (this.vel.y + forceY) * this.friction;

    if (this.i > this.minSize) {
      this.i -= this.v - 4;
      this.font = `600 ${this.i}px Arial`;
    }
  }

  update(ctx) {
    m.e ? this.angleChars() : this.onMouseLeave();

    this.draw(ctx);
  }

  draw(ctx) {
    ctx.setTransform(1, 0, 0, 1, this.o.x, this.o.y);
    ctx.fillStyle = this.color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = this.font;
    ctx.fillText(this.char, this.x, this.y);
  }
}

let letters;

const init = () => {
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  letters = [];
  const chars = ["P", "R", "A", "N", "A", "Y"];
  const colors = ["#02d2d6", "#b125d1", "#fea064", "#00a8e8", "#fb89ef"];
  const colorLength = colors.length;
  const charLength = chars.length;
  const gridLength = 6;
  const radius = Math.min(c.width, c.height) / (gridLength + 1) / 2;
  const font = "600 20px Arial";
  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {
      const x = (c.width / (gridLength + 1)) * (j + 1);
      const y = (c.height / (gridLength + 1)) * (i + 1);
      const color = randomValue(colors, colorLength);
      const char = randomValue(chars, charLength);
      letters.push(new Letters(x, y, char, font, color, radius));
    }
  }
};

const lerp = (end, start, p) => p * (end - start) + start;

const randomValue = (array, length) =>
  array[Math.floor(Math.random() * length)];

const animate = () => {
  ctx.clearRect(0, 0, c.width, c.height);
  for (let letter of letters) {
    letter.update(ctx);
  }
  rAF(animate);
};

init();
animate();
window.addEventListener("resize", init);
c.addEventListener("mousemove", (e) => {
  const bounding = c.getBoundingClientRect();

  m.x = e.x - bounding.left;
  m.y = e.y - bounding.top;
});
c.addEventListener("mouseenter", () => {
  m.e = true;
});
c.addEventListener("mouseleave", () => {
  m.e = false;
});






