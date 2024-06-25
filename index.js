let allLink = [];
const input = document.getElementById("input")
const addLink = document.getElementById("add-link")
const addTab = document.getElementById("add-this-tab")
const clearAll = document.getElementById("clear-all")
const list = document.getElementById("list")


let getLinkLocal = JSON.parse(localStorage.getItem("link"))




if(getLinkLocal){
    allLink = getLinkLocal
    render(allLink)
}

function render(arr){
    list.innerHTML=""
  arr.forEach((item) => {
    
    list.innerHTML += 


      ` <li>
            <a
             href= ${item} > ${item}

            </a>
            
            
      </li>`
      
      
      
}
    
    
      
);
        

}

addLink.addEventListener("click", (e)=>{
    e.preventDefault()

    if(input.value==""){
      alert("insert a link")
    
     input.setAttribute("required")
    }
    let link = input.value
    
   
    allLink.push(link)
    localStorage.setItem("link", JSON.stringify(allLink))
   
    input.value=""
   
    render(allLink)

})



clearAll.addEventListener("click", () =>{

  localStorage.clear();
  allLink = [];
 


})

addTab.addEventListener("click", () =>{
  chrome.tabs.query({ active: true, currentWindow :true}, function (tabs){
    var activeTabs = (tabs[0].url)
    allLink.push(activeTabs)
    localStorage.setItem("link", JSON.stringify(allLink))
    render(allLink)
  })
}) 


tabBtn.addEventListener("click", function(){    
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads) )
      render(myLeads)
  })
})
