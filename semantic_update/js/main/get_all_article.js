$(document).ready(function () {

  let data_request = {
      url: config.host + '/all_article',
      type: 'GET'
    };
    callAPI(data_request, function (result) {
        if (result) {
          let content =''
          
          $.each(result.data, function (key, value) {
            let status_content = ''
            if(value.status==0){
              status_content='อยู่ระหว่างดำเนินการ'
            }else{
              status_content='สำเร็จ'
            }
            content +=  '<tr>'+
                                      
                                      '<td><a href="annotation.html?aid='+value.article_id+'">บทความที่ '+value.article_id+'</a></td>'+
                                      '<td style="color: red;"><b>'+status_content+'</b></td>'+
                                      
                                      
                                   '</tr>'

          });
          $('#article_body').html(content);

        } else {
            swal("การสมัครสมาชิก", "ไม่สำเร็จ", "error");
        }
    });

});
