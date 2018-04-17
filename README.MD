
# Welcome to LR File Property!
	為了日後我們可以維護此專案，因此在此明定專案程式碼撰寫風格、方式，
	希望大大們可以遵守以下規則：

# 變數名稱
採用駝峰命名方式，若遇縮寫詞則以大寫表示，布林變數以is作為開頭，以下為範本：
	
	agent => agent
	user agent => userAgent
	user PI => userPI
	login ? => isLogin
	PI user => 不可使用！ 請勿以縮寫詞作為開頭

# 撰寫風格
	1. 縮排皆使用空格，一階２格
	2. 結尾不加分號(;)
		good:
		const user = 'John'
		bad:
		const user = 'John';
	3. method/object參數逗號後請空白，參數前、後不需加空白
		good:
		const user = new User('John', 'Li')
		bad:
		const user = new User( 'John', 'Li')
		const user = new User( 'John', 'Li' )
		const user = new User('John','Li')
	4. class命名自首請大寫
		good:
		class User {
			...
		}
		bad:
		class user {
			...
		}
	6. 大括號同一行前後請空白 
		good:
		const { firstName, lastName } = user
		bad:
		const {firstName, lastName} = user
	7. 一個object超過兩個變數請換行
		good:
		const book = {
		  name: 'hello world',
		  owner: user,
		  location: 'home',
		}
		bad:
		const book = {name: 'hello world', owner: user, location: 'home', }
	8. 字串請用單引號或反引號
		good:
		const name = 'John'
		const name = `John`
		bad: 
		const name = "John"
	9. 字串組合請用反引號不要用加號
		good:
		const fullName = `${user.firstName} ${user.lastName}`
		bad:
		const fullName = user.firstName + ' ' + user.lastName
	10. object變數分號後請空白
		good:
		const book = {
		  name: 'hello world',
		  owner: user,
		  location: 'home',
		}
		bad:
		const book = {
		  name:'hello world',
		  owner:user,
		  location:'home',
		}
	11. 每個function/class請寫註解，推薦使用VSCode Doxygen產生註解
		good:
		/**
		*
		* @description use to show alert by react-native Alert component
		*
		* @param  {String}  title
		* @param  {String}  message
		* 
		* @return 
		*/
		function  showAlert(title, message) {
			...
		}
		bad:
		/**
		* use to show alert.
		*/
		function showAlert(title, message) {
			...
		}
	12. 大括號不換行
		good:
		if (...) {
			...
		} 
		const object = {
			...
		}
		bad: 
		if (...) 
		{
			...
		} 
		const object = 
		{
			...
		}
	13. if如果有超過三個判斷，請換行，括號內前後不空白
		good:
		if (user.isLogin && 
			uesr.expired > now && 
			user.permission > PERMISSION.ADMIN) {
			....
		}
		bad:
		if (user.isLogin && uesr.expired > now && user.permission > PERMISSION.ADMIN) {
			....
		}
	14. 符號前後請空白
		good:
		for (let i = 0; i < array.length - 1; i ++) {
			....
		}
		bad:
		for (let i=0; i<array.length-1; i++) {
			....
		}
		if (user.firstName === 'Li') {
			...
		}
	
	/*                                                            */
	
	
		
# React-Native相關規範  
	1. 面頁設計請以Menu為範例，建立目錄後在裡面新增以下頁面：
		1. index.js ==> 為了import方便
		2. screen.js ==> 撰寫navigation相關程式碼專用
		3. container.js ==> 撰寫redux相關程式碼專用
		4. component.js ==> 撰寫頁面內部程式碼 
	2. 如果有自建元件，請新增{component name}.js，如共用請放在app/底下，僅供某個頁面請放在該頁面目錄底下
	3. Navigator 套件請使用react-navigation，範例請看MyAccountNavigator/MainTabNavigator
	4. 使用者狀態保持用redux-persist，範例請看app/service/* & app/store.js & app/index.js
	5. 資源檔請放在app/assets/
	6. 如有共用style請放在app/styles
	7. UI Component再不衝突的情況底下優先使用native-base
	8. 其他.
	 

# 專案API相關
	時間使用timestamp且timezone = utc，時間範圍到秒 ex: moment().utc().valueOf()/1000
	請使用api/conn.js 作為連線，禁止直接使用fetch
# 版本控管
	本專案使用Git
	推薦使用SourceTree
	請至少在每個小功能之間加上commit，請勿直接一個大功能一個commit或整個專案都沒commit!
	

# 相關補充
	如果您有任何提議，歡迎提出！
