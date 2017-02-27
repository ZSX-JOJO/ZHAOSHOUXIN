(function($) {
    var defaults = {
        "background" : "",
        "backgroundFocus" : "",
        "optionBackground" : "#FFFFFF",
        "optionFocus" : "",
        "width" : 100,
        "height" : 50
    };
    $.fn.selectStyle = function(option) {

        var settings = $.extend(defaults, option);

        return this.each(function() {
             var $parent = $(this).parent();
            var $this = $(this);
            if($(this).width()<settings.width-50){
                return;
            }else{
                getDom(settings,$this,$parent);
            }
           
        });
    };

    function getDom(settings,$this,$parent) {
        	var textV=$this.children("option:selected").text();
            var innerHTML = "<div><div class='select' style=\"width:" + settings.width + "px;height:" + settings.height + "px;background:url('" + settings.background + "') no-repeat;padding-left:30px;line-height:" + settings.height + "px;\">" + textV + "</div><ul class='selectUL' style='display:none;width:" + eval(settings.width+25) + "px;'>";
            $this.children().each(function(i, item) {
                if ($(item).prop("selected"))
                    innerHTML += "<li class='focus' name='"+$(item).val()+"'>" + $(item).text() + "</li>";
                else
                    innerHTML += "<li name='"+$(item).val()+"'>" + $(item).text() + "</li>";
            });
            innerHTML += "</ul></div>";
            $parent.html(innerHTML);
            if($parent.css("display")=="none"){
                $parent.find("ul").offset({
                "left" : $parent.parent().offset().left+1,
                "top" : $parent.parent().offset().top + settings.height - 3
            });
            }else{
            	console.log($parent);
                 $parent.find("ul").offset({
                "left" : $parent.offset().left+1,
                "top" : $parent.offset().top + settings.height - 3
            });
            }
           
            $parent.find(".select").bind("click", function() {
                   $(this).css("background-image","url('_assert/img/greenBtn.png')");
                   $(this).addClass("open");
                    //$(this).next().css("z-index", 999);
                    console.log($(this).offset().top);
                    var $left=$(this).offset().left;
                    var $top=$(this).offset().top;
                   $(this).next().css("top",$top+ settings.height - 3);
                    $(this).next().show();
            });
            $parent.find("ul li").bind("click", function(event) {
                if ($parent.hasClass("dklb")) {

                    if ($(this).attr("name") == "1") {
                        $(".sg").show();
                        $(".zh").hide();
                         $(".warpper.djmj,.warpper.lv").show();
                         $(".warpper.djmj,.warpper.lv #dklv").val(4);
                        $(".warpper.dkze,.warpper.zhdk,.warpper.zhlv").hide();
                        $(".warpper #jsfs ul li:eq(0)").addClass("focus").siblings().removeClass("focus");
                        $(".warpper #jsfs .select").text( $(".warpper #jsfs ul li:eq(0)").text());
                    } else if ($(this).attr("name") == "3") {
                        $(".sg").hide();
                        $(".zh").show();
                         $(".warpper.zhdk,.warpper.zhlv").show();
                        $(".warpper.dkze,.warpper.djmj,.warpper.lv").hide();
                        
                    }else if($(this).attr("name") == "2"){
                    	  $(".sg").show();
                        $(".zh").hide();
                         $(".warpper.djmj,.warpper.lv").show();
                         $(".warpper.djmj,.warpper.lv #dklv").val(5.9);
                        $(".warpper.dkze,.warpper.zhdk,.warpper.zhlv").hide();
                        //console.log()
                        $(".warpper #jsfs ul li:eq(0)").addClass("focus").siblings().removeClass("focus");
                   $(".warpper #jsfs .select").text( $(".warpper #jsfs ul li:eq(0)").text());
                    }
                }
                if ($parent.hasClass("sg")) {
                    if ($(this).attr("name") == 1) {

                        $(".warpper.djmj").show();
                        $(".warpper.zhdk,.warpper.dkze").hide();
                    } else if ($(this).attr("name") == 2) {
                         $(".warpper.dkze").show();
                        $(".warpper.zhdk,.warpper.djmj").hide();
                    }
                }
                if($parent.hasClass("lvb")){
                	var dd=$("#dklb ul li.focus").attr("name");
                	if(dd=="1"){
						$("#dklv").val($(this).attr("name"));
						}else if(dd=="2"){
						$("#dklv").val($(".warpper.sy .right ul li").eq($(this).index()).attr("name"));
						}else if(dd=="3"){
						$("#zdklv").val($(this).attr("name"));
						$("#zdklv1").val($(".warpper.sy .right ul li").eq($(this).index()).attr("name"));
							}
                }
                 $(this).parent().prev().css("background-image","url('_assert/img/grayBtn.png')");
                $(this).parent().prev().text($(this).text());
                $(this).parent().hide();
                $(this).parent().css("z-index", 1);
                $(this).siblings("li").removeClass("focus").end().addClass("focus");
                event.stopPropagation();
            });


    };

})(jQuery);
