function create_problem_event(form) {
    data = extract_data(form.closest("form"));
    payload = {
		deadline : date_string(data["date:deadline"], data["time:deadline"]),
		release_date : date_string(data["date:release_date"], data["time:release_date"]),
		tags : data["tags"].split(","),
		statement : data["statement"],
		omaforos_post_id : parseInt(data["omaforos_post_id"]),
		answer : parseInt(data["answer"]),
		annotations : data["annotations"],
		is_draft : data["is_draft"],
		hint : data["hint"],
		series : data["series"],
		official_solution : parseInt(data["official_solution"]),
	};
	create_problem_with_validation(payload);
}

function create_problem_with_validation(payload){
	validation_failures = validate_create_problem_payload(payload);
	if( validation_failures.length > 0 ){
		feedback_create_problem_validation_fails(validation_failures);
		return;
	}
	create_problem_request(payload); //acá sería mejor manejar el error
}


function feedback_create_problem_validation_fails(validation_failures){
	clear_notifications();
	validation_failures.forEach( x => notify("notification urgent", x.field, x.error) );
}

function update_preview(button) {
    previewer = document.getElementById("preview");
    previewed = document.getElementById(button.getAttribute("for"));
    previewer.innerHTML = previewed.value;
    MathJax.typeset();
}

function insert_problems_admin(){
	var elements = document.getElementsByClassName("problems-admin");
    if(!elements.length == 0) {
	    get_problems_admin().then(problems => {
	        for(e of elements) {
	            insert_given_problems_admin(e, problems);
        	}
    	});
	}
}

function get_problems_admin() {
	if( is_logged_in() && is_admin() ) {
		return get_all_problems_admin_request().then( x => x.all_problems ); 
	}
}

function insert_given_problems_admin(element, problems) {
    console.log(element);
    element.innerHTML = "";
	drafts = [];
	scheduled = [];
	released = [];
    for(p of problems.sort(compare_problems)) {
		if (p["is_draft"]){
			drafts.push(p);
		}else{
			release = new Date(p["release_date"]);
			now =  new Date();
			if( now < release){
				scheduled.push(p); 
			}else{
				released.push(p);
			}
		}
    }
	element.innerHTML = "<h1>Drafts</h1>"+ drafts.map(problem_admin_html).join("\n") + "<h1>Scheduled</h1>"+ scheduled.map(problem_admin_html).join("\n") + "<h1>Released</h1>"+ released.map(problem_admin_html).join("\n")  +  "\n <p> LINK CREAR PROBLEMA </p>";
    MathJax.typesetPromise();
}

function problem_admin_html(data){
	if (data.omaforos_post_id>0 ){
		link_omaforos = `<a href=\"https://omaforos.com.ar/viewtopic.php?p=${data.omaforos_post_id}">link a omaforos </a><br/>`;
	}else{
		link_omaforos = "";	
	}
	if (data.is_draft){
		number_in_series ="????";
	}else{
		number_in_series = padding_number_in_series(data.number_in_series);
	}
    return `
	<div>
		<h2>Problema ${data.problem_id} - #${data.series}${number_in_series} - <a href = "editar.html?id=${data.problem_id}">editar</a> </h2>
		<div  class="enunciado math light-bg boxed">${data.statement}</div>
		Respuesta: ${data.answer}<br/>
		${link_omaforos}
		Fecha publicación: ${new Date(data.release_date)}<br/>
		Deadline: ${new Date(data.deadline)}
		<br/><br/>
	</div>`;
}

