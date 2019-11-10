$(function () {

    // 头部固定
    if ($("body").scrollTop>=30) {
        $(".yx-cp-m-funcTab-fixed").css("display","block")

    }
    


    // 头部json调入
    $.get("../js/header.json", function (date) {
        $(date).each(function (index, item) {
            if (item.fenlei) {
                $(".yx-cp-m-tabNav")[0].innerHTML +=
                `
                <li class="display-block-li" jun=${this.id}>
                    <a href="">${this.title}</a>
                    <div class="yx-cp-tabNav-dropdown">
                        <ul class="yx-cp-cateGroupList">
                            
                        </ul>
                    </div>
                </li>
                `
                $(this.fenlei).each(function (index, item) {
                    $(".yx-cp-cateGroupList").last()[0].innerHTML +=
                        `
                        <li class="yx-cp-cateGroup">
                            <div class="yx-cp-cateGroup-name">${item.fenlei1}</div>
                        </li>
                        `
                    $(item.fenlei2).each(function(index,sss){
                        $(".yx-cp-cateGroup").last()[0].innerHTML +=
                        `
                        <a class="yx-cp-cateGroup-name-a">
                        <img src=${item.image[index]} alt="">
                        <span>${sss}</span>
                        </a>
                        `
                    })
                })
            } else {
                $(".yx-cp-m-tabNav")[0].innerHTML +=
                    `
                <li class="display-block-li">
                    <a href="">${this.title}</a>

                </li>
                    `
            }
            $(".display-block-li a").eq(0).addClass("yx-cp-active")
            $(".display-block-li").eq(9).removeClass("display-block-li").addClass("yx-cp-tabNav-split")
            $(".yx-cp-tabNav-split").next().removeClass("display-block-li yx-cp-tabNav-split").addClass("yx-cp-lastItem")
            
        })
        // 点击事件加索引
        $(".display-block-li").click(function () {
            if ($(this).attr("jun")) {
                var num=$(this).attr("jun")
                window.open("jujia.html?"+num)
            }
        })
        // foryou
        $(".yx-cp-tabNav-split").click(function () {
            window.open("foryou.html?")   
        })
        // crown
        $(".yx-cp-lastItem").click(function () {
            window.open("crowd.html?")   
        })
        
    })
})