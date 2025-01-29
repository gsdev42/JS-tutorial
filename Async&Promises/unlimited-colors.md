## Unlimited colors project notes

### 1. **Generate a Random Color**

```javascript
const randomColor = function() {
    const hex = "0123456789abcdef";  // String containing hex characters.
    let color = "#";  // Initialize color with "#" for hex color format.
    
    // Loop to generate 6 characters for the color code
    for (let i = 0; i < 6; i++) {
        color += hex[(parseInt(Math.random() * 16))];  // Randomly pick a hex character and append to color.
    }
    
    return color;  // Return the generated random color.
}
```

- **Purpose:**  
  This function generates a random hex color code.
- **How it works:**  
  - `hex` contains the possible characters (0-9, a-f) for the color code.
  - A loop runs 6 times to pick 6 random characters, creating a full hex color.
  - Example output: `#3e7bfa`.

### 2. **Start Changing Background Color**

```javascript
let intervalID;

const startChangingColor = function() {
    // Check if intervalID is null (i.e., no interval is running)
    if (!intervalID) {
        intervalID = setInterval(changeBackgroundColor, 1500);  // Start color change every 1500ms.
    }

    function changeBackgroundColor() {
        // Change the body background color using the random color generator
        document.body.style.backgroundColor = randomColor();
    }
}
```

- **Purpose:**  
  This function starts the interval that changes the background color every 1.5 seconds.
- **How it works:**  
  - It checks if `intervalID` is `null`, meaning no interval is active.
  - If not active, it sets an interval using `setInterval` to run the `changeBackgroundColor` function every 1500 milliseconds.
  - `changeBackgroundColor` updates the background color by calling `randomColor()`.

### 3. **Stop Changing Background Color**

```javascript
const stopChangingColor = function() {
    clearInterval(intervalID);  // Stop the interval using intervalID.
    intervalID = null;  // Reset intervalID to null to allow restarting.
}
```

- **Purpose:**  
  This function stops the color-changing interval.
- **How it works:**  
  - `clearInterval(intervalID)` stops the interval associated with `intervalID`.
  - After stopping, it resets `intervalID` to `null` to allow the start button to work again if clicked.

### 4. **Event Listeners**

```javascript
document.getElementById("start").addEventListener("click", startChangingColor);  // Start the color change on "Start" button click
document.getElementById("stop").addEventListener("click", stopChangingColor);    // Stop the color change on "Stop" button click
```

- **Purpose:**  
  These lines attach the `startChangingColor` and `stopChangingColor` functions to the buttons with IDs `start` and `stop`.
- **How it works:**  
  - When the "Start" button is clicked, the `startChangingColor` function is called, starting the color change.
  - When the "Stop" button is clicked, the `stopChangingColor` function is called, stopping the color change.

### **Complete Flow:**

1. **Start Button:**  
   - When the "Start" button is clicked, the background color starts changing every 1.5 seconds.
   - The `startChangingColor` function is called, checking if an interval is already running, and if not, it sets one.

2. **Stop Button:**  
   - When the "Stop" button is clicked, the color change stops.
   - The `stopChangingColor` function clears the interval and resets `intervalID` to `null`.
