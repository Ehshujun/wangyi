$(function () {
    $.get("../js/all.json",(data)=>{
        // console.log(data);

        var nun=parseInt(window.location.search.substr(1))
        $(data).eq(nun-1).each((index,item)=>{
            $(".g-row")[0].innerHTML+=
            `
            <div class="m-crumbs " id="j-yx-crumbs" style="display: block;">
                <a href="/">首页</a>
                <span class="w-icon-arrow arrow-right-hollow"></span>
                <span class="z-cur">${item.title}</span>
            </div>
            
            <div class="m-focus">
                <div class="swiper-container1">
                    <div class="swiper-wrapper">
                                                
                    </div>
                    <div class="swiper-pagination swiper-pagination-white"></div>
                    <div class="swiper-button-next swiper-button-white">&#8250;</div>
                    <div class="swiper-button-prev swiper-button-white">&#8249;</div>
                </div>
            </div>

            <div class="m-goodsArea">
                <div class="m-sortBar">
                    <div class="category ">
                        <span class="name">分类:</span>
                        <div class="categoryGroup categoryGroup1">
                            
                        </div>
                    </div>
                    <div class="category category1">
                        <span class="name">配送地区:</span>
                        <div class="categoryGroup categoryGroup2">
                            
                        </div>
                    </div>
                    <div class="category">
                        <span class="name">排序:</span>
                        <div class="categoryGroup">
                            <a class="categoryGroup-a categoryGroup-active" href="">默认</a>
                            <a class="categoryGroup-a" href="">价格</a>
                            <a class="categoryGroup-a" href="">上架时间</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-content">
                
            </div>
            `
            // $(".category").ne(0).addClass("category-none")         
        //img
                $(data[nun-1].img).each((index,item1)=>{
                    $(".swiper-wrapper").last()[0].innerHTML+=
                    `
                    <div class="swiper-slide">
                        <img src=${item1} alt="">
                    </div>
                    
                    `
                })
                // 轮播图
                    var swiper1 = new Swiper('.swiper-container1', {
                        loop:true,
                        effect: 'fade',
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    });
        //分类
                $(data[nun-1].list).each((index,item1)=>{
                    $(".categoryGroup1").last()[0].innerHTML+=
                    `
                    <a class="categoryGroup-a" href="">${item1}</a>
                    `
                })
        //配送地区    
                $(data[nun-1].lis).each((index,item1)=>{
                    $(".categoryGroup2").last()[0].innerHTML+=
                    `
                    <a class="categoryGroup-a a1" href="">${item1}</a>
                    `
                })

        // item.head
                $(data[nun-1].item).each((index,item1)=>{
                    $(".m-content").last()[0].innerHTML+=
                    `
                    <div class="m-Level2Category">
                        <div class="hd">
                            <p class="title1">${item1.head}</p>
                            <p class="title2">${item1.head1}</p>
                        </div>
                        <div class="m-itemList">
                            <div class="m-bd">

                            </div>
                        </div>
                    </div>
                    `
                        $(item1.li).each((index,item2)=>{
                            console.log(item2)
                            $(".m-bd").last()[0].innerHTML+=
                            `
                            
                            <div class="slider_item">
                                <div class="slider_item_A">
                                    <a class="aaA">
                                        <div class="dd">
                                            <img src=${item2.img} alt="">
                                        </div>
                                        <div class="dd2" style="display: none">
                                            <img src=${item2.imgs}
                                                alt="" style="position: absolute; top: 0;">
                                        </div>
                                        <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png"
                                            alt="" class="ss">
                                        <div class="low">
                                            <div class="lowA">
                                                <div class="titleA">
                                                    <span>${item2.center}</span>
                                                </div>
                                                <div class="subTitle">
                                                    <span style="vertical-align:middle;">${item2.price}</span>
                                                </div>
                                            </div>
                                            <div class="promContent">${item2.title}</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="bd" >
                                    <div class="prdtTags" >
                                        <span class="m-itemTag ">${item2.center}</span>
                                        <span class="m-itemTag new">${item2.titles}</span>
                                    </div>
                                    <h4 class="name">
                                        <a href="">
                                            <span></span>
                                            <span></span>
                                            <span>${item2.head}</span>
                                        </a>
                                    </h4>
                                    <p class="price" style="display:block;">
                                        <span></span>
                                        <span>${item2.price}</span>
                                        <span class="counterPrice">${item2.change}</span>
                                        <span></span>
                                    </p>
                                    <div class="m-product">
                                        <hr>
                                        <p class="desc">${item2.foot}</p>
                                    </div>
                                </div>
                            </div>
                            `
                        })
                })

        })
        $(".categoryGroup-a").eq(0).addClass("categoryGroup-active")
        $(".a1").eq(0).addClass("categoryGroup-active")
    })

})