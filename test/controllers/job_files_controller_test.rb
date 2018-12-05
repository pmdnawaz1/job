require 'test_helper'

class JobFilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @job_file = job_files(:one)
  end

  test "should get index" do
    get job_files_url, as: :json
    assert_response :success
  end

  test "should create job_file" do
    assert_difference('JobFile.count') do
      post job_files_url, params: { job_file: { cover_letter_link: @job_file.cover_letter_link, job_id: @job_file.job_id, resume_link: @job_file.resume_link } }, as: :json
    end

    assert_response 201
  end

  test "should show job_file" do
    get job_file_url(@job_file), as: :json
    assert_response :success
  end

  test "should update job_file" do
    patch job_file_url(@job_file), params: { job_file: { cover_letter_link: @job_file.cover_letter_link, job_id: @job_file.job_id, resume_link: @job_file.resume_link } }, as: :json
    assert_response 200
  end

  test "should destroy job_file" do
    assert_difference('JobFile.count', -1) do
      delete job_file_url(@job_file), as: :json
    end

    assert_response 204
  end
end
