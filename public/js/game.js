
/**
 * Simple FLAMES game example. 
 */
function changeBackground(selected){
  var bac = document.getElementById("gameBody");
  bac.style.backgroundColor = selected.value;
  }
  function CallFunction() {
  
      firstName = $("#firstName");
      firstName = document.getElementById("firstName").value;
      console.log(firstName);
      secondName = document.getElementById("secondName").value;
      if(firstName == "" || secondName == ""){
        alert("Please enter correct name");
      }
      firstName = firstName.toLowerCase();
      secondName = secondName.toLowerCase();

      switch(GetFlameLetter(firstName, secondName)){
        case "F":
        alert("These persons are best friends");
        break;
        case "L":
        alert("These persons love each other");
        break;
        case "A":
        alert("These persons are affectionate to each other");
        break;
        case "M":
        alert("These persons marry each other");
        break;
        case "E":
        alert("These persons are arch enemies");
        break;
        case "S":
        alert("These persons are siblings");
        break;
      }
  }
  function GetFlameLetter(firstName, secondName){
    if (firstName.length < secondName.length){
       temp = firstName;
       var firstName = secondName;
       var secondName = temp;

    }
    var first = firstName;
    var second = secondName;
      for(i = 0; i < firstName.length; i++){
        for(j=0; j < secondName.length; j++){
          console.log(firstName+secondName)
          if (firstName.charAt(i) == secondName.charAt(j)){
            console.log(firstName.charAt(i));
            var first = first.replace(firstName.charAt(i), "");
            var second = second.replace(secondName.charAt(j), "");
          }
        }
      }

  console.log("initial"+first + second);
  totalLength = (first + second).length;
  console.log(totalLength);
  var base = "FLAMES";
  baseLength = base.length;
  breakpoint = totalLength;
  if (totalLength > baseLength){
    breakpoint = totalLength % baseLength;
  }
  
  console.log("testing point"+totalLength +" "+  breakpoint);
  while(base.length != 1){
    if (breakpoint > base.length){
      console.log(breakpoint);
      base = base.replace(base.charAt(totalLength % base.length-1), "");
      continue;
    }
    
    base = base.replace(base.charAt(breakpoint-1), "");
    console.log(base); 
  }
  console.log("lastbase " + base);

  return base;
  }