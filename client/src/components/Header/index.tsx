import React, { FC, useEffect, useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { Avatar, TextField } from '@mui/material'
import { ROUTES } from '../../constants/routes'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { logoutUser, setUserData } from '../../store/features/Auth'
import LocalStorage from '../../LocalStorage'
import { searchPosts } from '../../store/features/Posts'
import SessionStorage from '../../SessionStorage/SessionStorage'

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }): JSX.Element => {
  const [isAuth, setAuth] = useState(false)
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    const token = LocalStorage.getToken()
    const user = LocalStorage.getItem('user')
    if (!user) {
      const token = SessionStorage.getToken()
      const user = SessionStorage.getItem('user')
      if (token) {
        setAuth(true)
        dispatch(setUserData(user))
      } else setAuth(false)
      return
    }

    if (token) {
      setAuth(true)
      dispatch(setUserData(user))
    } else setAuth(false)
  })

  // const isAuth = useAppSelector((state) => state.auth.isAuthorized);
  const user = useAppSelector((state) => state.auth.user)
  console.log(user)
  const navigateToAuthPage = () => {
    navigate(ROUTES.AUTH)
  }

  const searchByWords = (e: any) => {
    dispatch(searchPosts(e.target.value))
  }

  const logout = () => {
    dispatch(logoutUser())
  }
  const avatar = user.slice(0, 1)
  return (
    <>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          justifyContent: 'space-around',
        }}
      >
        <TextField
          name="search"
          onChange={searchByWords}
          placeholder="Search"
          size="small"
        />

        {isAuthorized ? (
          <>
            <div style={{ display: 'flex' }}>
              <Avatar>{avatar}</Avatar>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={logout}
              >
                Log out
              </Button>
            </div>
          </>
        ) : (
          <Button variant="contained" size="small" onClick={navigateToAuthPage}>
            Sign in
          </Button>
        )}
      </Toolbar>
    </>
  )
}

export default Header
