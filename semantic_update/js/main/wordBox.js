$(document).ready(function () {
 var v1  = getUrlVars()['sid'];

let data_request = {
      url: config.host + '/getSentence_sid/'+v1,
      type: 'GET'
    };
    callAPI(data_request, function (result) {
        if (result) {
          let content =''
          let title_sentence = ''
          $.each(result.data, function (key, value) {

    		makeLabel(value.sentence.Word)
            makeFrame(value.sentence.Word)
            makePOS(value.sentence.Word)
            step4(v1)
                        
            
        });
         
         
        } else {
            swal("การสมัครสมาชิก", "ไม่สำเร็จ", "error");
        }
    });


 });

function makeLabel(words){
	let content =''
   
	for (var i = 0; i < words.length; i++) {
		if (i==0) {
            console.log('hello')
            content +='<div class="tooltip1 btn-success btn-sm mr-2 "  data-placement="top">'+words[i]+'</div>'
        }else{
        //     content +='<a id="relation'+i+'" href="#" type="button" class="b_arrow" value="left"><div id="div_id" class="div_arrow"></div></a>'+
        // '<div class="tooltip1 btn-success btn-sm mr-2 "  data-placement="top">'+words[i]+'</div>'
            content += '<a id="" type="button" class="btn dark-icon btn-light btn-sm mr-2"><i name ="i_arrow_'+i+'" id="a_'+i+'" class="relation_arrow fas fa-arrow-right" onclick="MyFunction(this)" value="1"></i></a>'+
            '<div class="tooltip1 btn-success btn-sm mr-2 "  data-placement="top">'+words[i]+'</div>'
        }
		
                    
	}
	 $('#testlabel').html(content);
     // $('.b_arrow').addClass('button');
     // $('.b_arrow').addClass('switch');
     // $('.div_arrow').addClass('arrow');
}

function makeFrame(words){
    let content =''
    for (var i = 0; i < words.length; i++) {
        if(i==0){
            content +='<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="FEL" id="FE'+i+'">'+
                                       '<option selected="" disabled="">Frame Elements</option>'+
                                       '<option>Agent</option>'+
                                       '<option>Object</option>'+
                                      '<option>Manner</option>'+
                                       '<option>Measure</option>'+
                                       '<option>Time</option>'+
                                       '<option>Location</option>'+
                                       '<option>Benefactor</option>'+
                                       '<option>Experiencer</option>'+
                                       '<option>Instrument</option>'+
                                       '<option>Accompanyment</option>'+
                                        
                                    '</select>'+
                                 '</div>'+
                             '</div>'
        }else{
        content +='<a id="" type="button" class="btn dark-icon btn-light btn-sm mr-2"><i name ="i_arrow_'+i+'" class="fas fa-arrow-right" value="1" disabled></i></a>'+
        '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="FEL" id="FE'+i+'">'+
                                       '<option selected="" disabled="">Frame Elements</option>'+
                                       '<option>Agent</option>'+
                                       '<option>Object</option>'+
                                      '<option>Manner</option>'+
                                       '<option>Measure</option>'+
                                       '<option>Time</option>'+
                                       '<option>Location</option>'+
                                       '<option>Benefactor</option>'+
                                       '<option>Experiencer</option>'+
                                       '<option>Instrument</option>'+
                                       '<option>Accompanyment</option>'+
                                        
                                    '</select>'+
                                 '</div>'+
                             '</div>'
        }
        
    
    }
     $('#idFE').html(content);
}


function makePOS(words){
    let content =''
    
    for (var i = 0; i < words.length; i++) {
        if(i==0){
          content +='<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="POSL" id="POS'+i+'">'+
                                      '<option selected="" disabled="">Postag Label</option>'+
                                   '<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option>AUX</option>'+
                                    '<option>CCONJ</option>'+
                                    '<option>DET</option>'+
                                    '<option>INTJ</option>'+
                                    '<option>NOUN</option>'+
                                    '<option>NUM</option>'+
                                    '<option>PART</option>'+
                                     '<option>PRON</option>'+
                                    '<option>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'+
                                    '</select>'+
                                 '</div>'+
                             '</div>'  
        }else{
    content += '<a id="" type="button" class="btn dark-icon btn-light btn-sm mr-2"><i name ="i_arrow_'+i+'" class="fas fa-arrow-right" value="1" disabled></i></a>'+
        '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="POSL" id="POS'+i+'">'+
                                      '<option selected="" disabled="">Postag Label</option>'+
                                   '<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option>AUX</option>'+
                                    '<option>CCONJ</option>'+
                                    '<option>DET</option>'+
                                    '<option>INTJ</option>'+
                                    '<option>NOUN</option>'+
                                    '<option>NUM</option>'+
                                    '<option>PART</option>'+
                                     '<option>PRON</option>'+
                                    '<option>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'+
                                    '</select>'+
                                 '</div>'+
                             '</div>'
        }
    
   
    }
     $('#PPOS').html(content);
}

function step4(v1){
let data_request = {
      url: config.host + '/getSentence_sid/'+v1,
      type: 'GET'
    };
    callAPI(data_request, function (result) {
        if (result) {
          let content =''
          let title_sentence = ''
          $.each(result.data, function (key, value) {
            let text = value.sentence.Word.join("");
            content +='<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                '<div class="btn dark-icon btn-success col-12" >'+text+'</div>'+
                                  '<div class="btn-group" role="group">'+
                                    '<select class="SFE" id="selected'+value.sentence_id+'" onclick="a11DisableTextBox()">'+
                                       '<option selected="" disabled="">Frame Label</option>'+
                                       '<option value="2">Agt</option>'+
                                       '<option value="3">Exp</option>'+
                                       '<option value="4">Pat</option>'+
                                       '<option value="5">Obj</option>'+
                                       '<option value="6">Comp</option>'+
                                       '<option value="7">Msg</option>'+
                                      '<option value="8">Ben</option>'+
                                      '<option value="9">Cop</option>'+
                                       '<option value="10">Cau</option>'+
                                       '<option value="11">Res</option>'+
                                        '<option value="12">Man</option>'+
                                       '<option value="13">Deg</option>'+
                                       '<option value="14">Dep</option>'+
                                       '<option value="15">Spd</option>'+
                                       '<option value="16">Dur</option>'+
                                       '<option value="17">Fre</option>'+
                                       '<option value="18">Time</option>'+
                                       '<option value="19">Dis</option>'+
                                       '<option value="20">Dir</option>'+
                                       '<option value="21">Path</option>'+
                                       '<option value="22">Place</option>'+
                                       '<option value="23">Pos</option>'+
                                       '<option value="24">Src</option>'+
                                       '<option value="25">Goal</option>'+
                                       '<option value="26">Pur</option>'+
                                       '<option value="27">Mea</option>'+
                                       '<option value="28">Veh</option>'+
                                       '<option value="29">Ins</option>'+
                                       '<option value="30">Eve</option>'+
                                       '<option value="31">อื่นๆ</option>'+
                                    '</select>'+
                                 '<input class="" type="text" placeholder="Frame Label" id="any_SFE" disabled="disabled">'+
                                  '</div>'
                                 
            
        });
         
          // console.log(content)
          $('#framelabel').html(content);
          
        } else {
            swal("การสมัครสมาชิก", "ไม่สำเร็จ", "error");
        }
    });
}