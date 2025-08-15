# 📌 DOM: Document Object Model  

The **DOM (Document Object Model)** represents a web page as a structured tree, enabling **JavaScript** to interact with it.  

🖥 **How it Works?**  
A browser reads your **HTML document** and converts it into the **DOM**, which JavaScript can manipulate dynamically.  

---

## ✨ What Can JavaScript Do with the DOM?  

✔ **Modify HTML** → Add, remove, or update elements.  
✔ **Change Attributes** → Edit attributes like `id`, `class`, etc.  
✔ **Manipulate CSS** → Dynamically apply styles.  
✔ **Handle Events** → Listen to clicks, keypresses, and other interactions.  
✔ **Create Events** → Trigger custom interactions.  

---

## 📌 Accessing Elements in the DOM  

### 🔹 1️⃣ Accessing by ID  
- **Method:** `document.getElementById("id")`  
- **Returns:** A **single element** (or `null` if not found).  

### 🔹 2️⃣ Accessing by Class Name  
- **Method:** `document.getElementsByClassName("className")`  
- **Returns:** A **live HTMLCollection** of matching elements.  

### 🔹 3️⃣ Accessing by CSS Selectors  
#### 🔸 i. Single Element  
- **Method:** `document.querySelector("selector")`  
- **Returns:** The **first** matching element.  

#### 🔸 ii. Multiple Elements  
- **Method:** `document.querySelectorAll("selector")`  
- **Returns:** A **static NodeList** of all matching elements.  

### 🔹 4️⃣ Accessing by Tag Name  
- **Method:** `document.getElementsByTagName("tagName")`  
- **Returns:** A **live HTMLCollection** of elements (e.g., `div`, `p`, `a`).  

### 🔹 5️⃣ Accessing Using Relationships  

#### 🔸 i. Parent Node  
- **Method:** `element.parentNode` / `element.parentElement`  
- **Description:** Gets the immediate parent of an element.  

#### 🔸 ii. Child Nodes  
- **Methods:**  
  - `element.childNodes` → Includes **text nodes**  
  - `element.children` → **Only element nodes**  

#### 🔸 iii. First & Last Child  
- **Methods:**  
  - `element.firstChild` / `element.lastChild` → Any type of node (text, element, comment).  
  - `element.firstElementChild` / `element.lastElementChild` → **Only element nodes**.  

#### 🔸 iv. Sibling Nodes  
- **Methods:**  
  - `element.nextSibling` / `element.previousSibling` → **Any type of node** (includes text/comments).  
  - `element.nextElementSibling` / `element.previousElementSibling` → **Only element nodes**.  

---

## 📌 Working with Content  

### 1️⃣ `innerHTML` 🏷  
✔ **Gets/Sets:** Full HTML content, including tags.  
✔ **Example:**  
```javascript
document.getElementById("box").innerHTML = "<b>Hello!</b>"; 
```

### 2️⃣ `textContent` 📝  
✔ **Gets/Sets:** Only raw text (ignores tags).  
✔ **Example:**  
```javascript
document.getElementById("box").textContent = "Hello!";
```

### 3️⃣ `innerText` 👀  
✔ **Gets/Sets:** Visible text (ignores hidden elements).  
✔ **Example:**  
```javascript
document.getElementById("box").innerText = "Hello!";
```

---
