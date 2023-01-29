function Question3()
{
    var val = document.getElementById("Amount").value;
    var f_index = document.getElementById("From").selectedIndex; // return index
    var t_index = document.getElementById("To").selectedIndex; // return index
    console.log(f_index, t_index);
    if (f_index == 0 & t_index == 1) // INR TO USD
    {
    val = val/0.012;
    }
    else if (f_index == 0 & t_index == 2) //INR TO AUD
    {
    val = val/0.017;
    }
    else if (f_index == 0 & t_index == 3) //INR TO CAD
    {
    val = val/0.016;
    }
    else if (f_index == 1 & t_index == 0) //USD TO INR
    {
    val = val*81.52;
    }
    else if (f_index == 1 & t_index == 2) //USD TO AUD
    {
    val = val*1.41;
    }
    else if (f_index == 1 & t_index == 3) //USD TO CAD
    {
    val = val*1.33;
    }
    else if (f_index == 1 & t_index == 3) //AUD TO INR
    {
    val = val*58.29;
    }
    else if (f_index == 1 & t_index == 3) //AUD TO USD
    {
    val = val/0.72;
    }
    else if (f_index == 1 & t_index == 3) //AUD TO CAD
    {
    val = val/0.95;
    }
    else if (f_index == 1 & t_index == 3) //CAD TO INR
    {
    val = val*61.11;
    }
    else if (f_index == 1 & t_index == 3) //CAD TO USD
    {
    val = val/0.75;
    }
    else if (f_index == 1 & t_index == 3) //CAD TO AUD
    {
    val = val*1.06;
    }
    else
    {
    val=val
    }
    document.getElementById("Answer").innerHTML = "Converted value: "+val;
}