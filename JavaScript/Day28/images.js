// AJAX with js

//https://www.flickr.com/services/feeds/photos_public.gne

/* $(document).ready(function(){})  */
/* $(function(){

}) */
$(function(){

    const apiImages= "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    /* ?jsoncallback=? - to avoid cross orgin errors */

    $.getJSON(apiImages,{
        format: "json",
        tagmode : "any"
    }).done(function(imageData){
        console.log("imageData",imageData)

        $.each(imageData.items, function (idx, pic){
            console.log("pic",pic)

            $("<img>").attr("src",pic.media.m).appendTo("#imageContainer")



        })
    }).fail(function(){
        console.log("it failed")
    })

})