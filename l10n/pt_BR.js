OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Limpo",
    "Infected" : "Infectado",
    "Unchecked" : "Não verificado",
    "Scanner exit status" : "Status de saída do scanner",
    "Scanner output" : "Saída do scanner",
    "Saving…" : "Salvando...",
    "Antivirus" : "Antivírus",
    "File {file} is infected with {virus}" : "O arquivo {file} está infectado com o {virus}",
    "The file has been removed" : "O arquivo foi removido",
    "File containing {virus} detected" : "Um arquivo contendo {virus} foi detectado",
    "Antivirus detected a virus" : "O antivírus detectou um vírus",
    "Virus %s is detected in the file. Upload cannot be completed." : "Vírus %s foi detectado no arquivo. O envio não foi realizado.",
    "Saved" : "Salvo",
    "Antivirus for files" : "Antivírus para arquivos",
    "An antivirus app for Nextcloud" : "Um aplicativo antivírus para o Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivírus para arquivos é um aplicativo antivírus para Nextcloud.\n\n* 🕵️‍♂️ Quando o usuário carrega um arquivo, ele é verificado\n* ☢️ Arquivos carregados e infectados serão excluídos e uma notificação será exibida e / ou enviada por e-mail\n* 🔎 Trabalho em segundo plano para verificar todos os arquivos\n* ❓ Use ClamAV (código aberto) ou Kaspersky Scan Engine\n\nEste aplicativo inspeciona os arquivos carregados para o Nextcloud em busca de vírus antes de serem gravados no armazenamento do Nextcloud. Se um arquivo for identificado como um vírus, ele será registrado ou não será carregado no servidor. O aplicativo se baseia no mecanismo de verificação de vírus ClamAV, que o administrador aponta para o Nextcloud ao configurar o aplicativo. Como alternativa, um Kaspersky Scan Engine pode ser configurado, que deve ser executado em um servidor separado.\nPara que este aplicativo seja eficaz, as definições de vírus do ClamAV devem ser mantidas atualizadas. Observe também que a ativação deste aplicativo afetará o desempenho do sistema, pois um processamento adicional é necessário para cada upload. Mais informações estão disponíveis na documentação do Antivírus.",
    "Greetings {user}," : "Bem-vindo {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Um malware foi detectado em um arquivo e foi excluído.",
    "This email is a notification from {host}. Please, do not reply." : "Este e-mail é uma notificação de {host}. Por favor, não responda.",
    "File uploaded: {file}" : "Arquivo enviado: {file}",
    "Antivirus for Files" : "Antivirus para Arquivos",
    "Mode" : "Modo",
    "ClamAV Executable" : " Executável ClamAV",
    "ClamAV Daemon" : "Daemon ClamAV",
    "ClamAV Daemon (Socket)" : "Daemon ClamAV (Socket)",
    "Kaspersky Daemon" : "Daemon Kaspersky",
    "Socket" : "Socket",
    "ClamAV Socket." : "Socket ClamAV.",
    "Not required in Executable Mode." : "Não é necessário no Modo Executável.",
    "Host" : "Host",
    "Address of Antivirus Host." : "Endereço do Antivírus no Host.",
    "Port" : "Porta",
    "Port number of Antivirus Host." : "Número da porta do Antivirus no Host.",
    "Stream Length" : "Tamanho do Stream",
    "ClamAV StreamMaxLength value in bytes." : "Valor StreamMaxLength do ClamAV em bytes.",
    "bytes" : "bytes",
    "Path to clamscan" : "Caminho do clamscan",
    "Path to clamscan executable." : "Caminho do executável do clamscan.",
    "Not required in Daemon Mode." : "Não é necessário no Modo Daemon.",
    "Extra command line options (comma-separated)" : "Opções extras de linha de comando (separados por vírgula)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Limite de tamanho de arquivo para varreduras periódicas em segundo plano e envios em partes, -1 significa sem limite ",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Verificação em segundo plano e limite de tamanho de arquivo de upload em partes em bytes, -1 significa sem limite ",
    "When infected files are found during a background scan" : "Quando vírus são encontrados num escaneamento em retaguarda",
    "Only log" : "Somente registrar",
    "Delete file" : "Excluir o arquivo",
    "Save" : "Salvar",
    "Advanced" : "Avançado",
    "Rules" : "Regras",
    "Clear All" : "Limpar Tudo",
    "Reset to defaults" : "Redefinir para o padrão",
    "Match by" : "Bate com",
    "Scanner exit status or signature to search" : "Status de saída do scanner ou assinatura para pesquisar",
    "Description" : "Descrição",
    "Mark as" : "Marcar como",
    "Add a rule" : "Adicionar uma regra"
},
"nplurals=2; plural=(n > 1);");
