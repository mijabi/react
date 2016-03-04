# react test

```
$ npm init

$ npm install --save react react-dom

$ npm install --save-dev browserify

$ npm install --save-dev babelify
$ npm install --save-dev babel-preset-react
$ npm install --save-dev babel-preset-es2015

$ touch .babelrc
$ echo '{"presets": ["react", "es2015"]}' >> .babelrc

```
```
# package.json

"script": {
  "build": "browserify src/app.js --transform babelify --outfile build/bundle.js"
}

```
