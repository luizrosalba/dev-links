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