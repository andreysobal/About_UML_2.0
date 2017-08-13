$(document).ready(function() {
	
	var content = {
		url : 'content/main_page.html',
		load : function (){
			$('#contentBox').load(content.url);
		}//end load
	};//end comtent

	var pageManager = {
		setPage : function(url){
			content.url = url;
			localStorage.setItem('pageUrl', url);
		},//end setPage

		followLink : function(link){
			link.preventDefault();
			var linkUrl = $(link.target).attr('href');
			this.setPage(linkUrl);
			content.load();
		},//end followLink

		loadPage : function(){
			if(localStorage.pageUrl){
				this.setPage(localStorage.pageUrl);
			}//end if
			content.load();
		}//end loadPage
	};//end pageManager

	pageManager.loadPage();

	$(".top_nav_item a, .home a").click(function(evt) {
		pageManager.followLink(evt);
	});//end click

});//end ready