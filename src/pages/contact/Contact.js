import { contact } from "../../constant/contactinfo"

export default function Contact() {
  return (
    <div>
    <table>
      <tr>
        <th>Name:</th>
        <th>Email:</th>
        <th>Phone:</th>
      </tr>
      
       { contact.map((contactInfo,index) =>{
        return ( <tr key = {index}>
          <td>{contactInfo.name}</td>
          <td>{contactInfo.email}</td>
          <td>{contactInfo.phone}</td>  
          </tr>)
       }

       )}
      
     
   </table>
   </div>
  )
}
