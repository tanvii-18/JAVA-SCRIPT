// wap to perform method overloading to find sum of 2 to 4 arguments.
// ex. sum(10,20), sum(10,20,30), sum(_....4)

function sum(...arr)
{
    if(arr.length < 2 || arr.length > 4)
    {
        document.writeln("Enter number between 2 to 4");
        return;
    }

    let total = arr.reduce((sum, num) => sum + num, 0);
    document.writeln("Sum:", total +"<br>");
}

sum(10,90);
sum(40,6,8);
sum(2,9,50,9,0);