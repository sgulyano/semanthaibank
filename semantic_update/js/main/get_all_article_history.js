$(document).ready(function () {

  let data_request = {
      url: config.host + '/getFinishArticle',
      type: 'GET'
    };
    callAPI(data_request, function (result) {
        if (result) {
          let content =''
          
          $.each(result.data, function (key, value) {
            let status_content = ''

            content +=  '<tr>'+
                                      
                  '<td><a href="article-history.html?aid='+value.article_id+'">บทความที่ '+value.article_id+'</a></td>'+
                  
                  
                  
               '</tr>'

          });
          $('#article_body').html(content);

        } else {
            swal("การสมัครสมาชิก", "ไม่สำเร็จ", "error");
        }
    });

});
