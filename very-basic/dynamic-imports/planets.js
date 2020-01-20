System.register([], function(_export, _context) {
  return {
    execute: function() {
      _context.import('./jupiter.js').then(function(jupiter) {
        console.log('This planet is', jupiter.name)
        jupiter.details()
      })

      _context.import('./mercury.js').then(function(mercury) {
        console.log('This planet is', mercury.name)
        mercury.details()
      })
    }
  }
})
