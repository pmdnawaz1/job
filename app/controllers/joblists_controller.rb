class JoblistsController < ApplicationController
  # before_action :authenticate_user
  before_action :set_joblist, only: [:show, :update, :destroy]

  # GET /joblists
  def index
    @joblists = Joblist.all
    # current_user.joblists
    render json: @joblists
  end

  # GET /joblists/1
  def show
    render json: @joblist
  end

  # POST /joblists
  def create
    @joblist = Joblist.new(joblist_params)
    @joblist.user_id = current_user.id
    if @joblist.save
      render json: @joblist, status: :created, location: @joblist
    else
      render json: @joblist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /joblists/1
  def update
    if @joblist.update(joblist_params)
      render json: @joblist
    else
      render json: @joblist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /joblists/1
  def destroy
    @joblist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_joblist
      @joblist = Joblist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def joblist_params
      params.require(:joblist).permit(:name)
    end
end
