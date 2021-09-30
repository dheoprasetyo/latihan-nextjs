import React from 'react'
import { useRouter } from 'next/router'

export default function UserDetail() {
    const router = useRouter()
    const idUser = router.query.uid
    return (
        <div>
            Hello user, dengan id : {idUser}
        </div>
    )
}