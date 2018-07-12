$(function (){

//卡片事件

    var key=true

    var guoqusuoyin


     $.each($('#gerenjieshao .rongqi'),function(i,ele){

            $(ele).on('click',function(){

                if(key){

                    $(this).children('.text').css({
                        transform:'rotateX(0deg)'
                    })

                    $(this).parent().siblings().find('.text').css({
                        transform:'rotateX(90deg)'
                    })

                    key=false

                    guoqusuoyin=$(this).parent().index()

                }else{

                    if($(this).parent().index()==guoqusuoyin){

                        $(this).children('.text').css({
                            transform:'rotateX(90deg)'
                        })

                        key=true
                    }else{

                        $(this).children('.text').css({
                            transform:'rotateX(0deg)'
                        })

                        $(this).parent().siblings().find('.text').css({
                            transform:'rotateX(90deg)'
                        })

                        key=false

                        guoqusuoyin=$(this).parent().index()
                    }
                }
            })
     })



    //瀑布流事件

    waterfall()

    var dataInt={"data":[{"src":"./imgs/jingse/0.jpg"},
        {"src":"./imgs/jingse/1.jpg"},
        {"src":"./imgs/jingse/2.jpg"},
        {"src":"./imgs/jingse/3.jpg"},
        {"src":"./imgs/jingse/4.jpg"},
        {"src":"./imgs/jingse/5.jpg"}
    ]}

    $(window).on('scroll',function(){
          console.log(checkScrollSlide())
           if(checkScrollSlide()){
               $.each(dataInt.data,function(i,obj){

                   var oBox=$('<div>').addClass('box col-4 col-md-3 col-xl-2 pb-3').appendTo($('#jingse .zhuti'))

                   var oPic=$('<div>').addClass('pic').appendTo($(oBox))

                   $('<img>').attr('src',$(obj).prop('src')).appendTo($(oPic))
               })

               waterfall()
           }
    })

    function waterfall(){

        var $boxs=$('#jingse .zhuti .box')

        var w=$boxs.eq(0).outerWidth()
        //outerWidth获得的宽度包含元素的内边距和边框

        var cols=Math.ceil($('#jingse>div').width()/w)


        var hArr=[]

        $.each($boxs,function(index,box){

            var h=$(box).children('.pic').outerHeight()

            if(index<cols){
                hArr.push(h)
            }else{
                var minH=Math.min.apply(null,hArr)

                var minHIndex=$.inArray(minH,hArr)

                $(box).css({
                    position:'absolute',
                    top:minH+12+'px',
                    left:minHIndex*w+'px'
                })

                hArr[minHIndex]+=($(box).children('.pic').outerHeight()+12)
            }
        })
    }


    function checkScrollSlide(){

            var $lastBox=$('#jingse .zhuti .box').last()

            var lastBoxDis=$lastBox.offset().top

            var scrollTop=$(window).scrollTop()

            var documentH=$(window).height()

            return (lastBoxDis<scrollTop+documentH)?true:false


    }




})