 $(document).ready(function(){
      $("#frameElement").hide()
      $("#feLabel").hide()
      $("#posDIV").hide();

      $("#nextPOS").click(function(){

       $("#GroupingWords").hide();
       $("#posDIV").show();
        
     });
      $("#backGroup").click(function(){

       $("#posDIV").hide();
       $("#GroupingWords").show();
        
     });

     $("#nextFE").click(function(){

       $("#posDIV").hide();
       $("#frameElement").show();
        
     });

     $("#backPOS").click(function(){
        $("#posDIV").show();
       $("#frameElement").hide();
        
     });
    $("#nextFeLabel").click(function(){
      console.log("feLabel")
        $("#feLabel").show();
       $("#frameElement").hide();
        
     });
        $("#backFE").click(function(){
        $("#feLabel").hide();
       $("#frameElement").show();
        
     });
});