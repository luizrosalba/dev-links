[Reference](https://www.digitalocean.com/community/tutorials/understanding-javascript-closures-a-practical-approach#lexical-scope)

A JavaScript Closure is when an inner function has access to members of the outer function (lexical scope) even when executing outside the scope of the outer function.

Scope refers to the extent of visibility of a variable defined in a program. Ways to create scope in JavaScript are through: try-catch blocks, functions, the let keyword with curly braces among others. We mainly have two variations of scope: the global scope and local scope.

```jsx title='Scopes'
var initialBalance = 0; // Global Scope

function deposit(amount) {
  /**
   * Local Scope
   * Code here has access to anything declared in the global scope
   */
  var newBalance = parseInt(initialBalance) + parseInt(amount);
  return newBalance;
}
```

This means that whatever is declared inside the function’s local scope is not accessible from the outside.

Lexical Scope

JavaScript’s Lexical Scope is determined during the compile phase. It sets the scope of a variable so that it may only be called/referenced from within the block of code in which it is defined.

A function declared inside a surrounding function block has access to variables in the surrounding function’s lexical scope.

```jsx title='Lexical Scopes'
var initialBalance = 300; // Global Scope

function withdraw(amount) {
  /**
   * Local Scope
   * Code here has access to anything declared in the global scope
   */
  var balance = parseInt(initialBalance) - parseInt(amount);

  const actualBalance = (function () {
    const TRANSACTIONCOST = 35;
    return balance - TRANSACTIONCOST;
    /**
     * Accesses balance variable from the lexical scope
     */
  })(); // Immediately Invoked Function expression. IIFE

  // console.log(TRANSACTIONCOST) // ReferenceError: Can't find variable: TRANSACTIONCOST
  return actualBalance;
}
```

Invoking an inner function outside of its enclosing function and yet maintain access to variables in its enclosing function (lexical scope) creates a JavaScript Closure

```jsx title='Creating Closures'
function person() {
  var name = "Paul"; // Local variable

  var actions = {
    speak: function () {
      //  new function scope
      console.log("My name is ", name);
      /**
       * Accessing the name variable from the outer function scope (lexical scope)
       */
    },
  }; // actions object with a function

  return actions;
  /**
   * We return the actions object
   * We then can invoke the speak function outside this scope
   */
}

person().speak(); // Inner function invoked outside its lexical Scope
```

A Closure allows us to expose a public interface while at the same time hiding and preserving execution context from the outside scope.

Some JavaScript design patterns make use of closures.

Module Pattern
One of these well-implemented patterns is the module pattern, this pattern allows you to emulate: private, public, and privileged members.

```jsx title='Module Pattern'
var Module = (function () {
  var foo = "foo"; // Private Property

  function addToFoo(bam) {
    // Private Method
    foo = bam;
    return foo;
  }

  var publicInterface = {
    bar: function () {
      // Public Method
      return "bar";
    },
    bam: function () {
      // Public Method
      return addToFoo("bam"); // Invoking the private method
    },
  };

  return publicInterface; // Object will contain public methods
})();

Module.bar(); // bar
Module.bam(); // bam
```

From our module pattern illustration above, only public methods and properties in the return object will be available outside the closure’s execution context.

All private members will still exist as their execution context is preserved but hidden from the outside scope.

When we pass a function into a setTimeout or any kind of callback. The function still remembers the lexical scope because of the closure.

```jsx title='Callbacks and closure'
function foo() {
  var bar = "bar";
  setTimeout(function () {
    console.log(bar);
  }, 1000);
}

foo(); // bar
```
