/**
 * cartf.js
 */
///////////////////////////////////////////////////
// Number 객체의 메소드 추가.
///////////////////////////////////////////////////
Number.prototype.formatNumber = function () {
  let strAry = (this + "").split('').reverse();
  let idx = 1;
  // 천단위 콤마 붙이기.
  let cal = strAry.reduce((acc, num) => {
    acc += num;
    if (idx % 3 == 0 && idx != strAry.length) {
      acc += ',';
    }
    idx++;
    return acc;
  }, '');

  return cal.split('').reverse().join('');
} // end of formatNumber.

///////////////////////////////////////////////////
// checkbox 이벤트.
document.querySelectorAll('input[type="checkbox"]').forEach(item => {
  item.addEventListener('change', function () {
    changeSumInfo(); // 체크박스가 변경이 될때마다 합계부분을 재계산.
  })
})

///////////////////////////////////////////////////
// cart의 수량변경 할 경우에는 수량과 합계금액을 변경.
///////////////////////////////////////////////////
function changePNum(e) {
  // 변수 선언.
  let inputItem;
  let itemPrice = 0;
  let currentQty, changeQty = 1;

  // input(ArrowUp, ArrowDown), i (up, down)
  if (e.target.nodeName == 'INPUT') {
    inputItem = e.target;
    // 수량을 증가할지 감소할지.
    if (e.key == "ArrowDown") {
      changeQty = -1;
    }
  } else if (e.target.nodeName == 'I') {
    inputItem = e.target.parentElement.parentElement.children[0];
    // 수량을 증가할지 감소할지.
    if (e.target.classList.contains('down')) {
      changeQty = -1;
    }
  }

  // 수량은 1 이상이 유지되도록.
  if (parseInt(inputItem.value) + changeQty > 0) {

    // 현재수량.
    currentQty = parseInt(inputItem.value);

    // 상품가격.
    let targetItem = inputItem.parentElement.parentElement.parentElement.parentElement;
    itemPrice = targetItem.querySelector('input.p_price').value; // 금액.

    // 상품가격 * 수량 => 금액.
    let amount = (currentQty + changeQty) * itemPrice; // 금액 * 수량.

    // 증감된 수량, 금액 출력.
    inputItem.value = currentQty + changeQty;
    targetItem.querySelector('div.sum').innerHTML = amount.formatNumber() + "원";

    // 합계부분 처리.
    changeSumInfo();

  }

} // end of changePNum.

///////////////////////////////////////////////////
// 개별상품 삭제.
///////////////////////////////////////////////////
function delItem(e) {
  if (confirm('삭제하겠습니까?')) {
    e.target.parentElement.parentElement.parentElement.remove();
    changeSumInfo();
  }
} // end of delItem.

///////////////////////////////////////////////////
// 선택상품 삭제.
///////////////////////////////////////////////////
function delCheckedItem(e) {
  if (confirm('삭제하겠습니까?')) {
    document.querySelectorAll('input[type="checkbox"]:checked') //
      .forEach(item => item.parentElement.parentElement.parentElement.remove());
    changeSumInfo();
  }
} // end of delCheckedItem.

///////////////////////////////////////////////////
// 장바구니 비우기.
///////////////////////////////////////////////////
function delAllItem() {
  if (confirm('삭제하겠습니까?')) {
    document.querySelectorAll('div.row.data').forEach(item => item.remove());
    changeSumInfo();
  }
} // end of delAllItem.

///////////////////////////////////////////////////
// 장바구니 합계정보 계산.
///////////////////////////////////////////////////
function changeSumInfo() {
  // 수량합계.
  let qty = sumQty = 0;
  let amount = sumAmt = 0;

  document.querySelectorAll('div.row.data').forEach(item => {
    // 체크박스가 선택된 기준으로 계산.
    if (item.querySelector('input[type="checkbox"]').checked) {
      // 수량찾기.
      qty = parseInt(item.querySelector('input.p_num').value);

      // 금액합계.
      amount = item.querySelector('div.sum').innerHTML;
      amount = amount.substring(0, amount.length - 1);
      amount = amount.replace(/,/g, "");

      sumQty += qty;
      sumAmt += parseInt(amount);
    }
  })

  // 화면에 계산한 정보 출력.
  document.querySelector('div.sumcount>span').innerHTML = sumQty;
  document.querySelector('div.summoney>span').innerHTML = sumAmt.formatNumber();

} // end of changeSumInfo.