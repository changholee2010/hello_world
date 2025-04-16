/**
 * js/array2.js
 */
const numAry = [10, 17, 23, 26, 49];
let filterAry = numAry.filter(function(item, idx, ary) {
	return item % 2 == 0; // true값을 반화하는 item을 배열로 저장.
});
console.log(filterAry);

const jsonStr = `[{"id":1,"first_name":"Matthieu","last_name":"Crolla","email":"mcrolla0@seesaa.net","gender":"Male","salary":9181},
{"id":2,"first_name":"Erick","last_name":"Broxap","email":"ebroxap1@icq.com","gender":"Male","salary":3180},
{"id":3,"first_name":"Morty","last_name":"Mawd","email":"mmawd2@bloglovin.com","gender":"Male","salary":7951},
{"id":4,"first_name":"Carolus","last_name":"Trowell","email":"ctrowell3@lulu.com","gender":"Male","salary":5469},
{"id":5,"first_name":"Jamie","last_name":"Eagar","email":"jeagar4@ycombinator.com","gender":"Male","salary":9481},
{"id":6,"first_name":"Elisabet","last_name":"Benes","email":"ebenes5@mozilla.com","gender":"Female","salary":8012},
{"id":7,"first_name":"Malory","last_name":"Burbank","email":"mburbank6@ft.com","gender":"Polygender","salary":4976},
{"id":8,"first_name":"Carlota","last_name":"Dudny","email":"cdudny7@soundcloud.com","gender":"Genderfluid","salary":4947},
{"id":9,"first_name":"Bay","last_name":"Yoslowitz","email":"byoslowitz8@ox.ac.uk","gender":"Male","salary":4288},
{"id":10,"first_name":"Inglis","last_name":"Kringe","email":"ikringe9@unesco.org","gender":"Male","salary":3708},
{"id":11,"first_name":"Britt","last_name":"Dent","email":"bdenta@flavors.me","gender":"Male","salary":5383},
{"id":12,"first_name":"Marijo","last_name":"Hinckes","email":"mhinckesb@hao123.com","gender":"Female","salary":6127},
{"id":13,"first_name":"Ginni","last_name":"Tanman","email":"gtanmanc@creativecommons.org","gender":"Female","salary":3656},
{"id":14,"first_name":"Kellby","last_name":"Seivwright","email":"kseivwrightd@shutterfly.com","gender":"Male","salary":6767},
{"id":15,"first_name":"Celeste","last_name":"Walklot","email":"cwalklote@hao123.com","gender":"Non-binary","salary":1980}]`;
const jsonAry = JSON.parse(jsonStr);
// {id, first_name, .....}

filterAry = jsonAry.filter(item => item.gender == "Male" && item.salary >= 5000);
console.log(filterAry);

// reduce()
console.clear();
let result = [10, 23, 34, 48, 51].reduce(function(acc, item) {
	console.log(acc, item);
	if (item > 30) {
		acc.push(item);
	}
	return acc; // acc값으로 활용.
}, []);
console.log('result: ', result);
console.clear();
let list = document.querySelector('#list'); // <ul id="list" />

[10, 23, 34, 48, 51].reduce((acc, item) => {
	let li = document.createElement('LI');
	li.innerHTML = item; // <li>10</li>
	acc.appendChild(li);

	return acc;
}, list);

const ary = [
	{name: "홍길동", phone: "010-1111-2222"},
    {name: "최길동", phone: "010-1111-3333"},
    {name: "박길동", phone: "010-1111-4444"},
    {name: "김길동", phone: "010-1111-5555"}
]
// ul의 요소로 이름 - 연락처 출력.




