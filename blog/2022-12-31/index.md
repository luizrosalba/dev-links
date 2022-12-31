---
slug: vs-code-search-node-modules
title: Vs code search node modules
authors: [luizrosalba]
tags: [typescript, clean code]
---

Vscode won't search node modules by default. Vs code have some default patterns to exclude folders from search , local history, watcher, auto reveal and auto import. 

To make Vscode search in node_modules and others patterns included on search patterns deselect the button on search :  

![Disable exclude Patter](https://res.cloudinary.com/dmo37c7zy/image/upload/v1672489631/disable-exclude-pattern_gpsmcu.png)

To edit the patterns : 

"Open VS User Settings (Main menu: File > Preferences > Settings). This will open the setting screen. Search for files:exclude in the search at the top. Configure the User Setting with new glob patterns as needed. In this case add this pattern node_modules/ then click OK. The pattern syntax is powerful."

![exlude Pattern config](https://res.cloudinary.com/dmo37c7zy/image/upload/v1672489751/exclude-vscode_iivbhv.png)

Source : 

[https://zditect.com/blog/50686898.html](https://zditect.com/blog/50686898.html)