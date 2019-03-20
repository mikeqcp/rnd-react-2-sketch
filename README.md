# Styled-components

Install the dependencies

```bash
yarn install
```

### Run it in Sketch

Run with live reloading in Sketch. 
It will contain all pages within single document.

```bash
yarn preview
```

### Build design system boilerplate for sketch

It will build sketch design system boilerplate plugin.
It populates document with design styleguide page and provides additional features like web views templates.

```bash
yarn build:sketch:boilerplate
```

### Build sketch symbols library

It will build sketch symbols collection with all components.
You should import it as a library to your project.

```bash
yarn build:sketch:symbols
```

### Build for sketch

Will build both `build:sketch:symbols` and `build:sketch:boilerplate`

```bash
yarn build:sketch
```

### Build library for web

It will create an UMD modular library inside `dist` folder

```bash
yarn build:web
```
