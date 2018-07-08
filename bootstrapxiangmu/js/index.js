$(function(){
    //轮播图大小图适配
    $(window).on('resize',function(){
        let clientW=$(window).width()
        let showBigImage=clientW>640
        let allItems=$('#xiaoxu-lunbo .item')
        $.each(allItems,function(index,abc){
            let src=showBigImage?$(abc).data('lg-img'):$(abc).data('sm-img')
            let imgUrl='url('+src+')'
            $(abc).css({
                backgroundImage:imgUrl
            })
             if(!showBigImage){
                   let smImg='<img src="'+src+'">'
                 $(abc).empty().append(smImg)
             }else{
                 $(abc).empty()
             }
        })
    })



    //尾部图标信息提示工具
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    //动态处理选项卡li标签的宽度
        $(window).on('resize',function(){
             let ul=$('#xiaoxu-product .nav')
            let allLis=$('#xiaoxu-product .nav li[role]')
            let zongWidth=0
            $.each(allLis,function(index,abc){
                zongWidth+=$(abc).width()
            })


            let parentW=ul.parent().width()

             if(parentW<zongWidth){
                 ul.css({
                     width:zongWidth+'px'
                 })
             }else{
                 ul.css({width:'100%'})
             }

        })


    //导航跳转
      let navLis=$('#xiaoxu-nav li')

      $(navLis[0]).on('click',function(){
          $('body').animate({scrollTop:$('#xiaoxu-aboutus').offset().top},1000)
      })

    $(navLis[1]).on('click',function(){
        $('body').animate({scrollTop:$('#xiaoxu-product').offset().top},1000)
    })

    $(navLis[2]).on('click',function(){
        $('body').animate({scrollTop:$('#xiaoxu-product').offset().top},1000)
    })

    $(navLis[3]).on('click',function(){
        $('body').animate({scrollTop:$('#xiaoxu-hot').offset().top},1000)
    })

    $(navLis[4]).on('click',function(){
        $('body').animate({scrollTop:$('#xiaoxu-link').offset().top},1000)
    })

    $(navLis[5]).on('click',function(){
        $('body').animate({scrollTop:$('#xiaoxu-foot').offset().top},1000)
    })


 $(window).trigger('resize')
})

