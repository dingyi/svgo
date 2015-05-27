Fork of SVG that adds some new plugins specifically for working with SVGs exported by Photoshop and Illustrator. Fairly experimental and might break some more complex SVGs.

New plugins:

* [ [>](https://github.com/infinise/svgo/blob/master/plugins/infinise_removeUselessAtributes.js) ] Remove some attributes that generally aren't needed.
* [ [>](https://github.com/infinise/svgo/blob/master/plugins/infinise_limitedOpacityPrecision.js) ] Limit `opacity` precision to 2 decimals.
* [ [>](https://github.com/infinise/svgo/blob/master/plugins/infinise_convertStylesheetToAttrs.js) ] Convert Photoshop's `<style>` tag to attributes on individual elements. Makes them more compatible with Illustrator and the other SVG optimizing plugins.  
* [ [>](https://github.com/infinise/svgo/blob/master/plugins/infinise_removeBoundsElement.js) ] Remove guide elements (everything with the background color `#f0f`). I use this to force Photoshop Generatir to export SVGs at a fixed size, by having a pink rectangle as a the document background, which then gets stripped out by this plugin.

For more usage and configuration information see [the original SVGO page](https://github.com/svg/svgo).

## Usage with svg-gui

1. Download [svgo-gui](https://github.com/svg/svgo-gui)
2. Open a Terminal at `svgo-gui.app/Content/Resources/app.nw/`
3. `npm install https://github.com/infinise/svgo/archive/master.tar.gz --save`