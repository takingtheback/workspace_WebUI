/**
 * 공통 자바스크립스 파일 : js/common.js
 */

// 추후엔 지우는걸 추천
// alert("common.js load");

/* 현재 날짜 년도4자리 -월2자리 -일2자리 기본형식의 날짜 반환 함수 
	-- 1 ~ 9 : 01
	-- getFullYear()
	-- getMonth() + 1
	-- getDate()
*/



function getCurrentDate() {
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth() + 1;
	if(month < 10) {
		month = "0" + month;
	}
	var date = currentDate.getDate();
	if(date < 10) {
		date = "0" + date;
	}
	
	currentDate = year + '-' + month + '-' + date;
	console.log("currentDate: " + currentDate);
}

/* 현재 날짜 시간2자리:분2자리:초2자리 기본형식의 날짜 반환 함수 */

function getCurrentTime() {
	
}


let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분
let seconds = today.getSeconds();  // 초

document.write(hours + ':' + minutes + ':' + seconds);