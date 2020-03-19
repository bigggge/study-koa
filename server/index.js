require('@babel/register')({
  presets: [
    '@babel/preset-react',
    '@babel/preset-env'
  ],
});
// https://juejin.im/post/5c90b4115188252d9559136c#heading-0
require('./app.js');
