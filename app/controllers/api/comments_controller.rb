class Api::CommentsController < ApplicationController
  before_action :set_post

  def index
    render json: @posts.comments
  end

  def create
    comment = @posts.comments.new(comment_params)
    if (comment.save)
      render json: comment
    else
      render json: { errors: comment.errors }, status: :unprocessable_entity
    end
  end

  def update
    comment = @posts.comments.find(params[:id])
    if (comment.update)
      render json: comment
    else
      render json: { errors: comment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @posts.comments.find(params[:id]).destroy
    render json: { message: 'Comment Deleted'}

  end

  private
  
    def set_post
      @post = post.find(params[:post_id])
    end

    def comment_params
      params.require(:comment).permit(:cAuthor, :cBody)
    end
end
