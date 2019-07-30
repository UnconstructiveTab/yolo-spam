const axios = require("axios")

let randomLanguage = (type = "chinese", length = 19) => { // chinese or arabic
	let dictonary = (type == "chinese") ? "诶比西迪伊艾弗吉艾尺艾杰开艾勒艾马艾娜哦屁吉吾艾儿艾丝提伊吾维豆贝尔维艾克斯吾艾贼德" : "،؛؟ءآأؤإئابةتثجحخدذرزسشصضطظعغـفقكلمنهوىيًٌٍَُِّْٕٓٔﷲﷺﷻﷴ٠١٢٣٤٥٦٧٨٩٪٫٬٭ٮٯٰٱٲٳٴٵٶٷٸٹٺٻټٽپٿڀځڂڃڄڅچڇڈډڊڋڌڍڎڏڐڑڒړڔڕږڗژڙښڛڜڝڞڟڠڡڢڣڤڥڦڧڨکڪګڬڭڮگڰڱڲڳڴڵڶڷڸڹںڻڼڽھڿۀہۂۃۄۅۆۇۈۉۊۋیۍێۏېۑےۓ۔ەۖۗۘۙۚۛۜ۝۞ۣ۟۠ۡۢۤۥۦۧۨ۩۪ۭ۫۬۰۱۲۳۴۵۶۷۸۹ۺۻۼ۽۾ﹰﹱﹲﹴﹶﹷﹸﹹﹺﹻﹼﹽﹾﹿﺀﺁﺂﺃﺄﺅﺆﺇﺈﺉﺊﺋﺌﺍﺎﺏﺐﺑﺒﺓﺔﺕﺖﺗﺘﺙﺚﺛﺜﺝﺞﺟﺠﺡﺢﺣﺤﺥﺦﺧﺨﺩﺪﺫﺬﺭﺮﺯﺰﺱﺲﺳﺴﺵﺶﺷﺸﺹﺺﺻﺼﺽﺾﺿﻀﻁﻂﻃﻄﻅﻆﻇﻈﻉﻊﻋﻌﻍﻎﻏﻐﻑﻒﻓﻔﻕﻖﻗﻘﻙﻚﻛﻜﻝﻞﻟﻠﻡﻢﻣﻤﻥﻦﻧﻨﻩﻪﻫﻬﻭﻮﻯﻰﻱﻲﻳﻴﻵﻶﻷﻸﻹﻺﻻﻼ";
	let buffer = "";
	for(let i = 0; i < length; i++) {
		buffer += dictonary[Math.floor(Math.random() * dictonary.length)];
	}
	return buffer;
};

const lang = "chinese";

const mode = "message"; // message or random

const message = "yeet";

const interval = 3 * 1000; // 3 secconds

setInterval(function(){ 
	axios.post("http://onyolo.com/AAyf9vXrbK/message", {
		text: (mode == "message") ? message : randomLanguage(lang), 
		cookie: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), 
		wording: ""})
	.then(function (response) {
		console.log(response.data);
	});
}, interval);
