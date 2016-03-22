# react test

```
# gulp + reactify + browserify

% npm install -g gulp
% npm install gulp --save-dev
% npm install vinyl-source-stream --save-dev
% npm install browserify --save-dev
% npm install gulp-uglify --save-dev
% npm install licensify --save-dev
% npm install reactify --save-dev

% npm install jquery@1.8.3 --save-dev
% npm install lodash --save-dev
```

```
# plain

% npm install -g react-tools

% jsx --watch src/ build/

# 別タブで
% python -m SimpleHTTPServer 0000

```

## memo


### html attributes

- class = className
- for = htmlfor


### compile

- browserify

```json
  "browserify": {
    "transform": [
      ["reactify", {"harmony": true} ]
    ]
  }
```

- [HTML to JSX Compiler](http://facebook.github.io/react/html-jsx.html)

### link

- [qiita advent calender 2014 of virtua-dom](http://qiita.com/advent-calendar/2014/virtual-dom)
- [qiita advent calender 2014 of react](http://qiita.com/advent-calendar/2014/reactjs)
- [qiita advent calender 2015 of react](http://qiita.com/advent-calendar/2015/reactjs)
- [React Community](https://github.com/reactjs)
- [react.rocks](https://react.rocks/)
