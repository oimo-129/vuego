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

**注意事项：**

1. 在执行 `git add .` 之前，建议检查 .gitignore 文件，确保不需要的文件（如 `node_modules/`）已被忽略
2. 如果遇到推送失败，可能需要先拉取远程仓库：

3. 如果远程仓库不是空的，建议先备份本地代码


\# 方法1：获取远程仓库信息（推荐）

git fetch origin

\# 方法2：查看远程仓库信息

git remote -v

\# 方法3：查看远程仓库的所有分支

git ls-remote origin

1. 拉取远程代码并合并（允许不相关的历史）
git pull origin main --allow-unrelated-histories
2.查看冲突文件
git status
3. 强制推送到远程仓库（会覆盖远程所有内容）

git push -u origin main --force
```






