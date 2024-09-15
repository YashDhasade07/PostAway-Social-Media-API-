import PostModel from "./post.model.js";
export default class PostController {
    getAll(req, res) {
        let allPosts = PostModel.get();
        res.status(200).json(allPosts)
    }

    getPost(req,res){
       let id = req.params.id;
       let post = PostModel.getByPostId(id);

       if(post){
        res.status(200).json(post)
       }else{
        res.status(404).send('post not found')
       }
    }

    getUserPosts(req,res){
        let userId = req.userId;
        let userPost = PostModel.getByUserId(userId);
        if(userPost.length >=0){
            res.status(200).json(userPost)
        }else{
            res.status(404).send('user has no posts')
        }
    }

    create(req, res) {
      let imageUrl= req.file.filename;
      let userId = req.userId;
      let caption = req.body.caption;
      PostModel.add(userId,caption,imageUrl)
      res.status(200).send('Post added sucessfully')
    }
    
    delete(req, res) {
        let id = req.params.id;
        PostModel.delete(id);
        res.status(200).send('post deleted sucessfully')
    }
    update(req, res) {
      let id = req.params.id;  
      let imageUrl= req.file.filename;
      let userId = req.userId;
      let caption = req.body.caption;
      PostModel.updatePost(id,userId,caption,imageUrl);
      res.status(200).send('Post updated sucessfully')
    }
}