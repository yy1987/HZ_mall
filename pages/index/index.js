import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();


Page({
  data: {
      is_show:true,
  },
  //事件处理函数
 mask:function(e){
   this.setData({
    is_show:false,
   })
 },
 close:function(e){
  this.setData({
    is_show:false,
   })
 },
  onLoad(options) {
    const self = this;

  },
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },
  intoPathRedirect(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'redi');
  }, 
})

  