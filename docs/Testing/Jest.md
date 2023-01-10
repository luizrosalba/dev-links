# Jest 

## keep all functions from original module but with two functions mocked

```JS
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

## Using async component with jest 

Don't forget the await ahead of the act to render a async component, or your component will behave inconsistently , sometimes will resolve sometimes won't. 

```JS
  await act(() => {
    render(
      <YourComponent>
    );
  });
```