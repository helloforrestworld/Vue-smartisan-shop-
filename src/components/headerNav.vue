<template>
  <div id="header">
    <div class="nav-global">
      <div class="container">
        <h1 class="nav-logo">
          <a href="javascript:;"></a>
        </h1>
        <ul class="nav-aside">
          <li class="nav-user">
            <a href="javascript:;">个人中心</a>
            <!--active-->
            <div class="nav-user-wrapper">
              <div class="nav-user-list">
                <dl class="nav-user-avatar">
                  <dd><span class="ng-scope"></span></dd>
                  <dt class="ng-binding">+86 138****9453</dt>
                </dl>
                <ul>
                  <router-link class="order" tag="li" :to="{ name: 'account'}">
                    <a>我的订单</a>
                  </router-link>
                  <router-link class="address" tag="li" :to="{ name: 'ads'}">
                    <a>收货地址</a>
                  </router-link>
                </ul>
              </div>
            </div>
          </li>
          <!--active-->
          <car-panel></car-panel>
        </ul>
        <ul class="nav-list">
          <li><a href="javascript:;">在线商城</a></li>
          <li><a href="javascript:;">坚果 Pro</a></li>
          <li><a href="javascript:;">Smartisan M1 / M1L</a></li>
          <li><a href="javascript:;">Smartisan OS</a></li>
          <li><a href="javascript:;">欢喜云</a></li>
          <li><a href="javascript:;">应用下载</a></li>
          <li><a href="javascript:;">官方论坛</a></li>
        </ul>
      </div>
    </div>
    <div class="nav-sub">
      <div class="nav-sub-wrapper">
        <div class="container">
          <ul class="nav-list">
            <router-link tag="li" :to="{ name: 'shop'}"><a>首页</a></router-link>
            <router-link tag="li" :to="{ name: 'shop'}"><a>手机</a></router-link>
            <router-link tag="li" :to="{ name: 'shop'}"><a>“足迹系列”手感膜</a></router-link>
            <router-link tag="li" class="active":to="{ name: 'shop'}"><a>官方配件</a></router-link>
            <router-link tag="li" :to="{ name: 'shop'}"><a>周边产品</a></router-link>
            <router-link tag="li" :to="{ name: 'shop'}"><a>第三方配件</a></router-link>
            <router-link tag="li" :to="{ name: 'shop'}"><a>全部商品</a></router-link>
            <router-link tag="li" :to="{ name: 'shop'}"><a>服务</a></router-link>
            <router-link tag="li" :to="{ name: 'shop'}"><a>全部商品</a></router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carPanel from '@/components/carPanel'
export default {
  name: 'headerNav',
  data () {
    return {
    }
  },
  components: {
    carPanel
  }
}
</script>

<style>
</style>
