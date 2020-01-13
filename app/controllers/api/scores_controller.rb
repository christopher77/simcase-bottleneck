class Api::ScoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def tops
    top_score = Score.order(score: :desc).limit(5).includes(:user)
    render json: top_score.as_json(only: [:score, :success_rate, :updated_at], include: {user: {only: [:name, :id]}})
  end

  def create
    score = Score.new(score_params)
    if score.save
      render json: score, status: 201
    else
      render json: "error"
    end
  end

  private

  def score_params
    params.require(:score).permit(:score, :success_rate, user_attributes: :name)
  end
end

