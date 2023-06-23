import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../../store/users/users-slice';

export default function UsersPage() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers)
  }, [dispatch],
  );
  return (
    <div>UsersPage</div>
  )
}
