function pageLoad(content){
    //append content to page when first is first loaded
    document.addEventListener('DOMContentLoaded',()=>{
        let elementToAppendTo = document.getElementById('content');
        elementToAppendTo.append(content);
    });
};


export {pageLoad};