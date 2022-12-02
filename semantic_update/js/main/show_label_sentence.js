 $(document).ready(function () {
 var v1  = getUrlVars()['sid'];

let data_request = {
      url: config.host + '/getHistorySentence/'+v1,
      type: 'GET'
    };
    callAPI(data_request, function (result) {
        if (result) {
          let content =''
          let title_sentence = ''
          $.each(result.data, function (key, value) {
            // console.log(value.Sentence_model.sentence.Word)
    		makeLabel(value.Sentence_model.sentence.Word,value.Sentence_model.sentence.Word_relation)
            makePOS(value.Sentence_model.sentence.Word,value.POS,value.Sentence_model.sentence.Word_relation)
            makeFrame(value.Sentence_model.sentence.Word,value.FEs,value.Sentence_model.sentence.Word_relation)
            
           
            FrameSentenceLabel(value.Sentence_model.sentence.sentence_id,
                value.Sentence_label_model,
                value.Sentence_model.sentence.Word)
                        
            
        });
         
         
        } else {
            swal("การสมัครสมาชิก", "ไม่สำเร็จ", "error");
        }
    });


 });

function makeLabel(words,relations){
	let content =''
	for (var i = 0; i < words.length; i++) {
		if (i==0) {
            console.log('hello')
            content +='<div class="tooltip1 btn-success btn-sm mr-2 "  data-placement="top">'+words[i]+'</div>'
        }else{
            if(relations[i-1] == '0'){
                content +='<a name="btn-edit" type="button" class="btn-edit btn-edit btn dark-icon btn-light btn-sm mr-2" disabled><i name ="i_arrow_'+i+'" id="a_'+i+'" class="relation_arrow fas fa-arrow-left"  value="'+relations[i-1]+'" onclick="MyFunction(this)"></i></a>'+
        '<div class="tooltip1 btn-success btn-sm mr-2 "  data-placement="top">'+words[i]+'</div>'
            }else{
                content +='<a name="btn-edit" type="button" class="btn-edit btn dark-icon btn-light btn-sm mr-2" disabled><i name ="i_arrow_'+i+'" id="a_'+i+'" class="relation_arrow fas fa-arrow-right"  value="'+relations[i-1]+'" onclick="MyFunction(this)"></i></a>'+
        '<div class="tooltip1 btn-success btn-sm mr-2 "  data-placement="top">'+words[i]+'</div>'
            }
            
        }
		
                    
	}
	 $('#testlabel').html(content);
}

