<template>
  <div class="account-content">
    <div class="account-address">
      <div class="gray-box clear">
        <div class="title pre-title">
          <h2 class="fn-left">收货信息</h2>
          <span class="gray-blue-btn js-add-address"@click="addNewAddress"><a class="add">添加新地址</a></span>
        </div>
        <div class="box-inner clear">
          <div>
            <div class="address-list-item default-item" data-id="765532" v-for="receive,index in receiveInfo">
              <div class="name fn-left">
                <div class="name-cell">{{receive.name}}</div>
              </div>
              <div class="detail fn-left">
                <div class="detail-cell">{{receive.province}} {{receive.city}} {{receive.county}} {{receive.add}}</div>
              </div>
              <div class="operation fn-right">
                <div class="operation-cell">
                  <a class="gray-edit-btn js-edit-address"@click="revise(receive,index)">修改</a>
                  <span class="red-del-btn js-del-address"@click="deleteReceive(index)"> <a>删除</a><em>删除</em> </span>
                </div>
              </div>
              <div class="default fn-right" v-show="receive.default">  （默认地址）  </div>
              <div class="telephone fn-right">{{receive.phone}}</div>
            </div>
            <address-pop :revise-receive="curReceive" @save-receive="saveReceive" @close-pop="close" v-show="showPop"></address-pop>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import addressPop from '@/components/addresspop'
