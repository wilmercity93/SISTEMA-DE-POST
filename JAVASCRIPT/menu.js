$(function(){

	var objFirebase = new Firebase("https://sistemapost.firebaseio.com/");

	$('#enviar').click(clickEnvio);	
		

	$('#imgAvatar').attr('src', sessionStorage.getItem('profileImageURL'));	

function clickEnvio(){		
		var titulo = $('#intitulo').val();
		$('#intitulo').val('');
		var descripcion = $('#indescripcion').val();
		$('#indescripcion').val('');
		var tema = $('#inTema').val();
		$('#inTema').val('');
		var fecha = $('#inFecha').val();
		var reloj = $('#reloj').val();

		objFirebase.push(
			{  			
  				autor: "Wilmercity",  			
    			titulo: titulo,
    			descripcion: descripcion,
    			tema: tema,
    			fecha: fecha,
    			reloj: reloj
    			
  			}
  		);

	}

	function clickEliminar(evt) {
		console.log("click");
		var llave = $(evt.target).data('id');


	    objFirebase.child(llave).remove();

	    $("#"+llave).remove();
    }
    

	objFirebase.on("child_added", function(data){
		var registro = data.val();		

		var plantilla = getPlantilla(registro.autor,registro.titulo,registro.descripcion,registro.tema,registro.fecha,registro.reloj,data.key());		
		$('.cont-post-timeline').prepend(plantilla);
		$('#eliminar').click(clickEliminar);


	});

	(function(d, t, e, m){
    
    // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){
                
        RW.init({
            huid: "268656",
            uid: "8545d39319480f2de8f6d4839a3b33f8",
            source: "website",
            options: {
                "advanced": {
                    "layout": {
                        "lineHeight": "20px"
                    },
                    "font": {
                        "size": "18px",
                        "bold": true,
                        "italic": true,
                        "type": "'Comic Sans MS'"
                    }
                },
                "size": "large",
                "lng": "es",
                "style": "crystal_red",
                "isDummy": false
            } 
        });
        RW.render();
    };
        // Append Rating-Widget JavaScript library.
    var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
        l = d.location, ck = "Y" + t.getFullYear() + 
        "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
        f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
        a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
    if (d.getElementById(id)) return;              
    rw = d.createElement(e);
    rw.id = id; rw.async = true; rw.type = "text/javascript";
    rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
    s.parentNode.insertBefore(rw, s);
    }(document, new Date(), "script", "rating-widget.com/"));

	function getPlantilla(autor,titulo,descripcion,tema,fecha,reloj,key){
		var plantilla = '<div class=" col-m-4" id="'+key+'"> \
		<div class="aside"> \
		<article > \
			 	<div class="cont-mensaje-texto"> \
					<figure class="avatar""> \
					<img id="imgAvatar" src="../IMGS/NoAvatar.jpg" > \
					</figure> \
					<div id="cont-texto-ppal"> \
						<p> Titulo:  '+ titulo +'</p> \
						<p id="cont-txt">Descripcion:  '+ descripcion +'</p> \
					</div> \
				</div> \
				<div> \
					<div> \
					<label class="fecha">Tema: \
							'+tema+' \
						</label> \
						 <p id="favorito">Creado Por: '+autor+'</p> \
					</div> \
					<div class="cont-mensaje-fecha"> \
						<label class="fecha"> \
							'+fecha+' \
						</label> \
						<label class="fecha">'+reloj+'</label>\
					</div> \
				</div>		\
				<footer>\
<div class="rw-ui-container"></div>\
			     </footer> \
			     <br>\
			     <input id="eliminar"  type="submit" value = "Eliminar" data-id="'+ key + '" ></input>\
			</article>\
			</div>\
			</div>';

		return plantilla;
	}



});