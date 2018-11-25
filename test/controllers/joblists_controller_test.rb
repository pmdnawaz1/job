require 'test_helper'

class JoblistsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @joblist = joblists(:one)
  end

  test "should get index" do
    get joblists_url, as: :json
    assert_response :success
  end

  test "should create joblist" do
    assert_difference('Joblist.count') do
      post joblists_url, params: { joblist: { name: @joblist.name, user_id: @joblist.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show joblist" do
    get joblist_url(@joblist), as: :json
    assert_response :success
  end

  test "should update joblist" do
    patch joblist_url(@joblist), params: { joblist: { name: @joblist.name, user_id: @joblist.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy joblist" do
    assert_difference('Joblist.count', -1) do
      delete joblist_url(@joblist), as: :json
    end

    assert_response 204
  end
end
