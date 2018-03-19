<template>
  <div id="prompt">
    <div class="module-dialog-layer" style="display: block;"></div>
    <div class="clear module-dialog module-dialog-confirm module-dialog-show" style="display: block; opacity: 1;">
      <div class="dialog-panel">
        <div class="topbar">
          <div class="dialog-tit clear">
            <h4 class="js-dialog-title">提示</h4>
          </div>
          <span class="dialog-close png" @click = "closePrompt"></span>
        </div>
        <div class="dialog-con js-dialog-container">
          <div class="confirm-msg">{{tips}}</div>
        </div>
        <div class="dialog-btn-wrap clear">
          <div class="blue-main-btn normal-main-btn js-dialog-done">
            <a @click = "closePrompt">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "prompt",
  props:{
    tips:String
  },
  data: () => ({

  }),
  methods: {
    closePrompt() {
      this.$store.commit('closePrompt')
    }
  }
}
</script>
<style>
.module-dialog-layer{
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .8;
    filter: alpha(opacity=80);
}
.module-dialog{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  text-align: center;
  opacity: 0;
  transition: opacity .2s ease-in;
}
.module-dialog:after{
  content: '';
  height: 100%;
  margin-left: -.25em;
}
.module-dialog .dialog-panel, .module-dialog:after{
  display: inline-block;
  vertical-align: middle;
}
.module-dialog .dialog-panel{
  position: relative;
  width: 436px;
  min-width: 200px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0,0,0,.14);
  box-shadow: 0 10px 30px rgba(0,0,0,1);
  text-align: left;
}
.module-dialog .topbar{
  overflow: hidden;
  width: 100%;
  height: 69px;
  border-radius: 13px 13px 0 0;
}
.module-dialog .dialog-tit{
  height: 60px;
    padding: 0 15px;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid #d4d4d4;
    box-shadow: rgba(0,0,0,.06) 0 1px 7px;
    background: linear-gradient(#fbfbfb,#ececec);
    line-height: 60px;
}
.module-dialog .dialog-tit h4{
  float: left;
  padding-left: 15px;
  font-size: 18px;
  font-weight: 400;
  color: #333;
}
.module-dialog .dialog-close{
  overflow: hidden;
  display: block;
  position: absolute;
  right: 17px;
  top: 18px;
  z-index: 20;
  width: 16px;
  height: 17px;
  padding: 4px 5px;
  background: url(../assets/img/ui.png) no-repeat -16px -16px;
  text-indent: -9999em;
  opacity: .7;
  cursor: pointer;
  transition: all .3s linear;
}
.module-dialog .dialog-close:hover{
  opacity: 1;
}
.module-dialog .dialog-con{
  min-width: 220px;
}
.module-dialog .confirm-error-msg, .module-dialog .confirm-msg{
  max-width: 310px;
  min-height: 50px;
  margin: 50px auto;
  line-height: 24px;
  text-align: center;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 16px;
}
.module-dialog .dialog-btn-wrap{
  height: 51px;
  padding: 18px 10px 0;
  line-height: 51px;
  border-radius: 0 0 13px 13px;
  background: url(../assets/img/account-bottom-bar-bg.png) 0 0 repeat-x;
}
.blue-main-btn, .gray-main-btn, .jianguo-blue-main-btn{
  display: block;
  padding: 1px;
  margin: 0 auto;
  border-radius: 9px;
  background: #015e94;
  background: linear-gradient(#5598c9,#2a6da2);
  text-align: center;
  text-shadow: rgba(255,255,255,.496094) 0 1px 0;
  cursor: pointer;
  user-select: none;
}
.normal-main-btn{
  height: 38px;
}
.module-dialog .dialog-btn-wrap .blue-main-btn{
  float: right;
}
.module-dialog .dialog-btn-wrap .blue-main-btn, .module-dialog .dialog-btn-wrap .blue-main-btn a{
  width: 100px;
}
.blue-main-btn a, .gray-main-btn a, .jianguo-blue-main-btn a{
  display: block;
    padding: 2px 0;
    border-radius: 9px;
    background: #5f7ed7;
    background: linear-gradient(#739fe1,#5f7ed7);
    box-shadow: inset 0 1px 3px #92b6ec, inset 0 0 2px #627dca, inset 0 -2px 3px #4c69b8;
    text-shadow: #4f70b3 0 -1px 0;
    cursor: pointer;
    color: #fff;
    transition: all .3s ease;
}
.normal-main-btn a{
  height: 34px;
  line-height: 34px;
}
.blue-main-btn a:hover{
  box-shadow: inset 0 1px 3px #83a9e1, inset 0 0 2px #627dca, inset 0 -2px 3px #5a77c7, inset 0 0 100px rgba(48,77,147,.4);
}
.blue-main-btn a:active{
  box-shadow: inset 0 2px 5px #3d67a5, inset 0 0 2px #627dca, inset 0 0 100px rgba(25,108,232,.5);
}
</style>