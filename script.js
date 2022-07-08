// TODO: add code here

window.addEventListener("load", function(){
 fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
     response.json().then(function(json){
        console.log(json)
         const container = document.getElementById("container");
         let count = document.getElementById("h1");
         count.innerHTML += `${json.length}`;
         let status =" ";
         let arr = [];
         for(i=0; i<json.length; i++){
            
            let hrsInSpc = json[i].hoursInSpace;
            arr.push(hrsInSpc)
             arr.push('heellloo')
                if(json[i].active === true){status = "active-true" };
                container.innerHTML += `
             <div class="astronaut">
                 <div class="bio">
                     <h3>${json[i].firstName} ${json[i].lastName}</h3>
                     <ul>
                         <li>Hours in space: ${json[i].hoursInSpace}</li>
                         <li>Active:<span class = "${status}">${json[i].active}</span></li>
                         <li>Skills: ${json[i].skills}</li>
                     </ul>
                    </div>
                  <img class="avatar" src="${json[i].picture}">
             </div>`
console.log(arr)
            };
            
        });
    });
});