// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

class ValidationError extends Error {
  constructor(message = "Invalid input", ...parameters) {
    super(...parameters);
    this.message = message;
    this.name = "ValidationError";

    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
  }
}

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}