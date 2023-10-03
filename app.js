// let hamburger = document.querySelector("#hamburger");
// let sp = document.querySelector("#sp");

// hamburger.onclick = function () {
//   console.log("hamburger clicked");
//   sp.classList.toggle("active");
// };

const tl = gsap.timeline({ paused: true });
let path = document.querySelector("path");
let spanBefore = CSSRulePlugin.getRule("#hamburger span:before");

gsap.set(spanBefore, { background: "#000" });
gsap.set(".menu", { visibility: "hidden" });

function revealMenu() {
  revealMenuItems();
  const hamburger = document.getElementById("hamburger");
  const togglebtn = document.getElementById("toggle-btn");

  togglebtn.onclick = (e) => {
    hamburger.classList.toggle("active");
    tl.reversed(!tl.reversed());
  };
}

revealMenu();

function revealMenuItems() {
  const start = "M0 502S175 271 500 272s500 230 500 230V0H0Z";
  const end = "M0 1005S175 1095 500 9925s500 5 1000 5V0H0Z";

  const power2 = "power2.inOut";
  const power4 = "power4.inOut";

  tl.to("#hamburger", 1.25, {
    marginTop: "-5px",
    x: -40,
    y: 40,
    ease: power4,
  });

  tl.to(
    "#hamburger span",
    1,
    {
      background: "#e2e2dc",
      ease: power2,
    },
    "<"
  );
  tl.to(
    spanBefore,
    1,
    {
      background: "#e2e2dc",
      ease: power2,
    },
    "<"
  );

  tl.to(
    ".btn .btn-outline",
    1.25,
    {
      x: -40,
      y: 40,
      width: "140px",
      height: "140px",
      border: "1px solid #e2e2dc",
      ease: power4,
    },
    "<"
  );

  tl.to(
    path,
    0.8,
    {
      attr: {
        d: start,
      },
      ease: power2.easeIn,
    },
    "<"
  ).to(
    path,
    0.8,
    {
      attr: {
        d: end,
      },
      ease: power2.easein,
    },
    "-=0.5"
  );

  tl.to(
    ".menu",
    1,
    {
      visibility: "visible",
    },
    "-=0.5"
  );

  tl.to(
    ".menu-item > a",
    1,
    {
      top: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.5,
      },
    },
    "-=1"
  ).reverse();
}

///svg responsive

var mySVG = document.getElementById("svg");
if (window.innerWidth < 440) {
  console.log("hello");
  mySVG.setAttribute("viewBox", "0 0 500 1000");
  function revealMenuItems() {
    const start = "M0 502S175 271 500 272s500 230 500 230V0H0Z";
    const end = "M0 1005S175 1095 500 9925s500 5 1000 5V0H0Z";

    const power2 = "power2.inOut";
    const power4 = "power4.inOut";

    tl.to("#hamburger", 1.25, {
      marginTop: "-5px",
      x: -40,
      y: 40,
      ease: power4,
    });

    tl.to(
      "#hamburger span",
      1,
      {
        background: "#e2e2dc",
        ease: power2,
      },
      "<"
    );
    tl.to(
      spanBefore,
      1,
      {
        background: "#e2e2dc",
        ease: power2,
      },
      "<"
    );

    tl.to(
      ".btn .btn-outline",
      1.25,
      {
        x: -40,
        y: 40,
        width: "80px",
        height: "80px",
        border: "1px solid #e2e2dc",
        ease: power4,
      },
      "<"
    );

    tl.to(
      path,
      0.8,
      {
        attr: {
          d: start,
        },
        ease: power2.easeIn,
      },
      "<"
    ).to(
      path,
      0.8,
      {
        attr: {
          d: end,
        },
        ease: power2.easein,
      },
      "-=0.5"
    );

    tl.to(
      ".menu",
      1,
      {
        visibility: "visible",
      },
      "-=0.5"
    );

    tl.to(
      ".menu-item > a",
      1,
      {
        top: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
        },
      },
      "-=1"
    ).reverse();
  }
}
