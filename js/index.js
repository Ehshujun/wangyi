$(function () {
    // 新品首发json 
    $.get("../js/firstfa.json", function (date) {
        $(date).each(function () {

            $(".swiper-wrapper-xin")[0].innerHTML +=
                `
                <div class="swiper-slide">
                    <div class="slider_item">
                        <div class="slider_item_A">
                            <a class="aaA">
                                <div class="dd">
                                    <img src=${this.img1} alt="">
                                </div>
                                <div class="dd2" style="display: none">
                                    <img src=${this.imgHover} alt="" style="position: absolute; top: 0;">
                                </div>
                                <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt="" class="ss">
                                <div class="low">
                                    <div class="lowA">
                                        <div class="titleA">
                                            <span>${this.smallTitle}</span>
                                        </div>
                                        <div class="subTitle">
                                            <span style="vertical-align:middle;">￥${this.price}</span>
                                        </div>开
                                    </div>
                                    <div class="promContent">${this.promContent}</div>

                                </div>
                            </a>
                        </div>
                        <div class="bd">
                            <div class="prdtTags"></div>
                            <h4 class="nameQ">
                                <span>${this.h4}</span>
                            </h4>
                            <p class="priceA">
                                <span class="retailPrice"><span>¥</span>
                                    <span>${this.yuanjia}</span></span>
                            </p>
                        </div>
                    </div>
                </div> 
            `
            var swiper3 = new Swiper('.swiper-container3', {
                // loop: true,
                slidesPerView: 4,
                slidesPerGroup: 4,
                // centeredSlides: true,
                // centeredSlidesBounds: true,
                navigation: {
                    nextEl: '.le2',
                    prevEl: '.le1',
                    hideOnClick: true,
                    hiddenClass: 'my-button-hidden',
                },

            });
        })
    })






    //人气推荐选项卡
    $(".item-0").click(function () {
        $(".showContainer2").css("display", "none")
        $(".showContainer1").css("display", "block")
        $(".item-1").removeClass("active")
        $(this).addClass("active")

    })
    $(".item-1").click(function () {
        $(".showContainer2").css("display", "block")
        $(".showContainer1").css("display", "none")
        $(".item-0").removeClass("active")
        $(this).addClass("active")
    })

    //人气推荐json
    $.get("../js/tuijian1.json", function (date) {
        $(date).each(function () {

            $(".showContainer1")[0].innerHTML +=
                `
                <div class="m-product popularItem m-popularItem">
                <div class="hd" data-reactid=".2.4.0.1.$1.0">
                    <a class="imgWrap">
                        <div style="width:100%;height:100%;">
                            <img class="img-lazyload-imgWrap"
                                src=${this.img}>
                        </div>
                        <img class="promoLogo" style="width:48px;height:48px;"
                            src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
                        <div class="promBanner promBanner-10">
                            <div class="promTitle">
                                <div class="title"><span>${this.txt1}</span></div>
                                <div class="subTitle">
                                    <span style="vertical-align:middle;">￥${this.price}</span>
                                    <span class="qi">起</span>
                                </div>
                            </div>
                            <div class="promContent">${this.txts}</div>
                        </div>
                    </a>
                </div>
                <div class="bd">
                    <div class="prdtTags"> <span class="m-itemTag ">限时购</span></div>
                    <h4 class="name">
                        <a href="/item/detail?id=3408014" title="网易智造蒸汽沐足盆（可单买足浴包）" target="_blank">
                            <span></span>
                            <span>&nbsp;</span>
                            <span class="m-itemTag-span">${this.tit}</span>
                        </a>
                    </h4>
                    <p class="price">
                        <span class="retailPrice">
                            <span>￥</span>
                            <span>${this.price}</span>
                        </span>
                        <span class="counterPrice">
                            <span>￥</span>
                            <span>${this.price1}</span>
                        </span>
                    </p>
                </div>
                </div>
            `
        })
    })

    //人气推荐json2
    var swiper2 = new Swiper('.swiper-container2', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $.get("../js/tuijian2.json", function (date) {
        $(date).each(function () {

            $(".showContainer2")[0].innerHTML +=
                `
                <div class="m-product popularItem m-popularItem">
                <div class="hd" data-reactid=".2.4.0.1.$1.0">
                    <a class="imgWrap">
                        <div style="width:100%;height:100%;">
                            <img class="img-lazyload-imgWrap"
                                src=${this.img}>
                        </div>
                        <img class="promoLogo" style="width:48px;height:48px;"
                            src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
                        <div class="promBanner promBanner-10">
                            <div class="promTitle">
                                <div class="title"><span>${this.txt1}</span></div>
                                <div class="subTitle">
                                    <span style="vertical-align:middle;">￥${this.price}</span>
                                    <span class="qi">起</span>
                                </div>
                            </div>
                            <div class="promContent">${this.txts}</div>
                        </div>
                    </a>
                </div>
                <div class="bd">
                    <div class="prdtTags"> <span class="m-itemTag ">限时购</span></div>
                    <h4 class="name">
                        <a href="/item/detail?id=3408014" title="网易智造蒸汽沐足盆（可单买足浴包）" target="_blank">
                            <span></span>
                            <span>&nbsp;</span>
                            <span class="m-itemTag-span">${this.tit}</span>
                        </a>
                    </h4>
                    <p class="price">
                        <span class="retailPrice">
                            <span>￥</span>
                            <span>${this.price}</span>
                        </span>
                        <span class="counterPrice">
                            <span>￥</span>
                            <span>${this.price1}</span>
                        </span>
                    </p>
                </div>
                </div>
            `
        })
    })

    //福利购
    $.get("../js/fuli.json", (data) => {
        // console.log(data)
        $(data).each((index,item)=>{
            $(".moduleList-left .moduleBd")[0].innerHTML +=
                `
            <div class="moduleBd1">
                <div class="f-fl">
                    <img src=${item.img} alt="">
                </div>
                <div class="f-fr">
                    <div class="name">
                        <a href="">${item.title}</a>
                    </div>
                    <div class="limitPrice" data-reactid=".2.6.0.1.1.$5.1.$3408015.1.1">
                        <span>${item.txt}&nbsp;</span>
                        <span class="yen" style="font-size: 12px;">¥</span>
                        <span>&nbsp;</span>
                        <span class="num">${item.price}</span>
                    </div>
                    <div class="counterPrice">
                        <span class="num">${item.price1}</span>
                    </div>
                    <div class="btn w-button"><a href="">${item.tit}</a></div>
                </div>
            </div>
            `
        })
    })



    //居家生活
    $.get("../js/common.json", function (data) {
        $(data).each(function (index, item) {
            $(".m-indexCates")[0].innerHTML +=
                `
            <div class="g-row">
                <div class="m-commonHeader">
                    <h3>${this.title}</h3>
                    <div class="f-right lh1 f-ul" data-reactid=".2.7.$0.0.0.1">
                        <div class="subCateList" data-reactid=".2.7.$0.0.0.1.0">
                            
                        </div>
                        <a class="moreItems f-fz14">查看更多 &gt;</a>
                    </div>
                </div>
                <div class="m-focus">
                    <div class="m-focus1">
                        <div class="swiper-container2">
                            <div class="swiper-wrapper swiper-wrapper-ju">
                                
                            </div>
                            <div class="swiper-pagination swiper-pagination-white"></div>
                            <div class="swiper-button-next swiper-button-white" id="next"></div>
                            <div class="swiper-button-prev swiper-button-white" id="prev"></div>
                        </div>
                    </div>
                    <div class="m-bd">
                        
                    </div>
                </div>
            </div>
            `
            $(this.txt).each(function (index, span) {
                $(".subCateList").last()[0].innerHTML +=
                    `
                <span class="item">${this}&nbsp;&nbsp;&nbsp;<i class="item-i">/</i></span>
                `
            })
            $(".item").last().removeClass("item")
            $(".item-i").last().addClass("item-i1")

            $(this.img).each(function (index, span) {
                $(".swiper-wrapper-ju").last()[0].innerHTML +=
                    `
                <div class="swiper-slide">
                    <img src=${this} class="js-img">
                </div>
                `

            })
            var swiper2 = new Swiper('.swiper-container2', {
                loop: true,
                effect: 'fade',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            $(this.list).each(function (index, span) {
                $(".m-bd").last()[0].innerHTML +=
                    `
                <div class="slider_item">
                    <div class="slider_item_A">
                        <a class="aaA">
                            <div class="dd">
                                <img src=${this.img} alt="">
                            </div>
                            <div class="dd2" style="display: none">
                                <img src=${this.img1} alt="" style="position: absolute; top: 0;">
                            </div>
                            <img src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" alt=""
                                class="ss">
                            <div class="low">
                                <div class="lowA">
                                    <div class="titleA">
                                        <span>${this.txt}</span>
                                    </div>
                                    <div class="subTitle">
                                        <span style="vertical-align:middle;">${this.price}</span>
                                    </div>
                                </div>
                                <div class="promContent">${this.txts}</div>
                            </div>
                        </a>
                    </div>
                    <div class="bd">
                        <div class="prdtTags"></div>
                        <h4 class="nameQ">
                            <span>${this.cen}</span>
                        </h4>
                        <p class="priceA">
                            <span class="retailPrice"><span>${this.price}</span>
                            <span style="color:black;text-decoration: line-through; ">${this.price1}</span></span>
                        </p>
                    </div>
                </div>
                `
            })
        })

    })






    // 大家都在说
    $.get("../js/allSay.json", function (date) {
        $(date).each(function () {
            $(".slickWidth-swiper")[0].innerHTML +=
                `
            <div class="swiper-slide">
                <div class="img-lazyload"> <img class="img-lazyload1" src=${this.img} alt=""></div>
                <div class="img-lazyload-xia">
                    <div class="m-comment">
                        <div class="top">
                            <span>${this.user}</span>
                            <span class="img-lazyload-span1">${this.time}</span>
                        </div>
                        <div class="middle">
                            <span class="middle-name">${this.name}</span>
                            <span class="middle-price">
                                ￥
                                <span>${this.price}</span>
                            </span>
                        </div>
                        <div class="bottom">
                            <p>${this.describe}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
            var swiper1 = new Swiper('.swiper-container1', {
                loop: true,
                autoplay: {
                    delay: 2000,
                },
                freeMode: false,
                slidesPerView: 3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        })
    })




})