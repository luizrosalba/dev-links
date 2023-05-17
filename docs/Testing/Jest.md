# Jest

[async](https://dev.to/lennythedev/testing-async-stuff-in-react-components-with-jest-and-react-testing-library-mag)

## keep all functions from original module but with two functions mocked

```jsx title='Keep module change some funcions Example'
jest.mock("./modulename", () => {
  const originalModule = jest.requireActual("./modulename");
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
jest.spyOn(moduleCall(), "functionName").mockReturnValue({
  key: value,
});
```

## Mock a default export vs named export

Default: don't forget the callback function

```jsx title='Mocking a Default export '
jest.mock("./Module", () => () => jest.fn());
```

Named: don't forget the curly brackets {}

```jsx title='Mocking a Named export '
jest.mock('./Module',()  => {(functionName: jest.fn())});
```

## Mock a hook default export and change value

```jsx title='1) Mocking the hook'
1. Do not Import the actual hook module if you don't need to change the value.

2. Import the actual hook module if you need to change the value.

import { func1 } from 'pathToFunc1'

const mockfunc1 = jest.fn()
let mockValue1 = false

3. On test file mock by the path and change value of func1

jest.mock("path-to-hook", () => {
  return {
    func1: mockfunc1,
    value1: mockValue1,
  };
});

3.1 or for a default export

jest.mock("path-to-hook", () => () => {
  return {
    func1: mockfunc1,
    value1: mockValue1,
  };
});

4.latter on tests you can change the value that will be rendered

mockValue1 = true
(validateTerms as jest.Mock).mockReturnValue(true);
component = render(<Component {...props} />);
```

## Mock a hook named export and change value

```jsx title='Mock a hook named export and change value '
jest.mock("path", () => ({
  useHook() {
    return {
      attribute: attributeValue,
    };
  },
}));
```

## ReferenceError: Cannot access ... before initialization

Jest needs to return a function when you ask for it

THE GENERAL SOLUTION

```jsx title='Cannot access before initialization'
const myMock = jest.fn();

jest.mock("lib", () => ({
  useLogin: () => myMock(), // ✅ WORKS, myMock needed only on execution
  logout: myMock, // ❌ BREAKS, myMock needed while mocking
  complexHook: () => ({ callback: myMock }), // ✅ WORKS, myMock needed only on execution
  complexSyntaxHook: jest.fn().mockImplementation(() => ({ callback: myMock })), // ✅ WORKS, myMock needed only on execution
}));
```
