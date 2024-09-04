var frame;

;(($)=>{
  $("#btn_id_1").on("click",function(){
    // console.log("Clicked");
    frame = wp.media({
      title:"Upload Image",
      button:{
        text:"Select Image"
      },
      multiple:false
    });
    frame.open();
    return false;   
  });

})(jQuery);

