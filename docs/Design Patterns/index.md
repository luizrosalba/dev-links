# Design Patterns

Credits: [https://refactoring.guru/design-patterns](https://refactoring.guru/design-patterns)

Design patterns are typical solutions to common problems
in software design. Each pattern is like a blueprint
that you can customize to solve a particular
design problem in your code.

Design patterns differ by their complexity, level of detail and scale of applicability to the entire system being designed. I like the analogy to road construction: you can make an intersection safer by either installing some traffic lights or building an entire multi-level interchange with underground passages for pedestrians.

The most basic and low-level patterns are often called idioms. They usually apply only to a single programming language.

The most universal and high-level patterns are architectural patterns. Developers can implement these patterns in virtually any language. Unlike other patterns, they can be used to design the architecture of an entire application.

In addition, all patterns can be categorized by their intent, or purpose. This book covers three main groups of patterns:

- Creational patterns provide object creation mechanisms that increase flexibility and reuse of existing code.

- Structural patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.

- Behavioral patterns take care of effective communication and the assignment of responsibilities between objects.

## 22 Design Patterns

https://refactoring.guru/design-patterns/catalog

### Creational :

1. [Factory Method (Virtual Constructor)](https://refactoring.guru/design-patterns/factory-method) [TsExample](https://refactoring.guru/design-patterns/factory-method/typescript/example)

- Provides an interface for creating objects, but allows subclasses to alter the type of objects that will be created

2. [Abstract Method](https://refactoring.guru/design-patterns/abstract-factory) [TsExample](https://refactoring.guru/design-patterns/abstract-factory/typescript/example)

- Provides an interface for creating families of related objects, without specifying their concrete classes

3. [Builder](https://refactoring.guru/design-patterns/builder) [TsExample](https://refactoring.guru/design-patterns/builder/typescript/example)

- Separates the construction of a complex object from its representation, allowing the same construction process to create different representation

4. [Prototype (clone)](https://refactoring.guru/design-patterns/prototype) [TsExample](https://refactoring.guru/design-patterns/prototype/typescript/example)

- Creates new objects by cloning an existing object rather than creating a new instance from scratch

5. [Singleton](https://refactoring.guru/design-patterns/singleton) [TsExample](https://refactoring.guru/design-patterns/singleton/typescript/example)

- Ensures that only one instance of a class is created and provides a global point of access to that instance

### Behavioral:

1. [Chain of Responsability](https://refactoring.guru/design-patterns/chain-of-responsibility) [TsExample](https://refactoring.guru/design-patterns/chain-of-responsibility/typescript/example)

- Allows multiple objects to handle a request with each object deciding whether to handle the request or pass it on to the next object

2. [Command](https://refactoring.guru/design-patterns/command) [TsExample](https://refactoring.guru/design-patterns/command/typescript/example)

- Encapsulates a request as an object, allowing the request to be parameterized with different arguments, queued or logged, and undone if necessary

3. [Iterator](https://refactoring.guru/design-patterns/iterator) [TsExample](https://refactoring.guru/design-patterns/iterator/typescript/example)

- Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation

4. [Mediator](https://refactoring.guru/design-patterns/mediator) [TsExample](https://refactoring.guru/design-patterns/mediator/typescript/example)

- Defines an object that encapsulates how a set of objects interact, promoting loose coupling between those objects.

5. [Memento](https://refactoring.guru/design-patterns/memento) [TsExample](https://refactoring.guru/design-patterns/memento/typescript/example)

- Provides the ability to restore an object to its previous state (undo)

6. [Observer](https://refactoring.guru/design-patterns/observer) [TsExample](https://refactoring.guru/design-patterns/observer/typescript/example)

- Defines a one-to-many dependency between objects, so that when one object changes states, all its dependents are notified and updated automatically

7. [State](https://refactoring.guru/design-patterns/state) [TsExample](https://refactoring.guru/design-patterns/state/typescript/example)

- Allow an object to alter its behavior when its internal state changes

8. [Strategy](https://refactoring.guru/design-patterns/strategy) [TsExample](https://refactoring.guru/design-patterns/strategy/typescript/example)

-Defines a family of algorithms , encapsulates each one and makes them interchangeable. It lets the algorithm vary independently from clients that use it

9. [Template Method](https://refactoring.guru/design-patterns/template-method) [TsExample](https://refactoring.guru/design-patterns/template-method/typescript/example)

- Defines a skeleton of an algorithm in a base class allowing subclasses to provide specific behavior for some of the steps

10. [Visitor](https://refactoring.guru/design-patterns/visitor) [TsExample](https://refactoring.guru/design-patterns/visitor/typescript/example)

- Separates an algorithm from an object structure on which it operates. The algorithm can then be changed without changing the object structure

### Structural:

1. [Adapter (Wrapper)](https://refactoring.guru/design-patterns/adapter) [TsExample](https://refactoring.guru/design-patterns/adapter/typescript/example)

- Converts the interface of a class into another interface that clients expect. It allows incompatible class to work together

2. [Bridge](https://refactoring.guru/design-patterns/bridge) [TsExample](https://refactoring.guru/design-patterns/adapter/typescript/example)

- Decouples an abstraction from its implementation so that two can vary independently

3. [Composite](https://refactoring.guru/design-patterns/composite) [TsExample](https://refactoring.guru/design-patterns/composite/typescript/example)

- Composes objects into tree structures to represent whole-part hierarchies. It lets clients treat individual objects as compositions of objects uniformly

4. [Decorator](https://refactoring.guru/design-patterns/decorator) [TsExample](https://refactoring.guru/design-patterns/decorator/typescript/example)

- Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

5. [Facade](https://refactoring.guru/design-patterns/facade) [TsExample](https://refactoring.guru/design-patterns/facade/typescript/example)

- Provides a simplified interface to a complex subsystem, making it easier to use and understand.

6. [Flyweigth](https://refactoring.guru/design-patterns/flyweight) [TsExample](https://refactoring.guru/design-patterns/flyweight/typescript/example)

- Shares objects to reduce memory usage. It is useful when many identical object must be created

7. [Proxy](https://refactoring.guru/design-patterns/proxy) [TsExample](https://refactoring.guru/design-patterns/proxy/typescript/example)

- Provides a surrogate or placeholder for another object to control access to it

## My studies on Design Patterns :

[https://github.com/luizrosalba/OO](https://github.com/luizrosalba/OO)
