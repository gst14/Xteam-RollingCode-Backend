# Xteam-RollingCode-Backend

Para el correcto funcionamiento de este proyecto es necesaria la creación de un archivo **.env** en la raiz del directorio. Por ejemplo de esta manera:

    BASE_URL=localhost
    PORT=8080
    DB_URL_CONNECTION_GAMES=mongodb://localhost:27017/XteamDB
    SECRET_KEY=bebitofiufiu

Para probar las distintas funcionalidades del servidor, podemos importar este archivo en **Postman**, para tener todos los endpoints listos para testear. 
NOTA:  En este caso estamos usando **variables de entorno** de postman

    {
    	"info": {
    		"_postman_id": "b96f4af9-b1c4-4fa3-9e6f-a67265bf7ef0",
    		"name": "Xteam Requests",
    		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    		"_exporter_id": "10730886"
    	},
    	"item": [
    		{
    			"name": "Games",
    			"item": [
    				{
    					"name": "Get all games",
    					"request": {
    						"method": "GET",
    						"header": [],
    						"url": {
    							"raw": "{{BASE_DEV_ENV}}:{{PORT_DEV_ENV}}",
    							"host": [
    								"{{BASE_DEV_ENV}}"
    							],
    							"port": "{{PORT_DEV_ENV}}"
    						}
    					},
    					"response": []
    				},
    				{
    					"name": "Create game",
    					"request": {
    						"method": "GET",
    						"header": []
    					},
    					"response": []
    				}
    			]
    		},
    		{
    			"name": "Users",
    			"item": [
    				{
    					"name": "Create an user",
    					"request": {
    						"method": "GET",
    						"header": []
    					},
    					"response": []
    				},
    				{
    					"name": "Login an user",
    					"request": {
    						"method": "POST",
    						"header": [],
    						"url": {
    							"raw": "{{BASE_DEV_ENV}}:{{PORT_DEV_ENV}}/users/login",
    							"host": [
    								"{{BASE_DEV_ENV}}"
    							],
    							"port": "{{PORT_DEV_ENV}}",
    							"path": [
    								"users",
    								"login"
    							]
    						}
    					},
    					"response": []
    				},
    				{
    					"name": "Get all users",
    					"request": {
    						"method": "GET",
    						"header": []
    					},
    					"response": []
    				}
    			]
    		}
    	]
    }

Ejemplo de como configurar variables de entorno en **Postman**

![Captura de Pantalla 2022-07-26 a la(s) 21 38 38](https://user-images.githubusercontent.com/24501982/181136240-cbb31300-f2d5-4030-bbf5-9d843a8febf1.png)

