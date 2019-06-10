
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
var tasks = ["come", "go", "know", "flow"];
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
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.slice(0, 5) === 'hello'){
    hello(text);
  }
  else if (text === 'list\n'){
    list();
  }
  else if (text.slice(0, 3) === 'add'){
    add(text);
  }
  else if(text.slice(0, 4) === 'help'){
    help();
  }
  else if (text.slice(0, 6) === 'remove'){
    remove(text);
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
  console.log(text.trim(text.split(" ", 1) +text.slice(5))+'!')
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
  console.log('Bellow are the possible commands: \n', '\n', 'quit\n','hello\n','help\n', 'list\n', 'add\n', 'remove\n')
}

/**
 * lists all the tasks on new line numbered
 * 
 */
function list(){
  
  
  for (i=0; i<tasks.length; i++){
    console.log((i+1) + "." + tasks[i])
  }

}

/**
 * 
 * add new task to the list.
 * if you type add without anything it will return Error
 */
function add(text){
  if (text.slice(5) != ""){
  tasks.push(text.slice(4))
  } else {
    console.log("Error")
  }
}

/**
 * 
 * if you type remove alone it will remove the last task in the list.
 * if you type remove followed by the number of the task then it will remove this task
 */
function remove(text){
 if (text.slice(7) === ""){
    tasks.pop();
 } else if (text.slice(7)-1 >tasks.length){
   console.log("  This task number does not exist!")
 }
 else {
   tasks.splice(text.slice(7)-1, 1)
 } 
}
// The following line starts the application
startApp("Ashraf El Jurdi")
