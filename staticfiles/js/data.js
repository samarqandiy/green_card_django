const region = [
    {"id":"1","name_uz":"Qoraqalpog‘iston Respublikasi","name_oz":"?îđŕ?ŕëďî?čńňîí Đĺńďóáëčęŕńč","name_ru":"Đĺńďóáëčęŕ Ęŕđŕęŕëďŕęńňŕí"},
    {"id":"2","name_uz":"Andijon viloyati","name_oz":"Ŕíäčćîí âčëî˙ňč","name_ru":"Ŕíäčćŕíńęŕ˙ îáëŕńňü"},
    {"id":"3","name_uz":"Buxoro viloyati","name_oz":"Áóőîđî âčëî˙ňč","name_ru":"Áóőŕđńęŕ˙ îáëŕńňü"},
    {"id":"4","name_uz":"Jizzax viloyati","name_oz":"Ćčççŕő âčëî˙ňč","name_ru":"Äćčçŕęńęŕ˙ îáëŕńňü"},
    {"id":"5","name_uz":"Qashqadaryo viloyati","name_oz":"?ŕř?ŕäŕđ¸ âčëî˙ňč","name_ru":"Ęŕřęŕäŕđüčíńęŕ˙ îáëŕńňü"},
    {"id":"6","name_uz":"Navoiy viloyati","name_oz":"Íŕâîčé âčëî˙ňč","name_ru":"Íŕâîčéńęŕ˙ îáëŕńňü"},
    {"id":"7","name_uz":"Namangan viloyati","name_oz":"Íŕěŕíăŕí âčëî˙ňč","name_ru":"Íŕěŕíăŕíńęŕ˙ îáëŕńňü"},
    {"id":"8","name_uz":"Samarqand viloyati","name_oz":"Ńŕěŕđ?ŕíä âčëî˙ňč","name_ru":"Ńŕěŕđęŕíäńęŕ˙ îáëŕńňü"},
    {"id":"9","name_uz":"Surxandaryo viloyati","name_oz":"Ńóđőŕíäŕđ¸ âčëî˙ňč","name_ru":"Ńóđőŕíäŕđüčíńęŕ˙ îáëŕńňü"},
    {"id":"10","name_uz":"Sirdaryo viloyati","name_oz":"Ńčđäŕđ¸ âčëî˙ňč","name_ru":"Ńűđäŕđüčíńęŕ˙ îáëŕńňü"},
    {"id":"11","name_uz":"Toshkent viloyati","name_oz":"Ňîřęĺíň âčëî˙ňč","name_ru":"Ňŕřęĺíňńęŕ˙ îáëŕńňü"},
    {"id":"12","name_uz":"Farg‘ona viloyati","name_oz":"Ôŕđ?îíŕ âčëî˙ňč","name_ru":"Ôĺđăŕíńęŕ˙ îáëŕńňü"},
    {"id":"13","name_uz":"Xorazm viloyati","name_oz":"Őîđŕçě âčëî˙ňč","name_ru":"Őîđĺçěńęŕ˙ îáëŕńňü"},
    {"id":"14","name_uz":"Toshkent shahri","name_oz":"Ňîřęĺíň řŕ?đč","name_ru":"Ăîđîä Ňŕřęĺíň"}]

