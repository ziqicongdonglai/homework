function $ (id) {
			    return document.getElementById(id);
			}
			// $(function(){
				var ret = '';
				// var $resComputer = $('.computer .result1 img');
				// var $resPlayer = $('.your .result2 img');
				var $opt4 = $('.computer .action .opt1 img');
				var $opt5 = $('.computer .action .opt2 img');
				var $opt6 = $('.computer .action .opt3 img');
				var comScore = 0;
				var yourScore = 0;
				// var $score1 = $('.computer .score');
				// var $score2 = $('.your .score');
				// var $('info') = $('#info');
				function compare(select) {
					select.addEventListener('click',function(){
						if(select == $('jiandao')) {
							$('yourchoice').src = 'img/猜拳/2.png';
						} else if(select == $('shitou')){
							$('yourchoice').src = 'img/猜拳/0.png';
						}else {
							$('yourchoice').src = 'img/猜拳/1.png';
						}
						
				ret = guess();
				if (ret == 0) {
					$('computerchoice').src = 'img/猜拳/2.png';
					if(select == $('jiandao')) {
						$('info').innerHTML = "平手";
					}else if (select == $('shitou')) {
					
						$('info').innerHTML = "你赢了";
						yourScore++;
					}else {
						$('info').innerHTML = "你输了";
						comScore++;
					}
				} else if (ret == 1) {
					$('computerchoice').src = 'img/猜拳/0.png';
					if(select == $('shitou')) {
						$('info').innerHTML = "平手";
					}else if (select == $('bu')) {
					
						$('info').innerHTML = "你赢了";
						yourScore++;
					}else {
						$('info').innerHTML = "你输了";
						comScore++;
					}
				}else{
					$('computerchoice').src = 'img/猜拳/1.png';
					if(select == $('bu')) {
						$('info').innerHTML = "平手";
					}else if (select == $('jiandao')) {
						$('info').innerHTML = "你赢了";
						yourScore++;
					}else {
						$('info').innerHTML = "你输了";
						comScore++;
					}
				}
				function guess() {
					// 0为石头 1为布 2为剪刀
					var str = [0, 1, 2];
					var num = Math.floor(Math.random() * str.length);
					ret = str[num];
					return ret;
				}
				$('score1').innerHTML = comScore + '';
				$('score2').innerHTML = yourScore + '';
					});
				}
				compare($('jiandao'));
				compare($('shitou'));
				compare($('bu'));
			// });
