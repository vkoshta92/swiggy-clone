// link vs a
// webkit
// meta in html
// useref
// virtual dom


// The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.

// The React useCallback Hook returns a memoized callback function.

// Think of memoization as caching a value so that it does not need to be recalculated.

// This allows us to isolate resource intensive functions so that they will not automatically run on every render.

// The useCallback Hook only runs when one of its dependencies update.





// The useReducer Hook is similar to the useState Hook.

// It allows for custom state logic.

// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

// React Context
// React Context is a way to manage state globally.

// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)


// The React useState Hook allows us to track state in a function component.

// State generally refers to data or properties that need to be tracking in an application.

// Import useState
// To use the useState Hook, we first need to import it into our component.



// The React useMemo Hook returns a memoized value.

// Think of memoization as caching a value so that it does not need to be recalculated.

// The useMemo Hook only runs when one of its dependencies update.

// This can improve performance.

// https://www.interviewbit.com/redux-interview-questions/