const district = [
    {"id":"15","region_id":"1","name_uz":"Amudaryo tumani","name_oz":"Àìóäàð¸ òóìàíè","name_ru":"Àìóäàðüèíñêèé ðàéîí"},
    {"id":"16","region_id":"1","name_uz":"Beruniy tumani","name_oz":"Áåðóíèé òóìàíè","name_ru":"Áåðóíèéñêèé ðàéîí"},
    {"id":"17","region_id":"1","name_uz":"Kegayli tumani","name_oz":"Êåãàéëè òóìàíè","name_ru":"Êåãåéëèéñêèé ðàéîí"},
    {"id":"18","region_id":"1","name_uz":"Qonliko‘l tumani","name_oz":"?îíëèê¢ë òóìàíè","name_ru":"Êàíëûêóëüñêèé ðàéîí"},
    {"id":"19","region_id":"1","name_uz":"Qorao‘zak tumani","name_oz":"?îðà¢çàê òóìàíè","name_ru":"Êàðàóçÿêñêèé ðàéîí"},
    {"id":"20","region_id":"1","name_uz":"Qo‘ng‘irot tumani","name_oz":"?¢í?èðîò òóìàíè","name_ru":"Êóíãðàäñêèé ðàéîí"},
    {"id":"21","region_id":"1","name_uz":"Mo‘ynoq tumani","name_oz":"Ì¢éíî? òóìàíè","name_ru":"Ìóéíàêñêèé ðàéîí"},
    {"id":"22","region_id":"1","name_uz":"Nukus tumani","name_oz":"Íóêóñ òóìàíè","name_ru":"Íóêóññêèé ðàéîí"},
    {"id":"23","region_id":"1","name_uz":"Nukus shahri","name_oz":"Íóêóñ øà?ðè","name_ru":"ãîðîä Íóêóñ"},
    {"id":"24","region_id":"1","name_uz":"Taxtako‘pir tumani","name_oz":"Òàõòàê¢ïèð òóìàíè","name_ru":"Òàõòàêóïûðñêèé ðàéîí"},
    {"id":"25","region_id":"1","name_uz":"To‘rtko‘l tumani","name_oz":"Ò¢ðòê¢ë òóìàíè","name_ru":"Òóðòêóëüñêèé ðàéîí"},
    {"id":"26","region_id":"1","name_uz":"Xo‘jayli tumani","name_oz":"Õ¢æàéëè òóìàíè","name_ru":"Õîäæåéëèéñêèé ðàéîí"},
    {"id":"27","region_id":"1","name_uz":"Chimboy tumani","name_oz":"×èìáîé òóìàíè","name_ru":"×èìáàéñêèé ðàéîí"},
    {"id":"28","region_id":"1","name_uz":"Shumanay tumani","name_oz":"Øóìàíàé òóìàíè","name_ru":"Øóìàíàéñêèé ðàéîí"},
    {"id":"29","region_id":"1","name_uz":"Ellikqal‘a tumani","name_oz":"Ýëëèê?àëúà òóìàíè","name_ru":"Ýëëèêêàëèíñêèé ðàéîí"},
    {"id":"30","region_id":"2","name_uz":"Andijon shahri","name_oz":"Àíäèæîí øà?ðè","name_ru":"ãîðîä Àíäèæàí"},
    {"id":"31","region_id":"2","name_uz":"Andijon tumani","name_oz":"Àíäèæîí òóìàíè","name_ru":"Àíäèæàíñêèé ðàéîí"},
    {"id":"32","region_id":"2","name_uz":"Asaka tumani","name_oz":"Àñàêà òóìàíè","name_ru":"Àñàêèíñêèé ðàéîí"},
    {"id":"33","region_id":"2","name_uz":"Baliqchi tumani","name_oz":"Áàëè?÷è òóìàíè","name_ru":"Áàëûê÷èíñêèé ðàéîí"},
    {"id":"34","region_id":"2","name_uz":"Buloqboshi tumani","name_oz":"Áóëî?áîøè òóìàíè","name_ru":"Áóëàêáàøèíñêèé ðàéîí"},
    {"id":"35","region_id":"2","name_uz":"Bo‘z tumani","name_oz":"Á¢ç òóìàíè","name_ru":"Áîçñêèé ðàéîí"},
    {"id":"36","region_id":"2","name_uz":"Jalaquduq tumani","name_oz":"Æàëà?óäó? òóìàíè","name_ru":"Äæàëàêóäóêñêèé ðàéîí"},
    {"id":"37","region_id":"2","name_uz":"Izbosgan tumani","name_oz":"Èçáîñãàí òóìàíè","name_ru":"Èçáàñêàíñêèé ðàéîí"},
    {"id":"38","region_id":"2","name_uz":"Qorasuv shahri","name_oz":"?îðàñóâ øà?ðè","name_ru":"ãîðîä Êàðàñóâ"},
    {"id":"39","region_id":"2","name_uz":"Qo‘rg‘ontepa tumani","name_oz":"?¢ð?îíòåïà òóìàíè","name_ru":"Êóðãàíòåïèíñêèé ðàéîí"},
    {"id":"40","region_id":"2","name_uz":"Marhamat tumani","name_oz":"Ìàð?àìàò òóìàíè","name_ru":"Ìàðõàìàòñêèé ðàéîí"},
    {"id":"41","region_id":"2","name_uz":"Oltinko‘l tumani","name_oz":"Îëòèíê¢ë òóìàíè","name_ru":"Àëòûíêóëüñêèé ðàéîí"},
    {"id":"42","region_id":"2","name_uz":"Paxtaobod tumani","name_oz":"Ïàõòàîáîä òóìàíè","name_ru":"Ïàõòààáàäñêèé ðàéîí"},
    {"id":"43","region_id":"2","name_uz":"Ulug‘nor tumani","name_oz":"Óëó?íîð òóìàíè","name_ru":"Óëóãíîðñêèé ðàéîí"},
    {"id":"44","region_id":"2","name_uz":"Xonabod tumani","name_oz":"Õîíàáîä òóìàíè","name_ru":"ãîðîä Õàíàáàä"},
    {"id":"45","region_id":"2","name_uz":"Xo‘jaobod tumani","name_oz":"Õ¢æàîáîä òóìàíè","name_ru":"Õîäæààáàäñêèé ðàéîí"},
    {"id":"46","region_id":"2","name_uz":"Shahrixon tumani","name_oz":"Øà?ðèõîí òóìàíè","name_ru":"Øàõðèõàíñêèé ðàéîí"},
    {"id":"47","region_id":"3","name_uz":"Buxoro shahri","name_oz":"Áóõîðî øà?ðè","name_ru":"ãîðîä Áóõàðà"},
    {"id":"48","region_id":"3","name_uz":"Buxoro tumani","name_oz":"Áóõîðî òóìàíè","name_ru":"Áóõàðñêèé ðàéîí"},
    {"id":"49","region_id":"3","name_uz":"Vobkent tumani","name_oz":"Âîáêåíò òóìàíè","name_ru":"Âàáêåíòñêèé ðàéîí"},
    {"id":"50","region_id":"3","name_uz":"G‘ijduvon tumani","name_oz":"?èæäóâîí òóìàíè","name_ru":"Ãèæäóâàíñêèé ðàéîí"},
    {"id":"51","region_id":"3","name_uz":"Jondor tumani","name_oz":"Æîíäîð òóìàíè","name_ru":"Æîíäîðñêèé ðàéîí"},
    {"id":"52","region_id":"3","name_uz":"Kogon tumani","name_oz":"Êîãîí òóìàíè","name_ru":"Êàãàíñêèé ðàéîí"},
    {"id":"53","region_id":"3","name_uz":"Kogon shahri","name_oz":"Êîãîí øà?ðè","name_ru":"ãîðîä Êàãàí"},
    {"id":"54","region_id":"3","name_uz":"Qorako‘l tumani","name_oz":"?îðàê¢ë òóìàíè","name_ru":"Êàðàêóëüñêèé ðàéîí"},
    {"id":"55","region_id":"3","name_uz":"Qorovulbozor tumani","name_oz":"?îðîâóëáîçîð òóìàíè","name_ru":"Êàðàóëáàçàðñêèé ðàéîí"},
    {"id":"56","region_id":"3","name_uz":"Olot tumani","name_oz":"Îëîò òóìàíè","name_ru":"Àëàòñêèé ðàéîí"},
    {"id":"57","region_id":"3","name_uz":"Peshku tumani","name_oz":"Ïåøêó òóìàíè","name_ru":"Ïåøêóíñêèé ðàéîí"},
    {"id":"58","region_id":"3","name_uz":"Romitan tumani","name_oz":"Ðîìèòàí òóìàíè","name_ru":"Ðîìèòàíñêèé ðàéîí"},
    {"id":"59","region_id":"3","name_uz":"Shofirkon tumani","name_oz":"Øîôèðêîí òóìàíè","name_ru":"Øàôèðêàíñêèé ðàéîí"},
    {"id":"60","region_id":"4","name_uz":"Arnasoy tumani","name_oz":"Àðíàñîé òóìàíè","name_ru":"Àðíàñàéñêèé ðàéîí"},
    {"id":"61","region_id":"4","name_uz":"Baxmal tumani","name_oz":"Áàõìàë òóìàíè","name_ru":"Áàõìàëüñêèé ðàéîí"},
    {"id":"62","region_id":"4","name_uz":"G‘allaorol tumani","name_oz":"?àëëàîðîë òóìàíè","name_ru":"Ãàëëÿàðàëüñêèé ðàéîí"},
    {"id":"63","region_id":"4","name_uz":"Do‘stlik tumani","name_oz":"Ä¢ñòëèê òóìàíè","name_ru":"Äóñòëèêñêèé ðàéîí"},
    {"id":"64","region_id":"4","name_uz":"Sh.Rashidov tumani","name_oz":"Ø.Ðàøèäîâ òóìàíè","name_ru":"Øàðàô-Ðàøèäîâñêèé ðàéîí"},
    {"id":"65","region_id":"4","name_uz":"Jizzax shahri","name_oz":"Æèççàõ øà?ðè","name_ru":"ãîðîä Äæèçàê"},
    {"id":"66","region_id":"4","name_uz":"Zarbdor tumani","name_oz":"Çàðáäîð òóìàíè","name_ru":"Çàðáäàðñêèé ðàéîí"},
    {"id":"67","region_id":"4","name_uz":"Zafarobod tumani","name_oz":"Çàôàðîáîä òóìàíè","name_ru":"Çàôàðàáàäñêèé ðàéîí"},
    {"id":"68","region_id":"4","name_uz":"Zomin tumani","name_oz":"Çîìèí òóìàíè","name_ru":"Çààìèíñêèé ðàéîí"},
    {"id":"69","region_id":"4","name_uz":"Mirzacho‘l tumani","name_oz":"Ìèðçà÷¢ë òóìàíè","name_ru":"Ìèðçà÷óëüñêèé ðàéîí"},
    {"id":"70","region_id":"4","name_uz":"Paxtakor tumani","name_oz":"Ïàõòàêîð òóìàíè","name_ru":"Ïàõòàêîðñêèé ðàéîí"},
    {"id":"71","region_id":"4","name_uz":"Forish tumani","name_oz":"Ôîðèø òóìàíè","name_ru":"Ôàðèøñêèé ðàéîí"},
    {"id":"72","region_id":"4","name_uz":"Yangiobod tumani","name_oz":"ßíãèîáîä òóìàíè","name_ru":"ßíãèàáàäñêèé ðàéîí"},
    {"id":"73","region_id":"5","name_uz":"G‘uzor tumani","name_oz":"?óçîð òóìàíè","name_ru":"Ãóçàðñêèé ðàéîí"},
    {"id":"74","region_id":"5","name_uz":"Dehqonobod tumani","name_oz":"Äå??îíîáîä òóìàíè","name_ru":"Äåõêàíàáàäñêèé ðàéîí"},
    {"id":"75","region_id":"5","name_uz":"Qamashi tumani","name_oz":"?àìàøè òóìàíè","name_ru":"Êàìàøèíñêèé ðàéîí"},
    {"id":"76","region_id":"5","name_uz":"Qarshi tumani","name_oz":"?àðøè òóìàíè","name_ru":"Êàðøèíñêèé ðàéîí"},
    {"id":"77","region_id":"5","name_uz":"Qarshi shahri","name_oz":"?àðøè øà?ðè","name_ru":"ãîðîä Êàðøè"},
    {"id":"78","region_id":"5","name_uz":"Kasbi tumani","name_oz":"Êàñáè òóìàíè","name_ru":"Êàñáèéñêèé ðàéîí"},
    {"id":"79","region_id":"5","name_uz":"Kitob tumani","name_oz":"Êèòîá òóìàíè","name_ru":"Êèòàáñêèé ðàéîí"},
    {"id":"80","region_id":"5","name_uz":"Koson tumani","name_oz":"Êîñîí òóìàíè","name_ru":"Êàñàíñêèé ðàéîí"},
    {"id":"81","region_id":"5","name_uz":"Mirishkor tumani","name_oz":"Ìèðèøêîð òóìàíè","name_ru":"Ìèðèøêîðñêèé ðàéîí"},
    {"id":"82","region_id":"5","name_uz":"Muborak tumani","name_oz":"Ìóáîðàê òóìàíè","name_ru":"Ìóáàðåêñêèé ðàéîí"},
    {"id":"83","region_id":"5","name_uz":"Nishon tumani","name_oz":"Íèøîí òóìàíè","name_ru":"Íèøàíñêèé ðàéîí"},
    {"id":"84","region_id":"5","name_uz":"Chiroqchi tumani","name_oz":"×èðî?÷è òóìàíè","name_ru":"×èðàê÷èíñêèé ðàéîí"},
    {"id":"85","region_id":"5","name_uz":"Shahrisabz tumani","name_oz":"Øà?ðèñàáç òóìàíè","name_ru":"Øàõðèñàáçñêèé ðàéîí"},
    {"id":"86","region_id":"5","name_uz":"Yakkabog‘ tumani","name_oz":"ßêêàáî? òóìàíè","name_ru":"ßêêàáàãñêèé ðàéîí"},
    {"id":"87","region_id":"6","name_uz":"Zarafshon shahri","name_oz":"Çàðàôøîí øà?ðè","name_ru":"ãîðîä Çàðàôøàí"},
    {"id":"88","region_id":"6","name_uz":"Karmana tumani","name_oz":"Êàðìàíà òóìàíè","name_ru":"Êàðìàíèíñêèé ðàéîí"},
    {"id":"89","region_id":"6","name_uz":"Qiziltepa tumani","name_oz":"?èçèëòåïà òóìàíè","name_ru":"Êûçûëòåïèíñêèé ðàéîí"},
    {"id":"90","region_id":"6","name_uz":"Konimex tumani","name_oz":"Êîíèìåõ òóìàíè","name_ru":"Êàíèìåõñêèé ðàéîí"},
    {"id":"91","region_id":"6","name_uz":"Navbahor tumani","name_oz":"Íàâáà?îð òóìàíè","name_ru":"Íàâáàõîðñêèé ðàéîí"},
    {"id":"92","region_id":"6","name_uz":"Navoiy shahri","name_oz":"Íàâîèé øà?ðè","name_ru":"ãîðîä Íàâîè"},
    {"id":"93","region_id":"6","name_uz":"Nurota tumani","name_oz":"Íóðîòà òóìàíè","name_ru":"Íóðàòèíñêèé ðàéîí"},
    {"id":"94","region_id":"6","name_uz":"Tomdi tumani","name_oz":"Òîìäè òóìàíè","name_ru":"Òàìäûíñêèé ðàéîí"},
    {"id":"95","region_id":"6","name_uz":"Uchquduq tumani","name_oz":"Ó÷?óäó? òóìàíè","name_ru":"Ó÷êóäóêñêèé ðàéîí"},
    {"id":"96","region_id":"6","name_uz":"Xatirchi tumani","name_oz":"Õàòèð÷è òóìàíè","name_ru":"Õàòûð÷èíñêèé ðàéîí"},
    {"id":"97","region_id":"7","name_uz":"Kosonsoy tumani","name_oz":"Êîñîíñîé òóìàíè","name_ru":"Êàñàíñàéñêèé ðàéîí"},
    {"id":"98","region_id":"7","name_uz":"Mingbuloq tumani","name_oz":"Ìèíãáóëî? òóìàíè","name_ru":"Ìèíãáóëàêñêèé ðàéîí"},
    {"id":"99","region_id":"7","name_uz":"Namangan tumani","name_oz":"Íàìàíãàí òóìàíè","name_ru":"Íàìàíãàíñêèé ðàéîí"},
    {"id":"100","region_id":"7","name_uz":"Namangan shahri","name_oz":"Íàìàíãàí øà?ðè","name_ru":"ãîðîä Íàìàíãàí"},
    {"id":"101","region_id":"7","name_uz":"Norin tumani","name_oz":"Íîðèí òóìàíè","name_ru":"Íàðûíñêèé ðàéîí"},
    {"id":"102","region_id":"7","name_uz":"Pop tumani","name_oz":"Ïîï òóìàíè","name_ru":"Ïàïñêèé ðàéîí"},
    {"id":"103","region_id":"7","name_uz":"To‘raqo‘rg‘on tumani","name_oz":"Ò¢ðà?¢ð?îí òóìàíè","name_ru":"Òóðàêóðãàíñêèé ðàéîí"},
    {"id":"104","region_id":"7","name_uz":"Uychi tumani","name_oz":"Óé÷è òóìàíè","name_ru":"Óé÷èíñêèé ðàéîí"},
    {"id":"105","region_id":"7","name_uz":"Uchqo‘rg‘on tumani","name_oz":"Ó÷?¢ð?îí òóìàíè","name_ru":"Ó÷êóðãàíñêèé ðàéîí"},
    {"id":"106","region_id":"7","name_uz":"Chortoq tumani","name_oz":"×îðòî? òóìàíè","name_ru":"×àðòàêñêèé ðàéîí"},
    {"id":"107","region_id":"7","name_uz":"Chust tumani","name_oz":"×óñò òóìàíè","name_ru":"×óñòñêèé ðàéîí"},
    {"id":"108","region_id":"7","name_uz":"Yangiqo‘rg‘on tumani","name_oz":"ßíãè?¢ð?îí òóìàíè","name_ru":"ßíãèêóðãàíñêèé ðàéîí"},
    {"id":"109","region_id":"8","name_uz":"Bulung‘ur tumani","name_oz":"Áóëóí?óð òóìàíè","name_ru":"Áóëóíãóðñêèé ðàéîí"},
    {"id":"110","region_id":"8","name_uz":"Jomboy tumani","name_oz":"Æîìáîé òóìàíè","name_ru":"Äæàìáàéñêèé ðàéîí"},
    {"id":"111","region_id":"8","name_uz":"Ishtixon tumani","name_oz":"Èøòèõîí òóìàíè","name_ru":"Èøòûõàíñêèé ðàéîí"},
    {"id":"112","region_id":"8","name_uz":"Kattaqo‘rg‘on tumani","name_oz":"Êàòòà?¢ð?îí òóìàíè","name_ru":"Êàòòàêóðãàíñêèé ðàéîí"},
    {"id":"113","region_id":"8","name_uz":"Kattaqo‘rg‘on shahri","name_oz":"Êàòòà?¢ð?îí øà?ðè","name_ru":"ãîðîä Êàòòàêóðãàí"},
    {"id":"114","region_id":"8","name_uz":"Qo‘shrabot tumani","name_oz":"?¢øðàáîò òóìàíè","name_ru":"Êîøðàáàäñêèé ðàéîí"},
    {"id":"115","region_id":"8","name_uz":"Narpay tumani","name_oz":"Íàðïàé òóìàíè","name_ru":"Íàðïàéñêèé ðàéîí"},
    {"id":"116","region_id":"8","name_uz":"Nurabod tumani","name_oz":"Íóðàáîä òóìàíè","name_ru":"Íóðàáàäñêèé ðàéîí"},
    {"id":"117","region_id":"8","name_uz":"Oqdaryo tumani","name_oz":"Î?äàð¸ òóìàíè","name_ru":"Àêäàðüèíñêèé ðàéîí"},
    {"id":"118","region_id":"8","name_uz":"Payariq tumani","name_oz":"Ïàÿðè? òóìàíè","name_ru":"Ïàéàðûêñêèé ðàéîí"},
    {"id":"119","region_id":"8","name_uz":"Pastarg‘om tumani","name_oz":"Ïàñòàð?îì òóìàíè","name_ru":"Ïàñòäàðãîìñêèé ðàéîí"},
    {"id":"120","region_id":"8","name_uz":"Paxtachi tumani","name_oz":"Ïàõòà÷è òóìàíè","name_ru":"Ïàõòà÷èéñêèé ðàéîí"},
    {"id":"121","region_id":"8","name_uz":"Samarqand tumani","name_oz":"Ñàìàð?àíä òóìàíè","name_ru":"Ñàìàðêàíäñêèé ðàéîí"},
    {"id":"122","region_id":"8","name_uz":"Samarqand shahri","name_oz":"Ñàìàð?àíä øà?ðè","name_ru":"ãîðîä Ñàìàðêàíä"},
    {"id":"123","region_id":"8","name_uz":"Toyloq tumani","name_oz":"Òîéëî? òóìàíè","name_ru":"Òàéëàêñêèé ðàéîí"},
    {"id":"124","region_id":"8","name_uz":"Urgut tumani","name_oz":"Óðãóò òóìàíè","name_ru":"Óðãóòñêèé ðàéîí"},
    {"id":"125","region_id":"9","name_uz":"Angor tumani","name_oz":"Àíãîð òóìàíè","name_ru":"Àíãîðñêèé ðàéîí"},
    {"id":"126","region_id":"9","name_uz":"Boysun tumani","name_oz":"Áîéñóí òóìàíè","name_ru":"Áàéñóíñêèé ðàéîí"},
    {"id":"127","region_id":"9","name_uz":"Denov tumani","name_oz":"Äåíîâ òóìàíè","name_ru":"Äåíàóñêèé ðàéîí"},
    {"id":"128","region_id":"9","name_uz":"Jarqo‘rg‘on tumani","name_oz":"Æàð?¢ð?îí òóìàíè","name_ru":"Äæàðêóðãàíñêèé ðàéîí"},
    {"id":"129","region_id":"9","name_uz":"Qiziriq tumani","name_oz":"?èçèðè? òóìàíè","name_ru":"Êèçèðèêñêèé ðàéîí"},
    {"id":"130","region_id":"9","name_uz":"Qo‘mqo‘rg‘on tumani","name_oz":"?¢ì?¢ð?îí òóìàíè","name_ru":"Êóìêóðãàíñêèé ðàéîí"},
    {"id":"131","region_id":"9","name_uz":"Muzrabot tumani","name_oz":"Ìóçðàáîò òóìàíè","name_ru":"Ìóçðàáàäñêèé ðàéîí"},
    {"id":"132","region_id":"9","name_uz":"Oltinsoy tumani","name_oz":"Îëòèíñîé òóìàíè","name_ru":"Àëòûíñàéñêèé ðàéîí"},
    {"id":"133","region_id":"9","name_uz":"Sariosiyo tumani","name_oz":"Ñàðèîñè¸ òóìàíè","name_ru":"Ñàðèàñèéñêèé ðàéîí"},
    {"id":"134","region_id":"9","name_uz":"Termiz tumani","name_oz":"Òåðìèç òóìàíè","name_ru":"Òåðìåçñêèé ðàéîí"},
    {"id":"135","region_id":"9","name_uz":"Termiz shahri","name_oz":"Òåðìèç øà?ðè","name_ru":"ãîðîä Òåðìåç"},
    {"id":"136","region_id":"9","name_uz":"Uzun tumani","name_oz":"Óçóí òóìàíè","name_ru":"Óçóíñêèé ðàéîí"},
    {"id":"137","region_id":"9","name_uz":"Sherobod tumani","name_oz":"Øåðîáîä òóìàíè","name_ru":"Øåðàáàäñêèé ðàéîí"},
    {"id":"138","region_id":"9","name_uz":"Sho‘rchi tumani","name_oz":"Ø¢ð÷è òóìàíè","name_ru":"Øóð÷èíñêèé ðàéîí"},
    {"id":"139","region_id":"10","name_uz":"Boyovut tumani","name_oz":"Áî¸âóò òóìàíè","name_ru":"Áàÿóòñêèé ðàéîí"},
    {"id":"140","region_id":"10","name_uz":"Guliston tumani","name_oz":"Ãóëèñòîí òóìàíè","name_ru":"Ãóëèñòàíñêèé ðàéîí"},
    {"id":"141","region_id":"10","name_uz":"Guliston shahri","name_oz":"Ãóëèñòîí øà?ðè","name_ru":"ãîðîä Ãóëèñòàí"},
    {"id":"142","region_id":"10","name_uz":"Mirzaobod tumani","name_oz":"Ìèðçàîáîä òóìàíè","name_ru":"Ìèðçààáàäñêèé ðàéîí"},
    {"id":"143","region_id":"10","name_uz":"Oqoltin tumani","name_oz":"Î?îëòèí òóìàíè","name_ru":"Àêàëòûíñêèé ðàéîí"},
    {"id":"144","region_id":"10","name_uz":"Sayxunobod tumani","name_oz":"Ñàéõóíîáîä òóìàíè","name_ru":"Ñàéõóíàáàäñêèé ðàéîí"},
    {"id":"145","region_id":"10","name_uz":"Sardoba tumani","name_oz":"Ñàðäîáà òóìàíè","name_ru":"Ñàðäîáñêèé ðàéîí"},
    {"id":"146","region_id":"10","name_uz":"Sirdaryo tumani","name_oz":"Ñèðäàð¸ òóìàíè","name_ru":"Ñûðäàðüèíñêèé ðàéîí"},
    {"id":"147","region_id":"10","name_uz":"Xavos tumani","name_oz":"Õàâîñ òóìàíè","name_ru":"Õàâàñòñêèé ðàéîí"},
    {"id":"148","region_id":"10","name_uz":"Shirin shahri","name_oz":"Øèðèí øà?ðè","name_ru":"ãîðîä Øèðèí"},
    {"id":"149","region_id":"10","name_uz":"Yangiyer shahri","name_oz":"ßíãèåð øà?ðè","name_ru":"ãîðîä ßíãèåð"},
    {"id":"150","region_id":"11","name_uz":"Angiren shahri","name_oz":"Àíãèðåí øà?ðè","name_ru":"ãîðîä Àíãðåí"},
    {"id":"151","region_id":"11","name_uz":"Bekabod tumani","name_oz":"Áåêàáîä òóìàíè","name_ru":"Áåêàáàäñêèé ðàéîí"},
    {"id":"152","region_id":"11","name_uz":"Bekabod shahri","name_oz":"Áåêàáîä øà?ðè","name_ru":"ãîðîä Áåêàáàä"},
    {"id":"153","region_id":"11","name_uz":"Bo‘ka tumani","name_oz":"Á¢êà òóìàíè","name_ru":"Áóêèíñêèé ðàéîí"},
    {"id":"154","region_id":"11","name_uz":"Bo‘stonliq tumani","name_oz":"Á¢ñòîíëè? òóìàíè","name_ru":"Áîñòàíëûêñêèé ðàéîí"},
    {"id":"155","region_id":"11","name_uz":"Zangiota tumani","name_oz":"Çàíãèîòà òóìàíè","name_ru":"Çàíãèàòèíñêèé ðàéîí"},
    {"id":"156","region_id":"11","name_uz":"Qibray tumani","name_oz":"?èáðàé òóìàíè","name_ru":"Êèáðàéñêèé ðàéîí"},
    {"id":"157","region_id":"11","name_uz":"Quyichirchiq tumani","name_oz":"?óéè÷èð÷è? òóìàíè","name_ru":"Êóéè÷èð÷èêñêèé ðàéîí"},
    {"id":"158","region_id":"11","name_uz":"Oqqo‘rg‘on tumani","name_oz":"Î??¢ð?îí òóìàíè","name_ru":"Àêêóðãàíñêèé ðàéîí"},
    {"id":"159","region_id":"11","name_uz":"Olmaliq shahri","name_oz":"Îëìàëè? øà?ðè","name_ru":"ãîðîä Àëìàëûê"},
    {"id":"160","region_id":"11","name_uz":"Ohangaron tumani","name_oz":"Î?àíãàðîí òóìàíè","name_ru":"Àõàíãàðàíñêèé ðàéîí"},
    {"id":"161","region_id":"11","name_uz":"Parkent tumani","name_oz":"Ïàðêåíò òóìàíè","name_ru":"Ïàðêåíòñêèé ðàéîí"},
    {"id":"162","region_id":"11","name_uz":"Piskent tumani","name_oz":"Ïèñêåíò òóìàíè","name_ru":"Ïñêåíòñêèé ðàéîí"},
    {"id":"163","region_id":"11","name_uz":"O‘rtachirchiq tumani","name_oz":"¡ðòà÷èð÷è? òóìàíè","name_ru":"Óðòà÷èð÷èêñêèé ðàéîí"},
    {"id":"164","region_id":"11","name_uz":"Chinoz tumani","name_oz":"×èíîç òóìàíè","name_ru":"×èíàçñêèé ðàéîí"},
    {"id":"165","region_id":"11","name_uz":"Chirchiq shahri","name_oz":"×èð÷è? øà?ðè","name_ru":"ãîðîä ×èð÷èê"},
    {"id":"166","region_id":"11","name_uz":"Yuqorichirchiq tumani","name_oz":"Þ?îðè÷èð÷è? òóìàíè","name_ru":"Þêîðè÷èð÷èêñêèé ðàéîí"},
    {"id":"167","region_id":"11","name_uz":"Yangiyo‘l tumani","name_oz":"ßíãèé¢ë òóìàíè","name_ru":"ßíãèþëüñêèé ðàéîí"},
    {"id":"168","region_id":"12","name_uz":"Beshariq tumani","name_oz":"Áåøàðè? òóìàíè","name_ru":"Áåøàðûêñêèé ðàéîí"},
    {"id":"169","region_id":"12","name_uz":"Bog‘dod tumani","name_oz":"Áî?äîä òóìàíè","name_ru":"Áàãäàäñêèé ðàéîí"},
    {"id":"170","region_id":"12","name_uz":"Buvayda tumani","name_oz":"Áóâàéäà òóìàíè","name_ru":"Áóâàéäèíñêèé ðàéîí"},
    {"id":"171","region_id":"12","name_uz":"Dang‘ara tumani","name_oz":"Äàí?àðà òóìàíè","name_ru":"Äàíãàðèíñêèé ðàéîí"},
    {"id":"172","region_id":"12","name_uz":"Yozyovon tumani","name_oz":"¨ç¸âîí òóìàíè","name_ru":"ßçúÿâàíñêèé ðàéîí"},
    {"id":"173","region_id":"12","name_uz":"Quva tumani","name_oz":"?óâà òóìàíè","name_ru":"Êóâèíñêèé ðàéîí"},
    {"id":"174","region_id":"12","name_uz":"Quvasoy shahri","name_oz":"?óâàñîé øà?ðè","name_ru":"ãîðîä Êóâàñàé"},
    {"id":"175","region_id":"12","name_uz":"Qo‘qon shahri","name_oz":"?¢?îí øà?ðè","name_ru":"ãîðîä Êîêàíä"},
    {"id":"176","region_id":"12","name_uz":"Qo‘shtepa tumani","name_oz":"?¢øòåïà òóìàíè","name_ru":"Êóøòåïèíñêèé ðàéîí"},
    {"id":"177","region_id":"12","name_uz":"Marg‘ilon shahri","name_oz":"Ìàð?èëîí øà?ðè","name_ru":"ãîðîä Ìàðãèëàí"},
    {"id":"178","region_id":"12","name_uz":"Oltiariq tumani","name_oz":"Îëòèàðè? òóìàíè","name_ru":"Àëòûàðûêñêèé ðàéîí"},
    {"id":"179","region_id":"12","name_uz":"Rishton tumani","name_oz":"Ðèøòîí òóìàíè","name_ru":"Ðèøòàíñêèé ðàéîí"},
    {"id":"180","region_id":"12","name_uz":"So‘x tumani","name_oz":"Ñ¢õ òóìàíè","name_ru":"Ñîõñêèé ðàéîí"},
    {"id":"181","region_id":"12","name_uz":"Toshloq tumani","name_oz":"Òîøëî? òóìàíè","name_ru":"Òàøëàêñêèé ðàéîí"},
    {"id":"182","region_id":"12","name_uz":"Uchko‘prik tumani","name_oz":"Ó÷ê¢ïðèê òóìàíè","name_ru":"Ó÷êóïðèêñêèé ðàéîí"},
    {"id":"183","region_id":"12","name_uz":"O‘zbekiston tumani","name_oz":"¡çáåêèñòîí òóìàíè","name_ru":"Óçáåêèñòàíñêèé ðàéîí"},
    {"id":"184","region_id":"12","name_uz":"Farg‘ona tumani","name_oz":"Ôàð?îíà òóìàíè","name_ru":"Ôåðãàíñêèé ðàéîí"},
    {"id":"185","region_id":"12","name_uz":"Farg‘ona shahri","name_oz":"Ôàð?îíà øà?ðè","name_ru":"ãîðîä Ôåðãàíà"},
    {"id":"186","region_id":"12","name_uz":"Furqat tumani","name_oz":"Ôóð?àò òóìàíè","name_ru":"Ôóðêàòñêèé ðàéîí"},
    {"id":"187","region_id":"13","name_uz":"Bog‘ot tumani","name_oz":"Áî?îò òóìàíè","name_ru":"Áàãàòñêèé ðàéîí"},
    {"id":"188","region_id":"13","name_uz":"Gurlan tumani","name_oz":"Ãóðëàí òóìàíè","name_ru":"Ãóðëåíñêèé ðàéîí"},
    {"id":"189","region_id":"13","name_uz":"Qo‘shko‘pir tumani","name_oz":"?¢øê¢ïèð òóìàíè","name_ru":"Êîøêóïûðñêèé ðàéîí"},
    {"id":"190","region_id":"13","name_uz":"Urganch tumani","name_oz":"Óðãàí÷ òóìàíè","name_ru":"Óðãåí÷ñêèé ðàéîí"},
    {"id":"191","region_id":"13","name_uz":"Urganch shahri","name_oz":"Óðãàí÷ øà?ðè","name_ru":"ãîðîä Óðãåí÷"},
    {"id":"192","region_id":"13","name_uz":"Xiva tumani","name_oz":"Õèâà òóìàíè","name_ru":"Õèâèíñêèé ðàéîí"},
    {"id":"193","region_id":"13","name_uz":"Xazarasp tumani","name_oz":"Õàçàðàñï òóìàíè","name_ru":"Õàçàðàñïñêèé ðàéîí"},
    {"id":"194","region_id":"13","name_uz":"Xonqa tumani","name_oz":"Õîí?à òóìàíè","name_ru":"Õàíêèíñêèé ðàéîí"},
    {"id":"195","region_id":"13","name_uz":"Shavot tumani","name_oz":"Øàâîò òóìàíè","name_ru":"Øàâàòñêèé ðàéîí"},
    {"id":"196","region_id":"13","name_uz":"Yangiariq tumani","name_oz":"ßíãèàðè? òóìàíè","name_ru":"ßíãèàðûêñêèé ðàéîí"},
    {"id":"197","region_id":"13","name_uz":"Yangibozor tumani","name_oz":"ßíãèáîçîð òóìàíè","name_ru":"ßíãèáàçàðñêèé ðàéîí"},
    {"id":"198","region_id":"14","name_uz":"Bektimer tumani","name_oz":"Áåêòèìåð òóìàíè","name_ru":"Áåêòåìèðñêèé ðàéîí"},
    {"id":"199","region_id":"14","name_uz":"Mirzo Ulug'bek tumani","name_oz":"Ìèðçî-Óëóãáåêñêèé ðàéîí","name_ru":"Ìèðçî-Óëóãáåêñêèé ðàéîí"},
    {"id":"200","region_id":"14","name_uz":"Mirobod tumani","name_oz":"Ìèðîáîä òóìàíè","name_ru":"Ìèðàáàäñêèé ðàéîí"},
    {"id":"201","region_id":"14","name_uz":"Olmazor tumani","name_oz":"Îëìàçîð òóìàíè","name_ru":"Àëìàçàðñêèé ðàéîí"},
    {"id":"202","region_id":"14","name_uz":"Sirg'ali tumani","name_oz":"Ñèðãàëè òóìàíè","name_ru":"Ñåðãåëèéñêèé ðàéîí"},
    {"id":"203","region_id":"14","name_uz":"Uchtepa tumani","name_oz":"Ó÷òåïà òóìàíè","name_ru":"Ó÷òåïèíñêèé ðàéîí"},
    {"id":"204","region_id":"14","name_uz":"Yashnobod tumani","name_oz":"ßøíîáîä òóìàíè","name_ru":"ßøíîáîäñêèé ðàéîí"},
    {"id":"205","region_id":"14","name_uz":"Chilonzor tumani","name_oz":"×èëîíçîð òóìàíè","name_ru":"×èëàíçàðñêèé ðàéîí"},
    {"id":"206","region_id":"14","name_uz":"Shayxontohur tumani","name_oz":"Øàéõîíòî?óð òóìàíè","name_ru":"Øàéõàíòàõóðñêèé ðàéîí"},
    {"id":"207","region_id":"14","name_uz":"Yunusobod tumani","name_oz":"Þíóñîáîä òóìàíè","name_ru":"Þíóñàáàäñêèé ðàéîí"},
    {"id":"208","region_id":"14","name_uz":"Yakkasaroy tumani","name_oz":"ßêêàñàðîé òóìàíè","name_ru":"ßêêàñàðàéñêèé ðàéîí"},
    {"id":"209","region_id":"1","name_uz":"Taxiatosh shahri","name_oz":"Òàõèàòîø øà?ðè","name_ru":"Òàõèàòàøñêèé ðàéîí"},
    {"id":"210","region_id":"2","name_uz":"Asaka shahri","name_oz":"Àñàêà øà?ðè","name_ru":"Àñàêèíñêèé ðàéîí"},
    {"id":"211","region_id":"9","name_uz":"Bandixon tumani","name_oz":"Áàíäèõîí òóìàíè","name_ru":"Áàíäèõàíñêèé ðàéîí"},
    {"id":"212","region_id":"11","name_uz":"Ohangaron shahri","name_oz":"Î?àíãàðîí øà?ðè","name_ru":"ãîðîä Àõàíãàðàíñêèé"},
    {"id":"213","region_id":"11","name_uz":"Yangiyo‘l shahri","name_oz":"ßíãèé¢ë øà?ðè","name_ru":"ãîðîä ßíãèþëü"},
    {"id":"215","region_id":"11","name_uz":"Toshkent tumani","name_oz":"Òîøêåíò òóìàíè","name_ru":"Òàøêåíòñêèé ðàéîí"},
    {"id":"216","region_id":"13","name_uz":"Xiva shahri","name_oz":"Õèâà øà?ðè","name_ru":"ãîðîä Õèâà"},
    {"id":"217","region_id":"13","name_uz":"Do'stlik shahri","name_oz":"Ä¢ñòëèê øà?ðè\r\nÄ¢ñòëèê øà?ðè","name_ru":"ãîðîä Ä¢ñòëèê\r\nÄ¢ñòëèê"},
    {"id":"218","region_id":"14","name_uz":"Yangihayot tumani","name_oz":"ßíãè?à¸ò òóìàíè","name_ru":"ßíãèõà¸òñêèé ðàéîí"},
    {"id":"219","region_id":"13","name_uz":"Tuproqqala tumani","name_oz":"Òóïðî??àëúà òóìàíè","name_ru":"Òèðîêêàëüñêèé ðàéîí"},
    {"id":"220","region_id":"7","name_uz":"Davlatobod tumani","name_oz":"Äàâëàòîáîä òóìàíè","name_ru":"Äàâëàòàáàäñêèé ðàéîí \r\n"},
    {"id":"221","region_id":"6","name_uz":"G‘ozg‘on shahri","name_oz":"?îç?îí øà?ðè","name_ru":"Ãîðîä Ãîçãàí"},
    {"id":"222","region_id":"1","name_uz":"Bo‘zatov tumani","name_oz":"Á¢çàòîâ òóìàíè","name_ru":"Áîçàòîâñêèé ðàéîí"},
    {"id":"224","region_id":"5","name_uz":"Shahrisabz shahri","name_oz":"Øà?ðèñàáç øà?ðè","name_ru":"Ãîðîä Øàõðèñàáç"},
    {"id":"225","region_id":"5","name_uz":"Ko‘kdala tumani","name_oz":"Ê¢êäàëà òóìàíè","name_ru":"Êóêäàëèíñêèé ðàéîí"}]



    let cities, districts, select_city, select_district, city_districts = []

