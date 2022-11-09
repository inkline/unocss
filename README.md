# @inkline/unocss

UnoCSS Atomic CSS Utility Classes generator Preset by [@alexgrozav](http://github.com/alexgrozav).

✅ Fully typed

✅ 100% Tested

✅ CommonJS and ESM

## Installation
~~~bash
npm i -S @inkline/unocss
~~~

## Usage

~~~ts
import { defineConfig } from 'vite';
import { inkline } from '@inkline/plugin/vite';
import { resolve } from 'path';
import unocss from '@unocss/vite';
import { presetInkline, UserOptions } from '@inkline/unocss';

const inklineConfig: UserOptions = {
    outputDir: resolve(__dirname, 'src/css/config')
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        inkline(inklineConfig),
        unocss({
            presets: [presetInkline(inklineConfig)]
        })
    ]
});

~~~

## License
Commercial
