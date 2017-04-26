class Api::V1::PostsController < Api::ApiController
  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render_object_errors(post)
    end
  end

  def index
    posts = Post.where(user: current_user)
    render json: posts
  end

  def post_params
    params.require(:post).permit(:summary, :url).merge(user: current_user)
  end
end
