var calculerDate = function(dateDebut,dateFin){

    var date1 = new Date(dateDebut);
    var date2 = new Date(dateFin);
    var datej1=date1.getDate();
    var datej2= date2.getDate();
    var datem1=date1.getMonth();
    var datem2=date2.getMonth();
    var x = 0;
    if(datem1==(datem2)-1){
        if(datem1==2){
            x=((29-datej1)+datej2);//modifier car 28 jours ou 29 jours pour mois fevrier
        }else if(datem1%2==0){
            x=((30-datej1)+datej2);
        }else{
             x =((31-datej1)+datej2);
        }
    }else if(datem1==datem2){
         x = datej1+datej2;
    }
    if(x<=30&&x!=0){
        return true;
    }else{
        return falses

    }
};
var creerSondage = function(titre, id, dateDebut, dateFin, heureDebut, heureFin) {

	    var moisDebut =+dateDebut.slice(5,7);
	    var moisFin = +dateFin.slice(5,7);
	    var cond4=calculerDate(dateDebut,dateFin);
	    var cond5=+(heureDebut.slice(0,heureDebut.length-1))<+(heureFin.slice(0,heureFin.length-1)); //h debut<hFin

	    for(var i = 0;i<id.length;i++){
			var lettre=id.charAt(i);
			if((0<=lettre||lettre<=9)==true){//verifier condition 1 a 3
	            continue;
	        }else if(((lettre >= "a" && lettre <= "z") ||//verifie lettre
	                    (lettre >= "A" && lettre <= "Z"))==true){
	            continue;
	        }else if ((lettre=="-")==true){
	            continue;
	        }else{
	        return false;
	        }
	    }
	        if(cond4!=true||cond5!=true){//verifier condtion 4 et 5
	        return false;
	    }
	    var egst= {titre:titre,id:id,dateDebut:dateDebut,dateFin:dateFin,heureDebut:heureDebut,heureFin:heureFin};


	    return true;

};
//reference pour getTime(); https://www.w3schools.com/jsref/jsref_obj_date.asp
//hey Rui
