# index_js

<i>How I can change properties from theme with state? </i>

## `<Root />`
- In rendered variable root **root.render** I add React component `<Root/>` - because I only can define hooks inside a function.That hook I use to follow state **mode** and and chage theme palette based by that state. 

- These hooks are here so we can change theme directly and apply style to all components


## Local Storage

* small memory space in browser which rember values when we enter page next time

```
  const [mode, setMode] = useState(localStorage.getItem("themeMode") || "light");

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);
```

- When we load site for the first time:
  * `localStorage.getItem('themeMode')` gets `null` since still didn't defined themeMode
  * useState(null || ' light') => state here is 'light'