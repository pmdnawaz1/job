require 'test_helper'

class JoblistJobsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @joblist_job = joblist_jobs(:one)
  end

  test "should get index" do
    get joblist_jobs_url, as: :json
    assert_response :success
  end

  test "should create joblist_job" do
    assert_difference('JoblistJob.count') do
      post joblist_jobs_url, params: { joblist_job: { job_id: @joblist_job.job_id, joblist_id: @joblist_job.joblist_id, status: @joblist_job.status } }, as: :json
    end

    assert_response 201
  end

  test "should show joblist_job" do
    get joblist_job_url(@joblist_job), as: :json
    assert_response :success
  end

  test "should update joblist_job" do
    patch joblist_job_url(@joblist_job), params: { joblist_job: { job_id: @joblist_job.job_id, joblist_id: @joblist_job.joblist_id, status: @joblist_job.status } }, as: :json
    assert_response 200
  end

  test "should destroy joblist_job" do
    assert_difference('JoblistJob.count', -1) do
      delete joblist_job_url(@joblist_job), as: :json
    end

    assert_response 204
  end
end
