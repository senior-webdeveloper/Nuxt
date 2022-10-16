import axios from 'axios'
export default async function ({ app: { $auth } }) {
  if (!$auth.loggedIn) {
    return
  }
  const { email } = $auth.$storage.getUniversal('user')
  const appMetaData = $auth.$storage.getUniversal('appMetaData')
  if(!appMetaData) {
    try{
      const { data } = await axios.post(`http://localhost:3000/api/v1/auth/management`, { email })
      $auth.$storage.setUniversal('appMetaData', data, false)
    }catch(err){
      console.log("appMedatada error", err)
    }
  } 
}