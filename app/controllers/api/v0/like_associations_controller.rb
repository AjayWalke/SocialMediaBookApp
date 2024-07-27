module Api
  module V0
    class LikeAssociationsController < ApplicationController
      skip_before_action :verify_authenticity_token
    end
  end
end
