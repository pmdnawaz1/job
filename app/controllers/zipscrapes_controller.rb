class ZipscrapesController < ApplicationController
  def index
    @zip_jobs = Zipscrape.grab_data(2,"php wordpress", "new york city", "NY")
    render json: @zip_jobs
  end


  def create
    @zip_jobs = Zipscrape.grab_data(zip_scrape_params)
    render json: @zip_jobs
  end

  private
    # Only allow a trusted parameter "white list" through.
    def zip_scrape_params
      params.require(:zipscrape).permit(:page, :job_title, :city, :state)
    end
end
