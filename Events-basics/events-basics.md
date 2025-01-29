**JavaScript Events Notes**

---

### 1. **Handling Events in JavaScript**

#### Using `onclick`
 Old method of handling events
``````javascript
document.getElementById('owl').onclick = function() {
    alert('You clicked on the owl image');
}
``````
**Gyan:** Avoid using `onclick`; prefer `addEventListener` for better event handling.

#### Using `addEventListener`
Better method of handling events
```javascript

document.getElementById('owl').addEventListener('click', function() {
    alert('You clicked on the owl image');
});
```
- Provides separation of JavaScript and HTML.
- Allows multiple event listeners on the same element.

#### Event Listener Parameters
Example with capture flag
```javascript

document.getElementById('owl').addEventListener('click', function(e) {}, false);
```
- The third parameter (`false` by default) determines the event propagation phase.
- `false`: Event Bubbling (default).
- `true`: Event Capturing.

### 2. **Alternative Methods for Event Binding**
- `attachEvent()` (deprecated in modern browsers)
- `jQuery.on()` (for applications using jQuery)

---

### 3. Important Event topics for interview
- `type`: Type of event triggered.
- `target`: Element that triggered the event.
- `currentTarget`: Element the event listener is attached to.
- `clientX`, `clientY`: Mouse coordinates relative to the viewport.
- `pageX`, `pageY`: Mouse coordinates relative to the document.
- `altKey`, `ctrlKey`, `shiftKey`: Modifier keys.
- `timeStamp`: Time when the event was created.

#### Logging Event Properties
```javascript
document.getElementById('owl').addEventListener('click', function(e) {
    console.log(e);
}, false);
```

---

### 4. **Event Propagation**

#### Event Bubbling (default)
```javascript
// Bubbling example
document.getElementById('images').addEventListener('click', function(e) {
    console.log('You clicked inside the ul tag');
}, false);

document.getElementById('owl').addEventListener('click', function(e) {
    console.log('owl clicked');
}, false);
```
- Inner element events are handled before outer elements.
- Output when owl is clicked:
  ```
  owl clicked
  You clicked inside the ul tag
  ```

#### Event Capturing
```javascript
// Capturing example
document.getElementById('images').addEventListener('click', function(e) {
    console.log('You clicked inside the ul tag');
}, true);

document.getElementById('owl').addEventListener('click', function(e) {
    console.log('owl clicked');
}, true);
```
- Outer elements handle events before inner elements.
- Output when owl is clicked:
  ```
  You clicked inside the ul tag
  owl clicked
  ```

---

### 5. **Stopping Event Propagation**
```javascript
// Stop propagation example
document.getElementById('owl').addEventListener('click', function(e) {
    console.log('owl clicked');
    e.stopPropagation();
}, false);

document.getElementById('images').addEventListener('click', function(e) {
    console.log('You clicked inside the ul tag');
}, false);
```
- Output when owl is clicked:
  ```
  owl clicked
  ```
- Stops the event from propagating to parent elements.

---

### 6. **Preventing Default Behavior**
```javascript
Prevent default example
document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('You clicked on the link');
}, false);
```
- Prevents default behavior, such as following a link.
- Output when the link is clicked:
  ```
  You clicked on the link
  ```

---

### 7. **Removing Elements Dynamically**
```javascript
// Removing elements on click
document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.tagName); // Output: UL or IMG
    if (e.target.tagName === 'IMG') {
        let removeItem = e.target.parentNode;
        removeItem.remove();
    }
}, false);
```
- Clicking an image removes the corresponding list item.
- Ensures the event target is strictly an `IMG` element.

#### Alternative Method for Removing Elements
```javascript
removeItem.parentNode.removeChild(removeItem);
```
- Removes the child element (`removeItem`) from its parent node.

---

