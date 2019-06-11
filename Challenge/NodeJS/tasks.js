
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
var tasks = [{"task": "come", "done": false}, {"task": "go", "done": false}, {"task": "know", "done": true}, {"task": "flow", "done": true}];
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  text= text.replace('\n','').trim();
  var arrText = text.split(' ');
  console.log(arrText);
  if (arrText[0] === 'quit' || arrText[0] === 'exit') {
    quit();
  }
  else if(arrText[0] === 'hello'){
    hello(arrText[1]);
  }
  else if (arrText[0] === 'list'){
    list();
  }
  else if (arrText[0] === 'add'){
    add(arrText);
  }
  else if(arrText[0] === 'help'){
    help();
  }
  else if (arrText[0]=== 'remove'){
    remove(arrText);
  }
  else if (arrText[0] === 'edit'){
    edit(arrText);
  }
  
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */

function hello(text){
  if (!text){
  console.log('hello!')}
  else{
  console.log("hello" + " " +text+'!')
}
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * help command that lists all possible commands that you can type
 */
function help(){
  console.log('Bellow are the possible commands: \n', '\n', 'quit\n','hello\n','help\n', 'list\n', 'add\n', 'remove\n', 'edit\n')
}

/**
 * lists all the tasks on new line numbered
 * 
 */
function list(){
  for (i=0; i<tasks.length; i++){
    if(tasks[i].done == true){
      console.log(("[✓]"+(i+1) + "." + tasks[i].task).trim())
      }else{
       
        console.log(("[]"+(i+1) + "." + tasks[i].task).trim())
      }
    
  }
}


/**
 * 
 * add new task to the list.
 * if you type add without anything it will return Error
 */
function add(arrText){
  if (arrText[1] != undefined){
  tasks.push({task:arrText[1], done: false})
  } else {
    console.log("Error")
  }
}

/**
 * 
 * if you type remove alone it will remove the last task in the list.
 * if you type remove followed by the number of the task then it will remove this task
 */
function remove(arrText){
 if (arrText[1] === undefined){
    tasks.pop();
 } else if (arrText[1]-1 >tasks.length){
   console.log("  This task number does not exist!")
 }
 else {
   tasks.splice(arrText[1]-1, 1)
 } 
}

/**
 * if you type edit alone it will return Error
 * if you type edit followed by anything it will edit last task in list to the string you typed after edit
 * if you type edit followed by number then string it will replace the string in the task number to the string you typed
 */
function edit(arrText){
  
  if (arrText[1] === undefined){
    console.log("Error")
 
  } else if (arrText[1]-1 < tasks.length){
    tasks.splice(arrText[1]-1, 1, arrText.slice(2).join(" "))

  } else {
    tasks.splice(-1, 1, arrText.slice(1).join(" "))
  }
  
}



// The following line starts the application
startApp("Ashraf El Jurdi")
