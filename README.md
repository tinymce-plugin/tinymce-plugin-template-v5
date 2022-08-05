# 使用

模板以 tpIndent2em 首行缩进 插件为例子
## 修改pagakage.json

拿到模板需要先更改包名
域 `@tinymce-plugin` 必须存在  `tp-indent2em` 替换成你想要的 以 `tp-`xxxx 命名

其他参数视情况而定
## 修改main.ts

根据例子对应修改
```ts
const opt:pluginOpt = {
  name: "Indent2em",
  registryName: "tpIndent2em",
  title: "First line indent",
  repo: "https://github.com/tinymce-plugin/tp-indent2em",
  icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M170.666667 563.2v-102.4H887.466667v102.4zM170.666667 836.266667v-102.4H887.466667v102.4zM512 290.133333v-102.4H887.466667v102.4zM238.933333 341.333333V136.533333l204.8 102.4z"  p-id="5210"></path></svg>',
}
Plugin(opt)
export default {
  opt
}
```



```json
{
  ....
  "name": "@tinymce-plugin/tp-indent2em",
  ...
}
```

## 安装依赖

```bash
yarn install 
or 
npm run install
```

## 执行自动国际化api

在src/i18n/i18n-api.js 中填写需要翻译的词

```js
const tpI18nTranslate = require('@tinymce-plugin/i18n-api')
tpI18nTranslate([
  'First line indent',
  'First'
],{all:true})
```
执行i18n-api 命令
```bash
yarn i18n
or 
npm run i18n
```
## 开发模式
```bash
yarn dev
or 
npm run dev
```

## 打包
```bash
yarn build
or 
npm run build
```

## 初始化文档编写
```bash
yarn docs:init
or 
npm run docs:init
```

## 文档编写开发模式
```bash
yarn docs
or 
npm run docs
```