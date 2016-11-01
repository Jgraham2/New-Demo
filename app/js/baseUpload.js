function send() {
    if(navigator.onLine) {
        save();
        post();
    } else {
        save();
    }     
    var form = document.getElementById("form");
    form.reset();
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
        
/*        txtLocation.value = '';
        txtDate.value = '';
        txtFireOne.value = '';
        txtFireTwo.value = '';
        txtFireThree.value = '';
        txtFireFour.value = '';
        txtFireFive.value = '';
        txtFireSix.value = '';
        txtBuildingOne.value = '';
        txtBuildingTwo.value = '';
        txtBuildingThree.value = '';
        txtBuildingFour.value = '';
        txtWorkOne.value = '';
        txtWorkTwo.value = '';
        txtWorkThree.value = '';
        txtWorkFour.value = '';
        txtMachinesOne.value = '';
        txtMachinesTwo.value = '';
        txtMachinesThree.value = '';
        txtMachinesFour.value = '';
        txtMachinesFive.value = '';
        txtElectricOne.value = '';
        txtElectricTwo.value = '';
        txtElectricThree.value = '';
        txtChemOne.value = '';
        txtChemTwo.value = '';
        txtChemThree.value = '';
        txtChemFour.value = '';
        txtChemFive.value = '';
        txtChemSix.value = '';
        txtName.value = '';
        txtSignature.value = '';*/

    }


var firebaseRoot = new Firebase('https://fir-93e3b.firebaseio.com/');
var auditRef = firebaseRoot.child('audit');

function post() {
        
        var fbData = JSON.parse(localStorage.getItem('formInput'));
        
        auditRef.push(fbData);

        alert("Saved Online!");  
        localStorage.clear();
       
}

function refreshUI(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++) {
        lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';
    };
    document.getElementById('auditRef').innerHTML = lis;
};

// this will get fired on inital load as well as when ever there is a change in the data
auditRef.on("value", function(snapshot) {
    var data = snapshot.val();
    var list = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            name = data[key].name ? data[key].name : '';
            if (name.trim().length > 0) {
                list.push({
                    name: name,
                    key: key
                })
            }
        }
    }
    // refresh the UI
    refreshUI(list);
});


function refresh() {
    location.reload();
}


function checkOffline() {  
    var displayOnlineStatus = document.getElementById("online-status");
    var isOnline = function () {
                            displayOnlineStatus.innerHTML = "Online";
                            displayOnlineStatus.className = "online";
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
    
  }

