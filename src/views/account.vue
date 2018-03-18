<template>
  <div id="account">
    <div class="content clear">
      <div class="account-wrapper">
        <div class="account-sidebar">
          <div class="avatar gray-box clear">
            <div class="js-account-sidebar-info">
              <img src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png">
            </div>
            <div class="box-inner">
              <ul class="account-nav">
                <router-link exact tag="li" :to="{ name: 'account'}" active-class="current">
                  <a>我的订单</a>
                </router-link>
                <router-link  tag="li" :to="{ name: 'ads'}" active-class="current">
                  <a>收货地址</a>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "account",
  data: () => ({

  })
}
</script>
<style>
.content{
	clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
}
.account-wrapper{
	position: relative;
  min-height: 550px;
}
.account-sidebar{
	position: absolute;
    left: 0;
    top: 0;
    width: 210px;
}
.gray-box, .gray-btn-menu-on:hover{
	background: #FFF;
}
.gray-box{
	overflow: hidden;
    border: 1px solid #D1D1D1;
    border-color: rgba(0,0,0,.14);
    border-radius: 8px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
}
.account-sidebar .avatar{
	padding-top: 20px;
    margin: 0 0 20px;
    border-radius: 10px;
    text-align: center;
}
.account-sidebar .avatar img{
	width: 168px;
    height: 168px;
    display: inline-block;
}
.account-sidebar .account-nav{
	padding-top: 15px;
}
.account-sidebar .account-nav li{
	position: relative;
    height: 48px;
    border-top: 1px solid #EBEBEB;
    line-height: 48px;
}
.account-sidebar .account-nav .current{
	border: none;
}
.account-sidebar .account-nav a{
	display: block;
    height: 48px;
    padding: 0 30px;
    color: #666;
    -moz-transition: none;
    -webkit-transition: none;
    transition: none;
}
.account-sidebar .account-nav .current a, .account-sidebar .account-nav a:hover{
	position: relative;
    top: -1px;
    z-index: 1;
    height: 50px;
    background-color: #98AFEE;
    line-height: 50px;
    color: #FFF;
}
.account-content{
	margin-left: 230px;
}
.gray-box .title{
	height: 60px;
    padding: 0 10px 0 28px;
    background: #F5F5F5;
    background: linear-gradient(#FFF,#F5F5F5);
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0,0,0,.06);
    line-height: 60px;
    color: #646464;
}
.gray-box .pre-title{
	position: relative;
    z-index: 2;
}
.gray-box .title h2{
	font-size: 18px;
    font-weight: 400;
    color: #626262;
}
</style>