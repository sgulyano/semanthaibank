 $(document).ready(function () {

     $('#save').click(function () {
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
     const tagPOS = []
     const tagFE = []
     var SFE_any =''
     for (var i =0;i<objs_arrow.length;i++){
        // console.log('arrow:',document.getElementById(objs_arrow[i].id).getAttribute('value'))
        relation_list.push(document.getElementById(objs_arrow[i].id).getAttribute('value'))
     }

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
          url: config.host + '/updateSentence',
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
        callAPI(data_request, function (result) {
            if (result!='error') {
                    swal({
                        title: "อัพเดท",
                        text: "อัพเดทข้อมูลสำเร็จ!",
                        type: "success"
                    }).then(function() {
                        window.location = "article-history.html?aid="+v1;
                    });

                } else {
                    swal('', 'Username หรือ Password ไม่ถูกต้อง', 'error');
                }
        });

 }