System.register([], function(_export, _context) {
  return {
    execute: function() {
      function details() {
        console.log('Jupiter is the biggest planet in our solar system, the giant one')
      }

      _export('name', 'Jupiter the Great')
      _export('details', details)
    }
  }
})
