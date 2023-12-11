# Css

CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.

[https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)

## Background

## Colors

## Borders

## Box Model

## Outline

## Fonts

## Display

The display property is the most important CSS property for controlling layout.

| Value              | description                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inline             | Displays an element as an inline element (like span ). Any height and width properties will have no effect. This is default.                            |
| block              | Displays an element as a block element (like p ). It starts on a new line, and takes up the whole width                                                 |
| contents           | Makes the container disappear, making the child elements children of the element the next level up in the DOM                                           |
| flex               | Displays an element as a block-level flex container                                                                                                     |
| grid               | Displays an element as a block-level grid container                                                                                                     |
| inline-block       | Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values |
| inline-flex        | Displays an element as an inline-level flex container                                                                                                   |
| inline-grid        | Displays an element as an inline-level grid container                                                                                                   |
| inline-table       | The element is displayed as an inline-level table                                                                                                       |
| list-item          | Let the element behave like a li element                                                                                                                |
| run-in             | Displays an element as either block or inline, depending on context                                                                                     |
| table              | Let the element behave like a table element                                                                                                             |
| table-caption      | Let the element behave like a caption element                                                                                                           |
| table-column-group | Let the element behave like a colgroup element                                                                                                          |
| table-header-group | Let the element behave like a thead element                                                                                                             |
| table-footer-group | Let the element behave like a tfoot element                                                                                                             |
| table-row-group    | Let the element behave like a tbody element                                                                                                             |
| table-cell         | Let the element behave like a td element                                                                                                                |
| table-column       | Let the element behave like a col element                                                                                                               |
| table-row          | Let the element behave like a tr element                                                                                                                |
| none               | The element is completely removed                                                                                                                       |
| initial            | Sets this property to its default value. Read about initial                                                                                             |
| inherit            | Inherits this property from its parent element. Read about inherit                                                                                      |

## Position

Position

| Value                                                                                                                                                                                       | Description                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| static                                                                                                                                                                                      | Default value. Elements render in order, as they appear in the document flow                                            |
| absolute                                                                                                                                                                                    | The element is positioned relative to its first positioned (not static) ancestor element                                |
| fixed                                                                                                                                                                                       | The element is positioned relative to the browser window                                                                |
| relative                                                                                                                                                                                    | The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position |
| sticky                                                                                                                                                                                      | The element is positioned based on the user's scroll position                                                           |
| A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in | place (like position:fixed).                                                                                            |

Note: Not supported in IE/Edge 15 or earlier. Supported in Safari from version 6.1 with a -webkit- prefix.
initial Sets this property to its default value. Read about initial
inherit Inherits this property from its parent element. Read about inherit
