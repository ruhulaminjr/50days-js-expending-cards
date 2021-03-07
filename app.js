const panels = document.querySelectorAll('.panel');

function removeclass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeclass();
        panel.classList.add('active');
    })
})