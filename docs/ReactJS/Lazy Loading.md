# Lazy Loading

```jsx title='Lazy Loading Example'
AVOID :
switch (components) {
    return
        case 'ABC' :
            return <ABC />
        case 'DEF':
            return <DEF />
}
DO:
const componentMapping = {
    ABC: React.lazy (()=> import ('../ABC'))
    DEF: React.lazy (()=> import ('../DEF'))
}

const Component = componentMapping['DEF']

return <Component />

```
