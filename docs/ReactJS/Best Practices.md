## Best Practices

[freeCodeCamp](https://www-freecodecamp-org.cdn.ampproject.org/c/s/www.freecodecamp.org/news/best-practices-for-react/amp/)

## useReducer for complex state

```jsx title='useReducer for complex state'
Avoid :

const CustomersMap = () => {
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [customersData, setCustomersData] = useState([])
  const [hasError, setHasError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasMapLoaded, setHasMapLoaded] = useState(false)
  const [mapData, setMapData] = useState({})
  const [formData, setFormData] = useState({})
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)

  ...

  return ( ... )
}

Do:

// INITIAL STATE
const initialState = {
  isDataLoading: false,
  customerData: [],
  hasError: false,
  isHovered: false,
  hasMapLoaded: false,
  mapData: {},
  formdata: {},
  isBtnDisabled: false
}

// REDUCER
const reducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_CUSTOMER_DATA':
      return {
        ...state,
        customerData: action.payload
      }
    case 'LOAD_MAP':
      return {
        ...state,
        hasMapLoaded: true
      }
    ...
    ...
    ...
    default: {
      return state
    }
  }
}

// COMPONENT
const CustomersMap = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  ...

  return ( ... )
}

```

## Use shorthand for boolean props

```jsx title='Use shorthand for boolean props'
Avoid: <RegistrationForm hasPadding={true} withError={true} />;

Do: <RegistrationForm hasPadding withError />;
```

## Avoid curly braces for string props

```jsx title='Avoid curly braces for string props'
Avoid: <Paragraph variant={"h5"} heading={"A new book"} />;

Do: <Paragraph variant="h5" heading="A new book" />;
```

## Erase non-html attributes when spreading propss

```jsx title='Erase non-html attributes when spreading props'
// always extract all non-HTML attributes from the props first, to make sure that there are only valid HTML attributes in restProps that you're spreading onto a JSX element.

Do:

// Page Component
const IndexPage = () => {

  return (
    <>
      <MainTitle isBold hasPadding>
        Welcome to our new site!
      </MainTitle>
      ...
    </>
  )
}

// MainTitle Component
const MainTitle = ({ isBold, children, hasPadding, ...restProps }) => {

  return (
    <h1
      style={{
        fontWeight: isBold ? 600 : 400,
        padding: hasPadding ? 16 : 0
      }}
      {...restProps}
    >
      {children}
    </h1>
  )
}

```

## Composition Pattern

[https://medium.com/@flavtech/stop-passing-props-between-react-components-apply-composition-pattern-15b132bf0686](https://medium.com/@flavtech/stop-passing-props-between-react-components-apply-composition-pattern-15b132bf0686)
