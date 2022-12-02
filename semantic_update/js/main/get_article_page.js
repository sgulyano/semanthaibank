$(document).ready(function () {
  var v1  = getUrlVars()['number'];
  var v2  = getUrlVars()['status'];
  let data_request = {
      url: config.host + '/getArticlePage/'+v1+"/"+v2,
      type: 'GET'
    };
    callAPI(data_request, function (result) {
      console.log(result.result)
        if (result.result) {
          let content =''
          
          $.each(result.result, function (key, value) {
            console.log(value)
            let status_content = ''
            if(value.status==0){
              status_content='อยู่ระหว่างดำเนินการ'
            }else{
              status_content='สำเร็จ'
            }
            if(v2==0){
              content +=  '<tr>'+
                                      
                                      '<td><a href="annotation.html?aid='+value.article_id+'">บทความที่ '+value.article_id+'</a></td>'+
                                      '<td style="color: red;"><b>'+status_content+'</b></td>'+
                                      
                                      
                                   '</tr>'
                                 }else{
                                  content +=  '<tr>'+
                                      
                                      '<td><a href="article-history.html?aid='+value.article_id+'">บทความที่ '+value.article_id+'</a></td>'+
                                      '<td style="color: red;"><b>'+status_content+'</b></td>'+
                                      
                                      
                                   '</tr>'
                                 }
            

          });
          $('#article_body').html(content);

        }
    });

});
