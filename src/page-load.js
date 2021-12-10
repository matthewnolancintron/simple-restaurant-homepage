function pageLoad(content){
    //append content to page when first is first loaded
    document.addEventListener('DOMContentLoaded',()=>{
        document.body.prepend(content);
    });
};


export {pageLoad};