function makeFrame(words,labels,relations){
    let content =''
    let FEcontent = ''
    for (var i = 0; i < words.length; i++) {
        console.log(labels[i])
        if(labels[i]=='Agent'){
           
        FEcontent += '<option selected>Agent</option>'+
                                   '<option>Object</option>'+
                                  '<option>Manner</option>'+
                                   '<option>Measure</option>'+
                                   '<option>Time</option>'+
                                   '<option>Location</option>'+
                                   '<option>Benefactor</option>'+
                                   '<option>Experiencer</option>'+
                                   '<option>Instrument</option>'+
                                   '<option>Accompanyment</option>'
        }else if(labels[i]=='Object'){
            console.log(labels[i])
            FEcontent += '<option>Agent</option>'+
                                   '<option selected>Object</option>'+
                                  '<option>Manner</option>'+
                                   '<option>Measure</option>'+
                                   '<option>Time</option>'+
                                   '<option>Location</option>'+
                                   '<option>Benefactor</option>'+
                                   '<option>Experiencer</option>'+
                                   '<option>Instrument</option>'+
                                   '<option>Accompanyment</option>'

        }else if(labels[i]=='Manner'){
            console.log(labels[i])
            FEcontent += '<option>Agent</option>'+
                                   '<option>Object</option>'+
                                  '<option selected>Manner</option>'+
                                   '<option>Measure</option>'+
                                   '<option>Time</option>'+
                                   '<option>Location</option>'+
                                   '<option>Benefactor</option>'+
                                   '<option>Experiencer</option>'+
                                   '<option>Instrument</option>'+
                                   '<option>Accompanyment</option>'

        }else if(labels[i]=='Measure'){
            console.log(labels[i])
            FEcontent += '<option >Agent</option>'+
                                   '<option>Object</option>'+
                                  '<option>Manner</option>'+
                                   '<option selected>Measure</option>'+
                                   '<option>Time</option>'+
                                   '<option>Location</option>'+
                                   '<option>Benefactor</option>'+
                                   '<option>Experiencer</option>'+
                                   '<option>Instrument</option>'+
                                   '<option>Accompanyment</option>'
            
        }else if(labels[i]=='Time'){
            console.log(labels[i])
            FEcontent += '<option>Agent</option>'+
                                   '<option>Object</option>'+
                                  '<option>Manner</option>'+
                                   '<option>Measure</option>'+
                                   '<option selected>Time</option>'+
                                   '<option>Location</option>'+
                                   '<option>Benefactor</option>'+
                                   '<option>Experiencer</option>'+
                                   '<option>Instrument</option>'+
                                   '<option>Accompanyment</option>'
            
        }else if(labels[i]=='Location'){
            console.log(labels[i])
            FEcontent += '<option>Agent</option>'+
                                   '<option>Object</option>'+
                                  '<option>Manner</option>'+
                                   '<option>Measure</option>'+
                                   '<option>Time</option>'+
                                   '<option selected>Location</option>'+
                                   '<option>Benefactor</option>'+
                                   '<option>Experiencer</option>'+
                                   '<option>Instrument</option>'+
                                   '<option>Accompanyment</option>'
            
        }else if(labels[i]=='Benefactor'){
            console.log(labels[i])
            FEcontent += '<option>Agent</option>'+
                                   '<option>Object</option>'+
                                  '<option>Manner</option>'+
                                   '<option>Measure</option>'+
                                   '<option>Time</option>'+
                                   '<option>Location</option>'+
                                   '<option selected>Benefactor</option>'+
                                   '<option>Experiencer</option>'+
                                   '<option>Instrument</option>'+
                                   '<option>Accompanyment</option>'
            
        }else if(labels[i]=='Experiencer'){
            console.log(labels[i])
            FEcontent += '<option>Agent</option>'+
                                   '<option>Object</option>'+
                                  '<option>Manner</option>'+
                                   '<option>Measure</option>'+
                                   '<option>Time</option>'+
                                   '<option>Location</option>'+
                                   '<option>Benefactor</option>'+
                                   '<option selected>Experiencer</option>'+
                                   '<option>Instrument</option>'+
                                   '<option>Accompanyment</option>'
            
        }else if(labels[i]=='Instrument'){
            console.log(labels[i])
            FEcontent += '<option>Agent</option>'+
                                   '<option>Object</option>'+
                                  '<option>Manner</option>'+
                                   '<option>Measure</option>'+
                                   '<option>Time</option>'+
                                   '<option>Location</option>'+
                                   '<option>Benefactor</option>'+
                                   '<option>Experiencer</option>'+
                                   '<option selected>Instrument</option>'+
                                   '<option>Accompanyment</option>'
            
        }else if(labels[i]=='Accompanyment'){
            console.log(labels[i])
            FEcontent += '<option>Agent</option>'+
                                   '<option>Object</option>'+
                                  '<option>Manner</option>'+
                                   '<option>Measure</option>'+
                                   '<option>Time</option>'+
                                   '<option>Location</option>'+
                                   '<option>Benefactor</option>'+
                                   '<option>Experiencer</option>'+
                                   '<option>Instrument</option>'+
                                   '<option selected>Accompanyment</option>'
            
        }

        if(i==0){
            content +='<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="FEL" id="FE'+i+'" disabled>'+
                                      
                                       FEcontent+
                                        
                                    '</select>'+
                                 '</div>'+
                             '</div>'
        }else{
            if(relations[i-1] == '0'){
                content +='<a id="" type="button" class="btn dark-icon btn-light btn-sm mr-2"><i name ="i_arrow_'+i+'" class="fas fa-arrow-left"  value="'+relations[i-1]+'" disabled></i></a>'+
        '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="FEL" id="FE'+i+'" disabled>'+
                                        FEcontent+
                                        
                                    '</select>'+
                                 '</div>'+
                             '</div>'
            }else{
                content +='<a id="" type="button" class="btn dark-icon btn-light btn-sm mr-2"><i name ="i_arrow_'+i+'" class="fas fa-arrow-right"  value="'+relations[i-1]+'" disabled></i></a>'+
        '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="FEL" id="FE'+i+'" disabled>'+
                                        FEcontent+
                                        
                                    '</select>'+
                                 '</div>'+
                             '</div>'
            }
        
        }
        
    
    }
     $('#idFE').html(content);
}


