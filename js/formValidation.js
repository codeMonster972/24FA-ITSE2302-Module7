document.addEventListener("DOMContentLoaded", function(){//Event Listener
    document.getElementById("shirtOrderForm").addEventListener('submit',processOrder);//Event Listener
    function processOrder(event){
        event.preventDefault();
        var frontImage = document.getElementById("front");//variable
        var backImage = document.getElementById("back");//variable
        var sleeveImage = document.getElementById("sleeve");//variable
        var imageCost = 0;//variable
        if(validateForm()){
            var imagePlacement = "";//variable
            if (frontImage.checked){
                imagePlacement += "FRONT $4";
                imageCost += Number(frontImage.value);
            }
            if (backImage.checked){
                imagePlacement += " BACK $5";
                imageCost += Number(backImage.value);
            }
            if (sleeveImage.checked){
                imagePlacement += " SLEEVE $6";
                imageCost += Number(sleeveImage.value);
            } 
            var tshirtCost = calculateShirtCost(imageCost);//variable
            document.getElementById("shirtOrderForm").style.display = "none";
            document.getElementById("orderShirtH3").innerHTML = "YOUR SHIRT ORDER SUMMARY";
            //String method on line 28
            document.getElementById("orderSummary").innerHTML = 
                "CUSOMTER NAME: " + document.getElementById("fname").value.toUpperCase() + " " + document.getElementById("lname").value.toUpperCase() + 
                "<br>EMAIL: " + document.getElementById("email").value.toUpperCase() + 
                "<br>IMAGE PLACEMENT: " + imagePlacement +  
                "<br>SHIRT SIZE: " + (document.querySelector('input[name=size]:checked')?.value || "None selected") + 
                "<br>SHIRT COLOR: " + document.getElementById("shirtColor").value + 
                "<br>NUMBER OF SHIRTS: " + document.getElementById("numShirts").valueAsNumber +
                "<br>COST: $" + tshirtCost;
        }
    }
    function validateForm(){
        let firstName = document.getElementById('fname');//Let
        let lastName = document.getElementById('lname');//Let
        let email = document.getElementById('email');//Let
        let shirtFront = document.getElementById('front').checked;//Let
        let shirtBack = document.getElementById('back').checked;//Let
        let shirtSleeve = document.getElementById('sleeve').checked;//Let
        let numShirts = document.getElementById('numShirts');
        if(firstName.value ===''){
            alert("Please fill in your first name.");
            firstName.focus();
            return false;//Boolean
        }
        if(lastName.value===''){
            alert("Please fill in your last name.");
            lastName.focus();
            return false;//Boolean
        }
        if(email.value===''){
            alert("Please include your email.");
            email.focus();
            return false;//Boolean
        }
        if(!shirtFront&&!shirtBack&&!shirtSleeve){
            alert("Please choose a location for your image.");
            return false;//Boolean
        }
        if(numShirts.value === ''){
            alert("Please choose the number of shirts you want to buy.");
            numShirts.focus();
            return false;
        }
            

        return true;//Boolean
    }
    function calculateShirtCost(imageCost){
        const baseShirtCost = 10;//Constant
        const bulkShirtCost = 8;//Constant
        let numShirts = document.getElementById("numShirts").valueAsNumber;
        //If and else statment
        if (numShirts >9){
            return (bulkShirtCost + imageCost) * numShirts;//Arithmetic operators
        }else{
            return (baseShirtCost + imageCost) * numShirts;//Arithmetic operators
        }
    }
})
