$(document).ready(function(){

    $("#mainButton").click(function(){
        $(".infoHidden").addClass("infoDisplayed");
    })
    $("#closeButton").click(function(){
        $(".infoHidden").removeClass("infoDisplayed");
    })

    $(".aboutme").click(function(){
        if($(".contact").hasClass("isActive")){
            $(".contact").removeClass("isActive");
            $(this).addClass("isActive");
        }
        toggleContent()
    })
    $(".contact").click(function(){
        if($(".aboutme").hasClass("isActive")){
            $(".aboutme").removeClass("isActive");
            $(this).addClass("isActive");
        }
        toggleContent()
    })
    
})

function toggleContent(){
    
    if($(".aboutme").hasClass("isActive")){
        $(".contactContent").hide();
        $(".aboutmeContent").show();
    }

    else if($(".contact").hasClass("isActive")){
        $(".aboutmeContent").hide();
        $(".contactContent").show();
    }
}




