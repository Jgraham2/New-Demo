

     function post() {
        save();
      parseSend();
    }
    
    function parseSend() {
        Parse.initialize("BJcCfj2UEJfZ3zCGplMcvjryobYTXgL1CnuZVxJZ", "MmFeTfIrXhwEUWK5ynHZ6GCsxgi1Ew1z4EnzKdo1");
        var Audit = Parse.Object.extend("Audit");
        var data = JSON.parse(localStorage.getItem("formInput"));
        
        data.forEach (function(value) {
            var audit = new Audit();
            audit.set("name", value.name);
            audit.set("input1", value.input1);
            audit.set("input2", value.input2);
            audit.set("input3", value.input3);
            audit.set("input4", value.input4);
            audit.set("input5", value.input5);
            audit.set("input6", value.input6);
            audit.set("box1", value.box1);
            audit.set("box2", value.box2);
            audit.set("box3", value.box3);
            audit.set("box4", value.box4);
            audit.set("box5", value.box5);
            audit.set("test1", value.test1);
            audit.set("test2", value.test2);
            audit.set("test3", value.test3);
            audit.set("test4", value.test4);
            audit.set("yes1", value.yes1);
            audit.set("no1", value.no1);
            audit.set("range1", value.range1);
            audit.set("photos", value.photos);               
            audit.save({
                success: function(){
                    localStorage.clear();
                    alert("Online Save Successful!");
                    location.reload();
                }, error: function(error){
                    //alert("Items not saved correctly");
                    //console.log("Error:"+error.message);
                }
            });
            
        });     
    }  
    
    function save() {
        var jsonArray = JSON.parse(localStorage.getItem("formInput")); 
        if (jsonArray == undefined || jsonArray == null || jsonArray.length == 0){
            jsonArray = [];
        }
        var txtName = $('#name').val();
        var txtInputOne = $('#input1').val();
        var txtInputTwo = $('#input2').val();
        var txtInputThree = $('#input3').val();
        var txtInputFour = $('#input4').val();
        var txtInputFive = $('#input5').val(); 
        var txtInputSix = $('#input6').val();
        var txtBoxOne = $('#box1:checked').val();
        var txtBoxTwo = $('#box2:checked').val();
        var txtBoxThree = $('#box3:checked').val(); 
        var txtBoxFour = $('#box4:checked').val();
        var txtBoxFive = $('#box5:checked').val();
        var txtTestOne = $('#test1:checked').val();
        var txtTestTwo = $('#test2:checked').val(); 
        var txtTestThree = $('#test3:checked').val();
        var txtTestFour = $('#test4:checked').val();
        var txtYesOne = $('#yes1:checked').val();
        var txtNoOne = $('#no1:checked').val(); 
        var txtRangeOne = $('#range1').val(); 
        var txtPhotos = $('#photos').val();
        
        var formInput = {name:txtName,input1:txtInputOne,input2:txtInputTwo,input3:txtInputThree,input4:txtInputFour,input5:txtInputFive,
        input6:txtInputSix,box1:txtBoxOne,box2:txtBoxTwo,box3:txtBoxThree,box4:txtBoxFour,box5:txtBoxFive,test1:txtTestOne,test2:txtTestTwo,test3:txtTestThree,
        test4:txtTestFour,yes1:txtYesOne,no1:txtNoOne,range1:txtRangeOne,photos:txtPhotos};
        jsonArray.push(formInput);
        localStorage.setItem("formInput", JSON.stringify(jsonArray));
        alert("Saved Offline!");    
        
    }