const common = {
    toTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        window.pageYOffset = 0;
    },
    addEventListener(obj){
        window.addEventListener('scroll', obj.handleScroll);
    },
    removeEventListener(obj){
        window.removeEventListener('scroll', obj.handleScroll);
    },
    getScrollTop(obj){
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }

}

module.exports = {
    common
}
