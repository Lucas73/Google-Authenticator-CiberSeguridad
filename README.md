# Google-Authenticator-CiberSeguridad
Ejercicio de conexión con Google Authenticator para el máster de Ciberseguridad de Telefónica con la Universidad de Murcia.


Esta pequeña app está creada con el framework express de Node y con su renderizador PUG.
Se ha programado sobre el scaffolding que proporciona express generator.


Este es un ejercicio que como objetivo sólo busca conectarse a Google Authenticator. 
Por tanto el login local de user y password está hardcodeado con el usuario lucas@lucas.com y la contraseña qw1234
No era necesario trabajar el login local porque lo que se practicaba eran los TOTPs.

Lo que sí funciona es la conexión con la API de google y con su generador de códigos temporales de un solo uso.
Una vez descargada la app de google authenticator en el móvil, se puede vincular este login con sus TOTPs.

Se excanea el código QR y se introduce el google code para confirmar la autenticación.
