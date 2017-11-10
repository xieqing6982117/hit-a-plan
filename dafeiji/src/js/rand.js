onload = function(){

var ul = document.getElementById("list");

ajax({
	url: "http://60.205.181.47/myPHPCode4/getRank.php",
	data:{},
	success: function(data){
		console.log(data);
		
		var arr = JSON.parse(data);
		
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];
			
			var li = document.createElement("li");
			ul.appendChild(li);
			li.innerHTML = i+1 + ". [" + obj.name + "] : " + obj.score;
			}
		}
	})
	
}