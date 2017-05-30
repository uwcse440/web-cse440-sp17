var pr = document.querySelectorAll('.protoio-embed-prototype');
for(var i=0;i<pr.length;i++){
	var wrapper = pr[i];
	var v = wrapper.getAttribute('data-account') == null ? 2 : 1;
	var domain = (wrapper.getAttribute('data-domain') != null) ? wrapper.getAttribute('data-domain') : ((v == 1) ? 'proto.io' : 'pr.to');
	var url = v == 1 ?
		"https://" + wrapper.getAttribute('data-account') + "." + domain + "/embed/?id=" + wrapper.getAttribute('data-project') + "&v=" + wrapper.getAttribute('data-version') + "&embedside=" + wrapper.getAttribute('data-show-sidebuttons') :
		"https://" + domain + "/" + wrapper.getAttribute('data-code') + "/embed/" + "?embedside=" + wrapper.getAttribute('data-show-sidebuttons');
	wrapper.innerHTML = '<iframe src="' + url + '" scrolling="no" style="border: 0px; width: 100px; min-width: 100%;" width="100%" height="100%"></iframe>';
}