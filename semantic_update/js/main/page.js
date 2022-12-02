$(document).ready(function () {
  var v1  = getUrlVars()['number'];
  var v2  = getUrlVars()['status'];
  let data_request = {
      url: config.host + '/getPageNumber/'+v2,
      type: 'GET'
    };
    callAPI(data_request, function (result) {
        if (result.result) {
          let content =''
          let url_content=''
          
            if(v2==0){
                url_content = 'article_list.html'
            }else{
                url_content = 'history-list.html'
            }
            for(var i =1;i<=result.result;i++){
              if (v1==i){
                content += ' <li class="page-item active"><a class="page-link" href="'+url_content+'?number='+i+'&status='+v2+'">'+i+'</a></li>'
              }else{
                content += ' <li class="page-item"><a class="page-link" href="'+url_content+'?number='+i+'&status='+v2+'">'+i+'</a></li>'
              }
            }
            

          $('#page_number').html(content);

        }
    });

});
