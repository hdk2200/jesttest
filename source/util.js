// util.js
function toHalfWidth(str) {
	// 同型のマイナス記号や長音記号を半角マイナスに変換するマップ
	const fullWidthMinusMap = {
			'－': '-', // 全角マイナス
			'−': '-', // 長音記号
			'—': '-', // エムダッシュ
			'ー': '-', // カタカナ長音
			'➖': '-', // その他のマイナス記号
	};
	
	return str.replace(/[！-～]/g, function(char) {
			return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
	}).replace(/　/g, " ") // 全角スペースを半角スペースに変換
	.replace(/[－−—ー➖]/g, function(char) { // マイナス記号や長音記号を半角マイナスに変換
			return fullWidthMinusMap[char] || char;
	});
}


module.exports = { toHalfWidth };