select_city = document.getElementById("city")
select_district = document.getElementById("district")
// console.log(select_district)
cities = '<option value="">----------</option>'
districts = '<option value="">----------</option>'

// City selectiga Shaxarlarni yuborish
for (let i = 0; i < region.length; i++) {
    cities += `<option value="${region[i]['id']}">${region[i]['name_uz']}</option>`;
}
select_city.innerHTML = cities

// district selectiga tumanlarni yuborish
for (let i = 0; i < district.length; i++) {
    districts += `<option value="${district[i]['id']}">${district[i]['name_uz']}</option>`;
}
select_district.innerHTML = districts

// Shahar tanlanganda tumanlar listio o'zgarishi uchun func
function getCity(){
    // sharga tegishli tumanalarni aniqlash un code
    city_districts = []
    districts = '<option value="">----------</option>'
    // agar bo'sh maydon tanlansa hamma tumanlarni listga yuborish
    if (select_city.value == ''){
        city_districts = district
    } else{
        // shaxar tanlanganda shaxar_id si bir tumanlarni tuple ga yig'ish
        for (let i = 0; i < district.length; i++) {
            if (district[i]['region_id'] == select_city.value ){
                city_districts.push(district[i])
            }
        }
    }
    // yig'ilgan malumotlarni options qilib select elementiga yuborish
    for (let i = 0; i < city_districts.length; i++) {
        districts += `<option value="${city_districts[i]['id']}">${city_districts[i]['name_uz']}</option>`;
    }
    select_district.innerHTML = districts
    // console.log(city_districts)
}


