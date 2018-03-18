import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    carPanelData:[],//购物车数据
    maxOff:false, //超出商品数量上限
    carShow:false,//购物车是否显示
    ball:{//小球信息
      show:false,
      el:null,
      img:''
    },
    receiveInfo:[
        {
            "name": "王某某",
            "phone": "13811111111",
            "areaCode": "010",
            "landLine": "64627856",
            "provinceId": 110000,
            "province": "北京市",
            "cityId": 110100,
            "city": "市辖区",
            "countyId": 110106,
            "county": "海淀区",
            "add": "海淀公园东七门10号",
            "default": true
        },
        {
          "name": "李某某",
          "phone": "13811111111",
          "areaCode": "010",
          "landLine": "64627856",
          "provinceId": 110000,
          "province": "北京市",
          "cityId": 110100,
          "city": "市辖区",
          "countyId": 110106,
          "county": "海淀区",
          "add": "高教大楼五单元777",
          "default": false
      }
    ]
  },
  mutations:{
    addCarPanelData(state,payload){ //添加购物车信息
      
      if(!state.ball.show){ //小球飞入后才能继续点击
        
        let carPanelData = state.carPanelData //购物车数据
        
        let exist = false //存在时数量 + 1  不存在添加一条
        
        carPanelData.forEach((item)=>{
          if(item.sku_id === payload.data.sku_id){
            exist = true
            item.count+= payload.count
            if(item.count > item.limit_num){//超出数量限制
              item.count-= payload.count
              state.maxOff = true
              return
            }
            state.carShow = true //显示购物车
            
            // 小球飞入
            state.ball.img = payload.data.ali_image
            state.ball.show = true
            // console.log(event)
            state.ball.el = event.path[0]
            
          }
        })
        
        if(!exist){
          Vue.set(payload.data,'count',payload.count)
          Vue.set(payload.data,'checked',true)
          carPanelData.push(payload.data)
          state.carShow = true //显示购物车
          
          // 小球飞入
          state.ball.img = payload.data.ali_image
          state.ball.show = true
          // console.log(event)
          state.ball.el = event.path[0]
        }
        
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
    },
    plusCount(state,data){ //购物清单里面增加数目(没有小球飞入)
      state.carPanelData.forEach((item)=>{
        if(Number(item.sku_id) === Number(data.sku_id)){
          item.count++
          if(item.count > item.limit_num){
            item.count--
          }
        }
      })
    },
    supCount(state,data){ //购物清单里减少数目
      state.carPanelData.forEach((item)=>{
        if(Number(item.sku_id) === Number(data.sku_id)){
          item.count--
          if(item.count < 1){
            item.count++
          }
        }
      })
    },
    toogleGoods(state,data){ //选中商品
      state.carPanelData.forEach((item)=>{
        if(Number(item.sku_id) === Number(data.sku_id)){
          item.checked = !item.checked
        }
      })
    },
    toogleAllcheck(state,isAllChecked){ //全选&全不选
      state.carPanelData.forEach((item)=>{
        item.checked = !isAllChecked
      })
    },
    delAllcheckGoods(state){//删除所有选中的商品
      let index = state.carPanelData.length
      while(index --) {
        if(state.carPanelData[index].checked){
          state.carPanelData.splice(index,1)
        }
      }
    },
    saveReceive(state,receive){//提交新的收获地址
      if(receive.default){
        state.receiveInfo.forEach((item)=>{
          item.default = false
        })
      }
      state.receiveInfo.push(receive)
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
    },
    isAllChecked(state){ //是否全选
      let isAllChecked = !state.carPanelData.some((item)=>{
        return !item.checked
      })
      return isAllChecked
    },
    goodsCheckedCount(state){ //被选中的商品总件数
      let count = 0
      state.carPanelData.forEach((item)=>{ 
        if(item.checked){
          count += item.count
        }
      })
      return count
    },
    goodsCheckedPrice(state){ //被选中的商品总价格
      let price = 0
      state.carPanelData.forEach((item)=>{ 
        if(item.checked){
          price += item.price * item.count
        }
      })
      return price
    },
    goodsCheckedData(state){ //被选中的所有商品数据
      let checkedData = []
      state.carPanelData.forEach((item)=>{ 
        if(item.checked){
          checkedData.push(item)
        }
      })
      return checkedData
    }
  }
})
export default store