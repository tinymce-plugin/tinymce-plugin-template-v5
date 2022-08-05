# 首行缩进(增强版)

![tinymce-plugin Version](https://img.shields.io/badge/tinymce--plugin->=1-blue.svg?logo=github) [![release candidate](https://img.shields.io/npm/v/@tinymce-plugin/tp-indent2em.svg)](https://www.npmjs.com/package/@tinymce-plugin/tp-indent2em) [![GitHub license](https://img.shields.io/github/license/tinymce-plugin/tp-indent2em.svg)](https://github.com/tinymce-plugin/tp-indent2em/blob/main/LICENSE) [![Download](https://img.shields.io/badge/downloads-main-green.svg)](https://codeload.github.com/tinymce-plugin/tp-indent2em/zip/main) [![tinymce Version](https://img.shields.io/badge/tinymce-%3E%3D%205.2.x-green.svg)](https://www.tiny.cloud) 
> 实现 tinymce 富文本框首行缩进功能 能很好配合 字体大小(fon-size)  字母间距(letter-spacing) 实现首行缩进
## 下载


```sh
npm i @tinymce/tp-indent2em
|
yarn add @tinymce/tp-indent2em
```
```js
import "@tinymce/tp-indent2em"
```


::::tinymce-box
:::html
```html
<textarea id='basic-example'>
  <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128" /></p>
  <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>

  <h2>Got questions or need help?</h2>

  <ul>
    <li>Our <a href="https://www.tiny.cloud/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
    <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
    <li>We also offer enterprise grade support as part of <a href="https://www.tiny.cloud/pricing">TinyMCE premium plans</a>.</li>
  </ul>

  <h2>A simple table to play with</h2>

  <table style="border-collapse: collapse; width: 100%;" border="1">
    <thead>
      <tr>
        <th>Product</th>
        <th>Cost</th>
        <th>Really?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TinyMCE</td>
        <td>Free</td>
        <td>YES!</td>
      </tr>
      <tr>
        <td>Plupload</td>
        <td>Free</td>
        <td>YES!</td>
      </tr>
    </tbody>
  </table>

  <h2>Found a bug?</h2>

  <p>
    If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.
  </p>

  <h2>Finally ...</h2>

  <p>
    Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.
  </p>
  <p>
    Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.
  </p>
</textarea>

```
:::
:::js
```js
tinymce.init({
  selector: 'textarea#basic-example',
  height: 500,
  menubar: false,
  skeletonScreen: true,
  base_url:'/tinymce',
  plugins: [
    'advlist autolink lists link image charmap print preview anchor insertdatetime media table searchreplace visualblocks code fullscreen tpImportword paste tpIndent2em code help wordcount',
  ],
  toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist  | tpImportword tpIndent2em removeformat | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});
```
:::css
```css
#basic-example{
    color: #333;
}
```
:::
::::

:::tinymce-vue3
```vue
<template>
<div>
 <h1>插件demo展示区域</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div>
</template>

<script>
import tinymce from "tinymce";
import "tinymce-plugin";
import TinymceVue from "@tinymce-plugin/tinymce-vue";
export default{
name: 'domeVue3',
components: { TinymceVue },
data(){
    return {
        content: 'dsdsdssfdddddddddddddddddddsd',
        tinymceOptions:{
                // custom_elements: 'tp-collapse',
                min_height: 200,
                max_height: 700,
                skeletonScreen: true,
                tp_i18n: true,
                base_url:'/tinymce',
                plugins: 'code tpIndent2em autoresize preview',
                toolbar: ['|code tpIndent2em | Preview'],
             
        }
    }
  }
}
</script>
```
:::

