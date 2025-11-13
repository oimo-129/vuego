## git 操作备忘

```
# 1. 查看当前状态
git status

# 2. 添加所有文件到暂存区
git add .

# 3. 提交到本地仓库
git commit -m "Initial commit: Vue3 Rabbit project setup"

# 4. 添加远程仓库地址
git remote add origin https://github.com/oimo-129/vuego.git

# 5. 将本地分支重命名为 main（如果当前是 master）
git branch -M main

# 6. 推送到远程仓库
git push -u origin main
```

**注意事项：**

1. 在执行 `git add .` 之前，建议检查 .gitignore 文件，确保不需要的文件（如 `node_modules/`）已被忽略
2. 如果遇到推送失败，可能需要先拉取远程仓库：

1. 如果远程仓库不是空的，建议先备份本地代码
2. 我注意到你的项目中有一个大型的 `.pak` 文件在 src/assets/HUMMINGBIRD 两个Mod包/，建议将其添加到 `.gitignore` 中，因为这类文件不适合提交到 Git：

你可以将这些命令记录到 [git操作记录.md](vscode-file://vscode-app/c:/Microsoft VS Code/resources/app/out/vs/code/electron-browser/workbench/workbench.html) 文件中以便日后参考。