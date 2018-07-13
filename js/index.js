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



    //景色事件

    var dataInt={"data":[{"src":"./images/jingse/0.jpg"},
        {"src":"./images/jingse/1.jpg"},
        {"src":"./images/jingse/2.jpg"},
        {"src":"./images/jingse/3.jpg"},
        {"src":"./images/jingse/4.jpg"},
        {"src":"./images/jingse/5.jpg"},
        {"src":"./images/jingse/6.jpg"},
        {"src":"./images/jingse/7.jpg"},
        {"src":"./images/jingse/8.jpg"},
        {"src":"./images/jingse/9.jpg"},
        {"src":"./images/jingse/10.jpg"},
        {"src":"./images/jingse/11.jpg"}
    ]}



       $('#jingse button').on('click',function(){

           $.each(dataInt.data,function(i,obj){

               var oBox=$('<div>').addClass('box col-4 col-md-3 col-xl-2 pb-3').appendTo($('#jingse .zhuti'))

               var oPic=$('<div>').addClass('pic').appendTo($(oBox))

               var oA=$('<a>').attr('href',$(obj).prop('src')).appendTo($(oPic))

               $('<img>').attr('src',$(obj).prop('src')).appendTo($(oA))

               //景色放大插件初始
               baguetteBox.run('.lightbox');
           })

       })


    //景色放大插件的初始

    baguetteBox.run('.lightbox');






})