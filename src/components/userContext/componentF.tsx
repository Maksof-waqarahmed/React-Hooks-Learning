import React, { useContext } from 'react'
import { UserNameContext, UserAgeContext } from '../../App'
function ComponentF() {
    const userName = useContext(UserNameContext);
    const userAge = useContext(UserAgeContext);
  return (
    <div>
        <h1>Component F</h1>
        {/* It is an old way */}
        {/* <UserNameContext.Consumer>
            {
                userName => (
                    <>
                    <p>User Context: {userName}</p>
                    <p>User Context: {userName}</p>
                    </>
                )
            }
        </UserNameContext.Consumer> */}


        <p>User Context: {userName}</p>
        <p>User Context: {userAge}</p>

    </div>
  )
}

export default ComponentF