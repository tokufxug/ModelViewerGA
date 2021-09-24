'use strict';

class ARModelViewer {
    static loadFinished(){
       const ar_view = "ar-view";
       const not_access = "not-access";
       let display_id = "";
       if (ARCommon.isAccess2AR())
       {
           display_id = ar_view;
           ARCommon.loadAnalytics();
       }
       else
       {
           display_id = not_access;
       }
       document.getElementById(display_id).style.display = 'block';
    }
}
window.onload = ARModelViewer.loadFinished;
