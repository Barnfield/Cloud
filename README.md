# Table of Contents
- [Initial setup](#init)
- [Notes](#notes)
- [Databases](#databases)
	- [CockroachDB](#cockroachDB)
	- [Cosmos-DB](#cosmos)
- [Tools](#tools)
	- [TMUX](#tmux)
	- [Editors](#editors)
		- [VIM](#vim)
<hr/>

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
- This and all the README's in github are written in markdown 
- Connecting multiple VLANS ([Click Here](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-vnet-vnet-resource-manager-portal))

# <a name="databases"></a>Databases
## <a name="cockroachDB"></a>[CockroachDB](https://www.cockroachlabs.com/)
1. Setup and deploy a database
	1. [Install:](https://www.cockroachlabs.com/docs/stable/install-cockroachdb.html)
		1. get the tar-gz file and extract it
		
				wget -qO- https://binaries.cockroachdb.com/cockroach-v2.0.5.linux-amd64.tgz | tar  xvz
			
		1. Copy the extracted files to /usr/local/bin 
		
				cp -i cockroach-v2.0.5.linux-amd64/cockroach /usr/local/bin
	1. [Start the first node:](https://www.cockroachlabs.com/docs/stable/start-a-local-cluster.html)
		1. use the command
		
				cockroach start --insecure --host=localhost
		1. To create and join new nodess run the above command with the join argument e.g.
		
				--join=localhost:26257
				
1. Create a table (or multiple)
	1. In order to use the Database using the SQL commands enter:
			
			cockroach sql --insecure
	
	1. This will start the inbuild SQL interpreter, from this you can use normal SQL commands to create databases, tables, querys, ...
		1. **NOTE:** The SQL terminal is not a true SQL terminal. It cannot create tables that use auto-increment (as this is expensive across distributed systems
		1. **SQL file** I have put a .sql file in the folder *BackEnd > SQL*. This file will create a database and 2 tables, to run enter the sql shell and use the command:
			
			source <PATH>/CreateDBandTable.sql
	1. In order to interact with the database safely with a program, Cockroach offers **ORM**'s or **Driver**'s e.g.
		1. [NodeJS](https://www.cockroachlabs.com/docs/stable/build-a-nodejs-app-with-cockroachdb-sequelize.html)
		1. [Python](https://www.cockroachlabs.com/docs/stable/build-a-python-app-with-cockroachdb.html)
		1. [Rust](https://www.cockroachlabs.com/docs/stable/build-a-rust-app-with-cockroachdb.html)
		1. [More/Others](https://www.cockroachlabs.com/docs/stable/build-an-app-with-cockroachdb.html)
1. Learn/Identify how to:
	1. Read
	1. Write
	1. Inspect
	1. Query
1. Extras:
	1. To monitor the cluster you can access the Admin-UI by going to (change localhost to address if needed):
	
			http://localhost:8080
	
### Useful links
| Link | Rating |
|------|--------|
|      |        |
|      |        |
|      |        |
## <a name="cosmos"></a>[Cosmos-DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction)
1. Setup and deploy a database
	1. Setup and Deploy
		1. Go to **Portal**
		1. click **ADD > Databse > Azure Cosmos DB**
		1. Ensure (for ease) that the **Resource group** and **Location** is the samme as your VM.
		1. Set the **API** to SQL
		1. Set **ID** to any value you like
		1. click **Next: Networks** and **Create a new network**
		1. **Review and Create**
	1. Link to VM
		1. **TODO: Cosmos research on hold/canceled due to lack of useability when compared to above alternative**
1. Create a table (or multiple)
1. Learn/Identify how to:
	1. Read
	1. Write
	1. Inspect
	1. Query
### Useful links
| Link | Rating |
|------|--------|
|https://github.com/Azure-Samples/angular-cosmosdb/blob/master/VIDEOS.md| 8  |
|https://docs.microsoft.com/en-us/azure/cosmos-db/| 8 |
|      |        |

 

	
# <a name="tools"></a>Tools
## <a name="tmux"></a>TMUX
- to use TMUX type "tmux" into the terminal withou the ""
- Use this like any normal terminal 
- If you want commands to continue running when you close the shell you will need to detach the session this is done by: **ctrl+b** followed by hitting **d**etatch 

		ctrl+b d
- to rejoin the session after it has been detatched run 

		tmux attach
- Other useful actions:
	- **ctrl+b** enters command mode
	- **ctrl+b %** split terminal vertically
	- **ctrl+b "** split terminal horizontally
	- **ctrl+b arrowKey** switch which plane your working in
	- **ctrl+b t** start panes screensaver (a clock)
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
	- If ever stuck or losst in vim it ESC (sometimes twice is required). This will take you back to **command mode** (this is the root mode)
	- **command mode** (AKA normal mode) is the default mode in vim, in this mode you can enter common commands such as:
		- **dd** to cut a line (delete and copy to buffer)
		- **yy** to yank (copy) a line to the buffer 
		- **p** to paste the content of the buffer below the cursor
			- On top of the inbuilt copying and pasting functions in VIM you can still use your standard machines functions)
		- **u** undo 
		- **shift + A** to append to the end of a line (move cursor to end of line and enter insert mode)
		- **i** to enter insert mode
			- **o** will create a blank line below and enter insert mode (cap **O** does this but above)
		- **x** to delete the char under the cursor
		- **:w** to save to current file (**:w filename** will *save as* to new file, Doing thiss in visual mode allows you to save the highlighted section to a new file)
		- **:q** to quit (**:wq** saves and quits, **:q!** force quit without saving)
		- **:5** to jump to line 5
			- entering a number without the : followed by enter will jump 5 lines down 
			- entering a number without the : followed by - will jump 5 lines up
		- **ciw** commands can be joined. This command combo stands for **C**hange **I**nner **W**ord, 
		This will delete the whole word under the cursor and enter insert mode. (Very useful when combined with the **.** command)
		- **$** will jump to end of line, so if you did **d$** this would delete all content between the cursor and the end of the line
		- **5w** will move the cursor forward 5 words, placing a number before any command will repeat the command n times (e.g. **d3w** will delete the 3 following words
		- **rg** replace the char under cursor with g
		- **.** the all powerful repeat command. This allow the user to replay the last used sequence of actions
		- **:r filename** will write the content of filename to the cursors location (**r**etrive
			- **:r !dir** will insert the output of the dir command
		- **R** Replace mode (enter insert mode but replace chars with new input)
		- Searching (regex)
			- to ignore case when searching run **:set ic** before running the below commands
			- **/wheat** will search for the wor wheat (**n** for next **N** for previous)
			- Searching for closing bracket, put cursor on bracket and hit **%**
			- Replace/**S**ubsitute **:s/old/new/g** will subsiture old for new globally (the**/g** is optional for global application of the function, without it only the next occurence would be changed)
		- Running external terminal commands **:!dir** will run the dir command
		- **:set number** provides line numbers in the editor (add **!** at end to toggle)
		- **:set relativenumber** enable relitive line numbers(add **!** at end to toggle)
		- For loop
			- **:for i in range(1,10) | put ='192.168.0.'.i | endfor** will loop from 1-10 (inclusive) writing these IP addresses
	- **insert mode** allows you to insert text (just like a normal editor)
		- **esc** to exit insert mode and return to command mode
	- For further help type:
			
			vimtutor 
		into the terminal or look for any cheat sheet online
		
		
	<img src="https://raw.githubusercontent.com/durgaswaroop/Your_First_Lesson_In_Vim/master/pictures/vim_modes_small.png" style="width:300px;"/>
	
