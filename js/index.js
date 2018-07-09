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





})