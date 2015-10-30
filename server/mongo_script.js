	//Look Book

	db.lookbooks.insert(
	   [
	  {
	  "titre" : "Girly romantic",
	  "description" : "Choississez de remettre une de vos combi-shorts d'été avec des bottes longues et une grosse écharpe.",
	  "image" : "images\/LookBook\/chapeau_combishort.jpg",
	  "astuce" : "le chapeau façon capeline pour ajouter une touche de romantisme à votre look"
	 },
	 {
	   "titre" : "Classe en Jean",
	   "description" : "La chemise en jean, indémodable, à porter avec un slim, talons classiques noir et un beau manteau beige.",
	   "image" : "images\/LookBook\/chemise_jean.jpg",
	   "astuce" : "un petit foulard autour du cou et un Ipurse pour le côté classe"
	 },
	 {
	   "titre" : "Echarpe oversize",
	   "description" : "La grande nouveauté de cette hiver : l'écharpe oversize. La porter avec un jean slim bleue et une veste",
	   "image" : "images\/LookBook\/echarpe.jpg",
	   "astuce" : "choissisez une couleur vive et qui se marie bien avec votre veste"
	 },
	 {
	   "titre" : "Maxi Pull",
	   "description" : "Portez votre maxi pull avec un petit slim en cuir et une chemise en jean ovesrize.",
	   "image" : "images\/LookBook\/jeanMaxiPull.jpg",
	   "astuce" : "Retroussez la manche de votre chemise au dessus du pull pour un look masculin/féminin réussi."
	 },
	 {
	   "titre" : "Classe en mini",
	   "description" : "Même en hiver, vous pouvez toujours sortir vos mini-jupes, portées avec un collant opaque noir et un sweat",
	   "image" : "images\/LookBook\/mini_jupe.jpg",
	   "astuce" : "Portez un manteau plus long que votre jupe. Et de préférence, choississez la couleur pastel."
	 },
	 {
	   "titre" : "Motif carreau",
	   "description" : "Le carreau revient ce hiver, il se porte bien en gilet avec tout",
	   "image" : "images\/LookBook\/motif_carreau.jpg",
	   "astuce" : "Ca rajoute une touche classe si vous le portez avec des boots et des gants en cuir."
	   },
	   ]
	)

	//Articles
	db.articles.insert([{"reference" : "TS_291015_00","nom" : "T Shirt Imprimé","type" : "haut","prix" : 20000,"tags" : ["t shirt","t-shirt","haut","top","Imprimé"],"composition" : "92% coton, 8% élasthanne","tailles" : ["S", "M"], "couleurs" : ["rouge bordeaux", "gris", "aubergine"],"photos" : ["images\/Articles\/tshirt1.jpg","images\/Articles\/tshirt2.jpg","images\/Articles\/tshirt3.jpg"],"disponibilite" : 100},{"reference" : "JP_291015_00", "nom" : "Jupe patineuse","type" : "jupe","prix" : 40000,"tags" : ["jupe","mini-jupe","patineuse"],"composition" : "81% polyester, 19% élasthanne","tailles" : ["S", "M", "L"], "couleurs" : ["noir"],"photos" : ["images\/Articles\/jupe1.jpg", "images\/Articles\/jupe2.jpg", "images\/Articles\/jupe3.jpg"], "discernibility" : 50}]);

	