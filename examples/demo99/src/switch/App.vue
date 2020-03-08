<template>
  <div>
    <div class="cnt">
      <el-switch
        v-model="value1"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </div>
    <div class="cnt">
      <el-switch
        v-model="value2"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
      <el-switch
        style="display: block"
        v-model="value3"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
    </div>
    <div class="cnt">
      <!-- el-tooltip 没有效果，表现和不使用 el-tooltip 是一样的 -->
      <el-tooltip :content="'Switch value: ' + value" placement="top">
        <el-switch
          v-model="value4"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="100"
          inactive-value="0">
        </el-switch>
      </el-tooltip>
    </div>
    <div class="cnt">
      <el-switch
        v-model="value1"
        disabled>
      </el-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: '100',
    }
  },
  methods: {},
}
</script>

<style>
.cnt {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.cnt > .el-switch, .cnt > .el-tooltip {
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 10px;
}
</style>
