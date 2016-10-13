function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
 //if its not mobile then start script otherwise turn it off (just place the script    under this comment
	new WOW().init();
}
$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});


var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
function tweetCurrentPage_home()
    { window.open("https://twitter.com/share?url="+escape(baseUrl + "/")+"&text="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false; }

function tweetCurrentPage()
    { 
	var url=window.location.href;
	var new_text = url.replace('mapshare', 'map_share');
	window.open("https://twitter.com/share?url="+escape(new_text)+"&text="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false; }
	
$(document).ready(function(){
	$(document).on('click','#fb_share_button', function (e){
e.preventDefault();
elem = $(this);
var url=window.location.href;
var new_text = url.replace('mapshare', 'map_share');
FB.ui(
{
method: 'feed',
name: document.title,
link: new_text,
picture: baseUrl+'/src/img/twp.jpg',
caption: elem.data('caption'),
description: elem.data('desc'),
message: ''
});
	});
	
	
	$(document).on('click','#linked_share_button', function (e){
e.preventDefault();
elem = $(this);
var url=window.location.href;
var new_text = url.replace('mapshare', 'map_share');
window.open("https://www.linkedin.com/shareArticle?mini=true&url="+escape(new_text)+"&title="+document.title+"&summary="+elem.data('summary')+"&source="+elem.data('source'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;
});


$(document).on("click",'#whatsapp_share_button',function() {

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var url=window.location.href;
		var new_text = url.replace('mapshare', 'map_share');
        var text = $(this).attr("data-summary");
        var message = encodeURIComponent(text)+" - "+escape(new_text);
        var whatsapp_url = "whatsapp://send?text="+message;
        window.location.href= whatsapp_url;
} else {
    alert("Please share this article in mobile device");
}
});


//home page share
$(document).on('click','#fb_share_button_home', function (e){
e.preventDefault();
elem = $(this);
FB.ui(
{
method: 'feed',
name: document.title,
link: baseUrl,
picture: baseUrl+'/src/img/twp.jpg',
caption: elem.data('caption'),
description: elem.data('desc'),
message: ''
});
	});
	
	
	$(document).on('click','#linked_share_button_home', function (e){
e.preventDefault();
elem = $(this);
window.open("https://www.linkedin.com/shareArticle?mini=true&url="+escape(baseUrl)+"&title="+document.title+"&summary="+elem.data('summary')+"&source="+elem.data('source'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;
});


$(document).on("click",'#whatsapp_share_button_home',function() {

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

        var text = $(this).attr("data-summary");
        var message = encodeURIComponent(text)+" - "+escape(baseUrl);
        var whatsapp_url = "whatsapp://send?text="+message;
        window.location.href= whatsapp_url;
} else {
    alert("Please share this article in mobile device");
}
});
});