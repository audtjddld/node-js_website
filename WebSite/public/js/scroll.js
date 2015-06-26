/**
 * New node file
 */
		$(document).ready(function() {

			/*
			* Plugin intialization
			*/
	    	$('#pagepiling').pagepiling({
	    		menu: '#menu',	
	    		anchors: ['page1', 'page2', 'page3', 'page4','page5'],				// 영역 ID를 배열로 선언해 둔다
			    sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C','#e8e8e8'],	// 배경셋 셋팅
			    navigation: {
			    	// 네비게이션 위치 및 툴팁 부분 문구를 배열로 넣을 수 있따.
			    	'position': 'left',
			   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4','Page 5']
			   	},
			    afterRender: function(){
			    	// 페이지 초기 랜더시 이벤트 영역 페이지 랜더시 이벤트 발생 영역
			    	$('#pp-nav').addClass('custom');
			    	console.log("render");
			    },
			    afterLoad: function(anchorLink, index){
			    	// 페이지 로드 된 후 이벤트 진행 가능한 영역
			    	if(index>1){
			    		$('#pp-nav').removeClass('custom');
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    	}
			    	console.log("index  " + index);
			    }
			});


	    });