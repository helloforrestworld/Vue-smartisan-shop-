<template>
  <li class="nav-cart" @mouseenter="showCar" @mouseleave="hideCar">
    <a href="javascript:;">购物车</a>
    <!--根据class改变颜色-->
    <span class="cart-empty-num" :class="{'cart-num':calTotalCount}">
      <i>{{calTotalCount}}</i>
    </span>
    <div class="nav-cart-wrapper" v-show="carShow">
      <div class="nav-cart-list">
        <div class="empty" v-if="!calTotalCount">
          <h3>购物车为空</h3>
          <p>您还没有选购任何商品，现在前往商城选购吧!</p>
        </div>
        <div class="full" v-else>
          <div class="nav-cart-items">
            <ul>
              <li class="clear" v-for="item in carPanelData">
                <div class="cart-item js-cart-item cart-item-sell">
                  <div class="cart-item-inner">
                    <div class="item-thumb">
                      <img :src="item.ali_image + '?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'">
                    </div>
                    <div class="item-desc">
                      <div class="cart-cell">
                        <h4> 
                          <a href="#/item/100027401">{{item.title}}</a>
                        </h4>
                        <p class="attrs">
                          <span>{{item.spec_json.show_name}}</span>
                        </p>
                        <h6>
                          <span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span class="item-num">x {{item.count}}</span>
                        </h6>
                      </div>
                    </div>
                    <div class="del-btn" @click = "delCarPanelData(item)">删除</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="nav-cart-total">
            <p>共 <strong class="ng-binding">{{calTotalCount}}</strong> 件商品</p>
            <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{calTotalPrice}}</span></h5>
            <h6>
              <a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "carPanel",
  data: () => ({

  }),
  computed:{
    carPanelData(){ //购物车数据
      return this.$store.state.carPanelData
    },
    calTotalCount(){//购物车总数量
      return this.$store.getters.calTotalCount
    },
    calTotalPrice(){//购物车总价格
      return this.$store.getters.calTotalPrice
    },
    carShow(){//购物车是否显示
      return this.$store.state.carShow
    }
  },
  methods: {
    delCarPanelData(data) {//删除一条数据
      this.$store.commit('delCarPanelData',data)
    },
    showCar(){//显示购物车
      this.$store.commit('showCar')
    },
    hideCar(){//隐藏购物车
      this.$store.commit('hideCar')
    }
  },
}
</script>
<style scoped>
</style>