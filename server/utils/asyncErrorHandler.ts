export default function (func: any) {
  return (req: Request, res: Response, next: any) => {
    func(req, res, next).catch((err: any) => next(err))
  }
}
