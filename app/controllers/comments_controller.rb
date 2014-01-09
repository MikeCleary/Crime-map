class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      respond_to do |format|
        format.js {
          render :create
        }
        format.html {
          redirect_to crimes_index_path
        }
      end
    else
      render :js => 'alert("Comment must be at least 5 characters")', :status => :forbidden
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end
end
