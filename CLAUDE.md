# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 e-commerce application (vue3-rabbit / 小兔鲜儿) built with Vite. The main application is located in the `vue3-rabbit/` directory.

## Development Commands

```bash
# Navigate to project directory
cd vue3-rabbit

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Directory Structure

```
vue3-rabbit/src/
├── apis/           # API modules organized by feature (layout, home, category, detail)
├── assets/         # Static assets (images, base styles)
├── components/     # Global reusable components (ImageView, XtxSku)
├── directives/     # Custom directives and global component plugins
├── router/         # Vue Router configuration
├── stores/         # Pinia stores using Composition API
├── styles/         # Global SCSS (common.scss, var.scss, element customization)
├── utils/          # Utilities (http.js for axios configuration)
└── views/          # Page components with nested component folders
    └── [ViewName]/
        ├── components/     # View-specific components
        └── composables/    # View-specific composable logic
```

### Router Architecture

- **Layout pattern**: Main routes use a `Layout` component wrapper with nested children
- **Main routes**: Home (`/`), Category (`/category/:id`), SubCategory (`/category/sub/:id`), Detail (`/detail/:id`)
- **Standalone routes**: Login (`/login`), Test (`/test`)
- **Scroll behavior**: Auto-scrolls to top on route changes (configured in router)

### State Management (Pinia)

- Stores use Composition API pattern (setup syntax)
- Located in `src/stores/`
- Pattern: Export state as refs, actions as functions, return both
- Example: `useCategoryStore` manages category navigation data

### API Layer

- **HTTP instance**: Centralized axios configuration in `src/utils/http.js`
  - Base URL: `http://pcapi-xiaotuxian-front-devtest.itheima.net`
  - Timeout: 5000ms
  - Response interceptor automatically returns `res.data`
- **API modules**: Organized by feature in `src/apis/` (layout.js, home.js, category.js, detail.js)
- **Pattern**: Each API file exports named functions that return httpInstance calls

### Composables Pattern

- Reusable logic extracted into `composables/` folders within views
- Use Vue Composition API (ref, onMounted, watch, etc.)
- Handle route-specific data fetching and lifecycle management
- Example: `useCategory.js` handles category data fetching with route updates via `onBeforeRouteUpdate`

### Custom Directives and Global Components

- **File**: `src/directives/index.js` exports two plugins
- **mylazyPlugin**: Registers `v-img-lazy` directive for lazy loading images using VueUse's `useIntersectionObserver`
- **myplugin**: Registers global components (ImageView, XtxSku)
- Both plugins are installed in `main.js`

### Styling System

- **SCSS preprocessor** with auto-imported variables
- **Global styles**: `src/styles/common.scss`, `src/styles/var.scss`
- **Element Plus customization**: `src/styles/element/index.scss`
- **Auto-injection**: Element Plus and var.scss styles automatically available in all components via Vite config
- **Path alias**: `@` resolves to `src/`

### Element Plus Integration

- **Auto-import**: Components and APIs auto-imported via `unplugin-auto-import` and `unplugin-vue-components`
- **Style mode**: Uses SCSS for Element Plus component styles (importStyle: 'sass')
- **No manual imports needed**: Element Plus components can be used directly without explicit imports

## Key Technical Decisions

1. **Composition API**: Entire codebase uses Vue 3 Composition API (no Options API)
2. **Feature-based organization**: View components contain their own components/ and composables/ subdirectories
3. **Centralized HTTP**: Single axios instance with interceptors for all API calls
4. **Performance optimizations**:
   - Lazy loading images with intersection observer
   - Auto-import for Element Plus to reduce bundle size
5. **Route-aware data fetching**: Uses `onBeforeRouteUpdate` in composables to handle same-component route changes