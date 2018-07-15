;(function($){

    function Preload(imgs,options){
          this.imgs=(typeof imgs=='string')?[imgs]:imgs
          this.opt=$.extend({},Preload.morenzhi,options)
        //$.extend({},b,c)的意思是让c对象的内容覆盖b对象的内容生成新对象，并将新对象返回给外界。
          this.loading()
    }

    Preload.morenzhi={
        each:null,
        all:null
    }

    Preload.prototype.loading=function(){

        var imgs=this.imgs

        var opt=this.opt

        var count=0

        var len=imgs.length

        $.each(imgs,function(i,src){

            if(typeof src!='string') return;

            var imgObj=new Image()

            imgObj.src=src

            $(imgObj).on('load error',function(){
                    count++
                         opt.each && opt.each(count,len)
                if(count==len){
                     opt.all && opt.all()
                }

            })

        })

    }


      $.extend({
          xiaoxuload:function(imgs,options){
                  new Preload(imgs,options)
          }
      })

})(jQuery);