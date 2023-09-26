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
  let [page, setPage] = useState(1)
  const posts = useAppSelector((state) => state.posts.posts)
  const searched = useAppSelector((state) => state.posts.searched)
  const PER_PAGE = 5
  const count = posts !== null ? Math.ceil(posts.length / PER_PAGE) : 1
  const _DATA = usePagination(searched, PER_PAGE)
  const getPosts = async () => {
    const res = await PostsAPI.getPosts()
    dispatch(setPosts(res))
  }
  const handleChange = (e: any, p: any) => {
    setPage(p)
    _DATA.jump(p)
  }

  const sortByDate = () => {
    dispatch(reversePosts())
  }

  return (
    <Container maxWidth={false}>
      <AddPostButton />
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
          {searched.length === 0 ? (
            <CircularProgress />
          ) : (
            _DATA.currentData().map((post: any, i: number) => {
              return <FeaturedPost key={i} {...post} />
            })
          )}
          <Pagination count={count} page={page} onChange={handleChange} />
        </Grid>
      </main>
    </Container>
  )
}

export default Feed
