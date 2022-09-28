<div align="center">
  <h1>Auvi</h1>
  <p>
    Dependency-free vanilla JavaScript autocompletion library
  </p>
</div>

# Table of contents

- [About the Project](#about-the-project)
    * [Features](#features)
- [Getting Started](#getting-started)
    * [Installation](#installation)
    * [Run Locally](#run-locally)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [License](#license)

## About the Project

### Features

- Vanilla JavaScript / no dependencies
- Data fetching by predefined array or external url
- Configuration by JavaScript object or data attributes
- Customizable suggestion list items
- Two variants: Tooltip and external list
- Minimal styling / no bloated stylesheets / create your own styling

## 	Getting Started

### Installation

Install auvi with npm

```bash
  npm install auvi
```

### Run Locally

Clone the project

```bash
  git clone https://github.com/jaybee111/auvi.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Build source files

```bash
  npm run build
```

Run tests

```bash
  npm run test
```

## Usage

```javascript
import Auvi from 'auvi'

const myInputElement = document.querySelector('.my-input-element');
const auviInstance = new Auvi(myInputElement).init();

```

### Options

#### Possible options

```javascript
import Auvi from 'auvi'

const myInputElement = document.querySelector('.my-input-element');
const options = {
  mode: "external" | "tooltip",
  minInputLength: Number,
  options: Array<ResultOptionsItemInterface> | string,
  resultItemTemplate: (item: ResultOptionsItemInterface) => string,
  resultListTarget: HTMLElement | undefined,
  loader: () => string | undefined,
};
const auviInstance = new Auvi(myInputElement,options).init();
```

| Key                | data-attribute                        | Type                                                                        | Default value                                                                                   | Mandatory          |
|--------------------|---------------------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|--------------------|
| mode               | data-mode                             | string                                                                      | tooltip                                                                                         |                    |
| minInputLength     | data-min-input-length                 | Number                                                                      | 3                                                                                               | :white_check_mark: |
| options            | data-options (_only for string type_) | [ResultOptionsItemInterface](#resultoptionsiteminterface)[], string         | []                                                                                              |                    |
| resultItemTemplate | _only object notation_                | (item: [ResultOptionsItemInterface](#resultoptionsiteminterface)) => string | ``(optionsItem: ResultOptionsItemInterface) => `${optionsItem.value}`;``                        |                    |
| resultListTarget   | _only object notation_                | HTMLElement, undefined                                                      | undefined                                                                                       |                    |
| loader             | _only object notation_                | () => string, undefined                                                     | ``() => <div class="auvi-loading-indicator"><div></div><div></div><div></div><div></div></div>`` |                    |

##### mode

Two modes are possible: ``tooltip`` and ``external``. 

###### Tooltip

The ``tooltip`` - mode shows the suggestion list as an absolutely positioned element below next to the input element.
```javascript
const options = {
  mode: 'tooltip',
};
```
###### External

The external mode shows the suggestion list in a previously defined html element. Set the [resultListTarget](#resultlisttarget) for this purpose.

```javascript
const options = {
  mode: 'external',
  resultListTarget: document.querySelector('.my-result-list-target')
};
```

##### minInputLength

Sets the character length of the input field from which the search is started.

```javascript
const options = {
  minInputLength: 3,
};
```

##### options

Sets the searchable suggestion list items. Every item should be structured like [ResultOptionsItemInterface](#resultoptionsiteminterface).

###### Array

```javascript
const options = {
  options: [
    {
      value: 'Test 1'
    },
    {
      value: 'Test 2'
    },
    {
      value: 'Test 3'
    }
  ],
};
```

###### string / External URL

```javascript
const options = {
    options: 'https://my-external-api.com/search?q={term}'
};
```

The placeholder ```{term}``` is mandatory and will be replaced with your search phrase. Auvi expects ```json``` from external sources.

##### resultItemTemplate

Sets the template for every suggestion list item.<br />
:heavy_exclamation_mark: **There is no XSS-Injection check, if you use your own template.**

```javascript
const options = {
  resultItemTemplate(optionsItem: ResultOptionsItemInterface) {
    return `<strong>${optionsItem.value}</strong>`;
  },
};
```

#### Data attributes

```html
<input
        type="text"
        value=""
        data-min-input-length="4"
        data-mode="tooltip"
        data-options="https://my-external-api.com/search?q={term}"
/>
```

##### resultListTarget

Sets the html element target for the suggestion list item.

```javascript
const options = {
    resultListTarget: document.querySelector('.my-result-list-target')
};
```

##### loader

Sets the loader element.

```javascript

const options = {
  loader() {
    return `<div class="my-new-loading-indicator"></div>`;
  },
}
```

### Callbacks

#### resultItemClicked

```javascript
import Auvi from 'auvi'

const myInputElement = document.querySelector('.my-input-element');
const auviInstance = new Auvi(myInputElement).init();
auviInstance.on('resultItemClicked', (item) => {
    console.log('Item clicked', item);
});
```

### Events

#### init

Initialize Auvi

```javascript
const myInputElement = document.querySelector('.my-input-element');
const auviInstance = new Auvi(myInputElement).init();
```

#### destroy

Destroy current instance

```javascript
const myInputElement = document.querySelector('.my-input-element');
const auviInstance = new Auvi(myInputElement).init();
auviInstance.destroy();
```

### Types/Interfaces

#### ResultOptionsItemInterface

```javascript
ResultOptionsItemInterface {
  value: string,
  url?: string,
  additionalData?: Object,
}
```

## Roadmap

- :black_square_button: WAI-ARIA support
- :black_square_button: Categorize suggestion list
- :black_square_button: Add custom template support for suggestion list
- :black_square_button: Add demo page with examples
- :black_square_button: Add unit tests

## License

This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.

