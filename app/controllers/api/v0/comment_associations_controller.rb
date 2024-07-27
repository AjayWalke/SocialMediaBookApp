module Api
  module V0
    class CommentAssociationsController < ApplicationController
      skip_before_action :verify_authenticity_token
    end
  end
end
