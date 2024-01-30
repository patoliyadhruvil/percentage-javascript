function offer(){
                
    var eng = parseInt(document.getElementById('eng').value);
    var Maths = parseInt(document.getElementById('Maths').value);
    var eco = parseInt(document.getElementById('eco').value);
    var Ba = parseInt(document.getElementById('Ba').value);
    var science = parseInt(document.getElementById('science').value);

    var total =eng + Maths + eco + Ba + science;
    var Percentage = total/5;

    document.getElementById("total").innerHTML = "total = " + total;
    document.getElementById("Percentage").innerHTML = "Percentage = " + Percentage + "%";

    
    if(Percentage >= 90){
        document.getElementById('wel').innerHTML = "A1 Grade";
    }else if(Percentage >= 80){
        document.getElementById('wel').innerHTML = "A Grade"
    }else if(Percentage >= 70){
        document.getElementById('wel').innerHTML = "B1 Grade";
    }else if(Percentage >= 60){
        document.getElementById('wel').innerHTML = "B Grade"
    }else if(Percentage >= 50){
        document.getElementById('wel').innerHTML = "C Grade";
    }else if(Percentage >= 40){
        document.getElementById('wel').innerHTML = "D Grade";
    }else{
        document.getElementById('wel').innerHTML = "you are Fail ;(";
    }
}


function myfun(){
    var stream = document.getElementById("stream").value;
    console.log("stream",stream);

    switch(stream){

        case 'Bca':
            document.getElementById('info').innerHTML = "<u><li>Communication Skill</li><li>oprating system</li><li>financial</li></ul>";
            break;
            
        case "Bsc":
            document.getElementById('info').innerHTML = "<u><li>Communication Skill</li><li>C lang</li><li>Dbms</li></ul>";
            break;
        default:
            document.getElementById('error').innerHTML = "No Fonud";
            break;
    }
}





