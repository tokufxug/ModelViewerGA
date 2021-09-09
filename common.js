console.log('common.js');
function isAccess2AR(){
    const url = location.protocol + "\/\/" + location.host + location.pathname;
    const check_url = url.replace(url.split('/').pop(), '');
    
    if (document.referrer && 
        url !== document.referrer && 
        document.referrer.indexOf(check_url) != -1)
    {
        return true;
    }
    return false;
}
