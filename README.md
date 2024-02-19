# xq-mask
基于Bootstrap5的Modal组件实现的遮罩层组件。

## Install 安装

```bash
npm i xq-mask
```

在ts文件中引入xq-mask

```ts
import {xqMask,xqUnMask} from 'xq-mask';
```
或在HTML页面中通过script标签直接引入xq-mask.js文件
```html
<script type="text/javascript" src="/xq-mask/dist/js/xq-mask.min.js"></script>
```
在Scss文件中引入xq-mask的scss样式
```scss
@import 'xq-mask.scss';
```
或在HTML页面中通过link标签直接引入xq-mask.css文件
```html
<link rel="stylesheet" type="text/css" href="/xq-mask/dist/css/xq-mask.min.css">
```

1、打开遮罩层

```ts

xqMask()

```
2、关闭遮罩层

```ts

xqUnMask()

```


## [点击查看演示](https://www.xqkeji.cn/demo/xq-mask/)