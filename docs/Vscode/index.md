# Vscode

## Shortcuts

![VscodeShortcuts](https://res.cloudinary.com/dmo37c7zy/image/upload/v1672401586/shortcuts_x2dq6l.png)

## Extensions

[Json Crack](https://marketplace.visualstudio.com/items?itemName=AykutSarac.jsoncrack-vscode)

## Format on Save 

To format on sabe you must : 

1) Install the prettier extension 
2) Add to the folder .vscode/settings.json

```
{
    "editor.defaultFormatter": null,
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "vscode.typescript-language-features",
      "editor.formatOnSave": true
    }
  }
```