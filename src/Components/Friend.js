import React from 'react'

function Friend({friend, unfriend}) {
  return (
    <div>Friend
        <li onClick={() => unfriend(friend)}>{friend}</li>
    </div>
  )
}

export default Friend