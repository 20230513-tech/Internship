const music = document.getElementById("Music");

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