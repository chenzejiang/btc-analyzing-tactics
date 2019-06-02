<template>
  <div class="app-container">
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="24"><div class="grid-content" />
        <el-table
          :data="tableData"
          :default-sort="{prop: 'price', order: 'descending'}"
          :cell-class-name="cellClassName"
        >
          <el-table-column
            prop="title"
            label="#"
            width="180"
          />
          <el-table-column
            prop="price"
            label="价格"
            sortable
            width="180"
            :formatter="cellFormatter"
          />
          <el-table-column
            prop="spreads"
            label="与当前价差"
            sortable
            width="180"
            :formatter="cellFormatter"
          />
          <el-table-column
            prop="gains"
            label="价差比"
            sortable
            :formatter="cellFormatter"
          />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Analysis',
  data() {
    return {
      tableData: [{
        title: '今日最高价',
        price: 1.23,
        spreads: 0.123,
        gains: -5.55
      },
      {
        title: '三日最高价',
        price: -1.23,
        spreads: -0.123,
        gains: 5.55
      }]
    }
  },
  methods: {
    cellClassName({ row, column, rowIndex, columnIndex }) {
      if ((row.price > 0 && columnIndex === 1) || (row.spreads > 0 && columnIndex === 2) || (row.gains > 0 && columnIndex === 3)) {
        return 'green'
      } else if ((row.price < 0 && columnIndex === 1) || (row.spreads < 0 && columnIndex === 2) || (row.gains < 0 && columnIndex === 3)) {
        return 'red'
      } else {
        return ''
      }
    },
    cellFormatter(row, column, cellValue, index) {
      const addFlag = cellValue > 0 ? '+' : ''
      const perFlag = column.property === 'gains' ? '%' : ''
      return addFlag + row[column.property] + perFlag
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

