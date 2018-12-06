class JobFilesController < ApplicationController
  before_action :set_job_file, only: [:show, :update, :destroy]

  # GET /job_files
  def index
    @job_files = JobFile.all

    render json: @job_files
  end

  # GET /job_files/1
  def show
    render json: @job_file
  end

  # POST /job_files
  def create
    @job_file = JobFile.new(job_file_params)

    if @job_file.save
      render json: @job_file, status: :created, location: @job_file
    else
      render json: @job_file.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /job_files/1
  def update
    if @job_file.update(job_file_params)
      render json: @job_file
    else
      render json: @job_file.errors, status: :unprocessable_entity
    end
  end

  # DELETE /job_files/1
  def destroy
    @job_file.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job_file
      @job_file = JobFile.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def job_file_params
      params.require(:job_file).permit(:job_id, :resume_link, :cover_letter_link)
    end
end
