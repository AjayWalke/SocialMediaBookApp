require "test_helper"

class LikeControllerTest < ActionDispatch::IntegrationTest
  test "should get inc" do
    get like_inc_url
    assert_response :success
  end
end
