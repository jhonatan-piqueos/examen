function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var contraseña = document.getElementById("pass").value;	

			if(usuario == "jhonatan" && contraseña == "1234564879")
			{
				alert("Usuario y Contraseña validos");
			}
			else
			{
				alert("Verifique sus credenciales");
			}
		}