---
slug: vs-code-switch-git-tree-to-file
title: Vs code switch git tree to file 
authors: [luizrosalba]
tags: [Vscode, shortcuts]
---

When you want to switch from git Working tree to file you don't need to find the file. Add the shortcut to your keybindings.json

1) Open Keyboard Shortcuts on File>Preferences>Keyboard Shortcuts 
2) click on the folder icon , this will open keybindings.json
3) add and save : 


```
{
    "key": "ctrl+shift+q",
    "command": "git.openFile",
    "when": "editorFocus && isInDiffEditor"
},
{
    "key": "ctrl+shift+q",
    "command": "git.openChange",
    "when": "editorFocus && !isInDiffEditor"
}
```

Now hitting ctrl+shift+q with the file open will switch from git tree to file . 


Source : 

[https://code.visualstudio.com/docs/getstarted/keybindings](https://code.visualstudio.com/docs/getstarted/keybindings)
[https://stackoverflow.com/questions/44737285/vs-code-shortcut-for-toggling-git-open-changes-and-git-open-file/48655811#48655811](https://stackoverflow.com/questions/44737285/vs-code-shortcut-for-toggling-git-open-changes-and-git-open-file/48655811#48655811)