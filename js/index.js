$(function (){

    //预加载事件

    var count=0
    //加载完成了多少张图片

    $.each($('img'),function(i,ele){
              console.log($(ele).attr('src'))
        var imgobj=new Image()

        $(imgobj).on('load',function(){
            count++
            $('.progress1').html(Math.round((count+1)/$('img').length*100)+'%')
            if(count>=$('img').length-1){
                $('#loading').hide()
            }
        })

        imgobj.src=$(ele).attr('src')

    })

    //预加载事件完

//许愿星事件*******************************************************************************

    var $btnxuyuan=$('#xuyuanqiang .xuyuan')

    var $imgs=$('#xuyuanqiang .zhuti img')

    var allEnd=0
    //此变量用来表示完成所有运动的图片的数量。

    var on=true

    $btnxuyuan.on('click',function(){

        if(on){

            on=false

            var endNum=0
            //此变量表示完成前两个运动的图片的数量。

            $.each($imgs,function (i,ele){
                setTimeout(function(){
                    montion($(ele),'0.5s',function(){
                        //第一个运动，图片宽高随机通过scale变为0。
                        this.css({
                            transform:'scale(0,0)'
                        })
                    },function(){
                        //第二个运动，图片从小变大，同时透明度从1变为0。
                        montion(this,'1s',function(){
                            this.css({
                                transform:'scale(1,1)',
                                opacity:0
                            })
                        },function(){
                            endNum++
                            if(endNum==$imgs.length-4){
                                three()
                                endNum=0
                            }
                        })
                    })
                },Math.random()*1000)
            })

        }

    })


    //第三次运动的函数

    function three(){

        $.each($imgs,function (i,ele){

            $(ele).css({
                transition:'0s',
                transform:'rotateY(0deg) translateZ('+-Math.random()*500+'px)'
                //transition动画需要给进行动画的元素设置初始状态。所以此处需写rotateY(0deg)。
            })

            setTimeout(function(){

              montion($(ele),'2s',function(){
                    this.css({
                        opacity:1,
                        transform:'rotateY(-360deg) translateZ(0)'
                    })
              },function(){

                  allEnd++;
                  if(allEnd==$imgs.length-4){
                      on=true

                      allEnd=0
                  }
              })

            },Math.random()*1000)
        })
    }

    //运动函数  参数为(运动对象(jq对象)，运动时间(字符串)，包含各种运动方式的函数，运动完成后的回调函数)

    function montion(obj,time,doFn,callBack){

        obj.css({
            transition:time
        })

        doFn.call(obj)
        //调用所传进的函数，并将该函数的this指向指向运动对象obj。

        var key=true
        //这个变量是为了解决transitionend会被同一个元素的多条css属性多次触发的问题。

        obj.on('transitionend',function(){
            //transitionend会在obj的transition效果结束后被触发。

              if(key){
                  callBack&&callBack.call(obj)
                  //与符号碰见对的向后走，碰见错的返回，此处用来兼容一下callBack不写的情况。
                    key=false
              }
        })
    }

    //许愿星事件完******************************************************************************




})