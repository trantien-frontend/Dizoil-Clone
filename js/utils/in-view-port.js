export function isInViewport(callback, section) {
  const observer = new IntersectionObserver(callback, { threshold: 1 });
  observer.observe(section);
}
