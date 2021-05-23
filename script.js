function checkPrincipal()
// Validation for "Amount" value
{
    var principal = document.getElementById("principal").value;
 
    if (principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("principal").value=undefined;
        return false;
    }   else { return true} 
}

function compute()
// Process the data when "Compute Interest" is clicked
{
    var principal = document.getElementById("principal").value;
    
    //checkPrincipal();

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    if ( checkPrincipal() ) {
    outstring = "\<br\>If you deposit \<mark>"+principal+"\</mark>,\<br\>"
    outstring += "at an interest rate of \<mark>"+rate+"%\</mark>\<br\>"
    outstring += "You will receive an amount of \<mark>"+interest+"\</mark>,\<br\>"
    outstring += "in the year \<mark>"+year+"\</mark>\<br\>"
    document.getElementById("result").innerHTML=outstring
    }
} 

function updateRate()
// Update the "Rate" slider value dynamically 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
} 