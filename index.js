const panels=document.querySelectorAll('.panel');
panels.forEach(function(panel){
    panel.addEventListener("click",()=>{
        panels.forEach(function(element){
            element.classList.remove('active');
        })
        panel.classList.add('active');
    })
})
