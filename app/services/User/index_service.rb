class User::IndexService < ApplicationService
  def initialize(params:)
    super

    @email = params.dig(:params)
    @password = params.dig(:password)
  end

  def execute
    begin
        init_and_validate_user
        result.update(
            success: true,
            message: 'User Fetched Successfully'
            data: @user
        )
    rescue => error
        result.update(
            message: error.message
        )
    end

    result
  end

  private

  def init_and_validate_user
    @user = User.find_by(email: email)
    raise 'Invalid User and Password' unless @user.present?
  end
end