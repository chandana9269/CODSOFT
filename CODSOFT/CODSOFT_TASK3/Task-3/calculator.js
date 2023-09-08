let screen=document.getElementById('screen')

function getValue(event)
{
    let buttonValue=event.target.innerText;
    screen.value += buttonValue;
}

function result()
{
    screen.value=eval(screen.value);
}

function clearScreen()
{
    screen.value="";
}

function del()
{
    screen.value=screen.value.slice(0,-1);
}

