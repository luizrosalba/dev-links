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

## Pseudo-class Selectors

## Pseudo-elements selects

## Attribute Selectors
