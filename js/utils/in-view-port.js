export function isInViewport(callback, section) {
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px 0px",
    threshold: 0,
  });
  observer.observe(section);
}
