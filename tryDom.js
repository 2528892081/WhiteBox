var dom = {
	id: '#app',
	template: `
	<div>aaaa</div>
	<div>{{index}}</div>
	<ul m-for="item in lst">
		<li>{{item}}</li>
	</ul>
	`,
	childNodes: [],
	data: function(){
		return {
			index: 1,
			hahahh: 'hello!',
			lst: ['horry', 'potter', 'martin']
		}
	},
	methods: {
		
	}
}

//筛选属性标签元素
function filter(arr) {
	var list = [];
	for(let i=0; i<arr.length; i++) {
		if(arr[i].nodeType == 1){
			list.push(arr[i]);
		} 
	}
	return list;
}
//如果使用了data中的数据则进行判断：1.单个变量 2.数组 3.对象
//2 和 3情况依据获取设置的属性getAttribute  m-for


function changeDom(index,str){
	
}


window.onload = function(){
	var el;
	//获取标签
	if(dom.id[0] == '#'){
		var id = dom.id.substr(1);
		el = document.getElementById(id);
	} else {
		console.log('Error! Please set the dom of "id" selector...');
	}
	
	el.innerHTML = dom.template + el.innerHTML;
	
	dom['childNodes'] = filter(el.childNodes)

	//正则匹配 + 变量替换
	var patent = /\{\{[a-zA-Z]+\}\}/g;
	for(let i =0; i<dom.childNodes.length;i++){
		
		console.log(dom.childNodes[i].getAttribute('m-for'));
		
		console.log("match--->",dom.childNodes[i].innerHTML.match(patent));
		if(dom.childNodes[i].innerHTML.match(patent)!=null){
			str = dom.childNodes[i].innerHTML.substring(2,dom.childNodes[i].innerHTML.length - 2);
			console.log("str---->",str);
			dom.data().hasOwnProperty(str) ? dom.childNodes[i].innerHTML=dom.data()[str] :console.log('the variable' + str + ' not in Data...');
		} 
	}
}