/**
 * @description Check arguments equals
 * @param {Any} arg - First argument
 * @param {Any} arg2 - Second argument
 * 
 * @returns {Any}
 */

function objectEquals(arg, arg2) {
  if (typeof arg === typeof arg2) {
    if (Array.isArray(arg) && Array.isArray(arg2)) {
      if (arg.length === arg2.length) {
        for (let i = 0; i < arg.length; i++) {
          if (!objectEquals(arg[i], arg2[i])) return false;
        }
        return true;
      } else return false;
    } else if (!Array.isArray(arg) && !Array.isArray(arg2)) {
      if (typeof arg === "object") {
        if (arg.source && arg2.source && 
            arg.constructor.name && arg2.constructor.name &&
            arg.constructor.name == 'RegExp' && arg2.constructor.name == 'RegExp'
        ) {
          return arg.source == arg2.source;
        }

        const argNames = Object.getOwnPropertyNames(arg);
        const arg2Names = Object.getOwnPropertyNames(arg2);
  
        if (argNames.length != arg2Names.length) return false;
  
        for (let i = 0; i < argNames.length; i++) {
          if (argNames[i] === arg2Names[i]) {
            if (!objectEquals(arg[argNames[i]], arg2[arg2Names[i]])) return false;
          }  
          else return false;
        } 
  
        return true;
      } else if (typeof arg === "string" || "number") { 
        return arg === arg2;
      }
    }
  } else return false;
}

module.exports = objectEquals;
