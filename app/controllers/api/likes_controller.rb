class Api::LikesController < ApplicationController
  before_action :set_post

  def index
    render json: @post.likes
  end

  def create
    like = @post.likes.new(like_params)
    if (like.save)
      render json: like
    else
      render json: { errors: comment.errors }, status: :unprocessable_entity      
    end
  end

  def update
    like = @post.like.find(params[:id])
    if (like.update)
      render json: update
    else
      render json: { errors: comment.errors }, status: :unprocessable_entity      
    end
  end

  def destroy
    @post.like.find(params[:id]).destroy
    render json: { message: 'Comment Deleted'}
  end

  private

    def set_post
      @post = Post.find(params[:post_id])
    end

    def like_params
      params.require(:like).permit(:likes)
    end

end
