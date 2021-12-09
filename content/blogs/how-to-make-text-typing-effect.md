---
title: How To Make Text Typing Effect?
abstract: Lorem Ipsum
tags:
  - HTML
  - CSS
  - JavaScript
date: 2021-11-27T08:34:59.562Z
---

Hello, Welcome to the third article in the “How To Make” series.

It will look like:-

I am going to illustrate how to make this effect using vanilla JavaScript.

Pre-requisites:-

1. Intermediate Knowledge of HTML and CSS
2. CSS animations using keyframes
3. Basics of JavaScript like Immediately Invoked Function Expressions (IIFE), Arrays, Document Object Model API (DOM), and JavaScript Timers.

Now, let's get started.

**Step 1 (Optional)** — I will create a _“wrapper”_ div element to position the text in the middle of the screen and link CSS and JavaScript files with the async attribute to execute it as soon as possible.

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="./style.css" />
  </head>
  <body>
    <div class="wrapper"></div>
    <script src="./script.js" async></div>
  </body>
</html>
```

```css
body {
  margin: 0px;
  padding: 0px;
  text-align: center;
}

.wrapper {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;
  font-weight: 900;
  position: relative;
  font-weight: 200px;
}
```

**Step 2** — Now, I will create a div element with a class name _“typed”_ and id _“typed”_ and then insert some _“p”_ elements inside with the class name _“text”_ and style them such that none of them are visible because they are just being used to provide the text to be written and isn’t going to appear on the page.

```html
<div class="wrapper">
  <div id="typed" class="typed">
    <p class="text">Hello</p>
    <p class="text">How are you?</p>
    <p class="text">This is a typing effect</p>
    <p class="text">Made using vanilla JS</p>
    <p class="text">Thanks for reading this article</p>
  </div>
</div>
```

```css
@import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap") l
  .typed > p {
  font-family: "Pangolin", cusrive;
}

.typed > .text {
  position: absolute;
  visibility: hidden;
}
```

I will make the **position** of the paragraph element **absolute** so that they stack over each other and the maximum width of the containing box will be equal to the maximum width of all the paragraph elements and then set the **visibility** property to **hidden**.

**Note —** The font used is a **Google Font** and don’t forget to the set **position** of the containing element to **relative** so that paragraphs position themselves according to it.

**Step 3(Optional)** — I will use JavaScript **“strict mode”** and write all the code inside an Immediately Invoked Function Expression (IIFE)to avoid polluting the global namespace.


```js
"use strict";

(function () {})();
```

**Step 4** — I will make two arrays: One named **_“contentArray”_** to store the strings contained inside the **_“p”_** element with the class name **_“text”_** and second named **_“typedElement”_** which will store all the element objects with the CSS selector **_“.typed >.text”_** and then insert the text content into the **_“typedElement”_** array using **textContent** property of the element object using a for loop.

```js
let contentArray = [];
let typedElement = document.querySelectorAll(".typed > .text");

for (let i = 0; i < typedElement.length; i++)
  contentArray.push(typedElement[i].textContent);
```

**Step 5** — Now, I will do the following series of steps:-

1. I will dynamically create a ***“p”*** element using the document object ***createElement*** method and store it in the variable named ***“typedPara”***, then
2. I will append the ***“typedPara”*** using the document object ***appendChild*** method into ***“typed” div***, then
3. I will create a ***“span”*** element similarly and store it in a variable named ***“underScore”***, then
4. I will add the text node ***“_”*** inside above ***“span”*** using the document object ***createTextNode*** method, then
5. I will add the class ***“blink”*** using the Element Object ***classList add*** method as shown below to mimic the blinking effect of the cursor.

```js
let typedPara = document.createElement('p');
typedElement[0].parentElement.appendChild(typedPara);
let underScore = document.createElement('span');
underScore.appendChild(document.createTextNode('_'));
underScore.classList.add('blink');
typedPara.appendChild(underScore);
```

```css
.blink {
  animation-name: blinkanim;
  animation-iteration-count: infinite;
  animation-duration: 300ms;
}

@keyframes blinkanim {
  from {
    filter: opacity(0);
  }
  to {
    filter: opacity(100%);
  }
}
```

**Step 6** — Now, I will write the main code to mimic the typing effect.


```js
let i, j;
i = j = 0;

let flag = false;

setInterval(() => {
  // Delete
  if(flag) {
    if(typedPara.childNodes.length === 1) {
      flag = false;
      i++; 
    }
    else 
      typedPara.removeChild(typedPara.childNodes[typedPara.childNodes.length - 2]);
  }
  // Insert
  else {
    if(i === contentArray.length)
      i = 0;

    if(j === contentArray[i].length) {
      flag = true;
      j = 0;
    }
    else {
      typedPara.insertBefore(document.createTextNode(contentArray[i][j]), underScore);
      j++;
    }
  }
}, 200);
```

Step-By-Step Explanation:-
1. I will initialize the variables loop ***i*** and ***j*** to ***0***
2. I will initialize the ***flag*** variable to 0 which will be used to tell the program when to use the delete part and insert part.
3. I will use ***setInterval()*** to control the timing of each step.
4. When the ***flag*** variable is ***0***, the program will continuously insert the characters of the string stored in the multi-dimensional array named ***“contentArray”*** till variable ***j*** becomes equal to the length of the string stored at ***contentArray[i]*** where different ***i*** stores different strings based on their position in the document.
5. When the ***flag*** variable is ***1***, the program will continuously delete the characters before the underscore(***“_”***) element one-by-one using the ***removeChild*** method of the Element object.

The flow-chart below explains the flow of the ***setInterval()***:-

Now, we are done with the programming part and the required effect is ready. So, we are good to go.
