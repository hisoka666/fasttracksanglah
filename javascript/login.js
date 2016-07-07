$(document).ready(function(){
	var uname = "";
	var pwd = "";
	var username = "#erruname";
	var pass = "#errpwd";
	
	function isEmpty(p1,p2){
		if (p1 == ""){
			return $(p2).html("<div class=\"alert alert-danger\">Kolom ini tidak boleh kosong!</div>");
		} else {
			return $(p2).html("<div class=\"alert alert-success\">&#10004;</div>");
		}
	};
	
	
	$("#username").keyup(function(){		
		var vall = $(this).val();
		isEmpty(vall, username);
	}); 
	
	$("#pass").keyup(function(){
		var vall = $(this).val();
		isEmpty(vall, pass);
	});
});