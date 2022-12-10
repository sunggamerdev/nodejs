const PI=3.14;
function add(a,b)
{
    return (a+b);
}
function getCurrentTime(){
    return new Date();
}
module.exports.getCurrentTime=getCurrentTime;
module.exports.add=add;