function downloading(url,cb)
{
    console.log('กำลังโหลด '+ url)
    setTimeout(() => {
        cb("Downloaded " + url)

    }, 5000);
}
// function displayResult(myResult)
// {
//     console.log(myResult)
// }

downloading("File1",function(myResult){
    console.log(myResult)
    downloading("File2",function(myResult){
        console.log(myResult)
        downloading("File3",function(myResult){
            console.log(myResult)
        })
    })
})