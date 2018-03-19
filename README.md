# 锤子商城

标签（空格分隔）： 作业总结


###商品页
![商品页][1]
###购物车页面
![购物车页][2]
###商品详情
![商品详情页][3]
###提交订单页
![提交订单页][4]
###支付页
![支付页][5]
###个人账户页
![个人账户页][6]


  [1]: https://ws1.sinaimg.cn/large/e8323205gy1fphv327vnhg20y60jlnge.jpg
  [2]: https://ws1.sinaimg.cn/large/e8323205gy1fphv3lp6umg20y60jl12y.jpg
  [3]: https://ws1.sinaimg.cn/large/e8323205gy1fphv466e5ig20y60jlqh7.jpg
  [4]: https://ws1.sinaimg.cn/large/e8323205gy1fphv4x2oryg20y60jl1ky.jpg
  [5]: https://ws1.sinaimg.cn/large/e8323205gy1fphwk074gig20y60j0h3k.jpg
  [6]: https://ws1.sinaimg.cn/large/e8323205gy1fphv563qgdg20y60jl4l7.jpg
  
  
  
##启动
```
    cd vue-hammer-shop
    npm install 
    npm run dev
    locahost:8080
```

##技术栈
```
    技术栈:vue + vue-router + vuex + vue-cli
```
##目录结构
```
    .
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 项目核心文件
│   ├── assets                                  // 静态资源
│   ├── components                              // 组件
|       └── addresspop                          // 填写收货地址弹出框
|       └── carPanel                            // 购物车
|       └── headerNav                           // 头部导航
|       └── prompt                              // 对话弹出框
|       └── shopItem                            // 单件商品
|   ├── lib                                     // 数据目录
|       └── newGoodsData                        // 首页商品列表数据
|       └── newItemsDate                        // 商品详情页数据
|       └── provincelist                        // addresspop下拉框数据
|   ├── router                                  // 路由
|   ├── store                                   // vuex
│   ├── views                                   // 页面
│      └── account                              // 个人中心两个组件
│           └── ads                             // 收货地址
│           └── order                           // 订单列表
│      └── account                              // 个人中心页面
│      └── checkout                             // 提交订单页面
│      └── item                                 // 商品详情页
│      └── payment                              // 支付页面
│      └── shop                                 // 主页商品页
|      └── shoplist                             // 购物清单页面
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── index.html                                  // 模板html文件
.

```
##总结
```
1.本项目主要用于复习vue全家桶相关知识,实现了前端部分的从购买商品起到支付的整个购物流程,项目整体复杂度并不算高,但涉及到了vue的很大部分知识。
2.项目用到的数据是自己写的伪数据,将来会把后台的部分也完成，包括登陆注册
```
##功能
- [x] 商品加入购物车
- [x] 购物车小球飞入
- [x] 查看商品详情
- [x] 查看购物车清单
- [x] 订单提交
- [x] 模拟支付
- [x] 个人中心