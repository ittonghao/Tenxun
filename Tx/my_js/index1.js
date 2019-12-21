var a_w = window.screen.width
var a_h = window.screen.height
console.log(a_h);
$(".warp1").css({
    "height":a_h-60 +"px"    
})


$(".an_niu").click(function(){
    console.log("1213234")
    var t = this
    var an_niu_index = $(this).index()
    console.log(an_niu_index);
    
    $(".an_niu").each(function(index,xxx){
        
        if(an_niu_index == index) {
            var cur_src = $(xxx).find("img").attr("src")
            console.log(cur_src);
            
            if(cur_src.indexOf("_a") == -1) {
                $(xxx).find("img").attr("src",cur_src.replace(".png","_a.png"))
            }
        }else {
            var cur_src = $(xxx).find("img").attr("src")
            $(xxx).find("img").attr("src",cur_src.replace("_a",""))
        }
    })


    $(".tiao>div").each(function (index , xxx) {
        if ($(t).index() == index) {
            $(xxx).css({
                "display": "block"
            })
        } else {
            $(xxx).css({
                "display": "none"
            })
        }
    })
})
