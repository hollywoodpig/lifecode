const items = document.querySelector('.portfolio-spoiler')
const trigger = document.querySelector('.portfolio-spoiler-btn')

if (items) {
    trigger.addEventListener('click', () => {

        // slide down items
    
        items.classList.add('active')
        items.style.height = 'auto'
        
        let height = items.clientHeight + 'px'
    
        items.style.height = '0px'
    
        setTimeout(() => {
            items.style.height = height
        }, 0)
    
        setTimeout(() => {
            items.style.height = 'auto'
        }, 300) // transition time
    
        // add class to btn
    
        trigger.classList.add('hidden')
    })
}
