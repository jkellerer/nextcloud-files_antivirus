OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Limpiar",
    "Infected" : "Infectado",
    "Unchecked" : "Desmarcado",
    "Scanner exit status" : "Estado de salida del escáner",
    "Scanner output" : "Salida del scanner",
    "Saving…" : "Guardando…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "El archivo {file} está infectado con {virus}",
    "The file has been removed" : "El archivo se ha eliminado",
    "File containing {virus} detected" : "Se ha detectado un archivo que contiene {virus}",
    "Antivirus detected a virus" : "Antivirus ha detectado un virus",
    "Virus %s is detected in the file. Upload cannot be completed." : "Virus %s se ha detectado en el archivo. No se ha podido completar la subida.",
    "Saved" : "Guardado",
    "Antivirus for files" : "Antivirus para archivos",
    "An antivirus app for Nextcloud based on ClamAV" : "Una app antivirus para Nextcloud basada en ClamAV",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus para archivos es una app para Nextcloud basada en el antivirus ClamAV.\n\n* 🕵️‍♂️ Cuando el usuario sube un archivo, se escanea\n* ☢️ Los archivos subidos e infectados serán borrados y se mostrará una notificación y/o se enviará un correo\n* 🔎 Trabajo en segundo plano para escanear todos los archivos\n Para que esta app sea efectiva, las definiciones de virus de ClamAV deberían mantenerse actualizadas. También ha de tenerse en cuenta que activar esta app tendrá un impacto en el rendimiento del sistema porque se requiere procesamiento adicional para cada subida. Más información disponible en la documentación de Antivirus.",
    "Greetings {user}," : "Saludos {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Lo siento, pero un malware fue detectado en un archivo que intentantes subir y ha sido eliminado.",
    "This email is a notification from {host}. Please, do not reply." : "Este correos es una notificación de {host}. Por favor, no responder.",
    "File uploaded: {file}" : "Archivo subido: {file}",
    "Antivirus for Files" : "Antivirus para archivos",
    "Mode" : "Modo",
    "Socket" : "Socket",
    "Clamav Socket." : "Socket clamav",
    "Not required in Executable Mode." : "No es necesario en modo ejecutable.",
    "Host" : "Dominio",
    "Address of Antivirus Host." : "Dirección del servidor antivirus.",
    "Port" : "Puerto",
    "Port number of Antivirus Host." : "Número de puerto del servidor antivirus.",
    "Stream Length" : "Longitud del flujo",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLength valor en bytes.",
    "bytes" : "bytes",
    "Path to clamscan" : "Ruta a clamscan",
    "Path to clamscan executable." : "Ruta al ejecutable clamscan",
    "Not required in Daemon Mode." : "No necesario en modo demonio.",
    "Extra command line options (comma-separated)" : "Opciones extra de línea de comandos (separados por coma)",
    "File size limit, -1 means no limit" : "Tamaño límite de archivo, -1 para ningún límite",
    "Background scan file size limit in bytes, -1 means no limit" : "Límite de tamaño del archivo en bytes para el análisis en segundo plano, -1 para ningún límite",
    "When infected files are found during a background scan" : "Cuando se encuentren archivos infectados durante la búsqueda en segundo plano",
    "Only log" : "Solo registro",
    "Delete file" : "Borrar archivo",
    "Save" : "Guardar",
    "Advanced" : "Avanzado",
    "Rules" : "Reglas",
    "Clear All" : "Limpiar todo",
    "Reset to defaults" : "Restaurar configuración inicial",
    "Match by" : "Coincidir por",
    "Scanner exit status or signature to search" : "Estado de salida del escáner o signatura que buscar",
    "Description" : "Descripción",
    "Mark as" : "Marcar como",
    "Add a rule" : "Añadir una regla",
    "Executable" : "Ejecutable",
    "Daemon" : "Demonio",
    "Daemon (Socket)" : "Demonio (Socket)"
},
"nplurals=2; plural=(n != 1);");
