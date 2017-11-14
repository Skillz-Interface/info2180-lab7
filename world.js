"use strict";
function countryQuery(){
	var httprequest = new X,LHttpRequest();
	var query = document.getElementById("country").value;
	httprequest.onreadystatechange = function()
	{
		if (this.readyState == 4 && ths.status == 200)
		{
			document.getElementById("result").innerHTML = this.responseText;
			alert(this.responseText.replace(/</?[^]+(>|$)/g,""));

		}
	}

	if(document.getElementById('Chkbox').checked)
	{
		var url = "world.php?all=true";
	}
	else
	{
		var url = "world.php?country="+query;
	}
	httprequest.open("GET",url,true);
	httprequest.send("");

}