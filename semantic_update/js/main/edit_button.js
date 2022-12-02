 $(document).ready(function () {

     $('#edit_b').click(function () {
        console.log("edit_b")
        edit_button();
    });

 });
 function edit_button() {
   $(".POSL").removeAttr("disabled");
   $(".FEL").removeAttr("disabled");
   $(".SFE").removeAttr("disabled");
   $("#any_SFE").removeAttr("disabled");
   $("#save").removeAttr("disabled");
   $('.btn-edit').removeAttr("disabled");

 }