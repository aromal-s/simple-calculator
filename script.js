function btnClick(val)
{
    document.getElementById("screen").value+=val

}

function clearDisplay()
{
    document.getElementById("screen").value=" "
}

function equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

function backSpace()
{
    var str=document.getElementById("screen").value
    document.getElementById("screen").value=str.substr(0,str.length-1)
}