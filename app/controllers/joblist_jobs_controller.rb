class JoblistJobsController < ApplicationController
  before_action :set_joblist_job, only: [:show, :update, :destroy]

  # GET /joblist_jobs
  def index
    @joblist_jobs = JoblistJob.all

    render json: @joblist_jobs
  end

  # GET /joblist_jobs/1
  def show
    render json: @joblist_job
  end

  # POST /joblist_jobs
  def create
    @joblist_job = JoblistJob.new(joblist_job_params)

    if @joblist_job.save
      render json: @joblist_job, status: :created, location: @joblist_job
    else
      render json: @joblist_job.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /joblist_jobs/1
  def update
    if @joblist_job.update(joblist_job_params)
      render json: @joblist_job
    else
      render json: @joblist_job.errors, status: :unprocessable_entity
    end
  end

  # DELETE /joblist_jobs/1
  def destroy
    @joblist_job.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_joblist_job
      @joblist_job = JoblistJob.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def joblist_job_params
      params.require(:joblist_job).permit(:joblist_id, :job_id, :status)
    end
end