// write functions here

// Tuman tanlanganda uning shaxarini to'griligini tekshirib to'g'irlash
function getDistrict(){
    // agar shaxar tanlanmagan bo'lsa barcha tumanalar 'tumanlar' select iga yuborilganda
    // o'sha tumanlar ichidan birortasi tanlansqa o'sha tuman shaxari avtomatik tarzda tanlanadi
    district_cities = []
    // tanlangan tuman qiymatini saqlab turish uchun
    let district_value = select_district.value
    let obj_district
    cities = '<option value="">----------</option>'
    // agar tuman tanlanmasa shaxarxam tanlanmagan xolatga o'tqazilsin
    if (select_district.value == '' && select_city.value == ''){
        select_city.value = ''
    } else{ // agar tuman tanlansa shacari aniqlanadi 
        // tanlangan tumanning region_id sini bilish uchun uning obj variantini 'district' ni ichidan topish
        for (let i = 0; i < district.length; i++) {
            if (select_district.value == district[i]['id']){
                obj_district = district[i]
            }
        }
        // topilgan obj ichidan region id ni olib select ga yuboramiz
        select_city.value = obj_district['region_id']
        // tuman joykashgan viloyat dagi boshqa tumanlarniham qayta yig'ib 'district' select ga uzatish 
        getCity()
        // getCity ning ichida innerHTML bor bo'lganligi uchun biz tanlagan qiymat o'rnatilmaydi
        // shuning uchun biz uni qayta joylashtiramiz
        select_district.value = district_value
    }
}


