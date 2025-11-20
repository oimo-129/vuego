# Claude Code 使用指南

## 我是谁

我是 **Claude Code**，Anthropic 官方的 AI 编程助手。我可以通过命令行界面帮助您完成各种软件开发任务，包括编写代码、调试问题、重构项目、理解代码库等。

---

## 对前端程序员的帮助

### 1. 框架开发与组件构建

**Vue.js**
- 使用 Composition API 或 Options API 编写组件
- 配置 Vue Router 和动态路由
- 设置 Pinia/Vuex 状态管理
- 实现自定义指令和插件
- 配置 Vite 或 Webpack 构建工具

**React**
- 编写函数组件和 Hooks
- 实现 Context API 或 Redux 状态管理
- 配置 React Router
- 性能优化（useMemo, useCallback, React.memo）

**其他框架**
- Angular、Svelte、Next.js、Nuxt.js 等主流框架

### 2. 样式与UI开发

- 编写和调试 CSS/SCSS/Less/Tailwind CSS
- 实现响应式设计和移动端适配
- 集成 UI 组件库（Element Plus、Ant Design、Material-UI 等）
- 自定义主题和样式覆盖
- CSS-in-JS 方案（styled-components、emotion）
- 动画效果实现（CSS Animations、Framer Motion）

### 3. 前端工程化

- 配置构建工具（Vite、Webpack、Rollup、esbuild）
- 设置代码规范（ESLint、Prettier、Stylelint）
- 配置 TypeScript 及类型定义
- 实现代码分割和懒加载
- 配置环境变量和多环境构建
- 设置路径别名和模块解析

### 4. API 调用与数据处理

- 封装 Axios 或 Fetch 请求
- 实现请求/响应拦截器
- 处理异步数据和错误处理
- 实现数据缓存策略
- WebSocket 实时通信
- GraphQL 查询和 Mutation

### 5. 性能优化

- 分析和优化打包体积
- 实现图片懒加载和虚拟滚动
- 优化首屏加载时间
- 防抖和节流实现
- 内存泄漏检测和修复
- Web Vitals 指标优化

### 6. 测试与调试

- 编写单元测试（Jest、Vitest）
- 编写组件测试（Vue Test Utils、React Testing Library）
- E2E 测试（Playwright、Cypress）
- 调试浏览器兼容性问题
- 排查性能瓶颈

### 7. 工具与实用功能

- 实现自定义 Hooks/Composables
- 工具函数封装
- 本地存储封装（localStorage、sessionStorage、IndexedDB）
- 路由守卫和权限控制
- 表单验证和数据校验
- 国际化（i18n）配置

---

## 对后端程序员的帮助

### 1. API 开发

**RESTful API**
- 设计和实现 REST API 端点
- 实现 CRUD 操作
- 请求参数验证和错误处理
- API 版本控制
- 接口文档生成（Swagger/OpenAPI）

**GraphQL**
- Schema 设计
- Resolver 实现
- Query 和 Mutation 开发
- 数据加载优化（DataLoader）

### 2. 数据库操作

**关系型数据库**
- SQL 查询编写和优化
- 数据库表设计和关系建模
- 索引优化
- 事务处理
- ORM 使用（Sequelize、TypeORM、Prisma）

**NoSQL 数据库**
- MongoDB 文档设计和查询
- Redis 缓存策略
- Elasticsearch 全文搜索

### 3. 服务器与中间件

**Node.js**
- Express/Koa/Fastify 应用开发
- 中间件编写
- 路由设计
- 错误处理中间件
- 请求日志和监控

**Python**
- Django/Flask/FastAPI 应用开发
- 视图和路由配置
- 中间件和装饰器

**Go/Java/PHP** 等其他后端语言

### 4. 身份认证与授权

- JWT Token 实现
- Session 管理
- OAuth 2.0 集成
- RBAC 权限系统设计
- 密码加密和安全存储
- API 鉴权中间件

### 5. 微服务与架构

- 微服务拆分设计
- 服务间通信（REST、gRPC、消息队列）
- API Gateway 配置
- 服务发现和注册
- 负载均衡策略
- 熔断降级机制

### 6. DevOps 与部署

