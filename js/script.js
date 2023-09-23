$(document).ready(function(){
    let offset = {offset: "80%"}
    $(".j-heading-1").waypoint(function(){
        $(".j-heading-1").addClass("animate__animated animate__fadeInLeft")
    },
    offset
    )

    $(".j-heading-2").waypoint(function(){
        $(".j-heading-2").addClass("animate__animated animate__fadeInLeft")
    },
    offset
    )
    $(".j-heading-3").waypoint(function(){
        $(".j-heading-3").addClass("animate__animated animate__fadeInLeft")
    },
    offset
    )

    $(".j-main-1").waypoint(function(){
        $(".j-main-1").addClass("animate__animated animate__fadeInRight")
    },
    offset
    )

    $(".j-main-2").waypoint(function(){
        $(".j-main-2").addClass("animate__animated animate__bounceInDown")
    },
    offset
    )

    $(".j-main-3").waypoint(function(){
        $(".j-main-3").addClass("animate__animated animate__fadeInRight")
    },
    offset
    )

    $(".j-card-1").waypoint(function(){
        $(".j-card-1").addClass("animate__animated animate__zoomIn")
    },
    offset
    )
    $(".j-card-2").waypoint(function(){
        $(".j-card-2").addClass("animate__animated animate__zoomIn")
    },
    offset
    )
    $(".j-card-3").waypoint(function(){
        $(".j-card-3").addClass("animate__animated animate__zoomIn")
    },
    offset
    )


    $(".j-my-img").waypoint(function(){
        $(".j-my-img").addClass("animate__animated animate__rotateInDownLeft")
    },
    offset
    )
    $(".j-my-text").waypoint(function(){
        $(".j-my-text").addClass("animate__animated animate__fadeInRight")
    },
    offset
    )


    $(".j-footer").waypoint(function(){
        $(".j-footer").addClass("animate__animated animate__zoomIn")
    },
    offset
    )
    


})