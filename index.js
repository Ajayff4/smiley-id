import { constants } from "./constants/constants.js";

const uniqueGenerator = (format, len=21) => {
  let uniqueString='';
  while(len--) {
    uniqueString += format[parseInt(Math.random()*format.length)];
  }
  return uniqueString;
}

const validator = (uniqueString, type='') => {
  let checkSet, len=uniqueString.length;
  
  switch(type) {
    case 'otp':
      checkSet = constants.NUMERICAL;
      while(len--) {
        if (!checkSet.includes(uniqueString[len])) {
          return false;
        }
      }
      return true;
    case 'nanoid':
      checkSet = constants.UPPERCASE + constants.LOWERCASE + constants.NUMERICAL + '_-';
      while(len--) {
        if (!checkSet.includes(uniqueString[len])) {
          return false;
        }
      }
      return true;
    case 'uuid':
      if (uniqueString[8]!=='-' || uniqueString[13]!=='-' || uniqueString[18]!=='-' || uniqueString[23]!=='-') return false;
      checkSet = 'abcdef' + constants.NUMERICAL + '-';
      while(len--) {
        if (!checkSet.includes(uniqueString[len])) {
          return false;
        }
      }
      return true;
    default:
      const subStrings = uniqueString.split('^-^').map(subString => subString===4);
      if (subStrings.includes(false) && subStrings.length !== 4) return false;
      checkSet = constants.UPPERCASE + constants.LOWERCASE + constants.NUMERICAL + constants.SYMBOLS + '^-';
      while(len--) {
        if (!checkSet.includes(uniqueString[len])) {
          return false;
        }
      }
      return true;
  }
}

/**
 * Generates unique id of 16 digits which consists of [A-Za-z0-9_~#$%&*]
 * @returns {string} - The smileyId of 16 length.
 */
 const unique = () => {
  try {
    const format = constants.UPPERCASE + constants.LOWERCASE + constants.NUMERICAL + constants.SYMBOLS;
    return uniqueGenerator(format,4) + '^-^' + uniqueGenerator(format,4) + '^-^' + uniqueGenerator(format,4) + '^-^' + uniqueGenerator(format,4);
  } catch(err) {
    return err;
  }
}

/**
 * Generates OTP of upto 15 digits if otherwise OTP of the given length.
 * @param {number} [len] - The length of output.
 * @returns {string} - The otp of desired length.
 */
export const otp = (len=6) => {
  try {
    if (isNaN(parseInt(len))) return Error("Invalid length.")
    if (len > 15) return Error("Too big to handle");

    let OTP = parseInt(Math.random()*Math.pow(10,len)).toString();
    if (OTP.length < len) {
      return '0'.repeat(len - OTP.length).concat(OTP);
    }
    else {
      return OTP;
    }
  } catch(err) {
    return err;
  }
}

/**
 * Generates nanoid of 21 digits if length is not provided.
 * @param {number} len - The length of output.
 * @param {string} [format] - Predefined nanoid format [A-Za-z0-9_-].
 * @returns {string} - The nanoid of desired length.
 */
const nanoid = (len=21, format=constants.UPPERCASE + constants.LOWERCASE + constants.NUMERICAL + '_-') => {
  try {
    if (isNaN(parseInt(len))) return Error("Invalid length.")

    return uniqueGenerator(format,len);
  } catch(err) {
    return err;
  }
}

/**
 * Generates uuid of 32 digits.
 * @param {number} len - The length of output.
 * @param {string} [format] - Predefined nanoid format [a-z0-9-].
 * @returns {string} - The nanoid of desired length.
 */
const uuid = () => {
  try {
    const format = 'abcdef' + constants.NUMERICAL;
    return uniqueGenerator(format,8) + '-' + uniqueGenerator(format,4) + '-' + uniqueGenerator(format,4) 
      + '-' + uniqueGenerator(format,4) + '-' + uniqueGenerator(format,12);
  } catch(err) {
    return err;
  }
}

/**
 * Generates unique id of given format.
 *   in case of no parameters provided default format is returned
 * @param {string} format - The format of the unique id.
 * @param {number} [len] - The length of output.
 * @returns {string} - The otp of desired length.
 */
const smileyId = (format, len) => {
  let data;
  switch(format) {
    case 'otp': 
      data = otp(len);
      return validator(data, 'otp') ? data : smileyId(format,len);
    case 'nanoid':
      data = nanoid(len);
      return validator(data, 'nanoid') ? data : smileyId(format,len);
    case 'uuid':
      data = uuid();
      return validator(data, 'uuid') ? data : smileyId(format,len);
    default:
      data = unique();
      return validator(data) ? data : smileyId(format,len);
  }
}

export default {
  smileyId,
  otp,
  nanoid,
  uuid
};