function search()
{
    console.log(document.getElementById("input").value);
    document.getElementById("placeholder").innerHTML="";
    let query=document.getElementById("input").value;
    let api_key="aD1NGvRfRfsE3sabPt9s2rykopTWZbZp";
    // this is temporary need to get other one for other individual
    var request = new XMLHttpRequest()
    let reqSize=document.getElementById("noOfGifs").value;
    let url='http://api.giphy.com/v1/gifs/search?q='+query+'&api_key='+api_key+'&limit='+reqSize;
    console.log("url: ",url);
    request.open('GET',url , true)
    request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        console.log(data);
        //console.log(data.pagination.count);
        let size=data.data.length;
        if(size==0)
        {
            document.getElementById("placeholder").innerHTML="No results found <br> try with other words";
        }
        else
        {
            for(var i=0;i<size;i++)
            {
                console.log(data.data[i].images.downsized.url);
                document.getElementById("placeholder").innerHTML+="<img src="+data.data[i].images.downsized.url+"' class='images'></img";
                //let image=document.createElement("img");
                //image.src=data.data[i].images.downsized.url;
            }
        }
        //document.getElementById("input")="";
    } else {
        console.log('error')
    }
    }
    
    request.send()
    
}



