<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
// eslint-disable-next-line no-unused-vars
import echartsLiquidfill from 'echarts-liquidfill'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    title: {
      type: String,
      default: '标题'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      var value = 0.12
      var data = []
      data.push(value)
      data.push(value)
      data.push(value)

      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        backgroundColor: '#1b2735',
        title: {
          show: true,
          text: this.title,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: 'rgb(97, 142, 205)'
          }
        },
        series: [{
          type: 'liquidFill',
          radius: '80%',
          data: data,
          backgroundStyle: {
            borderWidth: 5,
            borderColor: 'rgb(255,0,255,0.9)',
            color: 'rgb(255,0,255,0.01)'
          },
          label: {
            normal: {
              formatter: (value * 100).toFixed(2) + '%',
              textStyle: {
                fontSize: 40
              }
            }
          }
        }]
      })
    }
  }
}
</script>
