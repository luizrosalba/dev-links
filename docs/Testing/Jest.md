# Jest 

## keep all functions from original module but with two functions mocked

```jsx title='Keep module change some funcions Example'
jest.mock('./modulename', () => {
  const originalModule = jest.requireActual('./modulename');
  return {
    __esModule: true,
    ...originalModule,
    function1: jest.fn(),
    function2: jest.fn(),
  };
});
```

## Mocking a module and changing the value from the response 

```jsx title='Mocking a module'

import { module } from './path-to-module';

jest.mock('./path-to-module');

describe('Testing Component', () => {
  const props = { 
    prop1: '1'
    prop2: '2'
  }
  let componentName; 

  beforeEach(() => {
    jest.resetAllMocks();
    componentName = render(<MyComponent {...props} />);
    (moduleName as jest.Mock).mockReturnValue({
      func1: 'return from func1',
      func2: {
        subfunc2: 'return from subfunc2'
      }
    });
  });

  it('should use mocked moduleName', () => {
    const elementName = componentName.queryByTestId('Element data-testid identificator');
    expect(elementName).toBeInTheDocument()
    expect(elementName).not.toBeNull();
  });
  
});
```


## Using async component with jest 

Don't forget the await ahead of the act to render a async component, or your component will behave inconsistently , sometimes will resolve sometimes won't. 

```jsx title='Using async component with jest '
  await act(() => {
    render(
      <YourComponent>
    );
  });
```

## Mocking using spy.on 

```jsx title='Mocking using spy.on '
jest.spyOn(moduleCall(), 'functionName').mockReturnValue({
  key: value
});

```
 
## Mock a default export vs named export

Default: don't forget the callback function 

```jsx title='Mocking a Default export '
jest.mock('./Module',() =>  jest.fn());
```
Named: don't forget the {}

```jsx title='Mocking a Named export '
jest.mock('./Module',() => () => {(functionName: jest.fn())})
);
```

## Mock a hook default export and change value 

1) Do not import the actual hook module 
2) On test file mock by the path 

const mockfunc1 = jest.fn()
let mockValue1 = false

```jsx title='Mocking the hook'
jest.mock('path-to-hook', () => () => {
  return ({
    func1: mockfunc1,
    value1: mockValue1
  })
});
```
3) latter on tests you can do 

```jsx title='Mocking a Named export '
    mockValue1 = true
    component = render(<Component {...props} />);
```