module.exports = function ECI(data) {
	//TODO 將字串 英文大寫轉成英文小寫 英文小寫轉成英文大寫 其他不變 將新字串回傳 
	var result = []
	var base_l = 'a'.charCodeAt(0)
	var base_l_limit = 'z'.charCodeAt(0)
	var base_u = 'A'.charCodeAt(0)
	var base_u_limit = 'Z'.charCodeAt(0)
	for (var i = 0; i < data.length; i++) {
		var c = data.charCodeAt(i)
		if (c >= base_u && c <= base_u_limit) {
			result.push(String.fromCharCode(c - base_u + base_l))
		}
		else if (c >= base_l && c <= base_l_limit) {
			result.push(String.fromCharCode(c - base_l + base_u))
		}
		else {
			result.push(String.fromCharCode(c))
		}
	}
	return result.join('');
}
