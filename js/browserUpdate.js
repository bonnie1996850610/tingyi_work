// JavaScript Document

var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var s;
//(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
//(s = ua.match(/trident.*rv\:([\d.]+)/)) ? Sys.ie = s[1] :
(s = ua.match(/msie ([\d.]+)|trident\/.*rv:([\d.]+)/)) ? Sys.ie = (s[2]) ? s[2] : s[1]:
(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
(s = ua.match(/android.([\d.]+)/)) ? Sys.android = s[1] :
(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

function setUpdateInfo(){
	var updateInfo='<div id="browser"><div class="browser_content">'
	+'<h1>您的瀏覽器版本過低。</h1><div class="browser_note">您的瀏覽器不支援新的網頁技術，<span class="autoWrap">可能導致網頁無法正常顯示，</span><br>為了能有良好的瀏覽體驗，<span class="autoWrap">請更新您的瀏覽器。</span></div>'
	+'<p>點擊圖示，免費下載新版瀏覽器</p><div class="browser_chosen">'
	+'<a href="http://www.google.com/chrome" target="_blank"><img src="images/browser/chrome.png" alt=""><br>Chrome</a>'
	+'<a href="https://www.mozilla.org/zh-TW/firefox/new" target="_blank"><img src="images/browser/firefox.png" alt=""><br>Firefox</a>'
	+'<a href="http://http://www.apple.com/safari" target="_blank"><img src="images/browser/safari.png" alt=""><br>Safari</a>'
	+'<a href="http://windows.microsoft.com/zh-tw/internet-explorer/download-ie" target="_blank"><img src="images/browser/ie.png" alt=""><br>Internet<br>Explorer</a>'
	+'</div></div></div>'
	
	$('body').append(updateInfo)
	$('#browser').click(function(){
		$('#browser').remove();
	})	
}

$(function(){
  if (Sys.ie <= 9.0 || Sys.firefox <= '4.0' || Sys.opera <= '12' || Sys.android < '3.0' || Sys.safari <= 3.2) setUpdateInfo()
})