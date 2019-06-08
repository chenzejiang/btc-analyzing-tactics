import { dealList, historyList, ticker } from '@/api/analys'
import { numberToFixed } from '@/utils/common'
const { coinNameArr } = require('../../utils/coin-name')
import Candlestick from '@/components/Charts/Candlestick'
import WaterBall from '@/components/Charts/WaterBall'
export default {
  name: 'Analysis',
  data() {
    return {
      selectArr: [],
      ticker: {
        last: 0
      },
      selectValue: 'BTC_USDT',
      calculateType: [1, 3, 7, 15, 30, 60, 90, 180, 365],
      highData: []
    }
  },
  components: {
    Candlestick,
    WaterBall
  },
  async mounted() {
    // await this.getNowData()
    // await this.getSelectData()
    // await this.getHistoryData()
  },
  methods: {
    /**
     * table增加class
     */
    cellClassName({ row, column, rowIndex, columnIndex }) {
      // if ((row.price > 0 && columnIndex === 1) || (row.spreads > 0 && columnIndex === 2) || (row.gains > 0 && columnIndex === 3)) {
      //   return 'green'
      // } else if ((row.price < 0 && columnIndex === 1) || (row.spreads < 0 && columnIndex === 2) || (row.gains < 0 && columnIndex === 3)) {
      //   return 'red'
      // } else {
      //   return ''
      // }
      return ''
    },
    /**
     * 给价格增加符号
     */
    cellFormatter(row, column, cellValue, index) {
      const addFlag = cellValue > 0 ? '' : ''
      const perFlag = column.property === 'gains' ? '%' : ''
      return addFlag + row[column.property] + perFlag
    },
    /**
     * 从历史价格计算最高价
     */
    calculatePrice(arr) {
      // console.log(arr)
      // {
      //   title: '今日最高价',
      //   price: 1.23,
      //   spreads: 0.123,
      //   gains: -5.55
      // }
      const { last } = this.ticker // 当前价格
      const resultArr = this.calculateType.map(function(item) {
        const newArr = arr.slice(-item)
        // 2收盘 3最高价 4最低价
        const resultMax = newArr.map(function(resultItem) {
          return resultItem[3]
        })
        const resultMin = newArr.map(function(resultItem) {
          return resultItem[4]
        })
        const resultAverage = newArr.map(function(resultItem) {
          return resultItem[2]
        })
        const high = Math.max.apply(null, resultMax)
        const low = Math.min.apply(null, resultMin)
        /* 平均价 */
        const average = resultAverage.reduce((acc, val) => Number(acc) + Number(val), 0) / resultAverage.length
        const obj = {
          title: `${item}日`,
          /* 最高价 */
          high: high,
          /* 最高差价 */
          highDiff: numberToFixed(last - high),
          /* 最高差价百分比 */
          highGains: numberToFixed((last - average) / last * 100, 2),
          /* 最低价 */
          low: low,
          /* 最低差价 */
          lowDiff: numberToFixed(last - low),
          /* 最低差价百分比 */
          lowGains: numberToFixed((last - low) / last * 100, 2),
          /* 均价 */
          average: numberToFixed(average),
          /* 均价差 */
          averageDiff: numberToFixed(last - average),
          /* 均价差百分比 */
          averageGains: numberToFixed((last - average) / last * 100, 2)
        }
        return obj
      })
      this.highData = resultArr
      // console.log(resultArr)
    },
    /**
     * 获取币种名称
     */
    getCoinName(arr) {
      return arr.map(function(item, index) {
        const itemArr = item.split('_')
        return {
          coin: item,
          name: coinNameArr[itemArr[0]]
        }
      })
    },
    /**
     * 加载下拉数据
     */
    getSelectData() {
      return dealList().then(response => {
        const res = response['data'].filter(function(item, index, array) {
          return (item.split('_')[1] === 'USDT')
        })
        this.selectArr = this.getCoinName(res)
      }).catch((e) => {
        console.log(e)
      })
    },
    /**
     * 获取当前的价格
     */
    getNowData() {
      return ticker({
        coin: 'btc_usdt'
      }).then(response => {
        console.log(response.data)
        this.ticker = response.data
      }).catch((e) => {
        console.log(e)
      })
      // https://data.gateio.co/api2/1/ticker/btc_usdt
    },
    /**
     * 获取历史价格
     */
    getHistoryData() {
      //  time: 时间戳
      //  volume: 交易量
      //  close: 收盘价
      //  high: 最高价
      //  low: 最低价
      //  open: 开盘价
      return historyList({
        coin: 'btc_usdt',
        group: 'sec',
        group_time: 86400,
        range: 'hour',
        range_time: 1000
      }).then(response => {
        const data = response.data
        data.map(function(item) {
          item[0] = new Date(Number(item[0])).format('yyyy-MM-dd hh:mm:ss')
        })
        this.calculatePrice(data)
        // console.log(data)
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
