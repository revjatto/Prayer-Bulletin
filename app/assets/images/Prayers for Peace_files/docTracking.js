function doc_tracking(folder,container) {
  var docTypes = [".pdf",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".rtf"];
  var is_elem = document.getElementById(container);
  
  if  (is_elem) {
    var links = is_elem.getElementsByTagName("a");
    
    for (var i = 0; i < links.length; i++) {
        for (var x = 0; x < docTypes.length; x++) {
          var pdfPos = links[i].href.indexOf(docTypes[x]);
          
          if (pdfPos>-1) {
              var titlePos = links[i].href.lastIndexOf('/');
              if(titlePos>-1) {
                var titleStr =  links[i].href.substring(titlePos+1,links[i].href.length);
                var strAttr = "javascript: _gaq.push(['_trackPageview','"+folder+titleStr+"']);";
                links[i].setAttribute('onclick',strAttr);
              }
          }
        }
    }
  }
}