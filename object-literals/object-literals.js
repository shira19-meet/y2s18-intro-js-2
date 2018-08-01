// Create your 'me' object literal here!
var me = {
	firstName: "shira" ,
	lastName: "maybruch" ,
	favoriteFood: ["meat" , "pizza"] ,
	age: 16 ,
	picture: "https://www.google.co.il/search?hl=iw&tbm=isch&source=hp&biw=1299&bih=647&ei=YoxhW96PBILMwALpvoiACA&q=flower&oq=flower&gs_l=img.3..0l10.1569.2769.0.3191.6.4.0.2.2.0.207.446.0j2j1.3.0....0...1ac.1.64.img..1.5.466....0._cl8cW4o3oQ#imgrc=ncZ2Y7vty9uakM:" ,
}
var a = JSON.stringify(me) 
document.write(a);