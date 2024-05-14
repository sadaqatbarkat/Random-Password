



function abc (){

  



  var UpSet =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var password =  ""
  var upCheckbox = document.getElementById("uppercase")
  var len =  document.getElementById("range").value
  if (upCheckbox.checked){
	for (var i = 1; i <=len;i++){
		random = Math.floor(Math.random()*UpSet.length)
		password += UpSet[random]

	
	}

        document.getElementById("input").value  = password
  }
 // UpperCase End 


 var lowSet =  "abcdefghijklmnopqrstuvwxyz"
 var password =  ""
   var upCheckbox = document.getElementById("lowercase")
   var len =  document.getElementById("range").value
   if (upCheckbox.checked){
   for (var i = 1; i <=len;i++){
     random = Math.floor(Math.random()*lowSet.length)
     password += lowSet[random]
 
   
   }
 
         document.getElementById("input").value  = password
   }

// lowerCase End

var spaecialCharacter =  "!@#$%&()_<>"
var password =  ""
  var upCheckbox = document.getElementById("symbols")
  var len =  document.getElementById("range").value
  if (upCheckbox.checked){
  for (var i = 1; i <=len;i++){
    random = Math.floor(Math.random()*spaecialCharacter .length)
    password += spaecialCharacter [random]

  
  }

        document.getElementById("input").value  = password
  }
// End Symbols

var num =  "1234567890"
var password =  ""
  var upCheckbox = document.getElementById("numbers")
  var len =  document.getElementById("range").value
  if (upCheckbox.checked){
  for (var i = 1; i <=len;i++){
    random = Math.floor(Math.random()*num .length)
    password += num [random]

  
  }

        document.getElementById("input").value  = password
  }
// End Numbers


var upLow =  "ABbacdDCfEFejGhJHgIkLKiMnoNOmPrpRqStsTQUvwyVWxZXzY";
var password =  ""
  var upCheckbox = document.getElementById("uppercase")
  var upCheckbox1 = document.getElementById("lowercase")
  var len =  document.getElementById("range").value
  if (upCheckbox.checked && upCheckbox1.checked){
  for (var i = 1; i <=len;i++){
    random = Math.floor(Math.random()*upLow .length)
    password += upLow [random]

  
  }

        document.getElementById("input").value  = password
  }
  // End UpperLowerCase

  
var upNumbers =  "A1B2C3D4E5F6G7H8I9J0K0L1M2N3O4P5Q6R7S8T9U0V6W5X2Y1Z0";
var password =  ""
  var upCheckbox = document.getElementById("uppercase")
  var upCheckbox1 = document.getElementById("numbers")
  var len =  document.getElementById("range").value
  if (upCheckbox.checked && upCheckbox1.checked){
  for (var i = 1; i <=len;i++){
    random = Math.floor(Math.random()*upNumbers .length)
    password += upNumbers [random]

  
  }

        document.getElementById("input").value  = password
  }
  // End UppercaseNumbers

  var upSymbols =  "A!B@C#D$E%F^G&H*I(J)K_L=M/N?O>P<QR\S<T>U@V#W%X$Y!Z_";
  var password =  ""
    var upCheckbox = document.getElementById("uppercase")
    var upCheckbox1 = document.getElementById("symbols")

    var len =  document.getElementById("range").value
    if (upCheckbox.checked && upCheckbox1.checked){
    for (var i = 1; i <=len;i++){
      random = Math.floor(Math.random()*upSymbols .length)
      password += upSymbols [random]
  
    
    }
  
          document.getElementById("input").value  = password
    }

// End UpperCaseSymbols


var lowSymbols =  "a!b@c#d$e%^fg&h*i(j)k_l=m/n?o>p<qr\s<t>u@v#w%x$y!z_";
var password =  ""
  var upCheckbox = document.getElementById("lowercase")
  var upCheckbox1 = document.getElementById("symbols")
  var len =  document.getElementById("range").value
  if (upCheckbox.checked && upCheckbox1.checked){
  for (var i = 1; i <=len;i++){
    random = Math.floor(Math.random()*lowSymbols .length)
    password += lowSymbols [random]

  
  }

        document.getElementById("input").value  = password
  }

// End lowerCaseSymbols

// var lowNumbers =  "a1b2c3d4e56g7h8i9j0k1l2m3n4o5p6r7s8t9u0v1w2x3y4z5";
// var password9 =  ""
//   var upCheckbox9 = document.getElementById("lowercase")
//   var upCheckbox0 = document.getElementById("numbers")
//   var len =  document.getElementById("range").value
//   if (upCheckbox9.checked && upCheckbox0.checked){
//   for (var i = 1; i <=len;i++){
//     random = Math.floor(Math.random()*lowNumbers.length)
//     password9 += lowNumbers [random]

  
//   }

//         document.getElementById("input").value  = password9
//   }

  // End lowerCaseNumbers


  var upLowNum =  "A102034405b6C7d8E9f0GhIjkLmNoPQrStUuVwXyz";
  var password =  ""
  var upCheckbox = document.getElementById("lowercase")
    var upCheckbox1 = document.getElementById("uppercase")
    var upCheckbox2 = document.getElementById("numbers")
    var len =  document.getElementById("range").value
    if (upCheckbox.checked && upCheckbox1.checked && upCheckbox2.checked){
    for (var i = 1; i <=len;i++){
      random = Math.floor(Math.random()*upLowNum .length)
      password += upLowNum  [random]
  
    
    }
  
          document.getElementById("input").value  = password
    }
 
    // End UppercaseLowerCaseNumbers
   

    
  var upLowSym =  "!A@bC#dE%eF&gH&iJ(kL)mN?nO/pQ<rStUvWxYz>";
  var password =  ""
  var upCheckbox = document.getElementById("uppercase")
    var upCheckbox1 = document.getElementById("lowercase")
    var upCheckbox2 = document.getElementById("symbols")
    var len =  document.getElementById("range").value
    if (upCheckbox.checked && upCheckbox1.checked && upCheckbox2.checked){
    for (var i = 1; i <=len;i++){
      random = Math.floor(Math.random()*upLowSym .length)
      password += upLowSym  [random]
  
    
    }
  
          document.getElementById("input").value  = password
    }

// End UpperCaseLowerCaseSymbols



``

     
  var symNum =  "<0!1@2#3$4$5%6^7&8(9)0_/>";
  var password =  ""
  
    var upCheckbox = document.getElementById("numbers")
    var upCheckbox2 = document.getElementById("symbols")
    var len =  document.getElementById("range").value
    if (upCheckbox.checked && upCheckbox2.checked ){
    for (var i = 1; i <=len;i++){
      random = Math.floor(Math.random()*symNum .length)
      password += symNum  [random]
  
    
    }
  
          document.getElementById("input").value  = password
    }  
 
   
// var lowSymNum =  "1a!b2c@d3e#f4g$h5i%j6k&lm7n(op8q(rs)tu9v/w<xyz>";

// var password =  ""
// var upCheckbox = document.getElementById("lowercase")
// var upCheckbox1 = document.getElementById("numbers")
//  var upCheckbox2 = document.getElementById("symbols")
//   var len =  document.getElementById("range").value
//   if (upCheckbox.checked && upCheckbox1.checked && upCheckbox2.checked ){
//   for (var i = 1; i <=len;i++){
//     random = Math.floor(Math.random()*lowSymNum .length)
//     password += lowSymNum  [random]

  
//   }

//         document.getElementById("input").value  = password
//   }

   
 
    var upLowNum =  "A102034405b6C7d8E9f0GhIjkLmNoPQrStUuVwXyz";
    var password =  ""
    var upCheckbox = document.getElementById("lowercase")
      var upCheckbox1 = document.getElementById("uppercase")
      var upCheckbox2 = document.getElementById("numbers")
      var len =  document.getElementById("range").value
      if (upCheckbox.checked && upCheckbox1.checked && upCheckbox2.checked){
      for (var i = 1; i <=len;i++){
        random = Math.floor(Math.random()*upLowNum .length)
        password += upLowNum  [random]
    
      
      }
    
            document.getElementById("input").value  = password
      }
      // var allCharacters =  "1A!b2C@d3E#f5G%h7I&j8K(l9M)n0o_P/Q>r<StUvWxYz";
      // var password =  ""
      // var upCheckbox = document.getElementById("uppercase")
      //   var upCheckbox1 = document.getElementById("lowercase")
      //   var upCheckbox2 = document.getElementById("symbols")
      //   var upCheckbox3 = document.getElementById("numbers")
      //   var len =  document.getElementById("range").value
      //   if (upCheckbox.checked && upCheckbox1.checked && upCheckbox2.checked && upCheckbox3.checked){
      //   for (var i = 1; i <=len;i++){
      //     random = Math.floor(Math.random()*allCharacters.length)
      //     password += allCharacters   [random]
      
        
      //   }
      
      //         document.getElementById("input").value  = password
      //   }

        var lowNumbers =  "a1b2c3d4e56g7h8i9j0k1l2m3n4o5p6r7s8t9u0v1w2x3y4z5";
        var password9 =  ""
          var upCheckbox9 = document.getElementById("lowercase")
          var upCheckbox0 = document.getElementById("numbers")
          var len =  document.getElementById("range").value
          if (upCheckbox9.checked && upCheckbox0.checked){
          for (var i = 1; i <=len;i++){
            random = Math.floor(Math.random()*lowNumbers.length)
            password9 += lowNumbers [random]
        
          
          }
        
                document.getElementById("input").value  = password9
          }


          var lowSymNum =  "1a!b2c@d3e#f4g$h5i%j6k&lm7n(op8q(rs)tu9v/w<xyz>";

          var password =  ""
          var upCheckbox = document.getElementById("lowercase")
          var upCheckbox1 = document.getElementById("numbers")
           var upCheckbox2 = document.getElementById("symbols")
            var len =  document.getElementById("range").value
            if (upCheckbox.checked && upCheckbox1.checked && upCheckbox2.checked ){
            for (var i = 1; i <=len;i++){
              random = Math.floor(Math.random()*lowSymNum .length)
              password += lowSymNum  [random]
          
            
            }
          
                  document.getElementById("input").value  = password
            }


            var allCharacters =  "1A!b2C@d3E#f5G%h7I&j8K(l9M)n0o_P/Q>r<StUvWxYz";
            var password =  ""
            var upCheckbox = document.getElementById("uppercase")
              var upCheckbox1 = document.getElementById("lowercase")
              var upCheckbox2 = document.getElementById("symbols")
              var upCheckbox3 = document.getElementById("numbers")
              var len =  document.getElementById("range").value
              if (upCheckbox.checked && upCheckbox1.checked && upCheckbox2.checked && upCheckbox3.checked){
              for (var i = 1; i <=len;i++){
                random = Math.floor(Math.random()*allCharacters.length)
                password += allCharacters   [random]
            
              
              }
            
                    document.getElementById("input").value  = password
              }
                



}













































































































































































































































































var slider = document.getElementById("range");

// Add event listener for slider value change
slider.addEventListener("input", function() {
    // Get the current value of the slider
    var value = parseInt(range.value);

    // Log the current value to console (you can replace this with your desired functionality)
    document.getElementById("counting").innerHTML =  value
   
});


















