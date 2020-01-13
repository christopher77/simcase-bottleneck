require 'rails_helper'

module Api
  RSpec.describe UsersController, type: :controller do
    before(:each) do
      User.delete_all
      Score.delete_all

      @user1 = User.create(name: "christophercito")
      @user2 = User.create(name: "Max")

      @score1 = Score.create(score: 3000, user_id: 2)
      @score2 = Score.create(score: 2000, user_id: 1)

    end

    describe 'GET: api/user' do
      it 'returns http status ok' do
        get :index
        expect(response).to have_http_status(:ok)
      end

      it 'list Users' do
        get :index
        users = JSON.parse(response.body)
        expect(users.size).to eq 2
      end
    end 

    describe "GET: api/score/:id/user" do
      it "Respond with status ok" do
        get :index, params: { score_id: @score1.id }
        expect(response).to have_http_status(:ok)
      end
      it "score of a user" do
        get :index, params: { score_id: @score1.id }
        users = JSON.parse(response.body)
        expect(users.size).to eq 2
        expect(users[0]["name"]).to eq("christophercito")
      end
    end

  end
end