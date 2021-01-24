var field=$("#text");
        var text=field.val();
        var id=0;
        $("#text").on("keydown", function(event){
            
            if (event.which===13) {
                text="<li class=\"item\" id=\"+l"+id+"+\">"+String(field.val())+"</li>";
                $(".list").append(text);
                field.val("");
            };

            $("li").on("click", function(){
                $(this).remove();
            });
        });
$("#rotate").on("click",function(){
    var text;
    for(var i=0;i<=id;++i){
        var iid="l"+i;
        var el=$("#l1").text();
        text="<div class=\"element\" id=\"e"+id+"\">"+el+"</div>";
        $(".ruletka").append(text);    
    }   
})