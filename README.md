# Dev Stack
- A simple react app

---


  ## Short Description
  - Assignment-05, Batch-14 (Programming Hero). In this app user can experience a smooth UI/UX. add technology in stack. remove from stack etc

---

  ## Technology used
    - React
    - TypeScript
    - Tailwind css
    - Vite
    - React Toastify
---

  ## Features in this App
    1. Responsive Design

    2. JSON data loading and handling

    3. Interactive navigation with state management

--- 


  ## Qouestions and Answers
  1. What is JSX, and why is it used in React?
    -- JSX is a JavaScript syntax extension that lets developers write HTML-like code in React. It makes UI components easier to create, read, maintain, and dynamically render.

  2. What is the difference between props and state?
    -- Props are read-only data passed from a parent component to a child, while state is internal, changeable data managed by the component that can trigger re-rendering.

  3. What does the `useState` hook do, and where did you use it in this project?
    -- The `useState` hook manages changing data within a React component. In this project, I used it in the Nav component to control whether the mobile menu is open or closed.

  4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
    -- The `useEffect` hook runs side effects after rendering. I used it to fetch and load JSON data when the component loads, ensuring the data is available for display.

  5. Why does every item in a `.map()` list need a unique `key` prop?
    -- Every `.map()` list item needs a unique `key` so React can efficiently identify, track, and update individual elements when the list changes, improving rendering performance.

  6. What is conditional rendering? Show one place you used it (example: the empty stack message).
    -- Conditional rendering means showing different UI elements based on a condition. For example, I used it to display an “empty stack” message when the stack contains no items.

  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
    -- Data is passed from parent to child through props. A child can send data back by calling a callback function passed through props from the parent.