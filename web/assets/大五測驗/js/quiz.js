// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [
    {
        prompt: '1. 我不是一個容易憂慮的人。 ',
        weight: -4,
        class: 'group1' //1
        ,num:'group0'
    },
    {
        prompt: '2. 我喜歡很多人在我身邊。',
        weight: 1,
        class: 'group2' //2
        ,num:'group1'
    },
    {
        prompt: '3. 我不喜歡將時間浪費在白日夢中。',
        weight: -4,
        class: 'group3' //3
        ,num:'group2'
    },
    {
        prompt: '4. 我的確喜歡我所遇見的大部分人。 ',
        weight: 1,
        class: 'group4' //4
        ,num:'group3'
    },
    {
        prompt: '5. 我將我的東西保持得幹凈整潔。',
        weight: 1,
        class: 'group5' //5
        ,num:'group4'
    },
    {
        prompt: '6. 我經常感到自己不如別人。',
        weight: 1,
        class: 'group1' //6
        ,num:'group5'
    },
    {
        prompt: '7. 我笑點很低。',
        weight: 1,
        class: 'group2' //7
        ,num:'group6'
    },
    {
        prompt: '8. 一旦我找到了做事的適當方法,我便會一直照這種方法做下去。',
        weight: -4,
        class: 'group3' //8
        ,num:'group7'
    },
    {
        prompt: '9. 我經常與家人及同事爭論。',
        weight: -4,
        class: 'group4' //9
        ,num:'group8'
    },
    {
        prompt: '10. 我善於規劃時間及安排要做的事情，以至能夠及時完成工作。',
        weight: 1,
        class: 'group5' //10
        ,num:'group9'
    },
    {
        prompt: '11. 遇到大量壓力時，我有時會感到精神像是要崩潰一樣。',
        weight: 1,
        class: 'group1' //11
        ,num:'group10'
    },
    {
        prompt: '12. 我並不覺得自己特別輕鬆、無憂無慮。',
        weight: -4,
        class: 'group2' //12
        ,num:'group11'
    },
    {
        prompt: '13. 我深感藝術和自然所呈現出的各種格調和姿態奇妙有趣。',
        weight: 1,
        class: 'group3' //13
        ,num:'group12'
    },
    {
        prompt: '14. 有些人覺得我很自私、自我為中心。',
        weight: -4,
        class: 'group4' //14
        ,num:'group13'
    },
    {
        prompt: '15. 我不是一個做事有條不紊的人。 ',
        weight: -4,
        class: 'group5' //15
        ,num:'group14'
    },
    {
        prompt: '16. 我很少感到孤獨或憂鬱。',
        weight: -4,
        class: 'group1' //16
        ,num:'group15'
    },
    {
        prompt: '17. 我確實喜歡與別人交談。',
        weight: 1,
        class: 'group2' //17
        ,num:'group16'
    },
    {
        prompt: '18. 我認為讓學生聽具有爭論性的演講只會混淆及誤導他們的思想。',
        weight: -4,
        class: 'group3' //18
        ,num:'group17'
    },
    {
        prompt: '19. 我寧願與別人合作,也不願與別人競爭。',
        weight: 1,
        class: 'group4' //19
        ,num:'group18'
    },
    {
        prompt: '20. 我盡心盡力地執行所有分派給我的任務。',
        weight: 1,
        class: 'group5' //20
        ,num:'group19'
    },
    {
        prompt: '21. 我經常感到緊張和心神不寧。',
        weight: 1,
        class: 'group1' //21
        ,num:'group20'
    },
    {
        prompt: '22. 我喜歡將自己置身於刺激的事件之中。',
        weight: 1,
        class: 'group2' //22
        ,num:'group21'
    },
    {
        prompt: '23. 我很少或不會因詩詞而有所感觸。',
        weight: -4,
        class: 'group3' //23
        ,num:'group22'
    },
    {
        prompt: '24. 我會懷疑及譏諷他人的意圖。',
        weight: -4,
        class: 'group4' //24
        ,num:'group23'
    },
    {
        prompt: '25. 我有明確的目標，並能有條不紊地為達到這些目標而工作。',
        weight: 1,
        class: 'group5' //25
        ,num:'group24'
    },
    {
        prompt: '26. 有時我感到自己毫無價值。',
        weight: 1,
        class: 'group1' //26
        ,num:'group25'
    },
    {
        prompt: '27. 我通常喜歡單獨工作。 ',
        weight: -4,
        class: 'group2' //27
        ,num:'group26'
    },
    {
        prompt: '28. 我經常品嘗我沒吃過的和異地風味的食物。',
        weight: 1,
        class: 'group3' //28
        ,num:'group27'
    },
    {
        prompt: '29. 我相信：如果容許別人利用自己，將會有很多人都會這樣做。',
        weight: -4,
        class: 'group4' //29
        ,num:'group28'
    },
    {
        prompt: '30. 我要花很多時間才能安頓下來工作。',
        weight: -4,
        class: 'group5' //30
        ,num:'group29'
    },
    {
        prompt: '31. 我很少感到恐懼和焦慮。',
        weight: -4,
        class: 'group1' //31
        ,num:'group30'
    },
    {
        prompt: '32. 我很多時候都感到精力充沛。',
        weight: 1,
        class: 'group2' //32
        ,num:'group31'
    },
    {
        prompt: '33. 我很少注意不同處境對我的心境或感受的影響。',
        weight: -4,
        class: 'group3' //33
        ,num:'group32'
    },
    {
        prompt: '34. 我所認識的大部分人都喜歡我。',
        weight: 1,
        class: 'group4' //34
        ,num:'group33'
    },
    {
        prompt: '35. 我努力工作以達成我的目標。',
        weight: 1,
        class: 'group5' //35
        ,num:'group34'
    },
    {
        prompt: '36. 我常會因 別人對我的看法或做事的方法 而感到憤怒。',
        weight: 1,
        class: 'group1' //36
        ,num:'group35'
    },
    {
        prompt: '37. 我是一個快樂的、充滿生氣的人。',
        weight: 1,
        class: 'group2' //37
        ,num:'group36'
    },
    {
        prompt: '38. 我認為在道德問題上做決定時,我們應遵從宗教權威的判斷。 ',
        weight: -4,
        class: 'group3' //38
        ,num:'group37'
    },
    {
        prompt: '39. 有些人覺得我冷冰冰，有心機。',
        weight: -4,
        class: 'group4' //39
        ,num:'group38'
    },
    {
        prompt: '40. 我總是能履行我給出的承諾。',
        weight: 1,
        class: 'group5' //40
        ,num:'group39'
    },
    {
        prompt: '41. 當事情不順利時，我經常會有挫折感並想放棄。',
        weight: 1,
        class: 'group1' //41
        ,num: 'group40'
    },
    {
        prompt: '42. 我不是一個樂觀主義者。',
        weight: -4,
        class: 'group2' //42
        ,num: 'group41'

    },
    {
        prompt: '43. 當我閱讀一首詩或觀看一件藝術品時,我有時會感到興奮或驚喜。',
        weight: 1,
        class: 'group3' //43
        ,num:'group42'
    },
    {
        prompt: '44. 我是個講求實際、不感情用事的人。',
        weight: -4,
        class: 'group4' //44
        ,num:'group43'
    },
    {
        prompt: '45. 我有時沒有表現得像 我應該那樣的 可靠和值得信賴。',
        weight: -4,
        class: 'group5' //45
        ,num:'group44'
    },
    {
        prompt: '46. 我很少感到憂鬱和沮喪。',
        weight: -4,
        class: 'group1' //46
        ,num:'group45'
    },
    {
        prompt: '47. 我的生活步調很快。',
        weight: 1,
        class: 'group2' //47
        ,num:'group46'
    },
    {
        prompt: '48. 我沒有興趣思索宇宙的本質和人類的現狀。',
        weight: -4,
        class: 'group3' //48
        ,num:'group47'
    },
    {
        prompt: '49. 我通常會盡量體貼及考慮周到。 ',
        weight: 1,
        class: 'group4' //49
        ,num:'group48'
    },
    {
        prompt: '50. 我做事有效果,也有效率。',
        weight: 1,
        class: 'group5' //50
        ,num:'group49'
    },
    {
        prompt: '51. 我經常感到無助,並希望有人能解決我的問題。',
        weight: 1,
        class: 'group1' //51
        ,num:'group50'
    },
    {
        prompt: '52. 我是一個十分活躍的人。',
        weight: 1,
        class: 'group2' //52
        ,num:'group51'
    },
    {
        prompt: '53. 我對思想性的事充滿好奇。',
        weight: 1,
        class: 'group3' //53
        ,num:'group52'
    },
    {
        prompt: '54. 如果我不喜歡某人,我會讓對方知道。',
        weight: -4,
        class: 'group4' //54
        ,num:'group53'
    },
    {
        prompt: '55. 我總是不能把事情安排得井井有條。',
        weight: -4,
        class: 'group5' //55
        ,num:'group54'
    },
    {
        prompt: '56. 有好幾次我羞愧得想直接躲起來。',
        weight: 1,
        class: 'group1' //56
        ,num:'group55'
    },
    {
        prompt: '57. 我寧願我行我素,也不願成為別人的領導。',
        weight: -4,
        class: 'group2' //57
        ,num:'group56'
    },
    {
        prompt: '58. 我喜歡思考及玩味理論和抽象的概念。',
        weight: 1,
        class: 'group3' //58
        ,num:'group57'
    },
    {
        prompt: '59. 如果有必要,我會操縱別人以得到我所想要得到的。',
        weight: -4,
        class: 'group4' //59
        ,num:'group58'
    },
    {
        prompt: '60. 我盡量將我所做的一切事情都做得很出色。',
        weight: 1,
        class: 'group5' //60
        ,num:'group59'
    },
    ]
    
    // This array stores all of the possible values and the weight associated with the value. 
    // The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
    var prompt_values = [
    {
        value: '非常同意', 
        class: 'btn-default btn-strongly-agree',
        weight: 4
    },
    {
        value: '同意',
        class: 'btn-default btn-agree',
        weight: 3
    }, 
    {
        value: '普通', 
        class: 'btn-default',
        weight: 2
    },
    {
        value: '不同意',
        class: 'btn-default btn-disagree',
        weight: 1
    },
    { 
        value: '非常不同意',
        class: 'btn-default btn-strongly-disagree',
        weight: 0
    },
    
    ]
    
    // For each prompt, create a list item to be inserted in the list group
    function createPromptItems() {
    
        for (var i = 0; i < prompts.length; i++) {
            var prompt_li = document.createElement('li');
            var prompt_p = document.createElement('p');
            var prompt_text = document.createTextNode(prompts[i].prompt);
    
            prompt_li.setAttribute('class', 'list-group-item prompt');
            prompt_p.appendChild(prompt_text);
            prompt_li.appendChild(prompt_p);
    
            document.getElementById('quiz').appendChild(prompt_li);
        }
    }
    
    function createValueButtons() {
        for (var li_index = 0; li_index < prompts.length; li_index++) {
            var group = document.createElement('div');
            group.className = 'btn-group btn-group-justified';
    
            for (var i = 0; i < prompt_values.length; i++) {
                var btn_group = document.createElement('div');
                btn_group.className = 'btn-group';
    
                var button = document.createElement('button');
                var button_text = document.createTextNode(prompt_values[i].value);
                button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
                button.appendChild(button_text);
    
                btn_group.appendChild(button);
                group.appendChild(btn_group);
    
                document.getElementsByClassName('prompt')[li_index].appendChild(group);
            }
        }
    }
    
    createPromptItems();
    createValueButtons();
    
    // Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
    // Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
    
    var openness=0; //開放性
    var con=0; //嚴謹性
    var extra=0; //外向性
    var agree=0; //親和性
    var neuro=0; //神經質
    
    // Get the weight associated to group number
    function findPromptWeight(prompts, group) {
        var weight = 0;
        for (var i = 0; i < prompts.length; i++) {
            if (prompts[i].num === group) {
                weight = prompts[i].weight;
            }
        }
    
        return weight;
    }
    
    // Get the weight associated to the value
    function findValueWeight(values, value) {
        var weight = 0;
    
        for (var i = 0; i < values.length; i++) {
            if (values[i].value === value) {
                weight = values[i].weight;
            }
        }
    
        return weight;
    }
    
    function findGroup(prompts,group){
        var type = "";
        for (var i = 0; i < prompts.length; i++) {
            if (prompts[i].num === group) {
                type = prompts[i].class;
            }
        }

        return type;
    }
    
    function validateFinished(){
        var gc;
        var unfinished="";
        for (var i = 0; i <60 ; i++) {
            gc=document.getElementsByClassName('group'+i+" active");
            if (gc.length==0 ) {
                unfinished += (i+1).toString();
                if(i !=59)
                {
                    unfinished +=", ";
                }
            }
        }
        
        return unfinished;
    }

    function diagram(o,c,e,a,n){
        data = [{
            type: 'scatterpolar',
            r: [n, e, o, a, c, n],
            theta: ['神經質','外向性','開放性', '親和性', '審慎嚴謹性', '神經質'],
            fill: 'toself'
          }]
          
        layout = {
          title : "您的大五人格分佈",
          polar: {
            radialaxis: {
              visible: true,
              range: [0, 48]
            }
          },
         showlegend: false
        }
          
        Plotly.newPlot("myDiv", data, layout,{staticPlot: true})
    }
    // When user clicks a value to agree/disagree with the prompt, display to the user what they selected
    $('.value-btn').mousedown(function () {
        console.log(this); //印出button 標籤的內容
        var classList = $(this).attr('class');
          console.log("classList:"+ classList);
        var classArr = classList.split(" ");
          console.log("classArr:"+classArr);
        var this_group = classArr[0];
          console.log("this_group:"+this_group);
        var typename=findGroup(prompts, this_group);
          console.log(typename);
        //var test=findPromptWeight(prompts, this_group)
        //console.log(test);

        // If button is already selected, de-select it when clicked and subtract any previously added values to the total
        // Otherwise, de-select any selected buttons in group and select the one just clicked
        // And subtract deselected weighted value and add the newly selected weighted value to the total
        if($(this).hasClass('active')) { //相同選項再按一次
            $(this).removeClass('active');
            switch(typename){
                case 'group1':{ //神經質
                  if(findPromptWeight(prompts, this_group) > 0){
                    neuro -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                  }
                  else{
                    neuro -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                  }
                  $('.'+this_group).removeClass('active');
                  break;
                }
                case 'group2':{ //外向性
                    if(findPromptWeight(prompts, this_group) > 0){
                        extra -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                      }
                      else{
                        extra -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                      }
                      $('.'+this_group).removeClass('active');
                    break;
                    
                }
                case 'group3':{ //開放性
                    if(findPromptWeight(prompts, this_group) > 0){
                        openness -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                      }
                      else{
                        openness -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                        //console.log("inside if"+openness);
                      }
                      $('.'+this_group).removeClass('active');
                      break;
                }
                case 'group4':{//親和性
                    if(findPromptWeight(prompts, this_group) > 0){
                        agree -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                      }
                      else{
                        agree -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                      }
                      $('.'+this_group).removeClass('active');
                    break;
                }
                case 'group5':{
                    //嚴謹性
                    if(findPromptWeight(prompts, this_group) > 0){
                        con -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                      }
                      else{
                        con -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                      }
                      $('.'+this_group).removeClass('active');
                    break;
                }
            }

        } else {//按不同選項時
            switch(typename){
                case 'group1':{ 
                    if(findPromptWeight(prompts, this_group)>0){
                        neuro -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
                        $('.'+this_group).removeClass('active');
                        $(this).addClass('active');
                        neuro += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                      }
                      else{
                        if($('.'+this_group).hasClass('active')){
                        neuro -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values,$('.'+this_group+'.active').text()));
                        $('.'+this_group).removeClass('active');
                        }
                        $(this).addClass('active');
                        neuro += Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                      }
                    break;
                }
                case 'group2':{ 
                    //外向性
                    if(findPromptWeight(prompts, this_group)>0){
                        extra -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
                        $('.'+this_group).removeClass('active');
                        $(this).addClass('active');
                        extra += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                      }
                      else{
                        if($('.'+this_group).hasClass('active')){
                        extra -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values,$('.'+this_group+'.active').text()));
                        $('.'+this_group).removeClass('active');
                        }
                        $(this).addClass('active');
                        extra += Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                      }
                    break;
                }
                case 'group3':{ 
                    //開放性
                    if(findPromptWeight(prompts, this_group)>0){
                        openness -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
                        $('.'+this_group).removeClass('active');
                        $(this).addClass('active');
                        openness += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                      }
                      else{
                        if($('.'+this_group).hasClass('active')){
                          openness -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values,$('.'+this_group+'.active').text()));
                          $('.'+this_group).removeClass('active');
                        }
                        $(this).addClass('active');
                        //console.log("for adding"+Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text())));
                        openness += Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                        //console.log("inside else open"+openness);
                      }
                      break;
                }
                case 'group4':{//親和性
                    if(findPromptWeight(prompts, this_group)>0){
                        agree -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
                        $('.'+this_group).removeClass('active');
                        $(this).addClass('active');
                        agree += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                      }
                      else{
                        if($('.'+this_group).hasClass('active')){
                        agree -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values,$('.'+this_group+'.active').text()));
                        $('.'+this_group).removeClass('active');
                        }
                        $(this).addClass('active');
                        agree += Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                      }
                    break;
                }
                case 'group5':{
                    //嚴謹性
                    if(findPromptWeight(prompts, this_group)>0){
                        con -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
                        $('.'+this_group).removeClass('active');
                        $(this).addClass('active');
                        con += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
                      }
                      else{
                        if($('.'+this_group).hasClass('active')){
                        con -= Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values,$('.'+this_group+'.active').text()));
                        $('.'+this_group).removeClass('active');
                        }
                        $(this).addClass('active');
                        con += Math.abs(findPromptWeight(prompts, this_group) + findValueWeight(prompt_values, $(this).text()));
                      }
                    break;   
                }
            }
        }
        //神經質標準分=70+10*( 神經質原始分 -1.37)/0.54 neuro
        //外向性標準分=70+10 *( 外向性原始分 -2.64)/0.50 extra
        //開放性標準分=70+10*( 新開放性原始分 -2.29)/0.44  openness
        //隨和性標準分=70+10*( 隨和性原始分 -2.33)/0.36  agree
        //意識性標準分=70+10*( 意識性原始分 -2.91)/0.55 con
        //不用上面的計分方式
        //用48分為最高分、0為最低分
       
    
        console.log(openness);
        console.log(con);
        console.log(extra);
        console.log(agree);
        console.log(neuro); 
    })


    $('#submit-btn').click(function () {
        // After clicking submit, add up the totals from answers
        // For each group, find the value that is active
        //$("#submit-btn").unbind("click");
        var unfin = validateFinished();
        if(unfin==""){
            $('.results').removeClass('hide');
            $('.results').addClass('show');
            
            diagram(openness,con,extra,agree,neuro);

            document.getElementById('results').innerHTML = '<b>指標意義</b><br><br>\
            人格指構成一個人思想、情感及行為的特有模式,包含了區別於他人的一些穩定而統一的心理品質,具有獨特性、穩定性、統合性、覆雜性和功能性。人格評價方法包括晤談、自陳量表、行為評價、心理生理技術和內隱測量等。自陳量表是最常用的方法。\n\
    <br><br>\
    大五人格特質模型將人格分為5個方面,包括情緒性、外向性、開放性、親和性和審慎嚴謹性,分別由5個分測驗測量。神經質得分越高,情緒越沖動,敏感,焦慮；外向性得分越高,越合群,熱情,積極；開放性得分越高,越易幻想,愛行動,有審美情趣；親和性得分越高,越謙虛,很溫和,容易信任他人；審慎嚴謹性得分越高,越守秩序,很負責任,能自我約束。\n\
    <br><br>\
';
        // Hide the quiz after they submit their results
        $('#quiz').addClass('hide');
        $('#submit-btn').addClass('hide');
        $('#retake-btn').removeClass('hide');
        $('#home-btn').removeClass('hide');
        $('#home-btn').addClass('show');
        
        }
        else{
            $('.reminder').removeClass('hide');
            $('.reminder').addClass('show');
            document.getElementById('reminder').innerHTML = '<b>尚還有未完成題目: </b>'+unfin;
        }
        
    })
    
    // Refresh the screen to show a new quiz if they click the retake quiz button
    $('#retake-btn').click(function () {
        $('#quiz').removeClass('hide');
        $('#submit-btn').removeClass('hide');
        $('#retake-btn').addClass('hide');
    
        $('.results').addClass('hide');
        $('.results').removeClass('show');
        //createPromptItems();
        //createValueButtons();
    })

    $('#home-btn').click(function () {
        $.ajax({
        type: 'POST',
        url: "http://120.126.19.100/userhome.php",
        data: {openness},
        dataType:"text",

        success:function(data){
         // document.getElementById('userlogin').innerHTML = data;
           if(data>=24)
           {    
                // window.location.href = 
                setTimeout('location= "http://120.126.19.100/home-grid-type2.html"',1000)
           }
           else if(data<24)
           {
                setTimeout('location= "http://120.126.19.100/home-grid.html"',1000)
           }
         }, 
         error:function(data)
        {
             alert("測驗異常，請洽RD");
        },   

     })
    })
    