const ValidationError = require('./validation-error');

class MaximumLengthExceededError  extends ValidationError {
  constructor(lengthOfDifference, message) {
    
    if(lengthOfDifference) {
      super(message = `Maximum length exceeded by ${lengthOfDifference}`);
    } else {
      super(message = `Maximum length exceeded`);
    }
    
    this.name = "MaximumLengthExceededError";
    this.lengthOfDifference = lengthOfDifference;
    
  }
}

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}