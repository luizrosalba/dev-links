# Selectors

## Good Docs :

[https://docs.aspose.com/html/net/tutorial/css-selectors/](https://docs.aspose.com/html/net/tutorial/css-selectors/)

[https://www.quackit.com/css/selectors/](https://www.quackit.com/css/selectors/)

[https://dev.to/hellonehha/empower-your-css-skills-by-using-these-3-selectors-477f](https://dev.to/hellonehha/empower-your-css-skills-by-using-these-3-selectors-477f)

[https://dev.to/hellonehha/css-attribute-selectors-demystified-19d5](https://dev.to/hellonehha/css-attribute-selectors-demystified-19d5)

## Simple selectors

Simple selectors (select elements based on name, id, class)

```Html
<p> elements on the page will be center-aligned, with a red text color:

p {
  text-align: center;
  color: red;
}

```

## Group Selectors

You can style many selectors if you like. Just separate the selectors with a comma, as shown in the following example:

```Html

h1, h2, h3 {
    color: #36C;
    font-family: helvetica;
}

Will be selected

<h1>CSS Group Selector (,)</h1>
<h2>The defined style will apply to h1, h2 and h3 elements.</h2>
<h3>The order of the list doesn't matter.</h3>

```

## Combinators

A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

1. descendant selector (space)
2. child selector (>)
3. adjacent sibling selector (+)
4. general sibling selector (~)

### Descendant selector (space)

```Html
1. The descendant selector matches all elements that are descendants of a specified element.

div p {
  background-color: yellow;
}

```

### Child selector (>)

```Html
2. The child selector selects all elements that are the children of a specified element.

The following example selects all <p> elements that are children of a <div> element:

div > p {
  background-color: yellow;
}

```

### Adjacent sibling selector (+)

```Html
3. The adjacent selector in CSS is a selector that selects an element that is immediately adjacent (i.e., comes right after) to another element. The adjacent selector is represented by the plus sign (+) and is used to select the first element that immediately follows the specified element.

The following example selects the first <p> element that are placed immediately after <div> elements:

div + p {
  background-color: yellow;
}
```

### General sibling selector (~)

```HTML
4. The general sibling selector selects all elements that are next siblings of a specified element.

The following example selects all <p> elements that are next siblings of <div> elements:

div ~ p {
  background-color: yellow;
}
```

## Pseudo-class Selectors (:)

A pseudo-class is used to define a special state of an element.

```HTML
For example, it can be used to:

Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus

syntax :

selector:pseudo-class {
  property: value;
}

/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}


```

All Pseudo Elements Selectors

check : [https://www.w3schools.com/css/css_pseudo_elements.asp](https://www.w3schools.com/css/css_pseudo_elements.asp)

## Pseudo-elements selectors (::)

A CSS pseudo-element is used to style specified parts of an element.

```HTML
For example, it can be used to:

Style the first letter, or line, of an element
Insert content before, or after, the content of an element

syntax :

selector::pseudo-element {
  property: value;
}

p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}

```

All Pseudo-elements :

| Selector       | Example         | description                                                  |
| -------------- | --------------- | ------------------------------------------------------------ |
| ::after        | p::after        | Insert something after the content of each p element         |
| ::before       | p::before       | Insert something before the content of each p element        |
| ::first-letter | p::first-letter | Selects the first letter of each p element                   |
| ::first-line   | p::first-line   | Selects the first line of each p element                     |
| ::marker       | ::marker        | Selects the markers of list items                            |
| ::selection    | p::selection    | Selects the portion of an element that is selected by a user |

Notice the double colon notation - ::first-line versus :first-line

## Attribute Selectors

An attribute selector is a type of selector in CSS that selects an element based on the presence or value of a specific attribute. In other words, attribute selectors allow you to target HTML elements based on the value of their attributes.

1. Prefix match selector (^)
2. Suffix match selector ($)
3. Substring match selector (\*)
4. Exact match selector (=)
5. sibling selector (~)

### Prefix match selector (^)

```HTML
1. In CSS, the caret (^) symbol is used as a prefix to select elements based on the beginning of their attribute values. This is called the "starts with" attribute selector.

syntax : [attribute^=value]

a[href^="http"] {
    padding: 30px;
    background: url(images/external.png) no-repeat left center;
    background-size: 20px;
}

will be selected :
   <a href="http://terms.html">Terms</a>

```

### Suffix match selector ($)

```HTML
2. In CSS, the dollar sign ($) symbol is used as a suffix to select elements based on the end of their attribute values. This is called the "ends with" attribute selector.

syntax : [attribute$=value]

a[download$="pdf"] {
    padding: 30px;
    background: url(images/pdf.png) no-repeat left center;
    background-size: 20px;
}

will be selected :
  <a download="learncss.pdf">Learn CSS</a>

```

### Substring match selector (\*)

```HTML
3.In CSS, the asterisk (*) symbol can also be used as a wildcard in attribute selectors to select elements with any attribute name. The syntax for using the asterisk in attribute selectors is:

syntax : [attribute*=value]

a[href*="facebook"] {
   padding: 30px;
   background: url(images/facebook.png) no-repeat left center;
   background-size: 20px;
}

will be selected :
  <a href="http://facebook.com">facebook</a>

```

### Exact match selector (=)

```HTML
4.In CSS, the equal (=) symbol can be used in attribute selectors to select elements with exact attribute name. The syntax for using the equal in attribute selectors is:

syntax : [attribute=value]

img[title=flower] {
    border:2px dotted green;
}

will be selected :
  <img src="flower.jpg" title="flower" />

```

### Sibling selector (~)

```HTML
5.In CSS, the tilde (~) symbol is used as a sibling combinator in attribute selectors to select elements based on their attribute values when they are preceded by a certain sibling element. This is called the "attribute value includes" selector.

syntax : [attribute~=value]

h2 ~ *[class~="primary"] {
  font-weight: bold;
}

will be selected :
  <h2>This is a heading</h2>
<p class="primary">hey</p>

```
