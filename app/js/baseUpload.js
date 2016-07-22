function send() {
    if(navigator.onLine) {
        save();
        post();
    } else {
        save();
    }  
    
    setTimeout(function() { refresh(); }, 3000);
    }
    
    function save() {
        var jsonArray = JSON.parse(localStorage.getItem("formInput")); 
        if (jsonArray == undefined || jsonArray == null || jsonArray.length == 0){
            jsonArray = [];
        }  
        var txtLocation = $('#location option:selected').val();
        var txtDate = $('#date').val();
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
        
        var formInput = {location:txtLocation,date:txtDate,
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


function post() {
        var firebaseRoot = new Firebase('https://fir-93e3b.firebaseio.com/');
        var auditRef = firebaseRoot.child('audit');
        
        var fbData = JSON.parse(localStorage.getItem('formInput'));
        if (fbData == undefined || fbData == null || fbData.length == 0){
            fbData = [];
        }  
    
        auditRef.push(fbData);

        alert("Saved Online!");  
        localStorage.clear();
       
}

function refresh() {
    location.reload();
}

function checkOffline() {
    
    var displayOnlineStatus = document.getElementById("online-status");
    var isOnline = function () {
                            displayOnlineStatus.innerHTML = "Online";
                            displayOnlineStatus.className = "online";
                            post();
                    },
    isOffline = function () {
                            displayOnlineStatus.innerHTML = "Offline";
                            displayOnlineStatus.className = "offline";
                    };
    if (window.addEventListener) {
            window.addEventListener("online", isOnline);
            window.addEventListener("offline", isOffline);
    }
    else {
            document.body.ononline = isOnline;
            document.body.onoffline = isOffline;
    }
    if(navigator.onLine) {
        checkOnLoad: true,
        isOnline();
    } else {
        checkOnLoad: false,
        isOffine();
    }  
    
  }

