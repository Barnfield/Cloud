- [Initial setup](#init)
- [Notes](#notes)
- [Tools](#tools)
	- [TMUX](#tmux)
	- [Editors](#editors)
		- [VIM](#vim)


# <a name="init"></a>Initial setup
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
	Enter a name for the project and then the rest of the questions may be skipped

1. Setting up the port:
	1. To access the webpage you will need to ensure that the port 3000 has been configured for incoming requests. To do this:
	1. on your Azure VM page go to network and then add the port there.




# <a name="notes"></a>Notes:

- Once the session has ended the server will halt, To keep it running use TMUX

# <a name="tools"></a>Tools
## <a name="tmux"></a>TMUX
- to use TMUX type "tmux" into the terminal withou the ""
- Use this like any normal terminal 
- If you want commands to continue running when you close the shell you will need to detach the session this is done by: **ctrl+b** followed by hitting **d**etatch 

		ctrl+b d
- to rejoin the session after it has been detatched run 

		tmux attach
		
- Further tmux help
	- https://tmuxcheatsheet.com/
	- https://gist.github.com/MohamedAlaa/2961058
	
## <a name="editors"></a>Editors
### <a name="vim"></a>VIM
- I have only used **VIM** on the shell, as this is almost always guaranteed to be on a unix system
- Basic controls:
	- to start type 
		
			vim filename
		
	- this will open/create a file and start VIM in **command mode**
	- **command mode** is the default mode in vim, in this mode you can enter common commands such as:
		- **dd** to cut a line (delete and copy to buffer)
		- **yy** to yank (copy) a line to the buffer 
		- **p** to paste the content of the buffer below the cursor
			- On top of the inbuilt copying and pasting functions in VIM you can still use your standard machines functions)
		- **shift + A** to append to the end of a line (move cursor to end of line and enter insert mode)
		- **i** to enter insert mode
		- **x** to delete the char under the cursor
		- **:w** to save
		- **:q** to quit (**:wq** saves and quits, **:q!** force quit without saving)
		- **:5** to jump to line 5
		- **ciw** commands can be joined. This command combo stands for **C**hange **I**nner **W**ord, 
		This will delete the whole word under the cursor and enter insert mode. (Very useful when combined with the **.** command)
		- **.** the all powerful repete command. This allow the user to replay the last used sequence of actions
	- **insert mode** allows you to insert text (just like a normal editor)
		- **esc** to exit insert mode and return to command mode
	
