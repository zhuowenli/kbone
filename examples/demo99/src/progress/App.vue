<template>
  <div>
    <div class="cnt">
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="100" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
    <div class="cnt">
      <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
      <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
    </div>
    <div class="cnt">
      <el-progress :percentage="percentage" :color="customColor"></el-progress>
      <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
      <el-progress :percentage="percentage" :color="customColors"></el-progress>
      <div>
        <el-button-group>
          <el-button icon="el-icon-minus" @click="decrease"></el-button>
          <el-button icon="el-icon-plus" @click="increase"></el-button>
        </el-button-group>
      </div>
    </div>
    <!-- 仪表型不支持，因为小程序不支持 svg -->
    <!-- <div class="cnt">
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="70" status="warning"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
    <div class="cnt">
      <el-progress type="dashboard" :percentage="percentage2" :color="colors"></el-progress>
      <div>
        <el-button-group>
          <el-button icon="el-icon-minus" @click="decrease2"></el-button>
          <el-button icon="el-icon-plus" @click="increase2"></el-button>
        </el-button-group>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ],
      percentage2: 10,
      colors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ],
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },

    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },

    increase() {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },

    decrease() {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    },

    increase2() {
      this.percentage2 += 10
      if (this.percentage2 > 100) {
        this.percentage2 = 100
      }
    },

    decrease2() {
      this.percentage2 -= 10
      if (this.percentage2 < 0) {
        this.percentage2 = 0
      }
    },
  },
}
</script>

<style>
.cnt {
  padding: 20px;
}
</style>
