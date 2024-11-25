class project extends EntidadAbstracta{

	constructor(){
		
		super();
		this.columnasamostrar = Array("id_project","name_project","start_date_project","end_date_project","responsable_project","organization_project","description_project","file_project","code_project","acronym_project","id_sampling_methodology");
		this.entidad = 'project';
		this.datosespecialestabla = Array('file_project','start_date_project','end_date_project');

		this.inicializar();


	}

	cargar_formulario_html(){

		// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
		this.accion = '';

		let formulario = `
			<label id="label_id_project" class="label_id_project">id_project</label>
        	<input type='text' id='id_project' name='id_project'></input>
			<span id="div_error_id_project"><a id="error_id_project"></a></span>
			<br>

			<label id="label_name_project" class="label_name_project">name_project</label>
        	<input type='text' id='name_project' name='name_project'></input>
			<span id="div_error_name_project"><a id="error_name_project"></a></span>
			<br>

			<label id="label_start_date_project" class="label_start_date_project">start_date_project</label>
			<input type='text' id='start_date_project' name='start_date_project'></input>
			<span id="div_error_start_date_project" ><a id="error_start_date_project"></a></span>
			<br>

			<label id="label_end_date_project" class="label_end_date_project">end_date_project</label>
			<input type='text' id='end_date_project' name='end_date_project'></input>
			<span id="div_error_end_date_project" ><a id="error_end_date_project"></a></span>
			<br>

			<label id="label_responsable_project" class="label_responsable_project">responsable_project</label>
            <input type='text' id='responsable_project' name='responsable_project'></input>
            <span id="div_error_responsable_project"><a id="error_responsable_project"></a></span>
            <br>

			<label id="label_organization_project" class="label_organization_project">organization_project</label>
            <input type='text' id='organization_project' name='organization_project'></input>
            <span id="div_error_organization_project"><a id="error_organization_project"></a></span>
            <br>

			<label class="label_description_project">description_project</label>
            <textarea id='description_project' name='description_project' rows="4" cols="50"></textarea>
            <span id="div_error_description_project" ><a id="error_description_project"></a></span>
			<br>

			<label id="label_file_project" class="label_file_project">file_project</label>
			<input type='text' id='file_project' name='file_project'></input>
			<span id="div_error_file_project"><a id="error_file_project"></a></span>
			<a id="link_file_project" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/"><img src="./iconos/FILE.png" /></a>

			<label id="label_nuevo_file_project" class="label_nuevo_file_project">nuevo_file_project</label>
			<input type='file' id='nuevo_file_project' name='nuevo_file_project'></input>
			<span id="div_error_nuevo_file_project"><a id="error_nuevo_file_project"></a></span>
			<br>

			<label id="label_code_project" class="label_code_project">code_project</label>
    		<input type='text' id='code_project' name='code_project'></input>
    		<span id="div_error_code_project"><a id="error_code_project"></a></span>
    		<br>

    		<label id="label_acronym_project" class="label_acronym_project">acronym_project</label>
    		<input type='text' id='acronym_project' name='acronym_project'></input>
    		<span id="div_error_acronym_project"><a id="error_acronym_project"></a></span>
    		<br>

    		<label id="label_id_sampling_methodology" class="label_id_sampling_methodology">id_sampling_methodology</label>
    		<input type='text' id='id_sampling_methodology' name='id_sampling_methodology'></input>
    		<span id="div_error_id_sampling_methodology"><a id="error_id_sampling_methodology"></a></span>
    		<br>
		`;

		document.getElementById("IU_form").innerHTML = formulario;
	}

	/*
	creacion de formularios
	*/

	createForm_ADD(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'ADD';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_ADD';

		document.getElementById('id_project').setAttribute("readonly", true);
		const cookie = getCookie("lang");
		document.getElementById('id_project').setAttribute("placeholder", cookie == "ES" ? "ID originado automáticamente" : "Automatically generated ID");

		document.getElementById('label_file_project').remove();
		document.getElementById('file_project').remove();
		document.getElementById('link_file_project').remove();

		this.colocarvalidaciones('ADD');
		
		this.colocarboton('ADD');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.ADD();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SEARCH(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_SEARCH';

		document.getElementById('label_nuevo_file_project').remove();
		document.getElementById('nuevo_file_project').remove();
		document.getElementById('link_file_project').remove();

		this.colocarvalidaciones('SEARCH');
		
		this.colocarboton('SEARCH');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.SEARCH();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_EDIT(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'EDIT';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_EDIT';

		// relleno los valores de los atributos
		this.rellenarvaloresform(parametros);

		document.getElementById('file_project').setAttribute('readonly', true);
		document.getElementById('id_project').setAttribute('readonly', true);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.start_date_project.split('-');
    	let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('start_date_project').value = fechaformateada;
		*/

		document.getElementById('start_date_project').value = this.cambiardatosespecialestabla('start_date_project', parametros.start_date_project);
		document.getElementById('end_date_project').value = this.cambiardatosespecialestabla('end_date_project', parametros.end_date_project);

		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		document.getElementById('link_file_project').href += parametros.file_project;

		// coloco las validaciones
		this.colocarvalidaciones('EDIT');

		document.getElementById('file_project').removeAttribute('onblur');
		
		// coloco el boton
		this.colocarboton('EDIT');

		// pongo valores a los onsubmit y action
		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.EDIT();");

		// pongo visible el formulario
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_DELETE(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_DELETE';

		document.getElementById('label_nuevo_file_project').remove();
		document.getElementById('nuevo_file_project').remove();
		
		this.rellenarvaloresform(parametros);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.start_date_project.split('-');
    	let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('start_date_project').value = fechaformateada;
		*/

		document.getElementById('start_date_project').value = this.cambiardatosespecialestabla('start_date_project', parametros.start_date_project);
		document.getElementById('end_date_project').value = this.cambiardatosespecialestabla('end_date_project', parametros.end_date_project);

		document.getElementById('link_file_project').href += parametros.file_project;

		// pongo no activos todos los campos
		this.ponernoactivoform();

		this.colocarboton('DELETE');


		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.DELETE();");
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SHOWCURRENT(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_SHOWCURRENT';

		document.getElementById('label_nuevo_file_project').remove();
		document.getElementById('nuevo_file_project').remove();
		
		this.rellenarvaloresform(parametros);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.start_date_project.split('-');
    	let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('start_date_project').value = fechaformateada;
		*/

		document.getElementById('start_date_project').value = this.cambiardatosespecialestabla('start_date_project', parametros.start_date_project);
		document.getElementById('end_date_project').value = this.cambiardatosespecialestabla('end_date_project', parametros.end_date_project);

		document.getElementById('link_file_project').href += parametros.file_project;

		this.ponernoactivoform();

		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	/*
	comprobacion campos ADD, EDIT
	*/

	comprobar_name_project(){
		if (!(this.validaciones.min_size('name_project',15))){
			this.mostrar_error_campo('name_project','name_project_min_size_KO');
			return 'name_project_min_size_KO';
		}
		if (!(this.validaciones.max_size('name_project',100))){
			this.mostrar_error_campo('name_project','name_project_max_size_KO');
			return 'name_project_max_size_KO'
		}
		if (!(this.validaciones.format('name_project', '^[A-Za-z\\s]+$'))){
			this.mostrar_error_campo('name_project','name_project_format_KO');
			return 'name_project_format_KO'
		}
		this.mostrar_exito_campo('name_project');
		return true;
	}

	comprobar_start_date_project(){
		if (!(this.validaciones.format('start_date_project','[0-9]{2}/[0-9]{2}/[0-9]{4}$'))){
			this.mostrar_error_campo('start_date_project','start_date_project_format_KO');
			return 'start_date_project_format_KO';
		}
		if (!(this.validacionesespeciales('start_date_project','fechavalida'))){
			this.mostrar_error_campo('start_date_project','start_date_project_valid_KO');
			return 'start_date_project_valid_KO';
		}
		this.mostrar_exito_campo('start_date_project');
		return true;

	}

	comprobar_end_date_project() {
		if (!this.validaciones.format('end_date_project', '[0-9]{2}/[0-9]{2}/[0-9]{4}$')) {
			this.mostrar_error_campo('end_date_project', 'end_date_project_format_KO');
			return 'end_date_project_format_KO';
		}
		if (!this.validacionesespeciales('end_date_project', 'fechavalida')) {
			this.mostrar_error_campo('end_date_project', 'end_date_project_valid_KO');
			return 'end_date_project_valid_KO';
		}
		if (!this.validacionesespeciales('end_date_project', 'end_date_mayor_start_date_project')) {
			this.mostrar_error_campo('end_date_project', 'end_date_mayor_start_date_project');
			return 'end_date_mayor_start_date_project';
		}
		this.mostrar_exito_campo('end_date_project');
		return true;
	}
	
	comprobar_responsable_project() {
		if (!this.validaciones.min_size('responsable_project', 6)) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_min_size_KO');
			return 'responsable_project_min_size_KO';
		}
		if (!this.validaciones.max_size('responsable_project', 60)) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_max_size_KO');
			return 'responsable_project_max_size_KO';
		}
		if (!this.validaciones.format('responsable_project', '^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$')) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_format_KO');
			return 'responsable_project_format_KO';
		}
	
		this.mostrar_exito_campo('responsable_project');
		return true;
	}
	
	comprobar_organization_project() {
		if (!this.validaciones.min_size('organization_project', 6)) {
			this.mostrar_error_campo('organization_project', 'organization_project_min_size_KO');
			return 'organization_project_min_size_KO';
		}
		if (!this.validaciones.max_size('organization_project', 100)) {
			this.mostrar_error_campo('organization_project', 'organization_project_max_size_KO');
			return 'organization_project_max_size_KO';
		}
		if (!this.validaciones.format('organization_project', '^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$')) {
			this.mostrar_error_campo('organization_project', 'organization_project_format_KO');
			return 'organization_project_format_KO';
		}
	
		this.mostrar_exito_campo('organization_project');
		return true;
	}
	
	comprobar_description_project() {
		if (!this.validaciones.min_size('description_project', 30)) {
			this.mostrar_error_campo('description_project', 'description_project_min_size_KO');
			return 'description_project_min_size_KO';
		}
		if (!this.validaciones.max_size('description_project', 500)) {
			this.mostrar_error_campo('description_project', 'description_project_max_size_KO');
			return 'description_project_max_size_KO';
		}
		this.mostrar_exito_campo('description_project');
		return true;
	}

	comprobar_nuevo_file_project(){
		if (document.getElementById('nuevo_file_project').files.length == 0){
			if (this.accion == 'EDIT'){
				return true;
			}
			else{
				if (this.accion = "ADD"){
					this.mostrar_error_campo('nuevo_file_project','file_project_empty_KO');
					return 'file_project_empty_KO';
				}
			}
		}

		// si tuviera un campo con multiples ficheros tendria que hacer un bucle para comprobar cada file[i]
		let mifichero = document.getElementById('nuevo_file_project').files[0];

		if (!this.validaciones.max_size_file(mifichero, 2000000)) {
			this.mostrar_error_campo('nuevo_file_project', 'file_project_max_size_file_KO');
			return 'file_project_max_size_file_KO';
		}
		
		if (!this.validaciones.type_file(mifichero, Array('application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'))) {
			this.mostrar_error_campo('nuevo_file_project', 'file_project_type_file_KO');
			return 'file_project_type_file_KO';
		}
		
		if (!this.validaciones.min_size('nuevo_file_project', 7)) {
			this.mostrar_error_campo('nuevo_file_project', 'file_project_min_size_name_KO');
			return 'file_project_min_size_name_KO';
		}
		
		if (!this.validaciones.max_size('nuevo_file_project', 100)) {
			this.mostrar_error_campo('nuevo_file_project', 'file_project_max_size_name_KO');
			return 'file_project_max_size_name_KO';
		}
		
		if (!this.validaciones.format_name_file(mifichero, '^[A-Za-z.]+$')) {
			this.mostrar_error_campo('nuevo_file_project', 'file_project_format_name_file_KO');
			return 'file_project_format_name_file_KO';
		}
		
		this.mostrar_exito_campo('nuevo_file_project');
		return true;
		
	}

	comprobar_code_project() {
		if (!this.validaciones.min_size('code_project', 6)) {
			this.mostrar_error_campo('code_project', 'code_project_min_size_KO');
			return 'code_project_min_size_KO';
		}
		if (!this.validaciones.max_size('code_project', 50)) {
			this.mostrar_error_campo('code_project', 'code_project_max_size_KO');
			return 'code_project_max_size_KO';
		}
		if (!this.validaciones.format('code_project', '^[a-zA-ZñÑ\\s.,;:()\\[\\]¡!¿?"-]+$')) {
			this.mostrar_error_campo('code_project', 'code_project_format_KO');
			return 'code_project_format_KO';
		}
		this.mostrar_exito_campo('code_project');
		return true;
	}
	
	comprobar_acronym_project() {
		if (!this.validaciones.min_size('acronym_project', 6)) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_min_size_KO');
			return 'acronym_project_min_size_KO';
		}
		if (!this.validaciones.max_size('acronym_project', 15)) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_max_size_KO');
			return 'acronym_project_max_size_KO';
		}
		if (!this.validaciones.format('acronym_project', '^[a-zA-ZñÑ.,;:()\\[\\]¡!¿?"-]+$')) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_format_KO');
			return 'acronym_project_format_KO';
		}
		this.mostrar_exito_campo('acronym_project');
		return true;
	}
	
	comprobar_id_sampling_methodology() {
		if (!this.validaciones.min_size('id_sampling_methodology', 1)) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_min_size_KO');
			return 'id_sampling_methodology_min_size_KO';
		}
		if (!this.validaciones.max_size('id_sampling_methodology', 11)) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_max_size_KO');
			return 'id_sampling_methodology_max_size_KO';
		}
		if (!this.validaciones.format('id_sampling_methodology', '^[0-9]+$')) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_digits_KO');
			return 'id_sampling_methodology_digits_KO';
		}
		this.mostrar_exito_campo('id_sampling_methodology');
		return true;
	}
	
	comprobar_submit(){
		
		let result = 
			this.comprobar_name_project() &
			this.comprobar_start_date_project() &
			this.comprobar_end_date_project() &
			this.comprobar_responsable_project() &
			this.comprobar_organization_project() &
			this.comprobar_description_project() &
			this.comprobar_nuevo_file_project() &
			this.comprobar_code_project() &
			this.comprobar_acronym_project() &
			this.comprobar_id_sampling_methodology();
		
		result = Boolean(result);
		
		return result;

	}

	/*
	comprobacion campos SEARCH
	*/

	comprobar_id_project_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('id_project', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('id_project', 11)) {
			this.mostrar_error_campo('id_project', 'id_project_max_size_KO');
			return 'id_project_max_size_KO';
		}
		if (!this.validaciones.format('id_project', '^[0-9]+$')) {
			this.mostrar_error_campo('id_project', 'id_project_format_KO');
			return 'id_project_format_KO';
		}
		this.mostrar_exito_campo('id_project');
		return true;
	}
	
	comprobar_name_project_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('name_project', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('name_project', 100)) {
			this.mostrar_error_campo('name_project', 'name_project_max_size_KO');
			return 'name_project_max_size_KO';
		}
		if (!this.validaciones.format('name_project', '^[A-Za-z\\s]+$')) {
			this.mostrar_error_campo('name_project', 'name_project_format_KO');
			return 'name_project_format_KO';
		}
		this.mostrar_exito_campo('name_project');
		return true;
	}
	
	comprobar_start_date_project_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('start_date_project', 1)) {
			return true;
		}
		if (!this.validaciones.format('start_date_project', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$')) {
			this.mostrar_error_campo('start_date_project', 'start_date_project_format_KO');
			return 'start_date_project_format_KO';
		}
		this.mostrar_exito_campo('start_date_project');
		return true;
	}
	
	comprobar_end_date_project_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('end_date_project', 1)) {
			return true;
		}
		if (!this.validaciones.format('end_date_project', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$')) {
			this.mostrar_error_campo('end_date_project', 'end_date_project_format_KO');
			return 'end_date_project_format_KO';
		}
		this.mostrar_exito_campo('end_date_project');
		return true;
	}
	
	comprobar_responsable_project_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('responsable_project', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('responsable_project', 60)) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_max_size_KO');
			return 'responsable_project_max_size_KO';
		}
		if (!this.validaciones.format('responsable_project', '^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ\\s]+$')) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_format_KO');
			return 'responsable_project_format_KO';
		}
		this.mostrar_exito_campo('responsable_project');
		return true;
	}
	
	comprobar_organization_project_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('organization_project', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('organization_project', 100)) {
			this.mostrar_error_campo('organization_project', 'organization_project_max_size_KO');
			return 'organization_project_max_size_KO';
		}
		if (!this.validaciones.format('organization_project', '^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ\\s]+$')) {
			this.mostrar_error_campo('organization_project', 'organization_project_format_KO');
			return 'organization_project_format_KO';
		}
		this.mostrar_exito_campo('organization_project');
		return true;
	}
	
	comprobar_description_project_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('description_project', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('description_project', 500)) {
			this.mostrar_error_campo('description_project', 'description_project_max_size_KO');
			return 'description_project_max_size_KO';
		}
		this.mostrar_exito_campo('description_project');
		return true;
	}

	comprobar_file_project_SEARCH(){
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('file_project', 1)) {
			return true;
		}
		if (!(this.validaciones.max_size('file_project',100))){
			this.mostrar_error_campo('file_project','file_project_max_size_name_KO');
			return 'file_project_max_size_name_KO';
		}
		if (!(this.validaciones.format('file_project','^[a-zA-Z.]+$'))){
			this.mostrar_error_campo('file_project','file_project_format_name_file_KO');
			return 'file_project_format_name_file_KO';
		}
		this.mostrar_exito_campo('nuevo_file_project');
		return true;
	}

	comprobar_code_project_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('code_project', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('code_project', 50)) {
			this.mostrar_error_campo('code_project', 'code_project_max_size_KO');
			return 'code_project_max_size_KO';
		}
		if (!this.validaciones.format('code_project', '^[a-zA-ZñÑ\\s.,;:()\\[\\]¡!¿?"-]+$')) {
			this.mostrar_error_campo('code_project', 'code_project_format_KO');
			return 'code_project_format_KO';
		}
		this.mostrar_exito_campo('code_project');
		return true;
	}
	
	comprobar_acronym_project_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('acronym_project', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('acronym_project', 15)) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_max_size_KO');
			return 'acronym_project_max_size_KO';
		}
		if (!this.validaciones.format('acronym_project', '^[a-zA-ZñÑ.,;:()\\[\\]¡!¿?"-]+$')) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_format_KO');
			return 'acronym_project_format_KO';
		}
		this.mostrar_exito_campo('acronym_project');
		return true;
	}
	
	comprobar_id_sampling_methodology_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('id_sampling_methodology', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('id_sampling_methodology', 11)) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_max_size_KO');
			return 'id_sampling_methodology_max_size_KO';
		}
		if (!this.validaciones.format('id_sampling_methodology', '^[0-9]+$')) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_digits_KO');
			return 'id_sampling_methodology_digits_KO';
		}
		this.mostrar_exito_campo('id_sampling_methodology');
		return true;
	}
	
	comprobar_submit_SEARCH(){
		
		let result = 	
			this.comprobar_id_project_SEARCH() &
			this.comprobar_name_project_SEARCH() &
			this.comprobar_end_date_project_SEARCH() &
			this.comprobar_description_project_SEARCH() &
			this.comprobar_start_date_project_SEARCH() &
			this.comprobar_code_project_SEARCH() &
			this.comprobar_acronym_project_SEARCH() &
			this.comprobar_id_sampling_methodology_SEARCH() &
			this.comprobar_responsable_project_SEARCH() &
			this.comprobar_organization_project_SEARCH() &
			this.comprobar_file_project_SEARCH();

		result = Boolean(result);
		
		return result;

	}
	
	
	/*
		metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	*/

	cambiardatosespecialestabla(atributo, valoratributo){

		if (atributo == 'file_project'){

			if (valoratributo == ''){
				return "no hay fichero";
			}
			let texto = valoratributo; 
			texto += `<a id="link_file_project" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/`;
			texto += valoratributo;
			texto += `"><img src="./iconos/FILE.png" /></a>`;

			return texto;

		}

		if (atributo == 'start_date_project' || 'end_date_project'){

			let fech = valoratributo.split('-');
    		let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
    		return fechaformateada;

		}

	}

	/*
		metodo para validaciones especiales de atributos en los formularios
	*/

	validacionesespeciales(atributo, prueba, specialCaseValue) {
		let fecha = document.getElementById(atributo).value;

		if (atributo == "start_date_project" || atributo == "end_date_project") {
			if (prueba == "fechavalida") {

				let fechaf = fecha.split("/");
				if (fechaf.length !== 3) return false;

				let day = parseInt(fechaf[0], 10);
				let month = parseInt(fechaf[1], 10) - 1; // Restar 1 porque los meses en Date van de 0 a 11
				let year = parseInt(fechaf[2], 10);

				if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

				if (month < 0 || month > 11 || day <= 0) return false;

				let date = new Date(year, month, day);

				if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
					return false;
				}

				return true;

			} else if (prueba == 'end_date_mayor_start_date_project') {
				let fechaStart = document.getElementById('start_date_project').value;
				let fechaStartEsValida = this.validaciones.format('start_date_project','[0-9]{2,2}/[0-9]{2,2}/[0-9]{4,4}') && this.validacionesespeciales('start_date_project','fechavalida');
				if (!fechaStartEsValida)
					return true;
				let fechaf = fechaStart.split("/");

				let dayStart = fechaf[0];
				let month = fechaf[1];
				let year = fechaf[2];

				let dateStart = new Date(year, month, dayStart);

				let fechaEnd = document.getElementById('end_date_project').value;
				let fechafEnd = fechaEnd.split("/");

				let dayEnd = fechafEnd[0];
				let monthEnd = fechafEnd[1];
				let yearEnd = fechafEnd[2];

				let dateEnd = new Date(yearEnd, monthEnd, dayEnd);

				return dateEnd > dateStart;
			}
		}

		return false;
	}

	/*
	metodos auxiliares
	*/
	colocarboton(accion){

		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		//divboton.stype.display = 'block';
		document.getElementById('IU_form').append(divboton);
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/'+accion+'.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);

	}

	rellenarvaloresform(parametros){
		
		//obtener campos del formulario
        	let campos = document.forms['IU_form'].elements;
        	//recorrer todos los campos
        	for (let i=0;i<campos.length;i++) {
			if (document.getElementById(campos[i].id).type == 'file'){
                
			}
			else{
                		document.getElementById(campos[i].id).value = parametros[campos[i].id];
			}
        	}
	}

	colocarvalidaciones(accion){
		
		let evento;
		//obtener campos del formulario
        	let campos = document.forms['IU_form'].elements;
        	//recorrer todos los campos
        	for (let i=0;i<campos.length;i++) {
			if ((document.getElementById(campos[i].id).tagName == 'INPUT') && (document.getElementById(campos[i].id).type !== 'file')){
		                evento = 'onblur';
			}
			else{
				evento = 'onchange';
			}
		if (accion == 'SEARCH'){
			document.getElementById(campos[i].id).setAttribute (evento,'validar.comprobar_'+campos[i].id+'_'+accion+'();');
		}
		else{
			document.getElementById(campos[i].id).setAttribute (evento,'validar.comprobar_'+campos[i].id+'();');
		}
        
		}
	}

	ponernoactivoform(){
		//obtener campos del formulario
	        let campos = document.forms['IU_form'].elements;
	        //recorrer todos los campos
	        for (let i=0;i<campos.length;i++) {
	                document.getElementById(campos[i].id).setAttribute('readonly', true);
	        }
	}
}
