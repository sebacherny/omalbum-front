function onEditProfileClick() {
	if ($("#edit_profile_button").text() == "Guardar") {
		var payload = extract_data(document.getElementById("edit_profile_button").closest("form"));
		payload.gender = getGenderValueForPayload(payload.gender);
		clear_notifications();
		update_user_request(payload).then(x => {
			if (x.code) {
				sessionStorage.setItem("reloading", true);
				sessionStorage.setItem("notif", "notification urgent");
				sessionStorage.setItem("notif_text", "Error al intentar modificar");
				sessionStorage.setItem("notif_code", err.code);
				//notify("notification urgent", "Error al intentar modificar", err.code);
			} else {
				new_user_data = user();
				for (key in x) {
					new_user_data[key] = x[key];
				}
				localStorage.setItem('user', JSON.stringify(new_user_data));
				sessionStorage.setItem("reloading", true);
				sessionStorage.setItem("notif", "notification good");
				sessionStorage.setItem("notif_text", "Perfil guardado!");
				sessionStorage.setItem("notif_code", "");
				//notify("notification good", "Perfil guardado!", "");
			}
			location.reload();
		}).catch(err => {
			sessionStorage.setItem("reloading", true);
			sessionStorage.setItem("notif", "notification urgent");
			sessionStorage.setItem("notif_text", "No se pudieron guardar los cambios");
			sessionStorage.setItem("notif_code", err.code);
			location.reload();
			//notify("notification urgent", "No se pudieron guardar los cambios", err.code);
		});
	} else {
		$(".changeable").each(function(){
			var txt = $(this).text();
			$(this).text("");
			var field = $(this).prop("id").substr(0, $(this).prop("id").length-3);
			if (field == "country") {
				$(this).append($("<input name='country' list='country' >").val(txt));
				var datalist = $("<datalist id='country'>");
				for (country of all_countries) {
					datalist.append($("<option>").val(country));
				}
				$(this).append(datalist);
			} else if(field == "gender") {
				$(this).append($("<input id='gender_input' name='gender' list='gender' >").val(is_other_gender(txt) ? "otro" : txt));
				var datalist = $('<datalist id="gender" onchange="onGenderChange()">');
				datalist.append($("<option>").val("masculino"));
				datalist.append($("<option>").val("femenino"));
				datalist.append($("<option>").val("prefiero no responder"));
				datalist.append($("<option>").val("otro"));
				$(this).append(datalist);
				var other_gender_div = $("<div id='gender_other'>").css("display", is_other_gender(txt) ? "block" : "none");
				// other_gender_div.append($("<label style='float: left;'>").text("Género"));
				var other_gender_input = $("<input type='text' id='gender_other_input' style='float: left;'>");
				if (is_other_gender(txt) && txt != "otro"){
					other_gender_input.val(txt);
				}
				other_gender_div.append(other_gender_input);
				$(this).append(other_gender_div);
			} else {
				$(this).append($("<input name='" + field + "'>").val(txt));
			}
		});
		$("#edit_profile_button").text("Guardar");
	}
}

function is_other_gender(gender) {
	return gender != "masculino" && gender != "femenino" && gender != "prefiero no responder";
}