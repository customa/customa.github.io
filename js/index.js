// Perfect Scrollbar
const ps = new PerfectScrollbar(document.querySelector("html"));

/* On Scroll Effects */
const sections = [
  document.querySelector("header"),
  ...document.querySelectorAll("section")
];

let options = {
  threshold: 0.5
};

const title = {
  "discord-theme": "Discord",
  "firefox-theme": "Firefox",
  github: "Github",
  header: "Customa",
  "dev-tools": "Dev Tools",
  "current-projects": "Projects",
  idea: "Idea"
};

// Creates Scroll Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(
    entry => {
      // Goes through each entry and checks if they are intersecting
      if (entry.isIntersecting) {
        // If they are an Idle Callback is called to not process the changes on the Main Thread
        window.requestIdleCallback(() => {
          const curSelection = document.querySelector(".currentSection");
          // Selecting the Currently Selected Info Holder (poss. val: main, secondary, tertiary)
          const visElement = curSelection.getAttribute("visibleelement");
          // Gets Text of Currently Selected Info Holder
          const selectedElementText = curSelection.querySelector(
            `.${visElement}`
          ).innerText;
          const selectedElementScroll = title[entry.target.id];
          // If the Currently Selected Text and the Title from the currently overscrolling object are the same (if they are, do nothing)
          if (selectedElementText != selectedElementScroll) {
            curSelection.onclick = () => {
              document
                .getElementById(entry.target.id)
                .scrollIntoView({ behavior: "smooth" });
            };
            // If the Overscrolling Object is the header, switch to the main Info Holder & Animate the Home Button to go Up
            if (selectedElementScroll == "Customa") {
              let animateHome = anime({
                targets: ".homeBar",
                translateX: 45.5,
                easing: "easeOutElastic(.1, 2)"
              });
              const goMain = anime({
                targets: curSelection,
                translateY: 30,
                complete: curSelection.setAttribute("visibleelement", "main"),
                easing: "easeOutElastic(.1, 2)"
              });
            } else {
              // Animate the Home Button to go Up
              let animateHome = anime({
                targets: ".homeBar",
                translateX: document
                  .querySelector(`nav a.${entry.target.id}`)
                  .getAttribute("transform"),
                easing: "easeOutElastic(.1, 2)"
              });
              let curSelected;
              let translationIndex;
              // If Currently Selected Info Holder is main or tertiary, go to secondary
              switch (visElement) {
                case "main":
                case "tertiary":
                  curSelected = "secondary";
                  translationIndex = -1;
                  break;
                // If Currently Selected Info Holder is secondary, go to tertiary
                case "secondary":
                  curSelected = "tertiary";
                  translationIndex = -30;
                  break;
              }
              curSelection.querySelector(
                `.${curSelected}`
              ).innerHTML = selectedElementScroll;

              const goSelection = anime({
                targets: curSelection,
                translateY: translationIndex,
                complete: curSelection.setAttribute(
                  "visibleelement",
                  `${curSelected}`
                ),
                easing: "easeOutElastic(.1, 2)"
              });
            }
          }
        });
      }
    },
    {
      threshold: 0.5
    }
  );
}, options);

sections.forEach(section => {
  observer.observe(section);
});

/* On Click Effects */
scrollToGroup([
  ...document.querySelectorAll("nav .linkBox a"),
  document.querySelector("nav .homeBar a")
]);

function scrollToGroup(links) {
  links.forEach(link => {
    let anchor = document.getElementById(
      link.getAttribute("href").substring(1)
    );

    link.addEventListener("click", () => {
      anchor.scrollIntoView({ behavior: "smooth" });
    });
    link.removeAttribute("href");
  });
}
