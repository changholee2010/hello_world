// 숫자 3자리 콤마찍기
Number.prototype.numberFormat = function() {
	if (this == 0)
		return 0;
	let regex = /(^[+-]?\d+)(\d{3})/;
	let nstr = (this + '');
	while (regex.test(nstr)) {
		nstr = nstr.replace(regex, '$1' + ',' + '$2');
	}
	return nstr;
};

let basket = {
	cartCount: 0, // 전체수량.
	cartTotal: 0, // 전체금액.

	delItem: function() {
      // 상품삭제메소드.
	},

	reCalc: function() {
      // 전체합계 계산.
	},

	changePNum: function() {
      // 수량변경.
	},

	delCheckedItem: function() {
      // 선택된 상품 삭제.
	},

	delAllItem: function() {
      // 모든 상품 삭제.
	},

};