function makePOS(words,labels,relations){
    let content =''
    let POScontent = ''
    for (var i = 0; i < words.length; i++) {
        if(labels[i]=='ADJ'){
            POScontent +='<option selected>ADJ</option>'+
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
                                    '<option>VERB</option>'
        }else if(labels[i]=='ADP'){
            POScontent +='<option>ADJ</option>'+
                                    '<option selected>ADP</option>'+
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
                                    '<option>VERB</option>'

        }else if(labels[i]=='ADV'){
            POScontent +='<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option selected>ADV</option>'+
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
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='AUX'){
            POScontent +='<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option selected>AUX</option>'+
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
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='CCONJ'){
            POScontent +='<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option>AUX</option>'+
                                    '<option selected>CCONJ</option>'+
                                    '<option>DET</option>'+
                                    '<option>INTJ</option>'+
                                    '<option>NOUN</option>'+
                                    '<option>NUM</option>'+
                                    '<option>PART</option>'+
                                     '<option>PRON</option>'+
                                    '<option>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='DET'){
            POScontent +='<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option>AUX</option>'+
                                    '<option>CCONJ</option>'+
                                    '<option selected>DET</option>'+
                                    '<option>INTJ</option>'+
                                    '<option>NOUN</option>'+
                                    '<option>NUM</option>'+
                                    '<option>PART</option>'+
                                     '<option>PRON</option>'+
                                    '<option>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='INTJ'){
            POScontent +='<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option>AUX</option>'+
                                    '<option>CCONJ</option>'+
                                    '<option>DET</option>'+
                                    '<option selected>INTJ</option>'+
                                    '<option>NOUN</option>'+
                                    '<option>NUM</option>'+
                                    '<option>PART</option>'+
                                     '<option>PRON</option>'+
                                    '<option>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='NOUN'){
            POScontent +='<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option>AUX</option>'+
                                    '<option>CCONJ</option>'+
                                    '<option>DET</option>'+
                                    '<option>INTJ</option>'+
                                    '<option selected>NOUN</option>'+
                                    '<option>NUM</option>'+
                                    '<option>PART</option>'+
                                     '<option>PRON</option>'+
                                    '<option>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='NUM'){
            POScontent +='<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option>AUX</option>'+
                                    '<option>CCONJ</option>'+
                                    '<option>DET</option>'+
                                    '<option>INTJ</option>'+
                                    '<option>NOUN</option>'+
                                    '<option selected>NUM</option>'+
                                    '<option>PART</option>'+
                                     '<option>PRON</option>'+
                                    '<option>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='PART'){
            POScontent +='<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option>AUX</option>'+
                                    '<option>CCONJ</option>'+
                                    '<option>DET</option>'+
                                    '<option>INTJ</option>'+
                                    '<option>NOUN</option>'+
                                    '<option>NUM</option>'+
                                    '<option selected>PART</option>'+
                                     '<option>PRON</option>'+
                                    '<option>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='PRON'){
            POScontent +='<option>ADJ</option>'+
                                    '<option>ADP</option>'+
                                    '<option>ADV</option>'+
                                    '<option>AUX</option>'+
                                    '<option>CCONJ</option>'+
                                    '<option>DET</option>'+
                                    '<option>INTJ</option>'+
                                    '<option>NOUN</option>'+
                                    '<option>NUM</option>'+
                                    '<option>PART</option>'+
                                     '<option selected>PRON</option>'+
                                    '<option>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='PROPN'){
            POScontent +='<option>ADJ</option>'+
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
                                    '<option selected>PROPN</option>'+
                                    '<option>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='PUNCT'){
            POScontent +='<option>ADJ</option>'+
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
                                    '<option selected>PUNCT</option>'+
                                    '<option>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='SCONJ'){
            POScontent +='<option>ADJ</option>'+
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
                                    '<option selected>SCONJ</option>'+
                                    '<option>VERB</option>'
            
        }else if(labels[i]=='VERB'){
            POScontent +='<option>ADJ</option>'+
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
                                    '<option selected>VERB</option>'
            
        }
        if(i==0){
          content +='<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="POSL" id="POS'+i+'" disabled>'+
                                      
                                    POScontent+
                                    '</select>'+
                                 '</div>'+
                             '</div>'  
        }else{
            if(relations[i-1] == '0'){
                 content += '<a id="" type="button" class="btn dark-icon btn-light btn-sm mr-2"><i name ="i_arrow_'+i+'" class="fas fa-arrow-left"  value="'+relations[i-1]+'" disabled></i></a>'+
        '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="POSL" id="POS'+i+'" disabled>'+
                                      POScontent+
                                    '</select>'+
                                 '</div>'+
                             '</div>'
            }else{
                 content += '<a id="" type="button" class="btn dark-icon btn-light btn-sm mr-2"><i name ="i_arrow_'+i+'" class="fas fa-arrow-right"  value="'+relations[i-1]+'" disabled></i></a>'+
        '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                 '<button type="button" class="btn dark-icon btn-success">'+words[i]+'</button>'+
                                 '<div class="btn-group" role="group">'+
                                    '<select class="POSL" id="POS'+i+'" disabled>'+
                                      POScontent+
                                    '</select>'+
                                 '</div>'+
                             '</div>'

            }
   
        }
    
   
    }
     $('#PPOS').html(content);
}
function FrameSentenceLabel(s_id,labels,words){
    let content = ''
    let Framecontent = ''
    let input_content = ''
    console.log(labels)
    if(labels.frame_id=="2"){
        Framecontent +=    '<option value="2" selected>Agt</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'                           
    }else if(labels.frame_id=="3"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3" selected>Exp</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }
    else if(labels.frame_id=="4"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3">Exp</option>'+
                           '<option value="4" selected>Pat</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="5"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3">Exp</option>'+
                           '<option value="4">Pat</option>'+
                           '<option value="5" selected>Obj</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="6"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3">Exp</option>'+
                           '<option value="4">Pat</option>'+
                           '<option value="5">Obj</option>'+
                           '<option value="6" selected>Comp</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="7"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3">Exp</option>'+
                           '<option value="4">Pat</option>'+
                           '<option value="5">Obj</option>'+
                           '<option value="6">Comp</option>'+
                           '<option value="7" selected>Msg</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="8"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3">Exp</option>'+
                           '<option value="4">Pat</option>'+
                           '<option value="5">Obj</option>'+
                           '<option value="6">Comp</option>'+
                           '<option value="7">Msg</option>'+
                          '<option value="8" selected>Ben</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="9"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3">Exp</option>'+
                           '<option value="4">Pat</option>'+
                           '<option value="5">Obj</option>'+
                           '<option value="6">Comp</option>'+
                           '<option value="7">Msg</option>'+
                          '<option value="8">Ben</option>'+
                          '<option value="9" selected>Cop</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="10"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3">Exp</option>'+
                           '<option value="4">Pat</option>'+
                           '<option value="5">Obj</option>'+
                           '<option value="6">Comp</option>'+
                           '<option value="7">Msg</option>'+
                          '<option value="8">Ben</option>'+
                          '<option value="9">Cop</option>'+
                           '<option value="10" selected>Cau</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="11"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3">Exp</option>'+
                           '<option value="4">Pat</option>'+
                           '<option value="5">Obj</option>'+
                           '<option value="6">Comp</option>'+
                           '<option value="7">Msg</option>'+
                          '<option value="8">Ben</option>'+
                          '<option value="9">Cop</option>'+
                           '<option value="10">Cau</option>'+
                           '<option value="11" selected>Res</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="12"){
        Framecontent +=    '<option value="2">Agt</option>'+
                           '<option value="3">Exp</option>'+
                           '<option value="4">Pat</option>'+
                           '<option value="5">Obj</option>'+
                           '<option value="6">Comp</option>'+
                           '<option value="7">Msg</option>'+
                          '<option value="8">Ben</option>'+
                          '<option value="9">Cop</option>'+
                           '<option value="10">Cau</option>'+
                           '<option value="11">Res</option>'+
                            '<option value="12" selected>Man</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="13"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="13" selected>Deg</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="14"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="14" selected>Dep</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="15"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="15" selected>Spd</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="16"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="16" selected>Dur</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="17"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="17" selected>Fre</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="18"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="18" selected>Time</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="19"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="19" selected>Dis</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="20"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="20" selected>Dir</option>'+
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
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="21"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="21" selected>Path</option>'+
                           '<option value="22">Place</option>'+
                           '<option value="23">Pos</option>'+
                           '<option value="24">Src</option>'+
                           '<option value="25">Goal</option>'+
                           '<option value="26">Pur</option>'+
                           '<option value="27">Mea</option>'+
                           '<option value="28">Veh</option>'+
                           '<option value="29">Ins</option>'+
                           '<option value="30">Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="22"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="22" selected>Place</option>'+
                           '<option value="23">Pos</option>'+
                           '<option value="24">Src</option>'+
                           '<option value="25">Goal</option>'+
                           '<option value="26">Pur</option>'+
                           '<option value="27">Mea</option>'+
                           '<option value="28">Veh</option>'+
                           '<option value="29">Ins</option>'+
                           '<option value="30">Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="23"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="23" selected>Pos</option>'+
                           '<option value="24">Src</option>'+
                           '<option value="25">Goal</option>'+
                           '<option value="26">Pur</option>'+
                           '<option value="27">Mea</option>'+
                           '<option value="28">Veh</option>'+
                           '<option value="29">Ins</option>'+
                           '<option value="30">Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="24"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="24" selected>Src</option>'+
                           '<option value="25">Goal</option>'+
                           '<option value="26">Pur</option>'+
                           '<option value="27">Mea</option>'+
                           '<option value="28">Veh</option>'+
                           '<option value="29">Ins</option>'+
                           '<option value="30">Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="25"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="25" selected>Goal</option>'+
                           '<option value="26">Pur</option>'+
                           '<option value="27">Mea</option>'+
                           '<option value="28">Veh</option>'+
                           '<option value="29">Ins</option>'+
                           '<option value="30">Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="26"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="26" selected>Pur</option>'+
                           '<option value="27">Mea</option>'+
                           '<option value="28">Veh</option>'+
                           '<option value="29">Ins</option>'+
                           '<option value="30">Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="27"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="27" selected>Mea</option>'+
                           '<option value="28">Veh</option>'+
                           '<option value="29">Ins</option>'+
                           '<option value="30">Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="28"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="28" selected>Veh</option>'+
                           '<option value="29">Ins</option>'+
                           '<option value="30">Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="29"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="29" selected>Ins</option>'+
                           '<option value="30">Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'
    }else if(labels.frame_id=="30"){
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="30" selected>Eve</option>'+
                           '<option value="31">อื่นๆ</option>'
    input_content += '<input class="" type="text" placeholder="อื่นๆ" id="any_SFE" disabled="disabled">'

    }else{
        Framecontent +=    '<option value="2">Agt</option>'+
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
                           '<option value="31" selected>อื่นๆ</option>'
        input_content += '<input class="" type="text" value="'+labels.frame_name+'" id="any_SFE" disabled="disabled">'

    }
    let text = words.join("");
    content +='<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'+
                                '<button type="button" class="btn dark-icon btn-success">'+text+'</button>'+
                                  '<div class="btn-group" role="group">'+
                                    '<select class="SFE" id="selected'+s_id+'" onclick="a11DisableTextBox()" disabled>'+
                                       
                                       Framecontent+
                                    '</select>'+
                                 input_content+
                                  '</div>'
     $('#framelabel').html(content);
}

