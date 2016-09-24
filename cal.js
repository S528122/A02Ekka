
$("#gt").click(function(evt){
           
             var a = 0;
       
            var b = 0;
           
            var c = 0;
          
            var d = 0;
          
            
            

            if ($('#ts').is(":checked"))
             { 
                 
                 a = parseFloat($("#ts").val(), 10);
                
             }
            if ($('#sh').is(":checked")) {
                b = parseFloat($("#sh").val(), 10);
                
            }
            if ($('#ch').is(":checked")) {
                c = parseFloat($("#ch").val(), 10);
                
            }
            if ($('#lo').is(":checked")) {
               d = parseFloat($("#lo").val(), 10);
              
            }
               var total =  a + b + c + d;
               var calculation=total*0.05+total;
           alert("Amount including 5% tax");
           

            document.getElementById("grandtotal").value='$' + calculation;
    });
