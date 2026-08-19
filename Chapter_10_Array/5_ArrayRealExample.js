let browsers = ["Chrome","Firefox","Opera","Edge"];

browsers.pop(); //remove last
//console.log(browsers);

browsers.shift(); //remove first
//console.log(browsers);

for(let i=0; i<=browsers.length; i++)
{
    //console.log(browsers[i]);

    if(browsers[i]=="Opera")
    {
        console.log("Opera doesn't support Automation");
    }
}