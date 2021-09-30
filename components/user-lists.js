import React from 'react'
import { Row } from 'react-bootstrap'
import UserItem from './user-item'

function userLists({ users }){
    return (
        <Row className="gy-2">
            {users.map((user)=> (
                <UserItem user={user} key={user.id}/>
            ))}
        </Row>
    )
}

export default userLists