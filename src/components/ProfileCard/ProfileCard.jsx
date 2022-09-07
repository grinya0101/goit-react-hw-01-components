
  

export const ProfeleCard = ({ username, tag , location , avatar }) => {
    return <div>
        
         <img src={avatar} className="avatar" alt="User avatar"  />
         <h2>{username}</h2>
         <p>{tag}</p>
         <p>{location}</p>
         <ul>
            <li></li>

         </ul>
  
    </div>  

    



}