import CommentModel from "./comment.model.js";
export default class CommentController {
    get(req, res) {
        let postId = req.params.id;
        let comments = CommentModel.getByPostId(postId);
        if (comments) {
            res.status(200).json(comments)
        }
    }

    create(req, res) {
        let postId = req.params.id;
        let userId = req.userId;
        let content = req.body.content;
        CommentModel.add(userId,postId,content)
        res.status(200).send("comment added sucessfully")
    }
    delete(req, res) {
        let id = req.params.id;
        CommentModel.delete(id)
        res.status(200).send("comment deleted sucessfully")
    }
    update(req, res) {
        let id = req.params.id;
        let userId = req.userId;
        let {postId,content} = req.body;
        CommentModel.updateComment(id,userId,postId,content);
        res.status(200).send("comment updated sucessfully")
    }
}
