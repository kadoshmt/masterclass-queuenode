import Mail from '../lib/Mail'

export default {
  key: 'UserReport',
  async handle({ data }){
    const { user } = data
    
    setTimeout(function(){ 
      console.log(user) 
    }, 10000);    
  }
}
