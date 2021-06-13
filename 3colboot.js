var requast=new XMLHttpRequest();
// initiate a new connection
requast.open('GET','https://restcountries.eu/rest/v2/all',true)
// send requast to server
 requast.send();
// server retrive sussesfully
requast.onload=function(){
 var data=JSON.parse(this.response);
 var row=document.getElementById('row');
    for(var i in data){
    
        
       
        var col=document.createElement('div')
        col.setAttribute('class','col-md-4 col-lg-4')

        var card=document.createElement('div')
        card.setAttribute('class','card')

        var cardimg=document.createElement('img')
        cardimg.setAttribute('class','card-img-top')
       
        cardimg.src=data[i].flag;

        var cardbody=document.createElement('div')
        cardbody.setAttribute('class','card-body')

        var ptag=document.createElement('div')
        ptag.setAttribute('class','card-text')
        ptag.innerHTML=data[i].capital;

        var h2=document.createElement('h2')
        h2.innerHTML=data[i].name;

        var h3=document.createElement('h3')
        h3.innerHTML=`
        currency code: ${data[i].currencies[0].code }
        currency name: ${data[i].currencies[0].name }
        currency symbol: ${data[i].currencies[0].symbol }`

        cardbody.append(h3,h2,ptag)

        card.append(cardimg,cardbody)

        col.append(card)

        row.append(col)

    }
    console.log(data)

}

// fetch('https://restcountries.eu/rest/v2/all')
// .then((response)=>{
//     return response.json();
// })
// .then((result)=>{
//     dispaly(result);
// })
// .catch((err)=>{
//     console.log("error");
// })


// function dispaly(data){
//     data.forEach(element => {
//         var row=document.getElementById('row');
       
//         var col=document.createElement('div')
//         col.setAttribute('class','col-md-4 col-lg-4')

//         var card=document.createElement('div')
//         card.setAttribute('class','card')

//         var cardimg=document.createElement('img')
//         cardimg.setAttribute('class','card-img-top')
//         cardimg.src=element.flag;

//         var cardbody=document.createElement('div')
//         cardbody.setAttribute('class','card-body')

//         var ptag=document.createElement('div')
//         ptag.setAttribute('class','card-text')
//         ptag.innerHTML=element.capital;

//         var h2=document.createElement('h2')
//         h2.innerHTML=element.name;

//         var h3=document.createElement('h3')
//         h3.innerHTML=`
//         currency code: ${element.currencies[0].code }
//         currency name: ${element.currencies[0].name }
//         currency symbol: ${element.currencies[0].symbol }`

//         cardbody.append(h3,h2,ptag)

//         card.append(cardimg,cardbody)

//         col.append(card)

//         row.append(col)


        
//     });
// }