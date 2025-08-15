// ! React.createElement: Creating an element manually in React
const element = React.createElement("h1", {}, "Hello Coder Army");

// -----------------------------------------------
// * React 18: How Rendering Works
// -----------------------------------------------

// ? In older React versions (React 17 and below), we used:
// reactDOM.render(element, document.getElementById('root'));
// ! However, this method is now deprecated in React 18

// ? React 18 introduces `createRoot`, which gives React more control over rendering
const Reactroot = ReactDOM.createRoot(document.getElementById('root')); 

// * Now, React takes control of the root container (`document.getElementById('root')`)
// * Previously, React rendered directly into the root element, but now React handles it internally

// ? Rendering the element inside the root container
Reactroot.render(element);


// -----------------------------------------------
// * React 18: Concurrent Rendering (Faster UI Updates)
// -----------------------------------------------

/*
 ? PROBLEM in older React versions:
   - Suppose we have 50 cards to render when a button is clicked.
   - If we click the button, React starts rendering all 50 cards.
   - While it's rendering, if we click another button, React IGNORES it until the first task (50 cards) is complete.

 ? SOLUTION in React 18:
   - If we click a button, React starts rendering 50 cards.
   - If we click another button midway, React **stops** the first process and listens to the new button click.
   - This ensures **better responsiveness and user experience**.
*/

// -----------------------------------------------
// * Content Delivery Network (CDN) Explained
// -----------------------------------------------

/*
 ? PROBLEM: Single Server Overload
   - Suppose a website's main server is in the USA.
   - If a user from India requests data, their request has to travel across the world.
   - If millions of users send requests, a **single server cannot handle the load efficiently**.

 ? INITIAL SOLUTION: Mirror Servers (Copy Servers)
   - We created **copy servers** in different locations.
   - When a video is uploaded on YouTube, it first goes to the main server.
   - The main server then **copies** the video to all mirror servers.
   - But this approach **failed** because copying data to all servers takes time.

 ? FINAL SOLUTION: Content Delivery Network (CDN)
   - Instead of full-copy servers, **small servers (CDN nodes) are placed globally**.
   - When a user requests a video:
       1️⃣ The request goes to the **nearest CDN server**.
       2️⃣ If the video is available there, it is sent back instantly.
       3️⃣ If the video is **not** available, the request goes to the main server.
       4️⃣ The main server sends the video to the **CDN server** AND the user.
       5️⃣ The CDN server **caches** (stores) the video for future requests.
   - Next time, if another user requests the same video from that location, **CDN responds instantly** without contacting the main server.

 ? What if the nearest CDN server is busy?
   - The request is automatically forwarded to the **next closest CDN**.
*/

// -----------------------------------------------
// * Real-World Example: Why Images Load After Text in Zomato?
// -----------------------------------------------

/*
 ? Observations:
   - In Zomato, after refreshing the page, text loads first, then images.
   - This happens because **static data (images) are stored in CDN servers**, 
     while **dynamic data (restaurant details, ratings) are fetched from the main server**.

 ? Why does this happen?
   1️⃣ **HTML Loads First**:
      - The browser first fetches the **HTML document** from the main server.
      - HTML contains placeholders for images but loads textual content first.
   
   2️⃣ **Images Are Loaded Separately**:
      - The browser **identifies** `<img>` tags in HTML.
      - It then sends **separate** requests to the CDN to fetch the images.
   
   3️⃣ **Lazy Loading for Optimization**:
      - Many platforms (like Zomato) use **lazy loading**.
      - Images **only start loading** when they are about to be visible on the screen.
      - This improves page speed and reduces unnecessary data usage.
*/