**容器化**
- 编写 Dockerfile
- docker-compose 配置
- 容器编排（Kubernetes 基础）

**CI/CD**
- GitHub Actions 配置
- GitLab CI/CD 配置
- Jenkins Pipeline 编写
- 自动化测试和部署流程

**服务器配置**
- Nginx/Apache 配置
- 环境变量管理
- 系统监控和日志收集

### 7. 数据处理与任务调度

- 批量数据处理脚本
- 定时任务（Cron、任务队列）
- 消息队列（RabbitMQ、Kafka）
- 数据导入导出
- 文件上传和处理
- 邮件发送服务

### 8. 性能优化与监控

- 数据库查询优化
- 缓存策略设计（Redis、Memcached）
- 接口性能分析
- 慢查询定位和优化
- 并发处理优化
- 内存和 CPU 性能调优

### 9. 测试

- 单元测试（Jest、pytest、JUnit）
- 集成测试
- API 测试（Postman、Supertest）
- Mock 数据和服务
- 测试覆盖率提升

---

## 通用能力（前后端通用）

### 代码质量

- 代码重构和优化
- 代码审查和改进建议
- 设计模式应用
- 代码规范统一
- 技术债务清理

### Git 操作

- 提交代码（自动生成符合规范的 commit message）
- 创建 Pull Request
- 分支管理
- 冲突解决建议
- Git Hooks 配置

### 文档编写

- README 文档
- API 文档
- 技术方案文档
- 代码注释补充
- 架构设计文档

### 问题诊断

- Bug 定位和修复
- 错误日志分析
- 性能问题排查
- 依赖冲突解决
- 安全漏洞识别和修复

### 学习与理解

- 解释现有代码逻辑
- 分析代码库架构
- 技术选型建议
- 最佳实践指导
- 新技术集成

---

## 如何使用我

### 基本交互

```bash
# 直接描述你的需求
"帮我实现一个用户登录功能"
"优化这个 SQL 查询"
"解释一下这段代码在做什么"

# 我会自动读取和编辑文件，运行命令，完成任务
```

### 进阶功能

- **并行执行**：告诉我"并行运行"，我会同时执行多个独立任务
- **持续对话**：我会记住上下文，可以连续提问和迭代
- **自主规划**：对于复杂任务，我会自动分解步骤并逐步完成
- **主动提问**：遇到不明确的需求，我会询问你的偏好

### 获取帮助

```bash
/help          # 查看帮助文档
/init          # 分析代码库并生成 CLAUDE.md
```

---

## 使用建议

### 最佳实践

1. **明确需求**：尽量清晰地描述你想要实现的功能
2. **提供上下文**：告诉我相关的文件路径或功能模块
3. **迭代改进**：我的输出可以持续优化，随时提出改进意见
4. **代码审查**：让我帮你审查代码，发现潜在问题

### 注意事项

- 我会自动使用专门的工具读写文件，无需手动指定
- 对于大型任务，我会创建 TODO 列表跟踪进度
- 我会遵循项目现有的代码风格和架构模式
- 所有操作都基于当前工作目录，我可以访问整个代码库

---

## 技术栈支持

### 前端
Vue.js, React, Angular, Svelte, Next.js, Nuxt.js, TypeScript, JavaScript, HTML, CSS, SCSS, Less, Tailwind CSS, Bootstrap, Element Plus, Ant Design, Vite, Webpack, etc.

### 后端
Node.js (Express/Koa/Fastify), Python (Django/Flask/FastAPI), Go, Java (Spring Boot), PHP (Laravel), Ruby (Rails), etc.

### 数据库
MySQL, PostgreSQL, MongoDB, Redis, SQLite, Elasticsearch, etc.

### DevOps
Docker, Kubernetes, GitHub Actions, GitLab CI, Jenkins, Nginx, Apache, etc.

---

## 开始使用

现在你可以直接向我描述你的需求，无论是前端还是后端的任务，我都会尽力帮助你完成！

**示例**：
- "帮我创建一个 Vue 3 登录页面组件"
- "优化这个 Express API 的性能"
- "帮我配置 TypeScript 和 ESLint"
- "解释一下 src/utils/http.js 的作用"
- "创建一个用户权限管理系统"
