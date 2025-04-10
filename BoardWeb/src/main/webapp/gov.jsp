<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>gov.jsp</title>
  <link href="css/styles.css" rel="stylesheet" />
</head>

<body>
  시도선택:<select id="choice" class="form-control">
  </select>

  <!-- 센터목록테이블. -->
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>센터명</th>
        <th>연락처</th>
        <th>시도정보</th>
      </tr>
    </thead>
    <tbody id="centerList"></tbody>
  </table>

  <script>
    let url =
      'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=qCwQYxNXeK%2FaB1Ngf9oNZDttjmjQ6ku1OdR6%2Fd0Jj5EIdqOxMXolplih%2BYjTqB4uxCuK636co3tf9T5%2Fr9OLvw%3D%3D';
    // 센터목록을 저장하기 위한 배열.
    let centerList = []; // Array.filter(), Array.reduce();

    // api호출 Ajax.
    fetch(url)
      .then(result => result.json())
      .then(result => {

        centerList = result.data; //센터전체.

        // 284건의 센터정보를 필터링해서 시도정보만 담기.
        let sidoAry = [];
        centerList.forEach(center => {
          if (sidoAry.indexOf(center.sido) == -1) {
            sidoAry.push(center.sido); // 중복되지 않은 값만 등록.
          }
        })

        // 시도정보 생성(option태그생성).
        sidoAry.forEach(sido => {
          let opt = document.createElement('option');
          opt.innerHTML = sido;
          document.querySelector('#choice').appendChild(opt);
        })

        // 초기목록출력(10개).
        centerList.forEach((center, idx) => {
          if (idx < 10) {
            let tr = makeCenter(center); // center의 정보를 활용 tr생성.
            document.querySelector("#centerList").appendChild(tr);
          }
        })

      })
      .catch(err => console.error(err))

    // 이벤트... this 1) 함수 : window 2) 이벤트: 이벤트대상.
    document.querySelector('#choice').addEventListener('change', function (e) {
      let val = this.value; // 사용자의 선택값.
      document.querySelector("#centerList").innerHTML = ""; // 목록지우기.
      centerList //
        .filter(center => center.sido == val)
        .forEach((center, idx) => {
          let tr = makeCenter(center); // center의 정보를 활용 tr생성.
          document.querySelector("#centerList").appendChild(tr);
        })
    }); // end of event.

    // 센터정보를 활용해서 tr 생성하는 함수.
    function makeCenter(center = {}) {
      let tr = document.createElement('tr');
      // tr영역 클릭이벤트.
      tr.addEventListener('click', function (e) {
        openWindow(center);
      });
      let fields = ['id', 'centerName', 'phoneNumber', 'sido'];
      // td생성.
      fields.forEach(field => {
        let td = document.createElement('td');
        td.innerHTML = center[field];
        tr.appendChild(td);
      })
      return tr;
    } // end of makeCenter.

    // tr클릭이벤트핸드러.
    function openWindow(center = {}) {
      window.open('map.jsp?lat=' + center.lat + '&lng=' + center.lng);
    }
  </script>
</body>

</html>