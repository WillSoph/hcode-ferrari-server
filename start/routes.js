'use strict'


const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


// Route.get('/admin/users', 'UserController.index')
// Route.get('/admin/users/:id', 'UserController.show')
// Route.post('/admin/users', 'UserController.store')
// Route.delete('/admin/users/:id', 'UserController.destroy').middleware('auth')

Route.post('/auths', 'AuthController.store')
Route.post('/users', 'UserController.store')

Route.group(() => {
  Route.resource('users', 'UserController').apiOnly()
}).prefix('admin').middleware(['auth'])
