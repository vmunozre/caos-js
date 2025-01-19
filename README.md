# CaosJS

> "A small piece of code for those who want to watch the world burn" - Author

A lightweight JavaScript library to add chaotic and dynamic rotation effects to HTML elements on your webpage.

- **GitHub**: [https://github.com/vmunozre/caos-js](https://github.com/vmunozre/caos-js)
- **License**: MIT
- **Version**: 0.1.1

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [License](#license)

## Installation

You can install `CaosJS` using npm:

```bash
npm install caos-js
```

Or include it directly in your project via a `<script>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/caos-js"></script>
```

## Usage

To use CaosJS, simply create an instance of the library and provide configuration options (optional):
```javascript
const CaosJS = require('CaosJs');

const caos = new CaosJS({
  selector: '.my-elements',
  maxRotation: 5,
  minRotation: -5,
  allowFrequency: true,
  frequency: 0.7,
});
```

## Options

The CaosJS constructor accepts the following configuration options:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `selectors` | `string[]` | `[]` | CSS selectors for elements to apply the effect. |
| `maxRotation` | `number` | `2`  | The maximum degrees rotation value. |
| `minRotation` | `number` | `-2` | The minimum degrees rotation value. |
| `allowFrequency` | `boolean` | `false` | Whether to apply the effect based on a frequency chance. |
| `applyFrequencyToAllElements` | `boolean` | `false` | If `true`, applies frequency to each element individually. |
| `frequency` | `number` | `0.5` | The probability (0-1) of applying the effect when `allowFrequency`  is `true`. |
| `delay` | `number` | `0` | The delay before the effect starts in milliseconds. |

## Examples

### Basic Usage

```javascript
const CaosJS = require('CaosJs');

const caos = new CaosJS({
  selectors: ['.test', 'div'],
  maxRotation: 5,
  minRotation: -5,
  allowFrequency: true,
  frequency: 0.7,
});
```

### HTML example

```html
<div class="chaotic">Element 1</div>
<span>Element 2</span>
<div id="test-id">Element 3</div>

<script src="https://cdn.jsdelivr.net/npm/caos-js"></script>
<script>
  const caos = new CaosJS({
    selectors: ['.chaotic', 'span', '#test-id'],
    maxRotation: 10,  // 10 degrees max rotation
    minRotation: -10, // -10 degrees min rotation
    allowFrequency: true,
    frequency: 0.5, // 50% chance
    delay: 1000,  // 1 second delay
  });
</script>
```

## License

Make by [vmunozre](https://github.com/vmunozre)

MIT License