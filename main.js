


let myLeads = []

const deleteButton = document.getElementById("delete-btn")
const welcomeEl = document.getElementById("welcome-el")
const inputEl =document.getElementById("input-el") 

const inputButton =document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
 
const ulEl = document.getElementById("ul-el")


console.log(welcomeEl)

const tabs = [
    {url: "https://www.linkedin.com/in/wanjiku-mutitu-6771651b5/"}
]
   

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
   
     });
    
})
 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = " "

for (let i = 0; i < leads.length; i++){
   
    listItems += `<li> 
    <a target = '_blank' href ='${leads[i]}'>
    ${leads[i]}
    </a>
    </li>`


    
     ulEl.innerHTML = listItems
    
}
}

deleteButton.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = [" "]
    render(myLeads)
   
   
   })
inputButton.addEventListener("click",  function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    clearThis()
  
     
})



function clearThis() {
 
        inputEl.value = ""
    }


