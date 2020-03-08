<template>
  <div>
    <!-- 因为引入了 InputNumber 组件，而 InputNumber 组件因为 wxss 不支持 ～ 选择器而无法使用 -->
    <!-- <div class="cnt">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="cnt">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="cnt">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider v-model="value1" :show-tooltip="false"></el-slider>
    </div>
    <div class="cnt">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider v-model="value1" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="cnt">
      <span class="demonstration">禁用</span>
      <el-slider v-model="value1" disabled></el-slider>
    </div>
    <div class="cnt">
      <span class="demonstration">不显示间断点</span>
      <el-slider
        v-model="value2"
        :step="10">
      </el-slider>
    </div>
    <div class="cnt">
      <span class="demonstration">显示间断点</span>
      <el-slider
        v-model="value2"
        :step="10"
        show-stops>
      </el-slider>
    </div>
    <div class="cnt">
      <el-slider
        v-model="value3"
        show-input>
      </el-slider>
    </div>
    <div class="cnt">
      <el-slider
        v-model="value4"
        range
        show-stops
        :max="10">
      </el-slider>
    </div>
    <div class="cnt">
      <el-slider
        v-model="value5"
        vertical
        height="200px">
      </el-slider>
    </div>
    <div class="cnt">
      <el-slider
        v-model="valu6"
        range
        :marks="marks">
      </el-slider>
    </div>
    <div class="cnt">
      <el-input-number v-model="num5"></el-input-number>
      <el-input-number size="medium" v-model="num5"></el-input-number>
      <el-input-number size="small" v-model="num5"></el-input-number>
      <el-input-number size="mini" v-model="num5"></el-input-number>
    </div>
    <div class="cnt">
      <el-input-number v-model="num6" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      value1: 50,
      value2: 0,
      value3: 0,
      value4: [4, 8],
      value5: 0,
      value6: [30, 60],
      marks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {color: '#1989FA'},
          label: this.$createElement('strong', '50%'),
        },
      },  
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>

<style>
.cnt {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.demonstration {
  font-size: 14px;
  color: #8492a6;
  line-height: 44px;
}

.cnt > .el-slider {
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 10px;
}
</style>
