$(function(){

	var objFirebase = new Firebase("https://sistemapost.firebaseio.com/");

	$('#btnTwitter').click({redSocial:"twitter"}, clickAutenticar);

	$('#btnFacebook').click({redSocial:"facebook"}, clickAutenticar);
	
	$('#btngithub').click({redSocial:"github"}, clickAutenticar);

	function clickAutenticar(event){

		var redSocial = event.data.redSocial;

		objFirebase.authWithOAuthPopup(redSocial, function(error, authData){

			if (error) {
				console.log("Login Failed", error);
			}else{

				if(redSocial === "twitter"){
					console.log("Exito!!!", authData);				
					sessionStorage.setItem('token', authData.token);
					sessionStorage.setItem('profileImageURL', authData.twitter.profileImageURL);
					sessionStorage.setItem('displayName', authData.twitter.displayName);
					sessionStorage.setItem('username', authData.twitter.username);
				}

				if(redSocial === "facebook"){
					console.log("Exito!!!", authData);				
					sessionStorage.setItem('token', authData.token);
					sessionStorage.setItem('profileImageURL', authData.facebook.profileImageURL);
					sessionStorage.setItem('displayName', authData.facebook.displayName);
					sessionStorage.setItem('username', authData.facebook.displayName);
				}

				if(redSocial === "github"){
					console.log("Exito!!!", authData);				
					sessionStorage.setItem('token', authData.token);
					sessionStorage.setItem('profileImageURL', authData.github.profileImageURL);
					sessionStorage.setItem('displayName', authData.github.displayName);
					sessionStorage.setItem('username', authData.github.displayName);
				}
				window.location.href = "PAGES/menu.html"
			}

		});
	}	
	
});