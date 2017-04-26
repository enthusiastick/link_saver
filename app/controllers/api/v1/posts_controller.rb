class Api::V1::PostsController < Api::ApiController

  def index
    posts = Post.all
    render json: posts
  end

end
