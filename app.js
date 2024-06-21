

class Counter {
  constructor(elementId, target, duration) {
      this.elementId = elementId;
      this.target = target;
      this.duration = duration;
      this.current = 1;
  }

  start() {
      const intervalId = setInterval(() => {
          document.getElementById(this.elementId).innerText = `${this.current}%`;

          if (this.current >= this.target) {
              clearInterval(intervalId);
          } else {
              this.current += 1;
          }
      }, this.duration / this.target);
  }
}

const duration = 2000; // 2 seconds
const counters = [
  new Counter('counter1', 100, duration),
  new Counter('counter2', 100, duration),
  new Counter('counter3', 100, duration),
  new Counter('counter4', 100, duration),
  new Counter('counter5', 90, duration),
  new Counter('counter6', 90, duration)
];

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const counterId = entry.target.getAttribute('id');
          const counter = counters.find(counter => counter.elementId === counterId);
          if (counter) {
              counter.start();
              observer.unobserve(entry.target);
          }
      }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

document.querySelectorAll('h3').forEach(h3 => {
  observer.observe(h3);
});



