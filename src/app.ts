let userInput: unknown; //unsure what user will enter (string, number)
let userName: string;

userInput = 5;
userInput = "Hello";

//unknown forces the checking of type prior to assignment
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError("An error occurred", 500);
