 $(document).ready(function () {
 var v1  = getUrlVars()['aid'];
console.log(v1)
let data_request = {
      url: config.host + '/getSentence_HistoryID/'+v1,
      type: 'GET'
    };
    callAPI(data_request, function (result) {
        if (result) {
          let content =''
          let title_sentence = ''
          $.each(result.data, function (key, value) {
            let text = value.sentence.Word.join("");
            content += '<a href="article-history.html?aid='+v1+'&?sid='+value.sentence_id+'" class="list-group-item list-group-item-action">'+text+'</a>'
            
        });
         
          // console.log(content)
          $('#all_sentences').html(content);
          
        } else {
            swal("การสมัครสมาชิก", "ไม่สำเร็จ", "error");
        }
    });


 });
