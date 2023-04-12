export default class Validator {
  validateUsername(name) {
    const mainTest = /^([^\d-_])([a-zA-Z-_\d]*)([^\d-_])$/.test(name);
    const numberTest = /[\d]{3,}/.test(name);

    if (mainTest) {
      return !numberTest;
    } 
    return false;
  }
}