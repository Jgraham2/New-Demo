

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
            audit.set("Location", value.location);
            audit.set("Date", value.date);
            audit.set("Fire1", value.fire1);
            audit.set("Fire2", value.fire2);
            audit.set("Fire3", value.fire3);
            audit.set("Fire4", value.fire4);
            audit.set("Fire5", value.fire5);
            audit.set("Fire6", value.fire6);
            audit.set("Building1", value.building1);
            audit.set("Building2", value.building2);
            audit.set("Building3", value.building3);
            audit.set("Building4", value.building4);
            audit.set("Work1", value.work1);
            audit.set("Work2", value.work2);
            audit.set("Work3", value.work3);
            audit.set("Work4", value.work4);
            audit.set("Machines1", value.machines1);
            audit.set("Machines2", value.machines2);
            audit.set("Machines3", value.machines3);
            audit.set("Machines4", value.machines4);
            audit.set("Machines5", value.machines5);
            audit.set("Electric1", value.electric1);
            audit.set("Electric2", value.electric2);
            audit.set("Electric3", value.electric3);
            audit.set("Chem1", value.chem1);
            audit.set("Chem2", value.chem2);
            audit.set("Chem3", value.chem3);
            audit.set("Chem4", value.chem4);
            audit.set("Chem5", value.chem5);
            audit.set("Chem6", value.chem6);
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
        
        var txtLocation = $('#location:checked').val();
        var txtDate = $('#date').val();
        var txtFireOne = $('#fire1:checked').val();
        var txtFireTwo = $('#fire2:checked').val();
        var txtFireThree = $('#fire3:checked').val();
        var txtFireFour = $('#fire4:checked').val();
        var txtFireFive = $('#fire5:checked').val();
        var txtFireSix = $('#fire6:checked').val();
        var txtBuildingOne = $('#building1:checked').val();
        var txtBuildingTwo = $('#building2:checked').val();
        var txtBuildingThree = $('#building3:checked').val();
        var txtBuildingFour = $('#building4:checked').val();
        var txtWorkOne = $('#work1:checked').val();
        var txtWorkTwo = $('#work2:checked').val();
        var txtWorkThree = $('#work3:checked').val();
        var txtWorkFour = $('#work4:checked').val();
        var txtMachinesOne = $('#machines1:checked').val();
        var txtMachinesTwo = $('#machines2:checked').val();
        var txtMachinesThree = $('#machines3:checked').val();
        var txtMachinesFour = $('#machines4:checked').val();
        var txtMachinesFive = $('#machines5:checked').val();
        var txtElectricOne = $('#electric1:checked').val();
        var txtElectricTwo = $('#electric2:checked').val();
        var txtElectricThree = $('#electric3:checked').val();
        var txtChemOne = $('#chem1:checked').val();
        var txtChemTwo= $('#chem2:checked').val();
        var txtChemThree = $('#chem3:checked').val();
        var txtChemFour = $('#chem4:checked').val();
        var txtChemFive = $('#chem5:checked').val();
        var txtChemSix = $('#chem6:checked').val();
        var txtName = $('#name').val();
        //var txtSignature = $('#signature').val();
        
        var formInput = {txtLocation:location,txtDate:date,
            txtFireOne:fire1,txtFireTwo:fire2,txtFireThree:fire3,txtfireFour:fire4,txtFireFive:fire5,txtFireSix:fire6,
            txtBuildingOne:building1,txtBuildingTwo:building2,txtBuilingThree:building3,txtBuildingFour:building4,
            txtWorkOne:work1,txtWorkTwo:work2,txtWorkThree:work3,txtWorkFour:work4, 
            txtMachinesOne:machines1,txtMachinesTwo:machines2,txtMachinesThree:machines3,txtMachinesFour:machines4,txtMachinesFive:machines5,
            txtElectricOne:electric1,txtElectricTwo:electric2,txtElectricThree:electric3,
            txtChemOne:chem1,txtChemTwo:chem2,txtChemThree:chem3,txtChemFour:chem4,txtChemFive:chem5,txtChemSix:chem6, 
            txtName:name};
        jsonArray.push(formInput);
        localStorage.setItem("formInput", JSON.stringify(jsonArray));
        alert("Saved Offline!");    
        
    }