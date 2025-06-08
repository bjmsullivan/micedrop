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
