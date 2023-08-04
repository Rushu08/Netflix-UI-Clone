const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');

//shows the selected tab content
function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    //grab content item from DOM
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}

//removes border from slected tab
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

//remove show class
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//listen for tab click
tabItems.forEach( item => item.addEventListener('click',selectItem));

