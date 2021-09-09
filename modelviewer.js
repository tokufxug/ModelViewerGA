console.log('locationar-modelviewer.js');
function loadFinished(){
    const ar_view = "ar-view";
    const not_access = "not-access";
    let display_id = "";
    
    if (isAccess2AR())
    {
        display_id = ar_view;
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WK9MV97HE4');
    }
    else
    {
        display_id = not_access;
    }
    document.getElementById(display_id).style.display = 'block';
}
window.onload = loadFinished;