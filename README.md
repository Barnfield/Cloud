# Initial setup
1. (optional) Create a directory on your machine
1. clone the repo using the command:

		git clone https://github.com/viktorkaslikSchneider/Cloud.git
1. Run the below command and jump to [launch](#launch)  or follow the remaining steps

		sudo bash initSetup.sh
1. install node with the command:

		sudo apt install nodejs -y && sudo apt install npm -y
1. now node is installed, you can create any node app. npm is a package manager.
1. To run this you will need to install the following:

		npm install express 
		npm install body-parser 
		npm install path
		npm install ejs

1. <a name="launch"></a>**Launch:** Once the above has been done the server should launch successfully. To launch it you will need to run:

		node simpleServer.js
1. Now you have set up the server you may get a warning when starting up the VM. This warning is just to say that you have not given the project a discription. To do this navigate to the folder containing the simpleServer.js file and run and follow the step

		npm init


1. Setting up the port:
	1. To access the webpage you will need to ensure that the port 3000 has been configured for incoming requests. To do this:
	1. on your Azure VM page go to network and then add the port there.




# Notes:

- Once the session has ended the server will halt, To keep it running use TMUX

## TMUX
- to use TMUX type "tmux" into the terminal withou the ""
- Use this like any normal terminal 
- If you want commands to continue running when you close the shell you will need to detach the session this is done by: **ctrl+b** followed by hitting **d**etatch 

	ctrl+b d
- to rejoin the session after it has been detatched run 

		tmux attach
