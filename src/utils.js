function scrollToTopOnPage() {
	//setTimeout(function() {
	  //  window.scrollTo(0,1);
	  //}, 0);
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	//$(window).scrollTop(0);
}

function date_string(date, time) {
    var offset = new Date().getTimezoneOffset();
    if(offset >= 0) tz = "-"
    else {
        tz = "+";
        offset = -offset;
    }
    tz += (offset/60).toString().padStart(2, '0') + ":" + (offset%60).toString().padStart(2, '0');
    return date + "T" + time + ":00" + tz;
}

function html_escape(text) {
    var text_node = document.createTextNode(text);
    return text_node.textContent;
}

function fill_with(class_name, action) {
    for(e of document.getElementsByClassName(class_name)) {
        e.innerHTML = action(e);
    }
}

function extract_data(form) {
    var data = {};
    for(elem of Array.from(form.getElementsByClassName("extract_value_for_data"))) {
        if(elem.name) {
            if(elem.type == "checkbox") {
                value = elem.checked;
            } else {
                value = elem.value;
            }
            data[elem.name] = value
        }
    }
    return data;
}

function get_full_path_from_url(url){
	return url.split("?")[0];
}

function get_page_name_from_url(url){
	ls = get_full_path_from_url(url).split("/");
	return ls[ls.length-1];
}	

function get_current_page_name(){
	return get_page_name_from_url(window.location.href);
}

function get_current_page_name_without_extension(){
	return get_current_page_name().split(".")[0];
}



function get_nice_date_to_show_without_time_missing(date) {
	var date_obj = new Date(date);
	var ret = get_day_string(date_obj) + " " + date_obj.getDate().toString() + " de " + get_month_string(date_obj);
	ret += ", a las " + getHourTime(date_obj);
	return ret;
}

function get_nice_date_to_show(date){
	var ret = get_nice_date_to_show_without_time_missing(date);
	date_obj = new Date(date);
	ret += " (" + get_date_diff_string_from_now(date_obj) + ")";
	return ret;
}

function getHourTime(date) {
	return date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0');
}

function getDateTimeForHtmlObject(date) {
	return date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
}

function get_date_diff_string_from_now(date) {
	var now = new Date();
	var past_or_future = (now < date) ? "faltan " : "hace ";
	return past_or_future + get_short_diff_string_from_now(parseInt(Math.abs(now-date) / 1000));
}

function get_short_diff_string_from_now(seconds) {
	if (seconds < 60){
		return seconds.toString() + " segundos";
	}
	var minutes = parseInt(seconds / 60);
	if (minutes < 60){
		return minutes.toString() + " minutos";
	}
	var horas = parseInt(minutes / 60);
	if (horas < 24*3){
		return horas.toString() + " horas";
	}
	return (parseInt(horas / 24)).toString() + " días";
}

function get_month_string(date){
	var month = date.getMonth();
	if (month == 0){
		return "Enero";
	}
	if (month == 1){
		return "Febrero";
	}
	if (month == 2){
		return "Marzo";
	}
	if (month == 3){
		return "Abril";
	}
	if (month == 4){
		return "Mayo";
	}
	if (month == 5){
		return "Junio";
	}
	if (month == 6){
		return "Julio";
	}
	if (month == 7){
		return "Agosto";
	}
	if (month == 8){
		return "Septiembre";
	}
	if (month == 9){
		return "Octubre";
	}
	if (month == 10){
		return "Noviembre";
	}
	if (month == 11){
		return "Diciembre";
	}
}

function get_day_string(date){
	var day_of_week = date.getDay();
	if (day_of_week == 0){
		return "Domingo";
	}
	if (day_of_week == 1){
		return "Lunes";
	}
	if (day_of_week == 2){
		return "Martes";
	}
	if (day_of_week == 3){
		return "Miércoles";
	}
	if (day_of_week == 4){
		return "Jueves";
	}
	if (day_of_week == 5){
		return "Viernes";
	}
	if (day_of_week == 6){
		return "Sábado";
	}
}

function get_problem_code_to_show(p){
	if(p.is_draft){
		return `#${p.series}???`;
	}
	return `#${p.series}${padding_number_in_series(p.number_in_series)}`;
}


function padding_number_in_series(n){
	return n.toString().padStart(3, '0');

}


function compare_problems (p,q){
	// horribleee
	if (p["series"] <= q["series"]){
		if (p["series"] == q["series"]){
			if (p["number_in_series"]<q["number_in_series"]){
				return -1;
			}
			if (p["number_in_series"]==q["number_in_series"]){
				return 0;
			}
			return 1;
		}
		return -1	
	}
	return 1;
}


function replaceEntersWithBr(text) {
	return text.split("\n").join("<br>");
}

function replaceBrWithEnters(text) {
	return text.split("<br>").join("\n");
}

function get_from_url_params(key) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(key);
}
