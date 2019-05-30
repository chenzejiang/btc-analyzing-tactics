var txt = {
  home:{
    gb:'首页',
    en: 'Home'
  },
  about:{
    gb:'关于',
    en: 'About'
  },
  school:{
    gb:'学院',
    en: 'School'
  },
  article:{
    gb:'文章',
    en: 'Article'
  },
  contact:{
    gb:'联系',
    en: 'Contact'
  },
  coin_exchange:{
    gb:'币币交换',
    en:'coinExchange'
  },
  coin_tool:{
    gb:'CoinTool',
    en:'CoinTool'
  },
  slogan:{
    gb:'王团长区块链学院',
    en:'EOS WTZ'
  },
  pay_bi:{
    gb:'你发送',
    en:'You Send'
  },
  get_bi:{
    gb:'得到',
    en:'You Get'
  },
  receiving_address:{
    gb:'接收地址',
    en:'recipient\'s address'
  },
  exchange_rate:{
    gb:'汇率',
    en:'Exchange Rate'
  },
  estimated_arrival:{
    gb:'估计到达',
    en:'Estimated Arrival'
  },
  pay_id:{
    gb:'支付ID',
    en:'Pay Id'
  },
  send:{
    gb:'发送',
    en:'Send'
  },
  to:{
    gb:'到',
    en:'To'
  },
  copy:{
    gb:'复制',
    en:'Copy'
  },
  copy_success:{
    gb:'复制成功',
    en:'CopySuccess'
  },
  copy_error:{
    gb:'复制失败',
    en:'CopyError'
  },
  optional:{
    gb:'可选',
    en:'Optional'
  },
  must:{
    gb:'必须',
    en:'Must'
  },
  you_will_recieve:{
    gb:'您会收到',
    en:'You will recieve'
  },
  qr_pay:{
    gb:'扫一扫支付',
    en:'Qr Payment'
  },
  start_ex:{
    gb:'开始兑换',
    en:'Exchange'
  },
  ad_1_title:{
    gb:'王团长区块链学院',
    en:'WTZ Blockchain School'
  },
  ad_1_text:{
    gb:'王团长区块链学院通过普及区块链基础知识、输出原创内容、打造圈内互动社区、孵化区块链项目等形式，打造圈内最有影响力、服务千万人的区块链社群。',
    en:'Limits are lame! When you use our service, you don’t have to worry about limitations for exchanges. There is no maximum amount for coin swaps on ChangeNOW. Exchange as much as you want.'
  },
  ad_2_title:{
    gb:'品牌与社群服务',
    en:'Letting go of control'
  },
  ad_2_text:{
    gb:'危机公关、信息传播、社群运营与维护专业的社群运营服务商。',
    en:'Let’s leave all the control to centralized services. As a non-custodial service, ChangeNOW takes care of your safety and does not control your assets. We do not store your funds nor require to sign up.'
  },
  ad_3_title:{
    gb:'区块链基础教育',
    en:'Letting go of control'
  },
  ad_3_text:{
    gb:'致力于建立国内最有温度的区块链知识传播平台，在这里，与最优秀的区块链人一起成长。',
    en:'Our user-friendly service is built for instant coin swaps. All the transactions take under 15 minutes to complete. We also support Visa and MasterCard for fast cryptocurrency purchase.'
  },
  ad_4_title:{
    gb:'量化服务',
    en:'Staying honest with our customers'
  },
  ad_4_text:{
    gb:'为数字资产持有人提供专业的量化服务，您的区块链资产配置专家。',
    en:'You no longer have to worry about picking the best exchange rate. We work with multiple trading platforms and exchange partners to guarantee the best rates to our users.'
  },
  more:{
    gb:'了解更多详细',
    en:'Learn more'
  },
  get_address:{
    gb:function(_type){
      return _type + ' 接收地址'
    },
    en:function(_type){
      return `Enter the recipient's ${_type} address`
    }
  },
  input_address:{
    gb:'请输入接收钱包地址',
    en:'Please enter your wallet address'
  },
  next:{
    gb:'下一步',
    en:'Next'
  },
  before:{
    gb:'上一步',
    en:'before'
  },
  confirm:{
    gb:'确定',
    en:'OK',
  },
  select:{
    gb:'选择',
    en:'select',
  },
  confirms:{
    gb:'确认',
    en:'confirm',
  },
  deposit:{
    gb:'存款',
    en:'deposit',
  },
  success:{
    gb:'成功',
    en:'success',
  },
  minute:{
    gb:'分钟',
    en:'minute',
  },
  no_transaction_pair:{
    gb:'暂不支持此交易对',
    en:'No transaction pair',
  },
  network_error:{
    gb:'网络错误，请重试',
    en:'Network error, please try again',
  },
  min_amount_alert:{
    gb:function(_num,_type){
      return `最小交换数量为: ${_num} ${_type}`
    },
    en:function(_num,_type){
      return `Amount is below the minimum limit: ${_num} ${_type}`
    }
  },
  transaction_success:{
    gb:'交易成功',
    en:'Transaction success',
  },
  awaiting_payment:{
    gb:'等待存款',
    en:'Awaiting payment',
  },
  waiting_for_exchange:{
    gb:'等待交换',
    en:'Waiting for exchange',
  },
  sent_to_your_wallet:{
    gb:'发送到你的钱包',
    en:'Sent to your wallet',
  },
  receive_a_deposit:{
    gb:function(_num,_type){
      return `收到存款: ${_num} ${_type}`
    },
    en:function(_num,_type){
      return `Receive a deposit : ${_num} ${_type}`
    }
  },
  fee:{
    gb:'手续费',
    en:'Fee',
  },
};
export default txt;


