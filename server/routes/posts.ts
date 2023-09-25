import { Router, Request, Response } from 'express'
import { Posts } from '../constants/routes'
import PostsManager from '../controllers/Posts'

const router = Router()
const postsManager = new PostsManager()

router.get(Posts.posts, async (req: Request, res: Response) => {
  const posts = await postsManager.getPosts()
  res.status(200).json(posts)
})
router.get(Posts.post, async (req: Request, res: Response) => {
  const post = await postsManager.getPost(req.params.id)
  res.status(200).json(post)
})

router.post(Posts.posts, async (req: Request, res: Response) => {
  console.log(req.body)
  await postsManager.createPost(req.body.post)
})

router.put(Posts.post, async (req: Request, res: Response) => {
  await postsManager.updatePost(req.params.id, req.body.post)
})
router.delete(Posts.post, async (req, res) => {
  console.log(req.params)
  await postsManager.deletePost(req.params.id)
})

export default router