export default {
  name: "ads",
  data(){
    return{
      showPop:false,
      Revising:{isRevising:false,index:0},//是否正在修改
      curReceive:{}//当前需要修改的地址信息
    }
  },
  components: {
    'address-pop':addressPop
  },
  computed:{
    receiveInfo(){ //收货地址集合
      return this.$store.state.receiveInfo
    }
  },
  methods: {
    close() { //关闭地址输入框
      this.showPop = false
      this.curReceive = {}
      this.Revising = {}
    },
    addNewAddress(){ //新增收货地址
      this.showPop = true
    },
    revise(receive,index){ //修改收货地址
      this.curReceive = receive
      this.showPop = true
      this.Revising.isRevising = true
      this.Revising.index = index
    },
    saveReceive(receive){ //修改或者新增handler
      if(this.Revising.isRevising){ //修改
        this.$store.commit('reviseReceive',{receive,index:this.Revising.index})
        this.Revising.isRevising = false
      }else{                  //新增
        this.$store.commit('saveReceive',receive)
      }
    },
    deleteReceive(index){ //删除收货地址
      this.$store.commit('deleteReceive',index)
    }
  }
}
</script>
<style>
.blue-btn, .gray-blue-btn, .gray-btn, .gray-icon-btn, .light-blue-btn, .light-gray-btn{
	display: inline-block;
    height: 38px;
    padding: 0 20px;
    border-radius: 8px;
    line-height: 38px;
    font-size: 14px;
    cursor: pointer;
}
.gray-blue-btn{
	padding: 0;
    background: #A2A2A2;
}
.gray-box .title span{
	overflow: hidden;
    float: right;
    margin-top: 11px;
}
.blue-btn a, .gray-blue-btn a, .gray-btn a, .gray-icon-btn a, .light-blue-btn a, .light-gray-btn a{
	display: block;
}
.gray-blue-btn a{
	height: 38px;
    line-height: 38px;
    color: #FFF;
}
.gray-blue-btn a.add{
	padding: 0 13px 0 38px;
    background: url(../../assets/img/btn-icon-new.png) 0 -6px no-repeat;
    transition: none;
}
.gray-blue-btn:hover{
	background: #7595e4;
    box-shadow: none;
}
.address-form{
	width: 370px;
    margin: 0 auto;
}
.account-address .address-form{
    padding: 30px;
    margin: 0;
}
.module-form-row{
	position: relative;
    padding-bottom: 10px;
    margin: 0 auto;
}
.address-form .module-form-row{
	padding-bottom: 15px;
}
.module-form-row .form-item-v3{
	position: relative;
    height: 46px;
    background: #FFF;
    border: 1px solid #CCC;
    border-radius: 6px;
    box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
    line-height: 46px;
    font-size: 18px;
    opacity: .618;
    transition: opacity .3s ease;
}
.module-form-row .form-item-v3 i{
	position: absolute;
    left: 15px;
    top: 0;
    font-size: 16px;
    color: #BEBEBE;
}
.module-form-row .form-item-v3 input{
	padding: 0 15px;
    background-color: transparent;
    border: none;
    font-size: 16px;
}
.address-form .form-item-v3 input{
	width: 330px;
}
.address-form .area-code-w{
	width: 118px;
}
.address-form .telephone-w{
    width: 238px;
}
.module-form-row div.select-item{
	width: auto;
    height: auto;
    margin: 0;
    background: 0 0;
    border: none;
    box-shadow: none;
    opacity: 1;
}
.module-form-row .form-item-v3 select{
	margin: 0 0 0 15px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #333;
}
.address-form .select-province{
	width: 370px;
}
.form-focus-item{
	z-index: 1;
    opacity: 1;
    border: 1px solid #6B93F2;
}
.module-form-row div.select-item{
	width: auto;
    height: auto;
    margin: 0;
    background: 0 0;
    border: none;
    box-shadow: none;
    opacity: 1;
}
.module-form-row .form-item-v3 select{
	height: 48px;
    padding: 0 15px;
    margin: 0;
    background: -webkit-linear-gradient(top,#FAFAFA,#F5F5F5);
    background: linear-gradient(#FAFAFA,#F5F5F5);
    border: 1px solid #CCC;
    border-radius: 6px;
    box-shadow: 2px 0 0 rgba(255,255,255,.4) inset, 1px 0 0 rgba(255,255,255,.3);
    line-height: 48px;
    text-indent: 0;
    outline: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
}
.address-form .select-city, .address-form .select-district{
	width: 180px;
}
.blue-checkbox, .blue-checkbox-disable, .blue-checkbox-on{
	display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    background: url(../../assets/img/checkbox-bg.png) no-repeat;
    cursor: pointer;
}
.address-form .blue-checkbox{
	top: 0;
    float: left;
    margin-right: 5px;
}
.dialog-blue-btn{
	padding: 1px;
    background: #6383C6;
    background: linear-gradient(#6383C6,#4262AF);
    border-radius: 6px;
    text-align: center;
    color: #FFF;
}
.disabled-btn{
	opacity: .4;
}
.disabled-btn, .disabled-btn a{
	cursor: not-allowed;
    -webkit-transition: none;
    transition: none;
    pointer-events: none;
}
.dialog-blue-btn a{
	display: block;
	padding: 2px 0;
    background: #5F7ED7;
    background: linear-gradient(#6F97E5,#527ED9);
    border-radius: 5px;
    box-shadow: inset 0 1px 2px #7EA1E8;
    text-shadow: 0 -1px 0 #4F70B3;
    color: #FFF;
}
.big-main-btn a{
	height: 42px;
    line-height: 42px;
    font-size: 18px;
}
.account-address .address-list-item{
	height: 75px;
    padding: 20px 0;
    border-bottom: 1px solid #CFCFCF;
    line-height: 24px;
}
.account-address .address-list-item:last-child{
	border-bottom: none;
    border-radius: 0 0 7px 7px;
}
.account-address .address-list-item .name{
	display: table;
    width: 106px;
    height: 100%;
    padding: 0 20px 0 24px;
}
.account-address .address-list-item .name-cell{
	display: table-cell;
    vertical-align: middle;
}
.account-address .address-list-item .detail{
	display: table;
    width: 440px;
    height: 100%;
    text-align: left;
}
.account-address .address-list-item .detail-cell{
    display: table-cell;
    vertical-align: middle;
}
.account-address .address-list-item .operation{
	display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    width: 135px;
    padding: 24px 0;
}
.account-address .address-list-item .operation-cell{
	display: flex;
    text-align: center;
}
.gray-edit-btn, .red-del-btn{
	width: 26px;
    height: 26px;
    border-radius: 5px;
    overflow: hidden;
}
.gray-edit-btn{
	display: inline-block;
    background: url(../../assets/img/btn-icon-new.png) -9px -112px no-repeat #A2A2A2;
    text-indent: -9999em;
}
.account-address .address-list-item .operation .gray-edit-btn{
	margin-right: 6px;
}
.gray-edit-btn, .red-del-btn{
	width: 26px;
    height: 26px;
    border-radius: 5px;
    overflow: hidden;
}
.red-del-btn{
	position: relative;
    display: inline-block;
    background: #d84747;
    background: linear-gradient(#f97474,#e05b5b);
    line-height: 26px;
    opacity: .62;
    cursor: pointer;
    transition: none;
}
.red-del-btn a{
	display: block;
    width: 26px;
    height: 26px;
    background: url(../../assets/img/btn-icon-new.png) -9px -262px no-repeat;
    text-indent: -9999em;
    color: #FFF;
    transition: none;
}
.red-del-btn em{
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    height: 26px;
    text-indent: 0;
    font-size: 12px;
    color: #FFF;
}
.account-address .address-list-item .default{
	width: 80px;
    line-height: 75px;
    text-align: center;
    font-size: 12px;
}
.account-address .address-list-item .telephone{
    width: 160px;
    height: 100%;
    line-height: 75px;
    text-align: center;
}
</style>