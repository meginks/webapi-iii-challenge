import React from 'react'; 
import User from './User';

const UsersList = props => {
    return (
        <div>
          {props.users.map(user => {
         return (
           <User key={user.id} name={user.name} user={user} />
         )
       })}
        </div>
    )
}

export default UsersList;