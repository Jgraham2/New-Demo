

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
            audit.set("date", value.name);
            audit.set("imput2", value.name);
            audit.set("input3", value.name);
            audit.set("input4", value.name);
            audit.set("input5", value.name);
            audit.set("input6", value.name);
            audit.set("box1", value.name);
            audit.set("box2", value.name);
            audit.set("box3", value.name);
            audit.set("box4", value.name);
            audit.set("box5", value.name);
            audit.set("test1", value.name);
            audit.set("test2", value.name);
            audit.set("test3", value.name);
            audit.set("test4", value.name);
            audit.set("yes1", value.name);
            audit.set("no1", value.name);
            audit.set("range1", value.name);
            audit.set("photos", value.name);               
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
        var txtName = document.getElementById('name').value;
        var txtInputOne = document.getElementById('input1').value;
        var txtDate = document.getElementById('date').value; 
        var txtInputTwo = document.getElementById('input2').value;
        var txtInputThree = document.getElementById('input3').value;
        var txtInputFour = document.getElementById('input4').value;
        var txtInputFive = document.getElementById('input5').value; 
        var txtInputSix = document.getElementById('input6').value;
        var txtBoxOne = document.getElementById('box1').value;
        var txtBoxTwo = document.getElementById('box2').value;
        var txtBoxThree = document.getElementById('box3').value; 
        var txtBoxFour = document.getElementById('box4').value;
        var txtBoxFive = document.getElementById('box5').value;
        var txtTestOne = document.getElementById('test1').value;
        var txtTestTwo = document.getElementById('test2').value; 
        var txtTestThree = document.getElementById('test3').value;
        var txtTestFour = document.getElementById('test4').value;
        var txtYesOne = document.getElementById('yes1').value;
        var txtNoOne = document.getElementById('no1').value; 
        var txtRangeOne = document.getElementById('range1').value; 
        var txtPhotos = document.getElementById('photos').value;
        
        var formInput = {name:txtName,input1:txtInputOne,date:txtDate,input2:txtInputTwo,input3:txtInputThree,input4:txtInputFour,input5:txtInputFive,
        input6:txtInputSix,box1:txtBoxOne,box2:txtBoxTwo,box3:txtBoxThree,box4:txtBoxFour,box5:txtBoxFive,test1:txtTestOne,test2:txtTestTwo,test3:txtTestThree,
        test4:txtTestFour,yes1:txtYesOne,no1:txtNoOne,range1:txtRangeOne,photos:txtPhotos};
        jsonArray.push(formInput);
        localStorage.setItem("formInput", JSON.stringify(jsonArray));
        alert("Saved Offline!");
        
        
    }