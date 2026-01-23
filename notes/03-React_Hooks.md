# Hooks

## **useState** 
- `[value, setter] = function(initial)`
- Initial value - Exg. for "counter button"  value would put initial value 0



## **useEffect** 
- `useEffect(() => { side effect }, [deps])`
- A function to run after render
- Side effect - Something I want to do after render, but it doesn’t return a value for JSX


## **useMemo** 
`useMemo	const memoized = useMemo(() => value, [deps])`
- usually index.js doesn't rerender on every page reload. Since we added react component <Root /> than it re renders. useMemo caches value and don't re render on every reload just when mode changes (dark or light).

- useMemo runs while react is rendering, before the component returns jsx.