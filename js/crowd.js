$(function () {
    $.get("../js/crowd.json",(data)=>{
        // console.log(data)
        $(data.start).each((index,item)=>{
            // 正在众筹
            $(".m-itemList").eq(0).last()[0].innerHTML+=
            `
            <li class="m-item ">
                    <div class="m-focusItem">
                        <div class="u-pic">
                            <img src=${item.img}>
                        </div>
                        <div class="m-info">
                            <p class="u-name">${item.pUp}</p>
                            <p class="u-desc">${item.pDowm}</p>
                            <div class="m-progress">
                                <div class="m-progressBar m-progressBarSmall">
                                    <div class="u-bar">
                                        <div class="progress"></div>
                                    </div>
                                </div>
                                <span class="u-percent">${item.progressBar}</span>
                                <ul class="m-detail-small">
                                    <li>
                                        <p class="text">
                                            <span>¥</span>
                                            <span>${item.priceCount}</span>
                                        </p>
                                        <p class="desc">已筹金额</p>
                                    </li>
                                    <li>
                                        <p class="text">
                                            <span>${item.people}</span>
                                            <span>人</span>
                                        </p>
                                        <p class="desc">支持人数</p>
                                    </li>
                                    <li>
                                        <p class="text">${item.yutime}</p>
                                        <p class="desc">剩余时间</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            `
        })
            // 众筹结束
        $(data.ending).each((index,item)=>{
            $(".m-itemList").eq(1).last()[0].innerHTML+=
            `
            <li class="m-item ">
                    <div class="m-focusItem">
                        <div class="u-pic">
                            <img src=${item.img}>
                        </div>
                        <div class="m-info">
                            <p class="u-name">${item.pUp}</p>
                            <p class="u-desc">${item.pDowm}</p>
                            <div class="m-progress">
                                <div class="m-progressBar m-progressBarSmall">
                                    <div class="u-bar">
                                        <div class="progress"></div>
                                    </div>
                                </div>
                                <span class="u-percent">${item.perNum}%</span>
                                <div class="m-end">
                                    <span class="u-txt">众筹成功</span>
                                    <span class="u-amount">
                                        <span>已筹金额</span>
                                        <span class="amount">¥${item.gold}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            `
        })
    })






})