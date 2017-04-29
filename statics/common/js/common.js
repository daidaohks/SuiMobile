/*
 * @ module: 公共模块
   @ date： 2015-10-28
   @ author: wangy@carisok.com  && yaojh@carisok.com
*/

/********************公共部分*********************/
var loading = {
    showloading: function (text) {
        var hadMask = $("body div").hasClass(".win-mask");
        if (hadMask) {
            $(".win-mask").show();
            text && $(".win-mask").find('.loading-text').text( text );
        } else {
            loading.innerloading(text);
        }
    },
    hideloading: function () {
        $(".win-mask").remove();
    },
    innerloading: function (text) {
      text  = text || "正在加载中...";
        $("body").append('<div class="win-mask">\
                              <div class="loading-box">\
                                  <div class="loadings"></div>&nbsp;&nbsp;<span class="loading-text">'+ text +'</span>\
                              </div>\
                          </div>');
    }
}

