# Typescript

## Intro 

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## Playground 

[https://www.typescriptlang.org/play?#code/Q](https://www.typescriptlang.org/play?#code/Q)

## CheatSheet 

[https://www.typescriptlang.org/cheatsheets](https://www.typescriptlang.org/cheatsheets)
## Type x Interface

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

![Types vs Interfaces](https://res.cloudinary.com/dmo37c7zy/image/upload/v1672401586/typesvsinterface_fqrste.png)

[https://www.typescriptlang.org/play#example/types-vs-interfaces](https://www.typescriptlang.org/play#example/types-vs-interfaces)

[Stack Overflow](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220)

[Differences](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

## CheatSheets

[https://www.sitepen.com/blog/typescript-cheat-sheet](https://www.sitepen.com/blog/typescript-cheat-sheet)

![1](https://res.cloudinary.com/dmo37c7zy/image/upload/v1672401585/ts1_soryoh.png)

![2](https://res.cloudinary.com/dmo37c7zy/image/upload/v1672401587/ts2_z2cajv.png)

![3](https://res.cloudinary.com/dmo37c7zy/image/upload/v1672401586/ts3_bywdkg.png)

![4](https://res.cloudinary.com/dmo37c7zy/image/upload/v1672401586/ts4_ezgv59.png)


## Good Practices 

1) Use unknown instead any 

Unknown can be used to define a variable type latter on the code

2) Use Type Guard 

```typescript
interface IUser {
    id: number
    firstName: string 
    lastName: string
    gender: string
    image: string
    age: number
}

interface IAdminUser extends IUser {
    token : string 
    addNewUser: () => void
}

// object is IAdminUser is type guard
function isAdminUser(object: unknown): object is IAdminUser {
    if (object !== null && typeof object === "object")
        return "token" in object /// check if token inside object
    return false
}

// object is IAdminUser is type guard
function isRegularUser(object: unknown): object is IUser {
    if (object !== null && typeof object === "object")
        return "token" in object /// check if token inside object
    return false
}

async function fetchUser() {
    const response = await fetch('https://dummyjson.com/users/1')
    // Bad No checking if admin or not even if we use badUser: IAdminUser interface no checking is done 
    const badUser = await response.json();
    // Good using Type Guard
    const goodUser: unknown = await response.json();
    if (isAdminUser(goodUser){
        ///goodUser will have all IAdminUser methods
        
    })
    if (isRegularUser(goodUser){
        ///goodUser will have all IUser methods
        
    })
}
```

3) Use is operator

```typescript
type Species = "cat" | "dog"; 
interface Pet { 
    species: Species
}
class Cat implements Pet {
    public species: Species = "cat" 
    public meow(): void {
        console.log("meow")
    }
    public jump(): void {
        console.log("jumping")
    }
    public walk(): void {
        console.log("walking")
    }
    /// Good Is operator
    function petIsCat(pet: Pet): pet is Cat{
        return pet.species === "cat";
    }
    /// Bad wont enable TS to know return is Cat, no autocomplete
    function petIsCatBoolean(pet: Pet): boolean{
        return pet.species === "cat";
    }
}
const p: Pet = new Cat(); 

/// bad 
/// p.meow() does note exists on type Pet 

if (petIsCatBoolean(p)) {
    (p as Cat).meow(); /// bad , will have to repeat the type casting for every method 
}

if (petIsCat(p)) {
    p.meow(); /// good, will use is Operator 
}
```
4) Use satisfies operator (added on TS 4.9)

```typescript
interface ICustomImage {
    data: string
    width: number
    heigth: number

}
const myCustomImage: ICustomImage = {
    data: "base64",
    width: 200,
    height: 150,
}

type UserImage = string | ICustomImage 

interface IUser {
    id: number
    firstName: string 
    lastName: string
    image: UserImage
}

/// Bad 
const badUser: IUser = { 
    id: 1,
    firstName:'Alex',
    lastName: 'Brooks',
    image: 'image-url',
} 
/// badUser.image. wont have all string methods. TS dont know if string or ICustomImage and will make an intersection between these two types 
/// Good 
const goodUser: IUser = { 
    id: 1,
    firstName:'Alex',
    lastName: 'Brooks',
    image: 'image-url',
} satisfies IUser

```

5) Use enums correctly

```typescript 
enum BadState { 
    InProgress,
    Success, 
    Fail
}

const badCheckState = (state: BadState ) => {

}

/// would not raise error 
badCheckState(100);

/// Good 

type GoodState = "InProgress" | "Success" | "Fail" 

/// also good 
enum GoodState2 {
    InProgress = "InProgress"
    Success = "Success"
    Fail = "Fail"
}

const goodCheckState = (state: GoodState ) => {

}

goodCheckState("dfnsndf") // will fail 

```
6) Use Utility Types 

Suppose we wanted to update a single field of a product. We could make all files of IProduct optional 


```typescript 
interface IProduct {
    id: number
    title: string 
    description: string
    thumbnail: string
    price: number
    rating: number
}

/// Partial make anything inside that interface Optional
/// Omit remove id from IProduct
function updateProduct (
    productID: IProduct["id"].
    updateProduct: Partial<Omit<IProduct, "id">>
){
    updateProduct. // wont show id
}


```
7) Use Record 

```typescript
type Properties = "red" | "green" | "blue"
type RGB = [red: number, green: number, blue: number]

// Record create keys and values 
// keys only can be Properties and values can be RGB or String 
const color: Record<Properties, RGB | string > = {
    red: [255,0,0]
    green: "green" 
    blue: "blue"
}
```

## References 

[https://www.typescriptlang.org/docs/handbook/intro.html](https://www.typescriptlang.org/docs/handbook/intro.html)

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

[Mistakes to Avoid](https://www.youtube.com/watch?v=ZCllX1p763U)