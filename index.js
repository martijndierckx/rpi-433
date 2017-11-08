var _       = require('underscore'),
    Emitter = require('./Emitter');

module.exports = {

  /**
   * Send a decimal code through 433Mhz (and return a promise).
   *
   * @param   [options]   Options to configure pin or pulseLength
   *                      options.pin           Pin on which send the code
   *                      options.pulseLength   Pulse length
   * 
   * @return  Function    Function used to send codes
   */
  emitter: function (options) {
    
    _.defaults(options, {
      pin: 0,
      pulseLength: 350
    });
    
    return new Emitter(options);
    
  }

};