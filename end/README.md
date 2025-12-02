# Oimo Blog - 写日志软件

## 项目简介

这是一个简单的博客日志系统，用于记录和管理个人日志。

## 技术栈

### 前端（front/）
- Vue 3
- Element Plus
- Vite
- Axios

### 后端（end/）
- Django 5.1.4
- Django REST Framework
- MySQL
- Python 3.13.5

## 本地开发

### 前端启动

```bash
cd front
npm install
npm run dev
```

访问：http://localhost:5173

### 后端启动

```bash
cd end

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

# 安装依赖
pip install -r requirements.txt

# 配置数据库（复制 .env.example 为 .env 并修改配置）
cp .env.example .env

# 数据库迁移
python manage.py migrate

# 启动服务
python manage.py runserver
```

访问：http://localhost:8000

## 功能特性

- 日志内容编辑和提交
- 显示当前日期时间
- 日志列表查看（接口已预留）
- 简洁的用户界面

## API 接口

- `POST /api/blogs/` - 创建日志
- `GET /api/blogs/` - 获取日志列表
- `GET /api/blogs/{id}/` - 获取单条日志
- `PUT /api/blogs/{id}/` - 更新日志
- `DELETE /api/blogs/{id}/` - 删除日志

## 部署说明

详见 `end/部署文档.md`

## 许可证

MIT
