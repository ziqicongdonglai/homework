var ret = '';
var res;

function compare() {
	do {
		ret = guess();
		var temp = prompt('请输入你要出的:' + '\n' + '石头1；剪刀2；布3;结束4');
		if (temp == ret) {
			alert('平局')
			// break;
			// res = '平局'
			// return res;
			temp = '';
			console.log(ret);
		} else if (temp > ret && temp != 4) {
			alert('这局你赢了！');
			// break;
			// res = '你赢了'
			// return res;
			temp = '';
			console.log(ret);
		} else if (temp < ret) {
			alert('这局你输了！');
			// break;
			// res = '你输了'
			// return res;
			temp = '';
			console.log(ret);
		} else if (temp == 4) {
			alert('游戏退出')
			break;
		}
		// switch (res){
		// 	case '平局':
		// 	alert('这局平局');
		// 		break;
		// 	case '你赢了':
		// 	alert('这局你赢了！');
		// 		break;
		// 	case '你输了':
		// 	alert('这局你输了！');
		// 	break;
		// }

	} while (temp != 4)
}

function guess() {
	var str = [1, 2, 3];
	var num = Math.floor(Math.random() * str.length);
	var ret = str[num];
	return ret;
}
compare();
