  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = [
    "Web designer",
    "Web developer",
    "WordPress developer",
    "Freelancer"
];

  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 1500; 
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 200);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });


  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const step = () => {
      const speed = 15;
      const increment = Math.max(1, Math.ceil(target / 100));

      if (count < target) {
        count += increment;
        counter.innerText = count;
        setTimeout(step, speed);
      } else {
        counter.innerText = target + (target > 3 ? '+' : '');
      }
    };

    step();
  });

  
