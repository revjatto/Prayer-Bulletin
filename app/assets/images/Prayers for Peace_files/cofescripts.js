// JavaScript Functions for CofE website
function GetHiddenValue(field_name) {
    hiddenfield = document.getElementById(field_name);
    if (hiddenfield != null) {
        return hiddenfield.value;
    }
}

function openPrintPrayerWindow() {

    var prayerTye = "", prayerTime = "", dayOffset = "";
    prayerType = GetHiddenValue("hid_type");
    prayerTime = GetHiddenValue("hid_time");
    dayOffset = GetHiddenValue("hid_offset");
    var url = "";
    if (prayerType == "" || prayerTime == "" || dayOffset == "") {
        url = "http://www.churchofengland.org/prayer-worship/join-us-in-daily-prayer/feedarea/CofEPrayerWindow.aspx";
    }
    else {
        var qs = "today_" + prayerTime + "=1&book=" + prayerType + "&dayoffset=" + dayOffset;
        url = "http://daily.commonworship.com/daily.cgi?" + qs;
    }
    
    window.open(url, 'printthis', 'width=700,height=500,scrollbars=yes,resizable=yes,location=no'); 
    
}

function ShowMoreSitesMenu() {

    var dropdownmenudiv = document.getElementById('moresitesmenu');
    var dropdownmenubutton = document.getElementById('moresitesbutton');
    if (dropdownmenudiv && dropdownmenubutton) {
        if (dropdownmenudiv.style.display == 'block') {
            dropdownmenudiv.style.display = 'none';
            dropdownmenubutton.setAttribute("class", "topbuttonexpand");

        }
        else {
            dropdownmenudiv.style.display = 'block';
            dropdownmenubutton.setAttribute("class", "topbuttonexpand_clicked");
        }
        
    }
}

function extWin(url,width) {
	var winfeatures = 'width='+width+',height=700,resizable=yes,scrollbars=yes,menubar=yes,status=yes,toolbar=yes';
	window.open(url,'extwin',winfeatures);

}

function extWin2(url,width,height) {
	var winfeatures = 'width='+width+',height='+height+',resizable=yes,scrollbars=yes,menubar=yes,status=yes,toolbar=yes';
	window.open(url,'extwin',winfeatures);

}

function clearField(field,defValue) {
	if(field.value == defValue) field.value = "";
}

function showMoreButtons() {
    var morbuttonsdiv = document.getElementById('addmore');
    var addmorebutton = document.getElementById('button_addmore');
    if (morbuttonsdiv && addmorebutton) {
        if (morbuttonsdiv.style.display == 'block') {
            morbuttonsdiv.style.display = 'none';
            addmorebutton.setAttribute("class", "button_addmore");

        }
        else {
            morbuttonsdiv.style.display = 'block';
            addmorebutton.setAttribute("class", "button_addmore_clicked");
        }

    }
}

function createCookie(name,value) {

    //set expiry to 30 years
    //alert(name + ":" + value);
	var date = new Date();
	date.setTime(date.getTime()+(10950*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

/* Style Switcher by Paul Sowden, see A List Apart: http://www.alistapart.com/articles/alternate/ */

function setActiveStyleSheet(title) {
   var i, a, main, flag;
   for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
     if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
         a.disabled = true;
         //alert(title);
       if (a.getAttribute("title") == title) {
           a.disabled = false;
       }
      
     }
 }
   
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
      if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) {
        return a.getAttribute("title");
		alert (a.getAttribute("title"));
	}
  }
  return "CofE normal";
}
function readCookieAndSetStyleSheet(){
    var cookie = readCookie("style");
    //alert("reading:"+cookie);
    var title = cookie ? cookie : getPreferredStyleSheet();
    setActiveStyleSheet(title);
}

window.onload = function(e) {
    readCookieAndSetStyleSheet();
}

//window.onunload = function(e) {
//    var title = getActiveStyleSheet();
//    alert(title);
//    createCookie("style", title);
//}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
