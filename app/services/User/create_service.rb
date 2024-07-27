class User::CreateService < ApplicationService
  def initialize(payload:)
    super

    @username = payload.dig(:username)
    @email = payload.dig(:email)
    @address = payload.dig(:address)
    @name = payload.dig(:name)
    @password = payload.dig(:password)
  end

  def execute
    begin
      create_new_user
      result.update(
        success: true,
        message: 'User Created Successfully'
      )
    rescue => error
        result.update(
            message: error.message
        )
    end

    result
  end

  private

  def create_new_user
    user_present_in_db?
    validate_params
    User.find_or_create_by!(
        username: @username,
        email: @email,
        address: @address,
        name: @name,
        password: @password
    )
  end
  
  def user_present_in_db?
    user = User.find_by(email: @email)
    raise 'User Already Present' if user.present?
  end

  def validate_params
    raise 'Invalid username' if @username.present?
    raise 'Invalid email' if @email.present?
    raise 'Invalid address' if @address.present?
    raise 'Invalid name' if @name.present?
  end
end
