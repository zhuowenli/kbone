## 不支持的特性列表

### Radio 组件

* RadioButton 组件不支持选中态，因为小程序不支持 input[type=radio]:checked。

### Input 组件

* 不支持 clearable，因为不支持事件的 prevent。
* 不支持 type="textarea"，因为不支持同步的 getComputedStyle。
* 不支持 Autocomplete 组件，因为不支持同步 getComputedStyle 和 getBoundingClientRect。

### InputNumber 组件

* 完全不支持，因为 wxss 不支持 ~ 选择器。

### Select 组件

* 完全不支持，因为不支持同步 getComputedStyle 和 getBoundingClientRect。

### Slider 组件

* 完全不支持，因为引入了 InputNumber 组件。

### Tag 组件

* 不支持 transition，因为不支持同步 getComputedStyle。

### Progress 组件

* 不支持仪表型，因为不支持 SVG。

### Pagination 组件

* 

### Alert 组件

* 不支持 transition，因为不支持同步 getComputedStyle。

### Drawer 组件

* 不支持同步 getComputedStyle

## 其他小程序可改进点

* wxss 不支持 .xxx>:first-child 这样的写法
