
module.exports =
  [
    {
      method: 'GET',
      path: '/',
      handler: function(request,h) {
        return "Here's a variab;e"
      },
      config: {
        description: "Here's a variable"
      }
    },
    {
      method: 'GET',
      path: '/note',
      handler: function (request, h) {
        return "Adds New Note"
      },
      config: {
        description: 'Adds a new note'
      }
    }
  ]
