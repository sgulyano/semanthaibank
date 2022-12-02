 $(document).ready(function () {

     $('#draft').click(function () {
        console.log("save")
        posSave();
    });

 });
 function posSave() {
     var v1  = getUrlVars()['aid'];
     var v2  = getUrlVars()['sid'];
     objs1 = $('.POSL')
     objs2 = $('.FEL')
     objs3 = $('.SFE')
     objs_arrow = $('.relation_arrow')
     const relation_list = []
     
     for (var i =0;i<objs_arrow.length;i++){
        // console.log('arrow:',document.getElementById(objs_arrow[i].id).getAttribute('value'))
        relation_list.push(document.getElementById(objs_arrow[i].id).getAttribute('value'))
     } 

     const tagPOS = []
     const tagFE = []
     var SFE_any =''
     let SFE 
     for (var i =0;i<objs1.length;i++) {
        tagPOS.push($(objs1[i]).val())
        tagFE.push($(objs2[i]).val())
     }

     SFE = $(objs3[0]).val()

     if($(objs3[0]).val() == 31){
        SFE_any =  $('#any_SFE').val()
     }else{
        SFE_any = 'not_new'
     }
     console.log(tagPOS,tagFE,SFE)
    let data_request = {
          url: config.host + '/draftLabels',
          type: 'POST',
          data:{
            aid: v1,
            sid: v2,
            POSL: tagPOS,
            FEL: tagFE,
            SFEL: SFE,
            SFEA: SFE_any,
            relation: relation_list
          }
        };
    console.log(data_request)
        callAPI(data_request, function (result) {
            if (result!='error') {
                swal({
                    title: "บันทึกข้อมูล",
                    text: "บันทึกข้อมูลสำเร็จ!",
                    type: "success"
                }).then(function() {
                    window.location = "annotation.html?aid="+v1;
                });
                
                    // location.href = 'index.html';
                    //alert($.cookie('auth'));

                } else {
                    swal('', 'Username หรือ Password ไม่ถูกต้อง', 'error');
                }
        });

 }