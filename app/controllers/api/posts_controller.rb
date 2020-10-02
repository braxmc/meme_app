class Api::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def create
    post = Post.new(post_params)
    if (post.save)
      render json: post
    else
      render json { errors: post.errors }, status: :uprocessable_entity
    end
  end

  def update
    post = Post.find(params[:id])
    if (post.update)
      render json: post
    else
      render json { errors: post.errors }, status: :uprocessable_entity  
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render json: { message: 'Post Deleted' }
  end

  private

    def post_params
      params.require(:post).permit(:pTitle, :pInfo, :pBody, :pImg)
    end
end
