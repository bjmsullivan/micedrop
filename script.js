// Function to wrap each letter of a given element's text with a <span>
function wrapLetters(element) {
    const text = element.innerHTML; // Get the text content of the element
    element.innerHTML = ''; // Clear the current content

    // For each character in the text, wrap it in a <span> tag
    for (let char of text) {
        const span = document.createElement('span');
        span.innerHTML = char;
        
        // If the character is not a space, wrap it in an <i> tag for animation
        if (char !== ' ') {
            const i = document.createElement('i');
            i.appendChild(span);
            element.appendChild(i);
        } else {
            element.appendChild(span); // For spaces, just append the normal <span>
        }
    }
}

// Apply the wrapping to all elements with the class 'wiggle'
document.querySelectorAll('.wiggle').forEach(wrapLetters);

const container = document.getElementById("snow-container");

function createSnowflake() {
  const flake = document.createElement("img");
  flake.classList.add("snowflake");

  // Determine size group and assign image, size, and speed
  const type = Math.random();
  let size, duration, src;

  if (type < 0.33) {
    size = 16;
    duration = 10;
    src = "snow-small.png";
  } else if (type < 0.66) {
    size = 24;
    duration = 15;
    src = "snow-medium.png";
  } else {
    size = 32;
    duration = 22;
    src = "snow-large.png";
  }

  flake.src = src;
  flake.style.width = size + "px";
  flake.style.left = Math.random() * window.innerWidth + "px";
  flake.style.animation = `fall ${duration}s linear`;
  flake.style.opacity = 0.6 + Math.random() * 0.4;

  container.appendChild(flake);

  setTimeout(() => {
    flake.remove();
  }, duration * 1000);
}

// Generate a snowflake every 100 ms
setInterval(createSnowflake, 100);
