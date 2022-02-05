import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../../redux/actions/userActions'



const Users = () => {


    const dispatch = useDispatch()

    const usersListData = useSelector(state => state.usersList)

    const {loading, error, users} = usersListData

    useEffect(() => {
        dispatch(getUsers()) 
      }, [dispatch])

    return (
        <div>
               {users && users.map((user, i) => {
                            return (
                                <div key={i}>
                                           <h3>{user.name}</h3>
                                </div>
                            )
                        })
                 }

        </div>
    )
}

export default Users
