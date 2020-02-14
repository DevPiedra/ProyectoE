function  changeDiv(option)
{
    var optionOne = document.getElementById('Op1');
    var optionTwo = document.getElementById('Op2');
    var optionthree = document.getElementById('Op3');
    if(option == 1)
    {
        optionOne.style.display = "";
        optionTwo.style.display = "none"
        optionthree.style.display = "none"
    }else if(option == 2)
    {
        optionOne.style.display = "none";
        optionTwo.style.display = ""
        optionthree.style.display = "none"
    }else if (option == 3)
    {
        optionOne.style.display = "none";
        optionTwo.style.display = "none"
        optionthree.style.display = ""
    }
}