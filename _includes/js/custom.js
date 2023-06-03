var case_abbr = ["nom", "acc", "ins", "dat", "abl", "gen", "loc", "voc"];
var gender_abbr = ["sg", "pl"];
var paradn_generic = {};
var paradn_pron = {};
var paradn_irrn = {};
paradn_generic["a,m"] = ["o;ā", "aṃ;e", "ena;ehi,ebhi", "assa,āya,atthaṃ;ānaṃ", "asmā,amhā,ā;ehi,ebhi", "assa;ānaṃ", "asmiṃ,amhi,e;esu", "a,ā;ā"];
paradn_generic["ā,f"] = ["ā;ā,āyo", "aṃ;ā,āyo", "āya;āhi,ābhi", "āya;ānaṃ", "āya;āhi,ābhi", "āya;ānaṃ", "āya,āyaṃ;āsu", "e;ā,āyo"];
paradn_generic["a,n"] = ["aṃ;āni,ā", "aṃ;āni,e", "ena;ehi,ebhi", "assa;ānaṃ", "asmā,amhā,ā;ehi,ebhi", "assa;ānaṃ", "asmiṃ,amhi,e;esu", "a;ā,āni"];
paradn_generic["i,m"] = ["i;ī,ayo", "iṃ;ī,ayo", "inā;īhi,ībhi,ihi,ibhi", "issa,ino;īnaṃ,inaṃ", "ismā,imhā,inā;īhi,ībhi,ihi,ibhi", "issa,ino;īnaṃ,inaṃ", "ismiṃ,imhi;īsu,isu", "i;ī,ayo"];
paradn_generic["i,f"] = ["i;ī,iyo", "iṃ;ī,iyo", "iyā;īhi,ībhi,ihi,ibhi", "iyā;īnaṃ,inaṃ", "iyā;īhi,ībhi,ihi,ibhi", "iyā;īnaṃ,inaṃ", "iyā,iyaṃ;īsu,isu", "i;ī,iyo"];
paradn_generic["i,n"] = ["i;īni,ī", "iṃ;īni,ī", "inā;īhi,ībhi,ihi,ibhi", "issa,ino;īnaṃ,inaṃ", "ismā,imhā,inā;īhi,ībhi,ihi,ibhi", "issa,ino;īnaṃ,inaṃ", "ismiṃ,imhi;īsu,isu", "i;ī,īni"];
paradn_generic["ī,m"] = ["ī;ī,ino", "inaṃ,iṃ;ī,ino", "inā;īhi,ībhi", "issa,ino;īnaṃ", "ismā,imhā,inā;īhi,ībhi", "issa,ino;īnaṃ", "ismiṃ,imhi,ini;īsu", "i;ī,ino"];
paradn_generic["ī,f"] = ["ī;ī,iyo", "iyaṃ,iṃ;ī,iyo", "iyā;īhi,ībhi", "iyā;īnaṃ", "iyā;īhi,ībhi", "iyā;īnaṃ", "iyā,iyaṃ;īsu", "i;ī,iyo"];
paradn_generic["u,m"] = ["u;ū,avo", "uṃ;ū,avo", "unā;ūhi,ūbhi,uhi,ubhi", "ussa,uno;ūnaṃ,unaṃ", "usmā,umhā,unā;ūhi,ūbhi,uhi,ubhi", "ussa,uno;ūnaṃ,unaṃ", "usmiṃ,umhi;ūsu,usu", "u;ū,avo,ave"];
paradn_generic["u,f"] = ["u;ū,uyo", "uṃ;ū,uyo", "uyā;ūhi,ūbhi,uhi,ubhi", "uyā;ūnaṃ,unaṃ", "uyā;ūhi,ūbhi,uhi,ubhi", "uyā;ūnaṃ,inaṃ", "uyā,uyaṃ;ūsu", "u;ū,uyo"];
paradn_generic["u,n"] = ["u;ūni,ū", "uṃ;ūni,ū", "usā,unā;ūhi,ūbhi,uhi,ubhi", "ussa,uno;ūnaṃ,unaṃ", "usmā,umhā,unā;ūhi,ūbhi,uhi,ubhi", "ussa,uno;ūnaṃ,unaṃ", "usmiṃ,umhi;ūsu,usu", "u;ūni,ū"];
paradn_generic["ū,m"] = ["ū;ū,uno", "uṃ;ū,uno", "unā;ūhi,ūbhi", "ussa,uno;ūnaṃ", "usmā,umhā,unā;ūhi,ūbhi", "ussa,uno;ūnaṃ", "usmiṃ,umhi;ūsu", "u;ū,uno"];
paradn_generic["ū,f"] = ["ū;ū,uyo", "uṃ;ū,uyo", "uyā;ūhi,ūbhi", "uyā;ūnaṃ", "uyā;ūhi,ūbhi", "uyā;ūnaṃ", "uyā,uyaṃ;ūsu", "u;ū,uyo"];
paradn_pron["tumha;a,m"] = ["-3vaṃ,-3uvaṃ;e,-4vo", "-3avaṃ,-3aṃ,-3vaṃ,-3uvaṃ;ākaṃ,e,-4vo", "-3ayā,-3vayā,-3e;ehi,ebhi,-4vo", "aṃ,-3ava,-2yhaṃ,-3e;aṃ,ākaṃ,-4vo", "-3ayā;ehi,ebhi", "aṃ,-3ava,-2yhaṃ,-3e;aṃ,ākaṃ,-4vo", "-3ayi,-3vayi;esu", ";"];
paradn_pron["tumha;ā,f"] = ["-3vaṃ,-3uvaṃ;e,-4vo", "-3avaṃ,-3aṃ,-3vaṃ,-3uvaṃ;ākaṃ,e,-4vo", "-3ayā,-3vayā,-3e;ehi,ebhi,-4vo", "aṃ,-3ava,-2yhaṃ,-3e;aṃ,ākaṃ,-4vo", "-3ayā;ehi,ebhi", "aṃ,-3ava,-2yhaṃ,-3e;aṃ,ākaṃ,-4vo", "-3ayi,-3vayi;esu", ";"];
paradn_pron["tumha;a,n"] = ["-3vaṃ,-3uvaṃ;e,-4vo", "-3avaṃ,-3aṃ,-3vaṃ,-3uvaṃ;ākaṃ,e,-4vo", "-3ayā,-3vayā,-3e;ehi,ebhi,-4vo", "aṃ,-3ava,-2yhaṃ,-3e;aṃ,ākaṃ,-4vo", "-3ayā;ehi,ebhi", "aṃ,-3ava,-2yhaṃ,-3e;aṃ,ākaṃ,-4vo", "-3ayi,-3vayi;esu", ";"];
paradn_pron["amha;a,m"] = ["-2haṃ;-3mayaṃ,e,-3no", "-3maṃ,-3mamaṃ;ākaṃ,e,-3no", "-3mayā,-3me;ehi,ebhi,-3no", "aṃ,-3mama,-3mayhaṃ,-3mamaṃ,-3me;aṃ,ākaṃ,-2smākaṃ,-3no", "-3mayā;ehi,ebhi", "aṃ,-3mama,-3mayhaṃ,-3mamaṃ,-3me;aṃ,ākaṃ,-2smākaṃ,-3no", "-3mayi;esu", ";"];
paradn_pron["amha;ā,f"] = ["-2haṃ;-3mayaṃ,e,-3no", "-3maṃ,-3mamaṃ;ākaṃ,e,-3no", "-3mayā,-3me;ehi,ebhi,-3no", "aṃ,-3mama,-3mayhaṃ,-3mamaṃ,-3me;aṃ,ākaṃ,-2smākaṃ,-3no", "-3mayā;ehi,ebhi", "aṃ,-3mama,-3mayhaṃ,-3mamaṃ,-3me;aṃ,ākaṃ,-2smākaṃ,-3no", "-3mayi;esu", ";"];
paradn_pron["amha;a,n"] = ["-2haṃ;-3mayaṃ,e,-3no", "-3maṃ,-3mamaṃ;ākaṃ,e,-3no", "-3mayā,-3me;ehi,ebhi,-3no", "aṃ,-3mama,-3mayhaṃ,-3mamaṃ,-3me;aṃ,ākaṃ,-2smākaṃ,-3no", "-3mayā;ehi,ebhi", "aṃ,-3mama,-3mayhaṃ,-3mamaṃ,-3me;aṃ,ākaṃ,-2smākaṃ,-3no", "-3mayi;esu", ";"];
paradn_pron["ta;a,m"] = ["-1so;-1ne,e", "-1naṃ,aṃ;-1ne,e", "-1nena,ena;-1nehi,-1nebhi,ehi,ebhi", "-1assa,-1nassa,assa;-1nesaṃ,-1nesānaṃ,esaṃ,esānaṃ", "-1asmā,-1nasmā,asmā,-1namhā,amhā;-1nehi,-1nebhi,ehi,ebhi", "-1assa,-1nassa,assa;-1nesaṃ,-1nesānaṃ,esaṃ,esānaṃ", "-1asmiṃ,-1nasmiṃ,asmiṃ,-1namhi,amhi;-1nesu,esu", ";"];
paradn_pron["ta;ā,f"] = ["-1sā;-1nā,ā,-1nāyo,āyo", "-1naṃ,aṃ;-1nā,ā,-1nāyo,āyo", "-1nāya,āya;-1nāhi,-1nābhi,āhi,ābhi", "issāya,assāya,-1assāya,-1nassāya,issā,assā,-1assā,-1nassā,-1nāya,āya;-1nāsaṃ,-1nāsānaṃ,āsaṃ,āsānaṃ", "-1nāya,āya;-1nāhi,-1nābhi,āhi,ābhi", "issāya,assāya,-1assāya,-1nassāya,issā,assā,-1assā,-1nassā,-1nāya,āya;-1nāsaṃ,-1nāsānaṃ,āsaṃ,āsānaṃ", "issaṃ,assaṃ,-1assaṃ,-1nassaṃ,-1nāya,āya;-1nāsu,āsu", ";"];
paradn_pron["ta;a,n"] = ["-1naṃ,aṃ;-1nāni,āni", "-1naṃ,aṃ;-1nāni,āni", "-1nena,ena;-1nehi,-1nebhi,ehi,ebhi", "-1assa,-1nassa,assa;-1nesaṃ,-1nesānaṃ,esaṃ,esānaṃ", "-1asmā,-1nasmā,asmā,-1namhā,amhā;-1nehi,-1nebhi,ehi,ebhi", "-1assa,-1nassa,assa;-1nesaṃ,-1nesānaṃ,esaṃ,esānaṃ", "-1asmiṃ,-1nasmiṃ,asmiṃ,-1namhi,amhi;-1nesu,esu", ";"];
paradn_pron["eta;a,m"] = ["-1so;e", "aṃ;e", "ena;ehi,ebhi", "assa;esaṃ,esānaṃ", "amhā,asmā;ehi,ebhi", "assa;esaṃ,esānaṃ", "amhi,asmiṃ;esu", ";"];
paradn_pron["eta;ā,f"] = ["-1sā;ā,āyo", "aṃ;ā,āyo", "āya;āhi,ābhi", "issāya,issā,āya;āsaṃ,āsānaṃ", "āya;āhi,ābhi", "issāya,issā,āya;āsaṃ,āsānaṃ", "issaṃ,āyaṃ;āsu", ";"];
paradn_pron["eta;a,n"] = ["aṃ;āni", "aṃ;āni", "ena;ehi,ebhi", "assa;esaṃ,esānaṃ", "amhā,asmā;ehi,ebhi", "assa;esaṃ,esānaṃ", "amhi,asmiṃ;esu", ";"];
paradn_pron["ima;a,m"] = ["-2ayaṃ;e", "aṃ;e", "-2anena,inā;-2ehi,-2ebhi,ehi,ebhi", "-2assa,assa;-2esaṃ,-2esānaṃ,esaṃ,esānaṃ", "-2asmā,asmā,amhā;-2ehi,-2ebhi,ehi,ebhi", "-2assa,assa;-2esaṃ,-2esānaṃ,esaṃ,esānaṃ", "-2asmiṃ,asmiṃ,amhi;-2esu,esu", ";"];
paradn_pron["ima;ā,f"] = ["-2ayaṃ;ā,āyo", "aṃ;ā,āyo", "āya;āhi,ābhi", "-2assāya,issāya,-2assā,issā,āya;āsaṃ,āsānaṃ", "āya;āhi,ābhi", "-2assāya,issāya,-2assā,issā,āya;āsaṃ,āsānaṃ", "-2assaṃ,issaṃ,issā,āyaṃ;āsu", ";"];
paradn_pron["ima;a,n"] = ["-1daṃ,aṃ;āni", "-1daṃ,aṃ;āni", "-2anena,inā;-2ehi,-2ebhi,ehi,ebhi", "-2assa,assa;-2esaṃ,-2esānaṃ,esaṃ,esānaṃ", "-2asmā,asmā,amhā;-2ehi,-2ebhi,ehi,ebhi", "-2assa,assa;-2esaṃ,-2esānaṃ,esaṃ,esānaṃ", "-2asmiṃ,asmiṃ,amhi;-2esu,esu", ";"];
paradn_pron["amu;u,m"] = ["-1su;ū", "uṃ;ū", "unā;ūhi,ūbhi,uhi,ubhi", "ussa,-1dussa;ūsaṃ,ūsānaṃ,usaṃ,usānaṃ", "umhā,usmā;ūhi,ūbhi,uhi,ubhi", "ussa,-1dussa;ūsaṃ,ūsānaṃ,usaṃ,usānaṃ", "umhi,usmiṃ;ūsu,usu", ";"];
paradn_pron["amu;u,f"] = ["-1su;ū,uyo", "uṃ;ū,uyo", "uyā;ūhi,ūbhi", "ussā,uyā;ūsaṃ,ūsānaṃ", "uyā;ūhi,ūbhi", "ussā,uyā;ūsaṃ,ūsānaṃ", "ussaṃ,uyaṃ,uyā;ūsu", ";"];
paradn_pron["amu;u,n"] = ["-1duṃ;ū,ūni", "-1duṃ;ū,ūni", "unā;ūhi,ūbhi,uhi,ubhi", "ussa,-1dussa;ūsaṃ,ūsānaṃ,usaṃ,usānaṃ", "umhā,usmā;ūhi,ūbhi,uhi,ubhi", "ussa,-1dussa;ūsaṃ,ūsānaṃ,usaṃ,usānaṃ", "umhi,usmiṃ;ūsu,usu", ";"];
paradn_pron["kiṃ;a,m"] = ["o;e", "aṃ;e", "ena;ehi,ebhi", "assa,issa;esaṃ,esānaṃ", "amhā,asmā;ehi,ebhi", "assa,issa;esaṃ,esānaṃ", "amhi,imhi,asmiṃ,ismiṃ;esu", ";"];
paradn_pron["kiṃ;ā,f"] = ["ā;ā,āyo", "aṃ;ā,āyo", "āya;āhi,ābhi", "assā,āya;āsaṃ,āsānaṃ", "āya;āhi,ābhi", "assā,āya;āsaṃ,āsānaṃ", "assaṃ,āyaṃ;āsu", ";"];
paradn_pron["kiṃ;a,n"] = ["iṃ;āni", "iṃ;āni", "ena;ehi,ebhi", "assa,issa;esaṃ,esānaṃ", "amhā,asmā;ehi,ebhi", "assa,issa;esaṃ,esānaṃ", "amhi,imhi,asmiṃ,ismiṃ;esu", ";"];
paradn_irrn["mana;a,m"] = ["o;ā", "aṃ;e", "ena,asā;ehi,ebhi", "assa,aso;ānaṃ", "asmā,amhā,ā;ehi,ebhi", "assa,aso;ānaṃ", "asmiṃ,amhi,asi,e;esu", "a,ā;ā"];
paradn_irrn["rāja;a,m"] = ["ā;āno", "aṃ,ānaṃ;āno", "ena,-2aññā;ūhi,ūbhi,ehi,ebhi", "ino,-2añño,-2aññassa;ānaṃ,ūnaṃ,-2aññaṃ", "-2aññā;ūhi,ūbhi,ehi,ebhi", "ino,-2añño,-2aññassa;ānaṃ,ūnaṃ,-2aññaṃ", "ini,-2aññe;ūsu,esu", "a,ā;āno"];
paradn_irrn["brahma;a,m"] = ["ā;āno", "aṃ,ānaṃ;āno", "unā;ehi,ebhi", "assa,uno;ānaṃ,ūnaṃ", "unā;ehi,ebhi", "assa,uno;ānaṃ,ūnaṃ", "ani;esu", "e;āno"];
paradn_irrn["sakha;a,m"] = ["ā;ā,āyo,āno,āro", "aṃ,ānaṃ,āraṃ;e,āyo,āno,āre,ino", "inā;ehi,ebhi,ārehi,ārebhi", "issa,ino;īnaṃ,ānaṃ,ārānaṃ", "inā,ārasmā,ismā,asmā,ā,ārā;ehi,ebhi,ārehi,ārebhi", "issa,ino;īnaṃ,ānaṃ,ārānaṃ", "e;esu,āresu", "a,ā,i,ī,e;ā,ān,āyo,āno,āro,ino"];
paradn_irrn["atta;a,m"] = ["ā;āno", "aṃ,ānaṃ;āno", "ena,anā;anehi,anebhi", "ano;ānaṃ", "anā;anehi,anebhi", "ano;ānaṃ", "ani;esu", "a,ā;āno"];
//
function combineEnding(stem, end) {
	if (end === undefined || end === "")
		return "";
	let result = stem;
	if (end.startsWith("-")) {
		let delNum = parseInt(end.slice(1,2));
		let realEnd = end.slice(2);
		result = result.slice(0, result.length-delNum) + realEnd;
	} else {
		result += end;
	}
	return result;
}
function getDeclensionAllStr(stem, endStr) {
	let endings = endStr.split(",");
	let result = combineEnding(stem, endings[0]);
	for (let i = 1; i < endings.length; i++) {
		result += ", " + combineEnding(stem, endings[i]);
	}
	return result;	
}
function getGenericDeclensionStr(stem, group, cas, num) {
	let endingsStr = paradn_generic[group][cas].split(";")[num];
	return getDeclensionAllStr(stem, endingsStr);
}
function getPronounDeclensionStr(stem, group, cas, num) {
	let endingsStr = paradn_pron[group][cas].split(";")[num];
	return getDeclensionAllStr(stem, endingsStr);
}
function getIrrnDeclensionStr(stem, group, cas, num) {
	let endingsStr = paradn_irrn[group][cas].split(";")[num];
	return getDeclensionAllStr(stem, endingsStr);
}
