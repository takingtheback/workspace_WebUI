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
	var year = ("0" + currentDate.getFullYear()).slice(-4);
	var month = ("0" + (currentDate.getMonth()+ 1)).slice(-2);
	var date = ("0" + currentDate.getDate()).slice(-2);
		
	currentDate = year + '-' + month + '-' + date;
	console.log("currentDate: " + currentDate);
	
	return currentDate;
}

/* 현재 날짜 시간2자리:분2자리:초2자리 기본형식의 날짜 반환 함수 
	-- 01, 02, ... , 09, 010, 011, 012
	-- ('0' + 시간) => 뒤에서 2자리 가져오기
*/

function getCurrentTime() {
	var currentTime = new Date();
	var hour = ("0" + currentTime.getHours()).slice(-2);
	var minutes = ("0" + currentTime.getMinutes()).slice(-2);
	var seconds = ("0" + currentTime.getSeconds()).slice(-2);
	
	currentTime = hour + ':' + minutes + ':' + seconds;
	console.log("currentTime: " + currentTime);
	
	return currentTime;
	
		
	
}
