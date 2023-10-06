import React, { FC, ReactNode, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import FeaturedPost from '../components/Post'
import Header from '../components/Header'
import WithAuth from '../hoc/WithAuthorized'
import { PostsAPI } from '../api/posts'
import { Button, CircularProgress, Pagination } from '@mui/material'
import usePagination from '../hooks/Pagination'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getPostsThunk, reversePosts, setPosts } from '../store/features/Posts'
import { AddPostButton } from '../components/AddPostButton'

const Feed: FC = (): JSX.Element => {
  useEffect(() => {
    dispatch(getPostsThunk())
  }, [])
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector((state) => state.auth.isAuthorized)
  const isFetching = useAppSelector((state) => state.posts.isFetching)
  let [page, setPage] = useState(1)
  const posts = useAppSelector((state) => state.posts.posts)
  const searched = useAppSelector((state) => state.posts.searched)

  const PER_PAGE = 5
  const _DATA = usePagination(searched, PER_PAGE)
  const count = posts !== null ? Math.ceil(searched.length / PER_PAGE) : 1

  const handleChange = (e: any, p: any) => {
    setPage(p)
    _DATA.jump(p)
  }

  const sortByDate = () => {
    dispatch(reversePosts())
  }

  return (
    <Container maxWidth={false}>
      <Header title="RSS Feed" />
      <Button onClick={sortByDate}>Sort by date</Button>
      <main>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          spacing={4}
        >
          {isFetching ? (
            <div
              style={{ height: '50vh', display: 'flex', alignItems: 'center' }}
            >
              <CircularProgress />
            </div>
          ) : searched.length === 0 ? (
            'No posts'
          ) : (
            _DATA.currentData().map((post: any, i: number) => {
              return <FeaturedPost key={i} {...post} />
            })
          )}
          {isFetching ? null : searched.length > 0 ? (
            <Pagination
              style={{ position: 'fixed', bottom: 130 }}
              count={count}
              page={page}
              onChange={handleChange}
            />
          ) : null}
        </Grid>
      </main>
      {isAuth ? <AddPostButton /> : null}
    </Container>
  )
}

export default Feed
