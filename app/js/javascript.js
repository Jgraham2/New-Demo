

     function post() {
        save();
      parseSend();
    }
    
    function parseSend() {
       Parse.initialize("BJcCfj2UEJfZ3zCGplMcvjryobYTXgL1CnuZVxJZ", "MmFeTfIrXhwEUWK5ynHZ6GCsxgi1Ew1z4EnzKdo1");
        var pmAudit = Parse.Object.extend("pmAudit");
        var data = JSON.parse(localStorage.getItem("formInput"));
        
        data.forEach (function(value) {
            var audit = new pmAudit();
            audit.set("location", value.location);
            audit.set("date", value.date);
            audit.set("notes1", value.notes1);
            audit.set("fire1", value.fire1);
            audit.set("fire2", value.fire2);
            audit.set("fire3", value.fire3);
            audit.set("fire4", value.fire4);
            audit.set("fire5", value.fire5);
            audit.set("fire6", value.fire6);
            audit.set("building1", value.building1);
            audit.set("building2", value.building2);
            audit.set("building3", value.building3);
            audit.set("building4", value.building4);
            audit.set("work1", value.work1);
            audit.set("work2", value.work2);
            audit.set("work3", value.work3);
            audit.set("work4", value.work4);
            audit.set("machines1", value.machines1);
            audit.set("machines2", value.machines2);
            audit.set("machines3", value.machines3);
            audit.set("machines4", value.machines4);
            audit.set("machines5", value.machines5);
            audit.set("electric1", value.electric1);
            audit.set("electric2", value.electric2);
            audit.set("electric3", value.electric3);
            audit.set("chem1", value.chem1);
            audit.set("chem2", value.chem2);
            audit.set("chem3", value.chem3);
            audit.set("chem4", value.chem4);
            audit.set("chem5", value.chem5);
            audit.set("chem6", value.chem6);
            audit.set("name", value.name);
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
        var txtLocation = $('#location option:selected').val();
        var txtDate = $('#date').val();
        var txtNotesOne = $('#notes1 option:selected').val();
        var txtFireOne = $("#fire1 option:selected").attr("value");
        var txtFireTwo = $('#fire2 option:selected').val();
        var txtFireThree = $('#fire3 option:selected').val();
        var txtFireFour = $('#fire4 option:selected').val();
        var txtFireFive = $('#fire5 option:selected').val();
        var txtFireSix = $('#fire6 option:selected').val();
        var txtBuildingOne = $('#building1 option:selected').val();
        var txtBuildingTwo = $('#building2 option:selected').val();
        var txtBuildingThree = $('#building3 option:selected').val();
        var txtBuildingFour = $('#building4 option:selected').val();
        var txtWorkOne = $('#work1 option:selected').val();
        var txtWorkTwo = $('#work2  option:selected').val();
        var txtWorkThree = $('#work3 option:selected').val();
        var txtWorkFour = $('#work4 option:selected').val();
        var txtMachinesOne = $('#machines1 option:selected').val();
        var txtMachinesTwo = $('#machines2 option:selected').val();
        var txtMachinesThree = $('#machines3 option:selected').val();
        var txtMachinesFour = $('#machines4 option:selected').val();
        var txtMachinesFive = $('#machines5 option:selected').val();
        var txtElectricOne = $('#electric1 option:selected').val();
        var txtElectricTwo = $('#electric2 option:selected').val();
        var txtElectricThree = $('#electric3 option:selected').val();
        var txtChemOne = $('#chem1 option:selected').val();
        var txtChemTwo= $('#chem2 option:selected').val();
        var txtChemThree = $('#chem3 option:selected').val();
        var txtChemFour = $('#chem4 option:selected').val();
        var txtChemFive = $('#chem5 option:selected').val();
        var txtChemSix = $('#chem6 option:selected').val();
        var txtName = $('#name').val();
        //var txtSignature = $('#signature').val(); 
        
        var formInput = {location:txtLocation,date:txtDate,notes1:txtNotesOne,
            fire1:txtFireOne,fire2:txtFireTwo,fire3:txtFireThree,fire4:txtFireFour,fire5:txtFireFive,fire6:txtFireSix,
            building1:txtBuildingOne,building2:txtBuildingTwo,building3:txtBuildingThree,building4:txtBuildingFour,
            work1:txtWorkOne,work2:txtWorkTwo,work3:txtWorkThree,work4:txtWorkFour, 
            machines1:txtMachinesOne,machines2:txtMachinesTwo,machines3:txtMachinesThree,machines4:txtMachinesFour,machines5:txtMachinesFive,
            electric1:txtElectricOne,electric2:txtElectricTwo,electric3:txtElectricThree,
            chem1:txtChemOne,chem2:txtChemTwo,chem3:txtChemThree,chem4:txtChemFour,chem5:txtChemFive,chem6:txtChemSix, 
            name:txtName};
        jsonArray.push(formInput);
        localStorage.setItem("formInput", JSON.stringify(jsonArray));
        alert("Saved Offline!");    
        
    }