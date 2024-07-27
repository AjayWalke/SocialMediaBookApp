class Like::IncService < ApplicationService
  def initialize(payload:)
    super()

    @like_id = payload.dig(:like_id)
  end

  def execute
    begin
      validate_payload
      increase_like_count

      result.update(
        success: true,
        message: 'Like count is increased'
      )
    rescue => error
      result.update(
        message: error.message
      )
    end

    result
  end

  private

  def validate_payload
    @like = Like.find(@like_id)
    raise 'Invalid Like' unless @like.present?

    @prev_count = @like.count
  end

  def increase_like_count
    @like.update!(count: @prev_count+1)
  end
end