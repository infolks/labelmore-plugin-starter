# labelmore-plugin-starter

A starter kit for labelmore plugin development

## How to use

**Clone this repository to start building plugins:**

```bash
$ git clone https://github.com/infolks/labelmore-plugin-starter.git <PLUGIN_NAME>
```

**Change into the cloned directory by**

```bash
$ cd <PLUGIN_NAME>
```

**Directory Structure**

- dist *Compiled output*
- src *You code here*
- bili.config.ts *bili configuration file*
- package.json *npm package file*

*Note: Make sure to update package.json*

```json
{
  "name": "labelmore-plugin-starter", // change this to your plugin name
  "version": "1.0.0",
  "description": "A starter repo for labelmore plugin development", // change the description

  ...

  "repository": {
    "type": "git",
    "url": "git+https://github.com/infolks/labelmore-plugin-starter.git"
  }, // change repository

  "keywords": [
    "labelmore",
    "plugin",
    "starter"
  ], // change the keywords

  "author": "infolks", // change author
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/infolks/labelmore-plugin-starter/issues" // change url
  },

  "homepage": "https://github.com/infolks/labelmore-plugin-starter#readme", // change home page
  
  ...
}

```

**Compiling the source code**

Run the build command to compile the src folder into dist folder

```
$ npm run build
```