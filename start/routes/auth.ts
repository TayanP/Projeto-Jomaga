import Route from '@ioc:Adonis/Core/Route'

Route.post('/auth', 'Auth/Main.store')

//destroy vai precisar uma autenticação
Route.delete('/auth', 'Auth/Main.destroy').middleware('auth')