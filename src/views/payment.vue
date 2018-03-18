<template>
  <div id="payment">
    <div class="content page-order-payment">
        <div class="gray-box clear">
            <div class="title">
                <h2>支付订单</h2>
            </div>
            <div class="box-inner order-info">
                <h3>提交订单成功</h3>
                <p class="payment-detail">请在 <span>24 小时内</span>完成支付，超时订单将自动取消。</p>
                <p class="payment-detail">我们将在您完成支付后的 72 小时内发货</p>    
            </div>
            <div class="box-inner payment-checkout-panel clear">
                <span class="jianguo-blue-main-btn big-main-btn js-payment-order">
                    <a>现在支付</a>
                </span>
                <span class="prices"> 应付金额：   <em><span>¥ </span>199.00</em>   </span>
            </div>
        </div>
        <div class="confirm-detail">
            <div class="info-title">订单编号</div>
            <p class="info-detail">170620718648448</p>
        </div>
        <div class="confirm-detail">
            <div class="info-title">收货信息</div>
            <p class="info-detail">姓名：王某某</p>
            <p class="info-detail">联系电话：13811111111</p>  <p class="info-detail">详细地址：北京市市辖区海淀区上地十街辉煌国际西6号楼319室</p>
        </div>
        <div class="confirm-detail">
            <div class="info-title">发票信息</div>
            <p class="info-detail">发票类型：电子发票</p>
            <p class="info-detail">发票抬头：个人</p>
            <p class="info-detail">发票内容：购买商品明细</p>
        </div>
        <div class="confirm-table-title clear">
            <span class="name fn-left">商品信息</span>
            <span class="subtotal fn-right">小计</span>
            <span class="num fn-right">数量</span>
            <span class="price fn-right">单价</span>
        </div>
        <div class="confirm-goods-table">
            <div class="cart-items clear">
                <div class="name fn-left hide-row">
                    <div class="name-cell"> 
                        <a href="http://www.smartisan.com/shop/#/item/100029901" title="Smartisan 快充移动电源 10000mAh（灰色）" target="_blank">Smartisan 快充移动电源 10000mAh（灰色）</a><br>
                    </div>
                </div>
                <div class="subtotal fn-right">
                    <div class="subtotal-cell">¥ 199.00</div>
                </div>
                <div class="goods-num fn-right">1</div>
                <div class="price fn-right">¥ 199.00</div> 
            </div>
            <div class="cart-items clear">
                    <div class="name fn-left hide-row">
                        <div class="name-cell"> 
                            <a href="http://www.smartisan.com/shop/#/item/100029901" title="Smartisan 快充移动电源 10000mAh（灰色）" target="_blank">Smartisan 快充移动电源 10000mAh（灰色）</a><br>
                        </div>
                    </div>
                    <div class="subtotal fn-right">
                        <div class="subtotal-cell">¥ 199.00</div>
                    </div>
                    <div class="goods-num fn-right">1</div>
                    <div class="price fn-right">¥ 199.00</div> 
                </div>
        </div>
        <div class="order-discount-line">
            <p> 商品总计： <span>¥ 199.00</span> </p>
            <p> 运费： <span>+ ¥ 0.00</span> </p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order",
  data: () => ({

  })
}
</script>
<style>
.header-desktop{
    display: none;
}
.content{
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
}
.page-order-payment{
    padding-top: 39px;
}
.gray-box{
    overflow: hidden;
    border: 1px solid #D1D1D1;
    border-color: rgba(0,0,0,.14);
    border-radius: 8px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    background: #fff;
}
.page-order-payment .gray-box{
    margin: 0 auto 60px;
}
.gray-box .title{
    height: 60px;
    padding: 0 10px 0 28px;
    background: linear-gradient(#FFF,#F5F5F5);
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0,0,0,.06);
    line-height: 60px;
    color: #646464;
}
.gray-box .title h2{
    font-size: 18px;
    font-weight: 400;
    color: #626262;
}
.page-order-payment .order-info{
    padding: 60px 0 55px;
    color: #333;
}
.page-order-payment .order-info h3{
    padding-bottom: 14px;
    line-height: 36px;
    text-align: center;
    font-size: 36px;
    color: #212121;
}
.page-order-payment .order-info .payment-detail{
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    color: #999;
}
.page-order-payment .order-info .payment-detail span{
    font-weight: bolder;
    color: #DE4037;
}
.page-order-payment .order-info .payment-detail{
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    color: #999;
}
.page-order-payment .payment-checkout-panel{
    padding: 10px 10px 10px 0;
    line-height: 60px;
    background: #f9f9f9;
    border-top: 1px solid #e5e5e5;
    box-sizing: border-box;
}
.jianguo-blue-main-btn{
    background: linear-gradient(#6383C6,#4262AF);
    box-shadow: none;
}
.blue-main-btn, .gray-main-btn, .jianguo-blue-main-btn{
    display: block;
    padding: 1px;
    margin: 0 auto;
    border-radius: 6px;
    background: linear-gradient(#5598c9,#2a6da2);
    text-align: center;
    text-shadow: rgba(255,255,255,.496094) 0 1px 0;
    font-family: 'Microsoft Yahei','微软雅黑','PingFang SC',sans-serif;
    cursor: pointer;
    user-select: none;
}
.page-order-payment .big-main-btn{
    float: right;
    width: 120px;
    height: 40px;
    line-height: 40px;
    margin: 0 0 0 10px;
}
.jianguo-blue-main-btn a{
    display: block;
    border-radius: 6px;
    cursor: pointer;
    background: linear-gradient(#6F97E5,#527ED9);
    box-shadow: inset 0 1px 2px #7EA1E8;
    text-shadow: 0 -1px 0 #4F70B3;
    color: #FFF;
    transition: all .3s ease;
}
.page-order-payment .big-main-btn a{
    height: 40px;
    padding: 0;
    line-height: 40px;
    font-size: 16px;
}
.jianguo-blue-main-btn:hover a{
    box-shadow: inset 0 1px 1px #7696DE, inset 0 0 2px #627DCA, inset 0 -2px 3px #5A77C7, inset 0 0 100px rgba(48,77,147,.4);
}
.page-order-payment .prices{
    float: right;
    line-height: 24px;
    padding: 6px 20px 6px 0;
    font-size: 14px;
}
.page-order-payment .prices em{
    margin-left: 5px;
    font-size: 24px;
    color: #D44D44;
}
.page-order-payment .confirm-detail{
    padding: 0 30px 25px;
    border-top: 1px solid #d5d5d5;
}
.page-order-payment .confirm-detail .info-title{
    height: 14px;
    padding: 30px 0 17px;
    line-height: 14px;
    font-weight: bolder;
    color: #333;
}
.page-order-payment .confirm-detail .info-detail{
    line-height: 24px;
    color: #666;
}
.page-order-payment .confirm-table-title{
    padding: 3px 0 0 30px;
    border-top: 1px solid #D5D5D5;
    line-height: 54px;
    font-weight: bolder;
    color: #000;
}
.page-order-payment .confirm-table-title .num, .page-order-payment .confirm-table-title .price, .page-order-payment .confirm-table-title .subtotal{
    width: 175px;
    padding-right: 29px;
    text-align: right;
}
.page-order-payment .confirm-goods-table{
    padding-left: 30px;
    border-top: 1px solid #D5D5D5;
}
.page-order-payment .cart-items{
    height: 80px;
    border-top: 1px solid #D5D5D5;
}
.page-order-payment .cart-items:first-child{
    border-top: none;
}
.hide-row{
    overflow: hidden;
    word-break: keep-all;
}
.page-order-payment .cart-items .name{
    display: table;
    width: 540px;
    height: 100%;
}
.page-order-payment .cart-items .name-cell{
    display: table-cell;
    line-height: 22px;
    vertical-align: middle;
    color: #333;
}
.page-order-payment .cart-items .name-cell a{
    color: #333;
}
.page-order-payment .cart-items .goods-num, .page-order-payment .cart-items .price, .page-order-payment .cart-items .subtotal{
    width: 175px;
    padding-right: 29px;
    line-height: 80px;
    text-align: right;
}
.page-order-payment .cart-items .goods-num{
    width: 28px;
    padding-left: 147px;
    text-align: center;
}
.page-order-payment .order-discount-line{
    padding: 22px 30px 53px;
    border-top: 1px solid #D5D5D5;
    line-height: 24px;
    text-align: right;
    font-size: 12px;
}
.page-order-payment .order-discount-line p:first-child{
    line-height: 32px;
    text-align: right;
    font-size: 14px;
    font-weight: bolder;
}
.is-pay{
  float: right;
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin: 0 0 0 10px;
  display: block;
  padding: 1px;
  text-align: center;
  font-size: 16px;
}
</style>