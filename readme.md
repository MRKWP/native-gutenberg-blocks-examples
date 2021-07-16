# Native Gutenberg Block Examples for the Block Editor.

## Available Block Examples.

### Grid Block (grid-block).
This is a block with a Range control to change the number of columns added as a class to the holding `HTML div`. You can then make it change by `CSS` or `SCSS` for that matter.

### Toggle Block (toggle-block).
Add a dynamic `custom-class` style class to your block markup using a toggle control. This block also shows you to add a hard coded block attribute using `data-id` as an example.

## How to use

1. Clone the repo to your local computer using:

```
https://github.com/MRKWP/native-gutenberg-blocks-examples/
```

2. Choose any of the blocks you prefer and add it to your `wp-content/plugins` directory and activate it.

3. Change into the directory of the block you want to use e.g. `grid-block` 
```
cd grid-block
```

4. Install the packages needed to compile the script. 
```
npm install
```
5. To compile your make changes to your project, run:

```
npm start
``` 

**Note:** The block will not work without you running step 5 above. The `build` directory is left out on purpose to allow the build process to be run.