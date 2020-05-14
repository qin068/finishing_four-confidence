$(function(){
    $("body").click(function(e){
        var parentDiv = $("<div></div>");
        parentDiv.css({
            "width":"20px",
            "height":"20px",
            "position":"absolute",
            "z-index":"10000"
        });
        var conDiv = $("<div></div>");
        conDiv.css({
            "width":"100%",
            "height":"100%",
            "position":"relative"
        });
        parentDiv.append(conDiv);
        var childDiv = conDiv.append("<div></div><div></div><div></div>");
        var divs = conDiv.children();
        var color = "rgb("+parseInt(Math.random()*250+5)
            +","+parseInt(Math.random()*250+5)
            +","+parseInt(Math.random()*250+5)+")";
        $(divs[0]).css({
            "width":"60%",
            "height":"60%",
            "background-color":color,
            "border-radius":"100%"
        });
        $(divs[1]).css({
            "width":"60%",
            "height":"60%",
            "background-color":color,
            "border-radius":"100%",
            "position":"absolute",
            "top":"0",
            "right":"0"
        });
        $(divs[2]).css({
            "width":"60%",
            "height":"60%",
            "background-color":color,
            "position":"absolute",
            "top":"20%",
            "left":"20%",
            "transform":"rotate(45deg)",
            "-ms-transform":"rotate(45deg)",
            "-webkit-transform":"rotate(45deg)"
        });
        var x = e.pageX;
        var y = e.pageY;
        parentDiv.css({"left":x+"px","top":y+"px"});
        $("body").append(parentDiv);
        parentDiv.animate({
            "width":"25px",
            "height":"25px",
            "top":(y-200)+"px",
            "opacity":0
        },4000,function(){
            parentDiv.remove();
        });
    });
});
