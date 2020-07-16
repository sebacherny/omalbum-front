const locations = {
"Catamarca": [
  "AMBATO", 
  "ANCASTI", 
  "ANDALGALA", 
  "ANTOFAGASTA DE LA SIERRA", 
  "BELEN", 
  "CAPAYAN", 
  "CAPITAL", 
  "EL ALTO", 
  "FRAY MAMERTO ESQUIU", 
  "LA PAZ", 
  "PACLIN", 
  "POMAN", 
  "SANTA MARIA", 
  "SANTA ROSA", 
  "TINOGASTA", 
  "VALLE VIEJO"
]
,
"Tierra del Fuego": [
  "ANTARTIDA ARGENTINA", 
  "RIO GRANDE", 
  "USHUAIA"
]
,
"La Pampa": [
  "ATREUCO", 
  "CALEU CALEU", 
  "CAPITAL", 
  "CATRILO", 
  "CHALILEO", 
  "CHAPALEUFU", 
  "CHICAL CO", 
  "CONHELO", 
  "CURACO", 
  "GUATRACHE", 
  "HUCAL", 
  "LIHUEL CALEL", 
  "LIMAY MAHUIDA", 
  "LOVENTUE", 
  "MARACO", 
  "PUELEN", 
  "QUEMU QUEMU", 
  "RANCUL", 
  "REALICO", 
  "TOAY", 
  "TRENEL", 
  "UTRACAN"
]
,
"Formosa": [
  "BERMEJO", 
  "FORMOSA", 
  "LAISHI", 
  "MATACOS", 
  "PATIÑO", 
  "PILAGAS", 
  "PILCOMAYO", 
  "PIRANE", 
  "RAMON LISTA"
]
,
"Santa Cruz": [
  "CORPEN AIKE", 
  "DESEADO", 
  "GUER AIKE", 
  "LAGO ARGENTINO", 
  "LAGO BUENOS AIRES", 
  "MAGALLANES", 
  "RIO CHICO"
]
,
"San Juan": [
  "25 DE MAYO", 
  "9 DE JULIO", 
  "ALBARDON", 
  "ANGACO", 
  "CALINGASTA", 
  "CAPITAL", 
  "CAUCETE", 
  "CHIMBAS", 
  "IGLESIA", 
  "JACHAL", 
  "POCITO", 
  "RAWSON", 
  "RIVADAVIA", 
  "SAN MARTIN", 
  "SANTA LUCIA", 
  "SARMIENTO", 
  "ULLUM", 
  "VALLE FERTIL", 
  "ZONDA"
]
,
"Misiones": [
  "25 DE MAYO", 
  "APOSTOLES", 
  "CAINGUAS", 
  "CANDELARIA", 
  "CAPITAL", 
  "CONCEPCION", 
  "ELDORADO", 
  "GENERAL MANUEL BELGRANO", 
  "GUARANI", 
  "IGUAZU", 
  "LEANDRO N. ALEM", 
  "LIBERTADOR GRL SAN MARTIN", 
  "MONTECARLO", 
  "OBERA", 
  "SAN IGNACIO", 
  "SAN JAVIER", 
  "SAN PEDRO"
]
,
"Santa Fe": [
  "9 DE JULIO", 
  "BELGRANO", 
  "CASEROS", 
  "CASTELLANOS", 
  "CONSTITUCION", 
  "GARAY", 
  "GENERAL LOPEZ", 
  "GENERAL OBLIGADO", 
  "IRIONDO", 
  "LA CAPITAL", 
  "LAS COLONIAS", 
  "ROSARIO", 
  "SAN CRISTOBAL", 
  "SAN JAVIER", 
  "SAN JERONIMO", 
  "SAN JUSTO", 
  "SAN LORENZO", 
  "SAN MARTIN", 
  "VERA"
]
,
"Corrientes": [
  "BELLA VISTA", 
  "BERON DE ASTRADA", 
  "CAPITAL", 
  "CONCEPCION", 
  "CURUZU CUATIA", 
  "EMPEDRADO", 
  "ESQUINA", 
  "GENERAL ALVEAR", 
  "GENERAL PAZ", 
  "GOYA", 
  "ITATI", 
  "ITUZAINGO", 
  "LAVALLE", 
  "MBURUCUYA", 
  "MERCEDES", 
  "MONTE CASEROS", 
  "PASO DE LOS LIBRES", 
  "SALADAS", 
  "SAN COSME", 
  "SAN LUIS DEL PALMAR", 
  "SAN MARTIN", 
  "SAN MIGUEL", 
  "SAN ROQUE", 
  "SANTO TOME", 
  "SAUCE"
]
,
"Ciudad de Buenos Aires": [
  "CIUDAD DE BUENOS AIRES"
]
,
"Chaco": [
  "12 DE OCTUBRE", 
  "1§ DE MAYO", 
  "2 DE ABRIL", 
  "25 DE MAYO", 
  "9 DE JULIO", 
  "ALMIRANTE BROWN", 
  "BERMEJO", 
  "CHACABUCO", 
  "COMANDANTE FERNANDEZ", 
  "FRAY JUSTO SANTA MARIA DE ORO", 
  "GENERAL BELGRANO", 
  "GENERAL DONOVAN", 
  "GENERAL GUEMES", 
  "INDEPENDENCIA", 
  "LIBERTAD", 
  "LIBERTADOR GENERAL SAN MARTIN", 
  "MAIPU", 
  "MAYOR LUIS J FONTANA", 
  "O HIGGINS", 
  "PRESIDENCIA DE LA PLAZA", 
  "QUITILIPI", 
  "SAN FERNANDO", 
  "SAN LORENZO", 
  "SARGENTO CABRAL", 
  "TAPENAGA"
]
,
"Entre Ríos": [
  "COLON", 
  "CONCORDIA", 
  "DIAMANTE", 
  "FEDERACION", 
  "FEDERAL", 
  "FELICIANO", 
  "GUALEGUAY", 
  "GUALEGUAYCHU", 
  "ISLAS DEL IBICUY", 
  "LA PAZ", 
  "NOGOYA", 
  "PARANA", 
  "SAN SALVADOR", 
  "TALA", 
  "URUGUAY", 
  "VICTORIA", 
  "VILLAGUAY"
]
,
"Córdoba": [
  "CALAMUCHITA", 
  "CAPITAL", 
  "COLON", 
  "CRUZ DEL EJE", 
  "GENERAL ROCA", 
  "GENERAL SAN MARTIN", 
  "ISCHILIN", 
  "JUAREZ CELMAN", 
  "MARCOS JUAREZ", 
  "MINAS", 
  "POCHO", 
  "PRESIDENTE ROQUE SAENZ PEÑA", 
  "PUNILLA", 
  "RIO CUARTO", 
  "RIO PRIMERO", 
  "RIO SECO", 
  "RIO SEGUNDO", 
  "SAN ALBERTO", 
  "SAN JAVIER", 
  "SAN JUSTO", 
  "SANTA MARIA", 
  "SOBREMONTE", 
  "TERCERO ARRIBA", 
  "TOTORAL", 
  "TULUMBA", 
  "UNION"
]
,
"Tucumán": [
  "BURRUYACU", 
  "CAPITAL", 
  "CHICLIGASTA", 
  "CRUZ ALTA", 
  "FAMAILLA", 
  "GRANEROS", 
  "JUAN B ALBERDI", 
  "LA COCHA", 
  "LEALES", 
  "LULES", 
  "MONTEROS", 
  "RIO CHICO", 
  "SIMOCA", 
  "TAFI DEL VALLE", 
  "TAFI VIEJO", 
  "TRANCAS", 
  "YERBA BUENA"
]
,
"Mendoza": [
  "CAPITAL", 
  "GENERAL ALVEAR", 
  "GODOY CRUZ", 
  "GUAYMALLEN", 
  "JUNIN", 
  "LA PAZ", 
  "LAS HERAS", 
  "LAVALLE", 
  "LUJAN DE CUYO", 
  "MAIPU", 
  "MALARGUE", 
  "RIVADAVIA", 
  "SAN CARLOS", 
  "SAN MARTIN", 
  "SAN RAFAEL", 
  "SANTA ROSA", 
  "TUNUYAN", 
  "TUPUNGATO"
]
,
"La Rioja": [
  "ARAUCO", 
  "CAPITAL", 
  "CASTRO BARROS", 
  "CHAMICAL", 
  "CHILECITO", 
  "CORONEL FELIPE VARELA", 
  "FAMATINA", 
  "GENERAL ANGEL V PEÑALOZA", 
  "GENERAL BELGRANO", 
  "GENERAL JUAN F QUIROGA", 
  "GENERAL LAMADRID", 
  "GENERAL OCAMPO", 
  "GENERAL SAN MARTIN", 
  "INDEPENDENCIA", 
  "ROSARIO VERA PEÑALOZA", 
  "SAN BLAS DE LOS SAUCES", 
  "SANAGASTA", 
  "VINCHINA"
]
,
"Neuquén": [
  "ALUMINE", 
  "AÑELO", 
  "CATAN LIL", 
  "CHOS MALAL", 
  "COLLON CURA", 
  "CONFLUENCIA", 
  "HUILICHES", 
  "LACAR", 
  "LONCOPUE", 
  "LOS LAGOS", 
  "MINAS", 
  "PEHUENCHES", 
  "PICUN LEUFU", 
  "PICUNCHES", 
  "ZAPALA", 
  "ÑORQUIN"
]
,
"Jujuy": [
  "COCHINOCA", 
  "DOCTOR MANUEL BELGRANO", 
  "EL CARMEN", 
  "HUMAHUACA", 
  "LEDESMA", 
  "PALPALA", 
  "RINCONADA", 
  "SAN ANTONIO", 
  "SAN PEDRO", 
  "SANTA BARBARA", 
  "SANTA CATALINA", 
  "SUSQUES", 
  "TILCARA", 
  "TUMBAYA", 
  "VALLE GRANDE", 
  "YAVI"
]
,
"Buenos Aires": [
  "25 DE MAYO", 
  "9 DE JULIO", 
  "ADOLFO ALSINA", 
  "ADOLFO GONZALES CHAVES", 
  "ALBERTI", 
  "ALMIRANTE BROWN", 
  "ARRECIFES", 
  "AVELLANEDA", 
  "AYACUCHO", 
  "AZUL", 
  "BAHIA BLANCA", 
  "BALCARCE", 
  "BARADERO", 
  "BENITO JUAREZ", 
  "BERAZATEGUI", 
  "BERISSO", 
  "BOLIVAR", 
  "BRAGADO", 
  "BRANDSEN", 
  "CAMPANA", 
  "CAPITAN SARMIENTO", 
  "CARLOS CASARES", 
  "CARLOS TEJEDOR", 
  "CARMEN DE ARECO", 
  "CASTELLI", 
  "CAÑUELAS", 
  "CHACABUCO", 
  "CHASCOMUS", 
  "CHIVILCOY", 
  "COLON", 
  "CORONEL DE MARINA L ROSALES", 
  "CORONEL DORREGO", 
  "CORONEL PRINGLES", 
  "CORONEL SUAREZ", 
  "DAIREAUX", 
  "DOLORES", 
  "ENSENADA", 
  "ESCOBAR", 
  "ESTEBAN ECHEVERRIA", 
  "EXALTACION DE LA CRUZ", 
  "EZEIZA", 
  "FLORENCIO VARELA", 
  "FLORENTINO AMEGHINO", 
  "GENERAL ALVARADO", 
  "GENERAL ALVEAR", 
  "GENERAL ARENALES", 
  "GENERAL BELGRANO", 
  "GENERAL GUIDO", 
  "GENERAL JUAN MADARIAGA", 
  "GENERAL LA MADRID", 
  "GENERAL LAS HERAS", 
  "GENERAL LAVALLE", 
  "GENERAL PAZ", 
  "GENERAL PINTO", 
  "GENERAL PUEYRREDON", 
  "GENERAL RODRIGUEZ", 
  "GENERAL SAN MARTIN", 
  "GENERAL VIAMONTE", 
  "GENERAL VILLEGAS", 
  "GUAMINI", 
  "HIPOLITO YRIGOYEN", 
  "HURLINGHAM", 
  "ITUZAINGO", 
  "JOSE C. PAZ", 
  "JUNIN", 
  "LA COSTA", 
  "LA MATANZA", 
  "LA PLATA", 
  "LANUS", 
  "LAPRIDA", 
  "LAS FLORES", 
  "LEANDRO N. ALEM", 
  "LEZAMA", 
  "LINCOLN", 
  "LOBERIA", 
  "LOBOS", 
  "LOMAS DE ZAMORA", 
  "LUJAN", 
  "MAGDALENA", 
  "MAIPU", 
  "MALVINAS ARGENTINAS", 
  "MAR CHIQUITA", 
  "MARCOS PAZ", 
  "MERCEDES", 
  "MERLO", 
  "MONTE", 
  "MONTE HERMOSO", 
  "MORENO", 
  "MORON", 
  "NAVARRO", 
  "NECOCHEA", 
  "OLAVARRIA", 
  "PATAGONES", 
  "PEHUAJO", 
  "PELLEGRINI", 
  "PERGAMINO", 
  "PILA", 
  "PILAR", 
  "PINAMAR", 
  "PRESIDENTE PERON", 
  "PUAN", 
  "PUNTA INDIO", 
  "QUILMES", 
  "RAMALLO", 
  "RAUCH", 
  "RIVADAVIA", 
  "ROJAS", 
  "ROQUE PEREZ", 
  "SAAVEDRA", 
  "SALADILLO", 
  "SALLIQUELO", 
  "SALTO", 
  "SAN ANDRES DE GILES", 
  "SAN ANTONIO DE ARECO", 
  "SAN CAYETANO", 
  "SAN FERNANDO", 
  "SAN ISIDRO", 
  "SAN MIGUEL", 
  "SAN NICOLAS", 
  "SAN PEDRO", 
  "SAN VICENTE", 
  "SUIPACHA", 
  "TANDIL", 
  "TAPALQUE", 
  "TIGRE", 
  "TORDILLO", 
  "TORNQUIST", 
  "TRENQUE LAUQUEN", 
  "TRES ARROYOS", 
  "TRES DE FEBRERO", 
  "TRES LOMAS", 
  "VICENTE LOPEZ", 
  "VILLA GESELL", 
  "VILLARINO", 
  "ZARATE"
]
,
"Chubut": [
  "BIEDMA", 
  "CUSHAMEN", 
  "ESCALANTE", 
  "FLORENTINO AMEGHINO", 
  "FUTALEUFU", 
  "GAIMAN", 
  "GASTRE", 
  "LANGUIÑEO", 
  "MARTIRES", 
  "PASO DE INDIOS", 
  "RAWSON", 
  "RIO SENGUER", 
  "SARMIENTO", 
  "TEHUELCHES", 
  "TELSEN"
]
,
"San Luis": [
  "AYACUCHO", 
  "BELGRANO", 
  "CHACABUCO", 
  "CORONEL PRINGLES", 
  "GENERAL JUAN MARTIN DE PUEYRREDON", 
  "GENERAL PEDERNERA", 
  "GOBERNADOR DUPUY", 
  "JUNIN", 
  "LIBERTADOR GRL SAN MARTIN"
]
,
"Río Negro": [
  "25 DE MAYO", 
  "9 DE JULIO", 
  "ADOLFO ALSINA", 
  "AVELLANEDA", 
  "BARILOCHE", 
  "CONESA", 
  "EL CUY", 
  "GENERAL ROCA", 
  "PICHI MAHUIDA", 
  "PILCANIYEU", 
  "SAN ANTONIO", 
  "VALCHETA", 
  "ÑORQUINCO"
]
,
"Salta": [
  "ANTA", 
  "CACHI", 
  "CAFAYATE", 
  "CAPITAL", 
  "CERRILLOS", 
  "CHICOANA", 
  "GENERAL GUEMES", 
  "GENERAL JOSE DE SAN MARTIN", 
  "GUACHIPAS", 
  "IRUYA", 
  "LA CALDERA", 
  "LA CANDELARIA", 
  "LA POMA", 
  "LA VIÑA", 
  "LOS ANDES", 
  "METAN", 
  "MOLINOS", 
  "ORAN", 
  "RIVADAVIA", 
  "ROSARIO DE LA FRONTERA", 
  "ROSARIO DE LERMA", 
  "SAN CARLOS", 
  "SANTA VICTORIA"
]
,
"Santiago del Estero": [
  "AGUIRRE", 
  "ALBERDI", 
  "ATAMISQUI", 
  "AVELLANEDA", 
  "BANDA", 
  "BELGRANO", 
  "CAPITAL", 
  "CHOYA", 
  "COPO", 
  "FIGUEROA", 
  "GENERAL TABOADA", 
  "GUASAYAN", 
  "JIMENEZ", 
  "JUAN F IBARRA", 
  "LORETO", 
  "MITRE", 
  "MORENO", 
  "OJO DE AGUA", 
  "PELLEGRINI", 
  "QUEBRACHOS", 
  "RIO HONDO", 
  "RIVADAVIA", 
  "ROBLES", 
  "SALAVINA", 
  "SAN MARTIN", 
  "SARMIENTO", 
  "SILIPICA"
]
}
