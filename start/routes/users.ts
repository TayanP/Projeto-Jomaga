import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'Users/Register.store')
//buscar informações
Route.get('/users/register/:key', 'Users/Register.show')
//atulizando a informação
Route.put('/users/register', 'Users/Register.update')



Route.post('/users/forgot-password', 'Users/ForgotPassword.store')
Route.get('/users/forgot-password/:key', 'Users/ForgotPassword.show')
Route.put('/users/forgot-password', 'Users/ForgotPassword.update')