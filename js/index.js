const ps = new PerfectScrollbar(document.querySelector("html"));

const sections = [
  document.querySelector("header"),
  ...document.querySelectorAll("section")
];

const title = {
  "discord-theme": "Discord",
  "firefox-theme": "Firefox",
  github: "Github",
  header: "Customa",
  "dev-tools": "Dev Tools",
  "current-projects": "Projects",
  idea: "Idea"
};

let options = {
  threshold: 0.5
};

function fadeOutIn(element, duration, runInBetween) {
  let fadeOut = anime({
    targets: element,
    opacity: 0,
    duration: 400,
    complete: () => {
      runInBetween();
      element.style.opacity = 0;
      let fadeIn = anime({
        targets: element,
        opacity: 1,
        duration: 400
      });
    }
  });
}

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
          // If the Currently Selected Text and the Title from the currently overscrolling object are the same (if they are, do nothing)
          if (selectedElementText != title[entry.target.classList]) {
            // If the Overscrolling Object is the header, switch to the main Info Holder
            if (title[entry.target.classList] == "Customa") {
              const goMain = anime({
                targets: curSelection,
                translateY: 30,
                complete: curSelection.setAttribute("visibleelement", "main"),
                easing: "easeOutElastic(.1, 2)"
              });
            } else {
              // If Currently Selected Info Holder is main or tertiary, go to secondary
              switch (visElement) {
                case "main":
                case "tertiary":
                  curSelection.querySelector(".secondary").innerHTML =
                    title[entry.target.classList];
                  const goSecondary = anime({
                    targets: curSelection,
                    translateY: 0,
                    complete: curSelection.setAttribute(
                      "visibleelement",
                      "secondary"
                    ),
                    easing: "easeOutElastic(.1, 2)"
                  });
                  break;
                // If Currently Selected Info Holder is secondary, go to tertiary
                case "secondary":
                  curSelection.querySelector(".tertiary").innerHTML =
                    title[entry.target.classList];
                  const goTertiary = anime({
                    targets: curSelection,
                    translateY: -30,
                    complete: curSelection.setAttribute(
                      "visibleelement",
                      "tertiary"
                    ),
                    easing: "easeOutElastic(.1, 2)"
                  });
                  break;
              }
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
