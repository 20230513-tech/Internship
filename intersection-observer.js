const music = document.getElementById("muusic");

if (music) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        music.classList.add("is-visible");
        observer.unobserve(music);
      }
    },
     {
    rootMargin: "0px 0px 0px 120%",
    threshold: 0.35,
  },
  );

  observer.observe(music);
}

//dance observer
const dance = document.getElementById("daance");

if (dance) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        dance.classList.add("is-visible");
        observer.unobserve(dance);
      }
    },
     {
    rootMargin: "0px 0px 0px 120%",
    threshold: 0.35,
  },
  );

  observer.observe(dance);
}

//sports observer
const sports = document.getElementById("spoortss");

if (sports) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        sports.classList.add("is-visible");
        observer.unobserve(sports);
      }
    },
     {
    rootMargin: "0px 0px 0px 120%",
    threshold: 0.35,
  },
  );

  observer.observe(sports);
}