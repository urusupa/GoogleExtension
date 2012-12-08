

(function() {
	var nowURL = document.URL;//urlでニコかyoutubeか判定します++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	if ( nowURL.indexOf("www.youtube.com/results") > 0) {//URLに"youtube.com"が含まれる場合
		TubeVanish();
	} else if ( nowURL.indexOf("www.nicovideo.jp/ranking") > 0) {//URLに"nicovideo.jp/ranking"が含まれる場合
		NicoRankVanish();
	} else if ( nowURL.indexOf("www.nicovideo.jp/search") > 0) {//URLに"nicovideo.jp/search"が含まれる場合
		NicoSerchVanish();
	} else {
		//なにもしない
	}
	delete inText;//メモリ開放。効果は不明

})();

function TubeVanish() {//youtubeの検索一覧から てみた を削除します++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//ヒットした動画を非表示
	var inTextLength = document.getElementsByClassName("yt-lockup2");
	for (i=0;i<inTextLength.length;i++) {
		var inText = document.getElementsByClassName('yt-lockup2')[i].innerText;
		if(inText.indexOf("てみた") >= 0){//タイトルに"てみた"が含まれる場合非表示
			document.getElementsByClassName('yt-lockup2')[i].innerHTML = '<div style="background-color: #ddd">　非表示にしました by Temita Vanisher</div>';
		}
	}
	//ヒットしたプレイリスト非表示
	var inTextLength = document.getElementsByClassName("yt-grid-box");
	for (i=0;i<inTextLength.length;i++) {
		var inText = document.getElementsByClassName('yt-grid-box')[i].innerText;
		if(inText.indexOf("てみた") >= 0){//タイトルに"てみた"が含まれる場合非表示
			document.getElementsByClassName('yt-grid-box')[i].innerHTML = '<div style="background-color: #ddd">　非表示にしました by Temita Vanisher</div>';
		}
	}
	return 0;
}

function NicoRankVanish() {//ニコのランキングから てみた を削除します+++++++++++++++++++++++++++++++++++++++++++++++++++++
	for (i=1;i<100;i++) {//ランキングを"てみた"で繰り返し検索
		var inText = document.getElementById('item'+i).innerText;
		if(inText.indexOf("てみた") >= 0){//タイトルに"てみた"が含まれる場合非表示
			document.getElementById('item'+i).innerHTML = '<div style="background-color: #ddd"><b>'+i+'位</b> 非表示にしました by Temita Vanisher</div>';
			document.getElementById('item'+i+'_uad_current').innerHTML = '';
		}
	}
	return 0;
}

function NicoSerchVanish() {//ニコの検索結果から てみた を削除します+++++++++++++++++++++++++++++++++++++++++++++++++++++
	//検索一覧のカラム数（1,2,4）判定
	if(document.getElementsByClassName("thumb_col_1").length != 0){
		var col = 1;
	}
	else if(document.getElementsByClassName("thumb_col_2").length != 0){
		var col = 2;
	}
	else{
		var col = 4;
	}
	var inTextLength = document.getElementsByClassName("thumb_col_"+col);//てみた検索
	for (i=0;i<inTextLength.length;i++) {
		var inText = document.getElementsByClassName('thumb_col_'+col)[i].innerText;
		if(inText.indexOf("てみた") >= 0){//タイトルに"てみた"が含まれる場合非表示
			document.getElementsByClassName('thumb_col_'+col)[i].innerHTML = '<div style="background-color: #ddd">　非表示にしました by Temita Vanisher</div>';
			if (col == 4) {//4列の表示のときだけ by Temita Vanisher のフォントを一段階小さく
				document.getElementsByClassName('thumb_col_'+col)[i].innerHTML = '<div style="background-color: #ddd;font-size: smaller;">　非表示にしました<br>by Temita Vanisher</div>';
			}
		}
	}
	return 0;
}

