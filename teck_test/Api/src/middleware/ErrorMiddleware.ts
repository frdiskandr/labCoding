import { Response, Request} from "express"

const ErrorMiddleware = (error: any, req: Request, res: Response, next: Function) => {
  if (error) {
    return res.status(500).json({ message: "internal Server Error" }).end();
  }
  next();
}

export default ErrorMiddleware;