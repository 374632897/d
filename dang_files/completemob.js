function isImgLoad(a){$("img").each(function(){return 0===this.height?(isImgLoaded=!1,!1):void 0}),isImgLoaded?(clearTimeout(t_img),a()):(isImgLoaded=!0,t_img=setTimeout(function(){isImgLoad(a)},500))}function postHeight(){if(window!=window.top)try{var a=parent.postMessage?parent:parent.document.postMessage?parent.document:null;null!=a&&($("html,body").css("height","auto"),isImgLoad(function(){var c,b=$("body").height()+20;return window!=window.top&&600>b&&(b+=40),c=b>667?b+",1":b,a.postMessage("heightChanged,"+c,"*")}))}catch(b){}}function submitSuccess(){if(window!=window.top)try{var a=parent.postMessage?parent:parent.document.postMessage?parent.document:null;if(null!=a)return a.postMessage("submitSuccess","*")}catch(b){}}function replaceImg(a){var b="http://pubimageqiniu.paperol.cn",c="//pubnewfr.paperol.cn";0==a.src.indexOf("http://pubssl.sojump.com")||0==a.src.indexOf("https://pubssl.sojump.com")||0==a.src.indexOf("http://pubimage.sojump.com")||0==a.src.indexOf("http://pubimage.sojump.cn")||0==a.src.indexOf("http://pubssl.sojump.cn")?a.src=a.src.replace("http://pubssl.sojump.com",b).replace("https://pubssl.sojump.com",b).replace("http://pubimage.sojump.com",b).replace("http://pubimage.sojump.cn",b).replace("http://pubssl.sojump.cn",b):(0==a.src.indexOf("http://pubalifr.sojump.com")||0==a.src.indexOf("https://pubalifr.sojump.com")||0==a.src.indexOf("https://pubali.sojump.com")||0==a.src.indexOf("http://pubali.sojump.com")||0==a.src.indexOf("http://pubali.sojump.cn")||0==a.src.indexOf("http://pubalifr.sojump.cn")||0==a.src.indexOf("https://pubali.sojump.cn")||0==a.src.indexOf("https://pubalifr.sojump.cn"))&&(a.src=a.src.replace("http://pubalifr.sojump.com",c).replace("https://pubalifr.sojump.com",c).replace("http://pubali.sojump.com",c).replace("https://pubali.sojump.com",c).replace("http://pubali.sojump.cn",c).replace("https://pubali.sojump.cn",c).replace("http://pubalifr.sojump.cn",c).replace("https://pubalifr.sojump.cn",c))}function closeConfirm(){var a=document.getElementById("confirm_box");a.style.display="none",a.callback&&a.callback()}function closeNo(){var a=document.getElementById("confirm_box");a.style.display="none",a.callback2&&a.callback2()}function loadPromoteCzc(){var b,c,a=$("#hrefAward");a[0]&&(b=a.attr("awid"),b&&(c="/joinnew/statad.ashx?awid="+b,a.attr("activity")&&(c="/joinnew/statsample.ashx?activity="+b,"1"==a.attr("hp")&&(c+="&hp=1")),$.get(c)))}function getCookieVal(a){var b=document.cookie.indexOf(";",a);return-1==b&&(b=document.cookie.length),decodeURIComponent(document.cookie.substring(a,b))}function getCookie(a){for(var f,b=a+"=",c=b.length,d=document.cookie.length,e=0;d>e;){if(f=e+c,document.cookie.substring(e,f)==b)return getCookieVal(f);if(e=document.cookie.indexOf(" ",e)+1,0==e)break}return""}function setCookie(a,b,c,d,e,f){document.cookie=a+"="+escape(b)+(c?"; expires="+c:"")+(d?"; path="+d:"")+(e?"; domain="+e:"")+(f?"; secure":"")}function getbx(a){return addtolog("2"),$.ajaxSetup({async:!1}),$.get("/joinnew/statad.ashx?awid="+a+"&cc=1&t="+(new Date).valueOf()),!0}function fixBottom(){var a,b,c;$("#spanPower").click(function(){window.location.href="https://www.wjx.cn/mobile/index.aspx"}),a=$("body").height(),b=$(window).height(),c=a-b,0>c?$(".logofooter").addClass("fixedbottom"):$(".logofooter").removeClass("fixedbottom")}function getbxactivity(a,b){var c,d,e;return $.ajaxSetup({async:!1}),c=$("#hrefAward"),d="1"==c.attr("hp")?"1":"0",e="/joinnew/statsample.ashx?activity="+a+"&hp="+d+"&cc=1&t="+(new Date).valueOf(),$.get(e),b&&(window.location.href=b),!0}function addtolog(a){var n,o,p,q,r,s,t,u,b=document.createElement("img"),c=window.activity,d=window.joinactivity,e=window.isVip?1:0,f=window.cqType||0,g=6,h="",i="",j=window.hasLoadAward||0,k=window.province||0,l=window.city||0,m=window.showAwardWay||0;if(window.userSearchWord&&(userSearchWord=decodeURIComponent(userSearchWord),h=userSearchWord.split("|")[0]||"",i=userSearchWord.split("|")[1]||""),"miniprogram"===window.__wxjs_environment?g=4:window.location.href.indexOf("&qw=1")>-1?g=3:window.isWeiXin?g=2:window.isApp&&(g=5),n=0,o=window.isrejoin||0,p=window.jclacount||0,window.divAward?(n=1,divPromoteComplete&&(n=1==isHardadvitisement?4:5)):window.divPromoteComplete&&(n=1==isHardadvitisement?2:3),1==isHardadvitisement)awardid=window.HardadvitisementAwardId;else if(window.awardData)for(q=awardData.split("§"),r=0;r<q.length;r++)s=q[r].split("〒"),s[1]&&(t=s[1].split(",")),s[2]&&t[1]&&parseInt(t[1])==t[1]&&(awardid=parseInt(t[1]));u="activitydata",b.src="//sojump.cn-hangzhou.log.aliyuncs.com/logstores/"+u+"/track.gif?APIVersion=0.6.0&t="+a+"&a="+c+"&j="+d+"&i="+e+"&q="+f+"&s="+g+"&w="+n+"&d="+awardid+"&r="+o+"&c="+p+"&c="+p+"&b="+encodeURIComponent(h)+"&k="+encodeURIComponent(i)+"&h="+j+"&p="+k+"&y="+l+"&sw="+m}function loadCzc(){var a,b,c,d,e;window.canProvideAward&&addtolog(4),addtolog(1),window.awardData&&awardid&&setCookie("wjxawardload",awardid+"|"+window.activity,null,"/","",null),a="免费版",isVip&&(a="企业版"),window._czc&&(_czc.push(["_trackEvent","移动端完成",a,cqType]),divAward?(_czc.push(["_trackEvent","抽取"+prcp,"all"]),_czc.push(["_trackEvent","抽取"+prcp,cqType]),isValid||_czc.push(["_trackEvent","样本无效","load",""])):_czc.push(["_trackEvent","无投放"+a,cqType]),"miniprogram"===window.__wxjs_environment&&(_czc.push(["_trackEvent","小程序","load"]),divAward&&(b="1"==divAward.getAttribute("osp"),b||(divAward.style.display="none"),_czc.push(["_trackEvent","小程序","awd"])),divPromoteComplete&&(divPromoteComplete.style.display="none")),window.location.href.indexOf("&qw=1")>-1&&_czc.push(["_trackEvent","企业微信","完成问卷",""]),window.isNewUser&&(2==isNewUser?_czc.push(["_trackEvent","手机端本地问卷","新用户","完成"]):_czc.push(["_trackEvent","手机端本地问卷","老用户","完成"])),c=document.getElementById("tbAward"),c&&(d=window.jpmatch,d&&window._czc&&(e=getCookie("jpckey")||"",_czc.push(["_trackEvent","jpm",d]),_czc.push(["_trackEvent","jpc"+d,decodeURIComponent(e)]))),window.loadPromoteCzc&&window.loadPromoteCzc())}function clickstat(){addtolog(2),window._czc&&(isValid?_czc.push(["_trackEvent","抽取点击"+prcp,cqType]):_czc.push(["_trackEvent","样本无效","click",""]))}function androidSavePubnew(){var a=navigator.userAgent,b=a.indexOf("Android")>-1||a.indexOf("Linux")>-1;b&&$("img").click(function(){if(-1!=this.src.indexOf("pubnew.")||-1!=this.src.indexOf("pubnewfr.")){var a=this.src.replace("pubnew.","pubref.").replace("pubnewfr.","pubref.");previewImage.start({close:!0,current:a})}})}var t_img,divPromoteComplete,divAward,prcp,isValid,needFixBottom=!1,isImgLoaded=!0,awardid=0;$(function(){var a,b;for(window!=window.top&&$("body")[0].scrollIntoView(),submitSuccess(),postHeight(),fixBottom(),a=document.getElementsByTagName("img"),b=0;b<a.length;b++)a[b].onerror=function(){this.onerror=null,replaceImg(this)},replaceImg(a[b])}),window.confirmnew=function(a,b,c){var e,d=document.getElementById("confirm_box");return d?document.getElementById("pop_box_msg2").innerHTML=a:(d=document.createElement("div"),d.id="confirm_box",e="<div style='position:fixed;*position: absolute;width: 100%;height: 100%;opacity: 0.5;filter: alpha(opacity=50);background-color: black;z-index: 99998;top: 0px;left: 0px;'></div><div style='min-height: 180px;width:90%;transform: translateX(-50%);margin-top: -90px;position: fixed;z-index: 99999;top: 50%;left: 50%;background-color: white;border-radius: 8px;'><div style='font-size:18px;color:#000;font-weight:600;padding:26px 20px 10px;width:100%;text-align:center;border-radius:8px 8px 0 0;vertical-align: middle;z-index: 1;'><div>系统提示</div></div><div style='width: 100%;border-radius: 0 0 8px 8px; z-index: 1;'><div style='min-height:66px;padding:6px 20px 10px;font-size: 15px;line-height: 22px;text-align: center;' id='pop_box_msg2'>"+a+"</div>"+"<div style='width:100%;height:50px;text-align:center;border-top:1px solid #D2D3D5;'>"+"<button style='background:none;display:inline-block;width: 50%;height:50px;font-size:18px;line-height:50px;color:#313233;text-align: center;text-decoration: none;border: none;' onclick='closeNo();'>取消</button><button style='display:inline-block;width: 50%;font-size:18px;height:50px;box-sizing:border-box;line-height:50px;color:#3296FA;text-align: center;text-decoration: none;border: none;border-left:1px solid #D2D3D5;background: none;' onclick='closeConfirm();'>确定</button></div>"+"</div></div>",d.innerHTML=e,document.body.appendChild(d)),d.style.display="",d.callback=b||"",d.callback2=c||"",d},$(function(){function b(){window.addEventListener("popstate",function(){if(a)if("miniprogram"!==window.__wxjs_environment){if(window.flist){var e=$("#hrefQywxList").attr("href");e&&(window.location.href=e)}c(),isWeiXin&&window.WeixinJSBridge&&confirmnew("确认退出吗？",function(){return window.location.href.indexOf("&rfrr=1")>-1?(history.go(-3),void 0):(WeixinJSBridge.call("closeWindow"),void 0)})}else try{WeixinJSBridge.call("closeWindow")}catch(d){}},!1)}function c(){var b={page:1};window.history.pushState(b,"title","#")}if(isWeiXin){var a=!1;window.addEventListener("pageshow",function(){a=!1,setTimeout(function(){a=!0},500),b()}),c()}}),divPromoteComplete=document.getElementById("divPromoteComplete"),divAward=document.getElementById("divAward"),prcp=divPromoteComplete?"1":"0",isValid="0"!=isAValid&&"-2"!=isAValid&&"-3"!=isAValid,divPromoteComplete&&!divAward&&($("#chuangGuanWrap").append(divPromoteComplete),divPromoteComplete.style.paddingTop="20px",divPromoteComplete.style.borderTop="1px dashed #ccc",divPromoteComplete.style.width="98%"),$(function(){function a(){var a,b,c;if("miniprogram"===window.__wxjs_environment&&$("#divdsc").html().indexOf("wx-open-launch-weapp")>-1&&/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){a=$("#divdsc wx-open-launch-weapp").attr("appid"),b=$("#divdsc wx-open-launch-weapp").attr("path").replace(".html","");try{c=$($("#divdsc wx-open-launch-weapp template").html()),c.click(function(){wx.miniProgram.redirectTo({url:"/pages/openWeapp/openWeapp?appid="+encodeURIComponent(a)+"&path="+encodeURIComponent(b)})}),$("#divdsc wx-open-launch-weapp").before(c)}catch(d){}}}androidSavePubnew(),window.WeixinJSBridge&&WeixinJSBridge.invoke?a():document.addEventListener("WeixinJSBridgeReady",a,!1)});