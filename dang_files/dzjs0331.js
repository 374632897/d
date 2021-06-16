var zdylink1 = document.createElement('link');
zdylink1.setAttribute('rel', 'stylesheet');
zdylink1.setAttribute('type', 'text/css');
zdylink1.setAttribute('href', 'https://wjxyl.natapp4.cc/yl/dz0325.css');
document.head.appendChild(zdylink1);
$(function () {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var contHeight = windowHeight - 180;
    if (windowWidth > 768) {
        windowWidth = 768
    }
    function newksinit() {
        var mainColor = $("#htitle").css("color");
        var description = $(".description").clone();
        description.addClass("fmdescription").removeClass("description");
        var fmstartBtn = $("<span class='fmstartBtn'>开始答题</span>")
        fmstartBtn.css("background", mainColor).bind("touchstart click", function () {
            showHideFengMian(false);
        })
        $("#fengMianTitle").wrap("<div class='fmWrap'></div>");
        $(".fmWrap").append(description).append(fmstartBtn);
        $("#divContent").css("min-height", contHeight+"px")
    }
    newksinit();
    if (window.location.href.indexOf("completemobile2.aspx") > -1) {
        var chuangGuanWrapheight = windowHeight - 150;
        $("#chuangGuanWrap").css("min-height", chuangGuanWrapheight + "px")
        $("body").toggleClass("dzKsres");
        var dzdqpm = $(".score-form__news").eq(1).find(".tht-content").text();
        dzdqpm = parseInt(dzdqpm.replace(/[^\d]/g, ' '));
        var dzksscore = parseInt($(".score-font-style").text());
        var dzksrightnum = $(".score-form__news div:contains('答对题数')").siblings(".tht-content").text();
        dzksrightnum = parseInt(dzksrightnum.replace(/[^\d]/g, ' '));
        var dzkstotlenum = $(".score-form__news div:contains('答对题数')").next().text();
        dzkstotlenum = parseInt(dzkstotlenum.replace(/[^\d]/g, ' '));;
        var dzkserroenum = dzkstotlenum - dzksrightnum;
        var ranklink = $(".real-paihang").attr("onclick")?$(".real-paihang").attr("onclick").split("(")[1].split(")")[0].replace(/\"/g, ""):null;
        var dzksname = $("#qywx-or-realname").text();
        var newksresWrap = '<div class="dz_ksDsc"><div class="dz_headimg"><img src="" alt="" /><span class="dz_curRank">当前排名' + dzdqpm + '</span></div><p class="dz_name">' + dzksname + '</p><ul class="dz_ksMes"><li><p>答错数</p><span>' + dzkserroenum + '</span></li><li><p>考试分数</p><span class="dz_score">' + dzksscore + '</span></li><li><p>答对数</p><span>' + dzksrightnum + '</span></li></ul><img style="width:341px;" src="//pubnew.paperol.cn/114276/1616742590G772cc.png" alt="" /><iframe style="width:' + (windowWidth - 20) + 'px" src="" class="rankIframe"></iframe></div>';
        $("#divdsc").append($(newksresWrap))
        if (ranklink)
            $("#divdsc").find("iframe").attr("src", ranklink);
        else
            $("#divdsc").find("iframe").hide();
    }
})
function writeError(obj, msg, delayTime, mObj) {
    obj = $(obj)[0];
    if (mObj) { //所有表格题  obj.getAttribute("type") == 10
        //var objZZ = $(obj.errorControl).parents(".mdivtable")[0];
        objErrorInfo(mObj, msg, delayTime);
    } else {
        objErrorInfo(obj, msg, delayTime);
    }
    if (!firstError)
        firstError = obj;
    fixBottom();
    return false;
}
function showHideFengMian(dis) {
    //封面滑动效果
    var slideChunk = document.getElementById("slideChunk");
    var divContent = document.getElementById(divContentID);
    var startY, endY;
    if (dis) {
        $("#divCePing").hide();
        //var contentHeight = $(divContent).height();
        //if (contentHeight < fmHeight && window.isChuangGuan != 2) {//设置为全屏高度，用于动画控制
        //    divContent.style.height = fmHeight - 70 + "px";
        //}
        //if (window.IsPar) {
        //    $("html, body").css({
        //        "overflow": "hidden"
        //    })
        //}
        //$("html, body").bind("touchstart", function (e) {
        //    e.preventDefault();
        //    parent.$(window.parent.document).trigger("click");
        //});
        divFengMian.addEventListener("touchstart", function (event) {
            event.preventDefault();
            event.stopPropagation();
            var touch = event.touches[0];
            startY = touch.pageY;
            return false;
        }, false);

        divFengMian.addEventListener("touchmove", function (event) {
            var touch = event.touches[0];
            endY = touch.pageY;

            if (endY > startY && $(window).scrollTop() <= 0) {
                event.preventDefault();
            }
            return false;
        }, false);

        divFengMian.addEventListener("touchend", function () {
            var scrollDistance = endY - startY;
            var scrollDirection = scrollDistance < 0 ? 1 : 0;
            if (scrollDirection) {
                if (Math.abs(scrollDistance) > 10) {
                    event.preventDefault();
                    event.stopPropagation();
                    showHideFengMian(false);
                }
            }
            return false;
        }, false);

        $(slideChunk).on("click", function (e) {
            showHideFengMian(false);
        });

        var isMobile = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent);
        if (!isMobile) {
            $("#divFengMian").on("click", function (e) {
                showHideFengMian(false);
            });
        }



        //var fengMianTitle = $("#fengMianTitle")[0];
        //if (!fengMianTitle) {

        if (!window.laShen) {
            $("#divFengMian").css({ "background-size": "100%" });

            var bgImg = $(divFengMian).css("background-image");

            if (bgImg) {
                var mimg = bgImg.replace('url("', '').replace('")', '').replace('url(', '').replace(')', '');
                mimg = replaceSrcImg(mimg);
                mimg = mimg.replace("pubnew.paperol.cn", "pubref.paperol.cn").replace("pubnewfr.paperol.cn", "pubref.paperol.cn");

                //var screenWidth = $(window).width(); var screenHeight = $(window).height();
                //var realWidth = this.width;
                //var realHeight = this.height;

                //var newHeight = screenWidth / realWidth * realHeight;
                //if (newHeight < fmHeight && newHeight + 180 > fmHeight) {
                //    $("#divFengMian").css({ "background-size": "100%" });
                //}
                try {
                    RGBaster.colors(mimg, {
                        paletteSize: 3,
                        exclude: ['rgb(0,0,0)'],
                        success: function (payload) {
                            var c = payload.dominant.match(/\d+/g);
                            var bgColor = "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")";

                            var grayLevel = c[0] * 0.299 + c[1] * 0.587 + c[2] * 0.114;

                            $("#divFengMian").css({ "background-color": bgColor });
                            var rimg = document.createElement("img");
                            var screenWidth = $(window).width();
                            var screenHeight = $(window).height();
                            rimg.onload = function () {
                                var realWidth = this.width;
                                var realHeight = this.height;
                                var newHeight = screenWidth / realWidth * realHeight;
                                if (newHeight + 62 < screenHeight) {
                                    $(slideChunk).css("background", "none")
                                    if (grayLevel >= 192) {
                                        $(".slideChunkWord").css("color", "#262626");
                                        $("#slideChunkArrow").css("background-image", "url('/images/newimg/mobile-cover/arrow-black@3x.png')")
                                    }
                                }
                            }
                            rimg.src = mimg;
                        }
                    });
                }
                catch (ex) {
                }
            }
        }
        if (window.laShen != 2)
            $(slideChunk).css("background", "rgba(0,0,0,.5)");
        $(slideChunk).height("62px").css("padding-top", "15px");
        //}
        divContent.style.display = "none";
    }
    else {
        $("#divCePing").show();
        //$("html, body").unbind("touchstart");
        divContent.style.display = "";
        if (window.isChuangGuan == 2) {
            showContent(divContent);
        }
        else {
            //var contentHeight = $(divContent).height();
            //if (contentHeight < fmHeight) {//设置为全屏高度，用于动画控制
            //var theight = $("#divPowerBy").height();
            //divContent.style.height = fmHeight + "px";
            //}
            //$("html, body").animate({
            //    scrollTop: fmHeight + "px"
            //}, 10).promise().then(function () {
            //    showContent(divContent);
            //});

            $(divFengMian).animate({
                position: "relative",
                left:"-770px"
            }, 500).promise().then(function () {
                $("#fengMianTitle").hide();
                $("#slideChunk").hide()

                //if (IsPar) {
                //    $("html, body").css({
                //        "overflow": "auto"
                //    });
                //}
                if (divTip && (divTip.style.display != "none" || divTip.needShow)) {
                    divTip.style.display = "";
                    $("#tipHeight").show();
                }
                showContent(divContent);
            })
        }
    }
    var hasbg = $("body").hasClass("hasbgpic");
    var toptitle = document.getElementById("toptitle");
    var nv = toptitle.getAttribute("nv");
    if (dis) $("#divBackgroundWrap").hide();
    else $("#divBackgroundWrap").show();
    var toplogo = document.getElementById("toplogo");
    var divPowerBy = document.getElementById("divPowerBy");

    if (toplogo)
        toplogo.style.display = dis ? "none" : "";
    if (dis) {
        if (divTip && (divTip.style.display != "none" || divTip.needShow)) {
            divTip.style.display = "none";
            $("#tipHeight").hide();
            divTip.needShow = true;
        }
    }
    var divLoadAnswer = document.getElementById("divLoadAnswer");
    if (divLoadAnswer && (divLoadAnswer.style.display != "none" || divLoadAnswer.needShow)) {
        divLoadAnswer.style.display = dis ? "none" : "";
        divLoadAnswer.needShow = true;
    }
    var divTopHeader = document.getElementById("divTopHeader");
    if (divTopHeader) divTopHeader.style.display = dis ? "none" : "";
    var voteHead = document.getElementById("voteHead");
    if (voteHead) voteHead.style.display = dis ? "none" : "";
    var voteSelSearch = document.getElementById("voteSelSearch");
    if (voteSelSearch) voteSelSearch.style.display = dis ? "none" : "";
    if (toptitle && !nv) toptitle.style.display = dis ? "none" : "";
    if (divPowerBy) divPowerBy.style.display = dis ? "none" : "";
    if (hasbg) {
        var ptop = dis ? "0px" : "40px";
        $("body").css("padding-top", ptop);
    }
    if (window.hasPageTime && !dis)
        processMinMax();
    if (!dis && window.isChuangGuan == 2) {
        startChuangGuan(true);
    }
    if (window.initSlider) initSlider();
    if (window.initTableWidth) initTableWidth();
    if (window.pageHolder && window.bindUploadMultipleFn) {
        var firstField = pageHolder[cur_page];
        $(firstField.querySelectorAll(".field")).each(function (index, value) {
            if (value.getAttribute("type") == "33") {
                value.querySelectorAll(".file").forEach(function (dom) {
                    if (dom.parentNode.uploader)
                        dom.parentNode.uploader.refresh()
                });
            } else {
                if (value.uploader) value.uploader.refresh();
            }
        })
    }
}
function removeError(isMatrix) {
    if (this.errorMessage) {
        this.errorMessage.innerHTML = "";
        if (window != window.top)
            $("#ValError").html("");
        this.removeError = null;
        if (window.isChuangGuan != 2)
            if (!isMatrix) this.style.border = "solid 1px #fff";
            else this.parentNode.style.border = "solid 1px #fff"
        //this.style.borderBottom = "solid 1px #efefef";
        //this.style.paddingBottom = "5px";
        if (this.errorControl) {
            var ec = getErrorControl(this.errorControl);
            ec.style.background = "";//"solid 1px #7F9DB9";
            this.errorControl = null;
        }
        fixBottom();
        //this.className = "div_question";
    }
}
//<script src="https://wjxyl.natapp4.cc/yl/dz0325.js"></script>

