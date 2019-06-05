<template>
  <div class="app-container">
    <el-select v-model="selectValue" filterable placeholder="请选择">
      <el-option
        v-for="item in selectArr"
        :key="item.coin"
        :label="item.name"
        :value="item.coin"
      >
        <span style="float: left">{{ item.coin.split('_')[0] }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
      </el-option>
    </el-select>

    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="24"><div class="grid-content" />
        <el-table
          :data="highData"
          :cell-class-name="cellClassName"
        >
          <el-table-column
            prop="title"
            label="日期"
          />
          <el-table-column
            prop="average"
            label="均价"
            sortable
            :formatter="cellFormatter"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.average }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="high"
            label="最高价"
            sortable
            :formatter="cellFormatter"
          />
          <el-table-column
            prop="low"
            label="最低价"
            sortable
            :formatter="cellFormatter"
          />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { dealList, historyList, ticker } from '@/api/analys'
const { coinNameArr } = require('../../utils/coin-name')

export default {
  name: 'Analysis',
  data() {
    return {
      selectArr: [],
      ticker: {},
      selectValue: 'BTC_USDT',
      calculateType: [1, 3, 7, 15, 30, 60, 90, 180, 365],
      highData: []
    }
  },
  async mounted() {
    await this.getNowData()
    await this.getSelectData()
    await this.getHistoryData()
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
        const max = Math.max.apply(null, resultMax)
        const min = Math.min.apply(null, resultMin)
        /* 平均价 */
        const average = resultAverage.reduce((acc, val) => Number(acc) + Number(val), 0) / resultAverage.length
        // +9055.1 +5156
        const obj = {
          title: `${item}日`,
          high: max,
          low: min,
          average: (average).toFixed(2),
          spreads: (last - max).toFixed(2), // 差价 = 当前价格 - 当日收盘价
          gains: ((last - max) / last * 100).toFixed(2)
        }
        return obj
      })
      this.highData = resultArr.reverse()
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
</script>
<style>
.red{
  color: #f00;
}
.green{
  color: green;
}
</style>

