import LikeModel from "./like.model.js";
export default class LikeController {
    // Retrieve all likes for a specific post
    get(req, res) {
        let postId = req.params.postId;
        let likes = LikeModel.getByPostId(postId)
        res.status(200).json(likes);

    }
    
    // Toggle like status for a specific post by the current user
    toggleLikeStatus(req, res) {
        let postId = req.params.postId;
        let userId = req.userId;
        let message = LikeModel.toggle(userId, postId)
        res.status(200).send(message);
    }


}
