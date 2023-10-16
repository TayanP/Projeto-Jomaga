import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { User } from 'App/Models'

export default class UserKey extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public key: string
  
  @column()
  public userId: string


  //relacionamento de usuario com chave

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
