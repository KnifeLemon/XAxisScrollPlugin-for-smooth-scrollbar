# X-Axis Scroll Plugin

Horizontal scrolling plugin for smooth-scrollbar using modifier keys + mouse wheel.

## Features

- **Customizable Modifier Key**: Use Shift, Ctrl, Alt, or Cmd/Win + mouse wheel
- **Momentum-based**: Smooth scrolling experience
- **Lightweight**: Simple and focused functionality

## Installation

### Via NPM

```bash
npm install x-axis-scroll-plugin
```

```javascript
import Scrollbar from 'smooth-scrollbar';
import XAxisScrollPlugin from 'x-axis-scroll-plugin';
```

### Via CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.8.4/smooth-scrollbar.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/KnifeLemon/x-axis-scroll-plugin@main/XAxisScrolling.js"></script>
```

### Manual Download

Download `XAxisScrolling.js` and include it after smooth-scrollbar:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.8.4/smooth-scrollbar.min.js"></script>
<script src="./XAxisScrolling.js"></script>
```

## Usage

```javascript
// Register plugin
Scrollbar.use(XAxisScrollPlugin);

// Method 1: Initialize all scrollbars with global options
Scrollbar.initAll({
    plugins: {
        xAxisScroll: {
            modifierKey: 'shiftKey',
            wheelSensitivity: 1.2
        }
    }
});

// Method 2: Initialize individual scrollbar
const scrollbar = Scrollbar.init(document.getElementById('container'), {
    plugins: {
        xAxisScroll: {
            modifierKey: 'shiftKey',
            wheelSensitivity: 1.2
        }
    }
});
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `modifierKey` | string | `'shiftKey'` | Modifier key ('shiftKey', 'ctrlKey', 'altKey', 'metaKey') |
| `wheelSensitivity` | number | `1.2` | Wheel sensitivity multiplier |

## Controls

- **Shift + Mouse Wheel**: Horizontal scrolling (default)
- **Ctrl + Mouse Wheel**: Alternative modifier key
- **Alt + Mouse Wheel**: Alternative modifier key  
- **Cmd/Win + Mouse Wheel**: Alternative modifier key

## License

MIT