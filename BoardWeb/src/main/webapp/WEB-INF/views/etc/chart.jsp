<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      async function drawChart() {
        var dataAry = []; // 멤버별로 건수.
        dataAry.push(['MemberName', 'Count Per Member']);
        
        let r1 = await fetch('chartJson.do');
        let r2 = await r1.json(); // json문자열 -> Object로 변경.
        r2.forEach(item => {
        	console.log(item);
        	dataAry.push([item.memberName, item.cnt]); // 배열에 추가.
        })
        
        var data = google.visualization.arrayToDataTable(dataAry);

        var options = {
          title: '사용자별 작성건수',
          is3D: true,
          //pieHole: 0.4,
          pieStartAngle: 60,
          slices: {  2: {offset: 0.2},
                     0: {offset: 0.4},
                     4: {offset: 0.3},
                  },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options); //
      }
    </script>
</head>
<body>
	<div id="piechart" style="width: 900px; height: 500px;"></div>
</body>
</html>
