window.sr = ScrollReveal();
sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom",
});
sr.reveal(".profile-pic", {
  duration: 2000,
  origin: "top",
  distance: "20rem",
});
sr.reveal(".about-text", {
  duration: 2000,
  origin: "bottom",
  distance: "20rem",
});

sr.reveal(".project-left", {
  duration: 2000,
  origin: "left",
  distance: "20rem",
  viewFactor: 0.2,
});
sr.reveal(".project-right", {
  duration: 2000,
  origin: window.innerWidth > 767 ? "right" : "left",
  distance: "20rem",
  viewFactor: 0.2,
});
