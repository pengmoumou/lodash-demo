I opened the issue https://github.com/lodash/lodash/issues/5151

```
_.includes('/a/b/c', '/a')
// => false
```

I created this project to replicate the issue ,I found that the reason is that I use "lodash-webpack-plugin" to Implement on-demand loading of lodash.

When I remove lodash in .babelrc, return true

```
_.includes('/a/b/c', '/a')
// => true
```

run this project

```
npm install
npm start
```
