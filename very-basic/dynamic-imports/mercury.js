System.register([], function(_export, _context) {
  return {
    execute: function() {
      function details() {
        console.log('This planet is one of the closest to our sun')
      }

      _export('name', 'Mercury the closest to sun')
      _export('details', details)
    }
  }
})
