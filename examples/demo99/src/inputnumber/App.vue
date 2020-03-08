<template>
  <div>
    <!-- wxss 不支持 ~ 选择器，故不支持此组件 -->
    <!-- <div class="cnt">
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <div class="cnt">
      <el-input-number v-model="num1" :disabled="true"></el-input-number>
    </div>
    <div class="cnt">
      <el-input-number v-model="num2" :step="2"></el-input-number>
    </div>
    <div class="cnt">
      <el-input-number v-model="num3" :step="2" step-strictly></el-input-number>
    </div>
    <div class="cnt">
      <el-input-number v-model="num4" :precision="2" :step="0.1" :max="10"></el-input-number>
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
      num1: 1,
      num2: 5,
      num3: 2,
      num4: 1,
      num5: 1,
      num6: 1,
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

.cnt > .el-input-number {
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 10px;
}
</style>
