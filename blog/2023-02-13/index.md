---
slug: using-github-pat-with-vscode
title: Using Github Personal Access token (PAT) with Vscode 
authors: [luizrosalba]
tags: [Vscode, Github, Pat]
---

When you start a project and want to configure Vscode terminal to access you github: 

1) Generate a Personal Access token (PAT) on Github Personal Icon -> Settings -> Developer Settings-> Personal Access token -> Fine or Classic ( fine gives you more control about what token allows vscode to do) -> generate new token and keep note of it

2) on Vscode 
-  git config user.email youremail 
-  git config user.name yourname 
- git branch -M main
-   git remote add origin https://github.com/yourGitName/yourGitRepo.git

3) trying to push will activate a popup that can be filled with you PAT 

4) config is done ! 
