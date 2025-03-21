
# Learning DOM

### Difference Between All Three Methods
1. **Using `innerHTML`**: Reveals or modifies the HTML content of an element.
   - Example: Revealing hidden text in an HTML code using `<span>`.
   - ![Example](screenshots/image.png)
   - **Observation**: Hidden text becomes visible when `innerHTML` is used.

2. **Using `querySelector`**: Fetches the first matching element.
   - Example: In a document with two `<h2>` tags, only the first `<h2>` is selected.
   - ![Example](screenshots/image-3.png)

3. **Using `querySelector` with IDs**: Selects an element by its ID.
   - Example:
     ```javascript
     document.querySelector("#myId")
     ```
   - ![Example](screenshots/image-4.png)

4. **Using `querySelector` with Classes**: Selects an element by its class name.
   - Example:
     ```javascript
     document.querySelector(".myClass")
     ```
   - ![Example](screenshots/image5.png)

### Fiddling with DOM
- Experimenting further with DOM manipulations:
  - ![Example](screenshots/image6.png)

---

## Practical DOM Examples

### Selecting and Modifying List Items
 Selecting the first item in a list and changing its background color:
   ```javascript
   const target = myul.querySelector("li")
   target.style.backgroundColor = "green" 
   ```

### querySelectorAll
Selects all queries from the 

```javascript
document.querySelectorAll("li")
````
![alt text](screenshots/image8.png)
- note that its type is nodelist its a colllection and therefore doesnt function like arrays

```````javascript
const tempLiList= document.querySelectorAll("li")
```````


![alt text](screenshots/image9.png)
 - cant do it coz its not array

```````javascript
tempLiList[0].style.color= "green"
```````
- can do in the above way
![alt text](screenshots/image10.png)


- another example: change color of 0th idx h1 tag element
```````javascript
const myH1= document.querySelectorAll("h1")
```````
```````javascript
myH1[0].style.color= "green"
```````

![alt text](screenshots/image11.png)

```````javascript
tempLiList.forEach(function(l){
    l.style.backgroundColor="green"
})
```````

![alt text](screenshots/image12.png)

```````javascript
const myH1= document.querySelctorAll('h10')
```````

##### getElementByClassName()

- we have the following html code
```````html
<ul>
    <li class= "listItem" > one </li>
    <li class= "listItem" > two </li>
    <li class= "listItem" > three </li>
</ul>
```````
```````javascript
const tempClassList=document.getElementsByClassName('listItem')
```````
![alt text](screenshots/image13.png)
- we need to convert the collection to array in order to use the mapping and access elements


```````javascript
const myConvertedArray=Array.from(tempClassList)
```````

```````javascript
myConvertedArray.forEach( function(li){
li.style.color="orange"
})
```````
![alt text](screenshots/image14.png)