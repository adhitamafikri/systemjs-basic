console.log('This is a module form ./some-module')

// export default function SomeModule() {
//   console.log('A function from ./some-module')
// }

System.register([], function(_export, _context) {
  return {
    execute: function() {
      _export('moduleHello', moduleHello)

      function moduleHello() {
        alert('Hello from module some-module')
      }
    }
  }
})
