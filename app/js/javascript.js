

     function post() {
        save();
      parseSend();
    }
    
    function parseSend() {
        Parse.initialize("OouzCEBELK9R8xDPKHTtiPhxoiM1tXyMBK3YVuGg", "RpzWiaBv6sgrdg2w05a9qfkOFYKLz5Ao4yziqL5x");
        var Test = Parse.Object.extend("Test");
        var data = JSON.parse(localStorage.getItem("formInput"));
        
        data.forEach (function(value) {
            var test = new Test();
            test.set("name", value.name);
            test.set("email", value.email);
            test.set("message", value.message);
            test.set("camera", value.photos);
            test.save({
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
        var txtEmail = document.getElementById('email').value;
        var txtMessage = document.getElementById('message').value; 
        var txtPhotos = document.getElementById('photos').value;
        
        var formInput = {name:txtName,email:txtEmail,message:txtMessage,photos:txtPhotos};
        jsonArray.push(formInput);
        localStorage.setItem("formInput", JSON.stringify(jsonArray));
        alert("saved offline");
        
        
    }