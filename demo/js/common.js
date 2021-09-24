'use strict';

class ARCommon {
    static isAccess2AR(){
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
    
    static loadAnalytics(){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GTAG_ID);
    }
}
