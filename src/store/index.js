import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    carPanelData:[],//购物车数据
    maxOff:false, //超出商品数量上限
    carShow:false,//购物车是否显示
  },
  mutations:{
    addCarPanelData(state,data){ //添加购物车信息
      
      let carPanelData = state.carPanelData //购物车数据
      
      let exist = false //存在时数量 + 1  不存在添加一条
      
      carPanelData.forEach((item)=>{
        if(item.sku_id === data.sku_id){
          exist = true
          item.count++
          if(item.count > item.limit_num){//超出数量限制
            item.count--
            state.maxOff = true
            return
          }
          console.log(222)
          state.carShow = true //显示购物车
        }
      })
      
      if(!exist){
        Vue.set(data,'count',1)
        carPanelData.push(data)
        state.carShow = true //显示购物车
      }
    },
    delCarPanelData(state,data){//删除购物车一条数据
      state.carPanelData = state.carPanelData.filter((item)=>{
        return item.sku_id !== data.sku_id
      })
    },
    closePrompt(state){//关闭对话框
      state.maxOff = false
    },
    showCar(state){ //购物车显示
      state.carShow = true
    },
    hideCar(state){ //购物车隐藏
      state.carShow = false
    }
  },
  getters:{
    calTotalCount(state){ //购物车总件数
      let count = 0
      state.carPanelData.forEach( (item) => {
        count +=  item.count
      })
      return count
    },
    calTotalPrice(state){//购物车总价格
      let price = 0
      state.carPanelData.forEach( (item) => {
        price +=  item.price * item.count
      })
      return price
    }
  }
})
export default store