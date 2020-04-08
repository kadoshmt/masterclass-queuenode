import Mail from '../lib/Mail'

export default {
  key: 'RegistrationMail',
  async handle({ data }){
    const { user } = data
    
    await Mail.sendMail({
      from: 'Queue Test <b95cd047e1-a77624@inbox.mailtrap.io>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo ao sistema de filas da RocketSeat :D`
    })
  }
}
