require "test_helper"

class CommentControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get comment_create_url
    assert_response :success
  end

  test "should get getAll" do
    get comment_getAll_url
    assert_response :success
  end
end
