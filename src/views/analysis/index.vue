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
    <div class="chart-container">
      <chart height="100%" width="100%" />
    </div>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="24"><div class="grid-content" />
        <el-table
          class="tablePriceBox"
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
              <span class="price">{{ scope.row.average }}</span>
              <div class="rBox">
                <span class="difference">{{ scope.row.averageDiff | addSymbol }}</span>
                <span class="gains">{{ scope.row.averageGains | addSymbol | perSymbol }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="high"
            label="最高价"
            sortable
            :formatter="cellFormatter"
          >
            <template slot-scope="scope">
              <span class="price">{{ scope.row.high }}</span>
              <div class="rBox">
                <span class="difference">{{ scope.row.highDiff | addSymbol }}</span>
                <span class="gains">{{ scope.row.highGains | addSymbol | perSymbol }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="low"
            label="最低价"
            sortable
            :formatter="cellFormatter"
          >
            <template slot-scope="scope">
              <span class="price">{{ scope.row.low }}</span>
              <div class="rBox">
                <span class="difference">{{ scope.row.lowDiff | addSymbol }}</span>
                <span class="gains">{{ scope.row.lowGains | addSymbol | perSymbol }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./analysis.js" />

<style lang="scss" scoped>
.app-container{
  padding: 0;
}
.red{
  color: #f00;
}
.green{
  color: green;
}
.chart-container{
  position: relative;
  width: 100%;
  height: 50vh;
}
.tablePriceBox{
  .price{
    display:inline-block;
    height: 100%;
  }
  .rBox{
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    .difference{
      display: block;
    }
    .gains{
      display: block;
    }
  }

}
</style>

