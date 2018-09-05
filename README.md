# Initial setup
1. (optional) Create a directory on your machine
1. clone the repo using the command:
		git clone https://github.com/viktorkaslikSchneider/Cloud.git
1. install node with the command:
		sudo apt install node -y && sudo apt install npm -y
1. now node is installed, you can create any node app. npm is a package manager.
1. To run this you will need to install the following:
		npm install express 
		npm install body-parser 
		npm install path

path

1. Once the above has been done the server should launch successfully. To launch it you will need to run:
		node simpleServer.js
1. To access the webpage you will need to ensure that the port 3000 has been configured for incoming requests. To do this:
		1. on your Azure VM page go to network and then add the port there.
