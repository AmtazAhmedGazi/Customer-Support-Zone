1. What is JSX, and why is it used?
   Ans: JSX is a way to write HTML-like code inside JavaScript in React. It makes creating user interfaces easier and allows us to use JavaScript inside the markup.

2. What is the difference between State and Props?
   Ans: State is used to store data that can change inside a component and re-render it when updated, while props are data passed from a parent component to a child.

3. What is the useState hook, and how does it work?
   Ans: useState is a React hook that lets functional components have state. It returns a state value and a function to update it, and when the state changes, React re-renders the component to show the updated UI.

4. How can you share state between components in React?
   Ans: To share state, I can lift it up to a parent component and pass it down to child components by props.

5. How is event handling done in React?
   Ans: Events in React are handled using arrow functions or passing the function reference to the event, like onClick={handleClick}, so it runs only when the event occurs, not immediately.
