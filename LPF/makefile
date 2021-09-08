run: main.js
	php -S 0.0.0.0:8000
	#python server.py

%.js : %.kt
	kotlinc-js $< -output js/$@

