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

---

## Git 认证方式对比

### SSH 公钥认证
**特点**：一次配置，永久免密

```bash
# 1. 生成密钥对
ssh-keygen -t rsa -b 4096 -C "your_email@github.com"

# 2. 查看公钥（复制到 GitHub Settings → SSH keys）
cat ~/.ssh/id_rsa.pub
# Windows: type $HOME\.ssh\id_rsa.pub

# 3. 测试连接
ssh -T git@github.com

# 4. 使用 SSH 地址
git remote set-url origin git@github.com:user/repo.git
```

**SSH 地址格式**：`git@github.com:oimo-129/vuego.git`

**配置文件**（解决中文用户名问题）：
```bash
# 创建无中文路径：C:\ssh_config\
# 配置 Git 使用该路径
git config --global core.sshCommand "ssh -i C:/ssh_config/id_rsa -F C:/ssh_config/config"
```

---

### HTTPS Token 认证
**特点**：配置简单，需输入凭据

```bash
# 1. 生成 Personal Access Token
# GitHub → Settings → Developer settings → Tokens
# 权限：勾选 repo

# 2. 使用 HTTPS 地址克隆
git clone https://github.com/oimo-129/vuego.git
# 输入：Username: oimo-129
# 输入：Password: ghp_xxxx（粘贴 Token）

# 3. 缓存凭据（Windows）
git config --global credential.helper wincred

# 4. 切换到 HTTPS
git remote set-url origin https://github.com/oimo-129/vuego.git
```

**HTTPS 地址格式**：`https://github.com/oimo-129/vuego.git`

---

### 两种方式对比

| 特性 | SSH 公钥认证 | HTTPS Token 认证 |
|------|------------|-----------------|
| **配置难度** | 较复杂 | 简单 |
| **日常使用** | 无需密码 ✅ | 需输入 Token |
| **安全性** | 高（4096位加密） | 中（Token可撤销） |
| **适用场景** | 个人开发、长期使用 | 临时使用、CI/CD |
| **端口** | 22（可改443） | 443 |

**推荐**：个人开发使用 SSH，临时环境使用 HTTPS

---

## 分支管理

```bash
# 查看所有分支
git branch -a

# 切换分支
git checkout main

# 创建并切换分支
git checkout -b new-branch

# 删除本地分支
git branch -d branch-name    # 安全删除
git branch -D branch-name    # 强制删除

# 删除远程分支
git push origin --delete branch-name

# 重命名分支
git branch -m old-name new-name

# 清理远程分支引用
git fetch --prune
```






