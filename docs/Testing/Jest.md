# Jest 

## keep all functions from original module but with two functions mocked

```
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