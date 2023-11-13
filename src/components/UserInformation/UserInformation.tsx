
import './UserInformation.css'
import {UserAvatar} from './UserAvatar'
export function UserInformation() {
  return (
    <>
      <div className="user-wrapper">
        <UserAvatar/>
        <div className='user-informations'>
        
          <div className="title">
            <h2>Mariano Capiliku</h2>
            <a href="">Github</a>
          </div>

          <div className="content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, ullam. Repellendus repellat error quo laborum inventore at, voluptates aliquam perspiciatis, dicta adipisci doloribus quia. Asperiores saepe sequi eum expedita officiis?</p>
          </div>

        </div>
      </div>
    </>
  )
}