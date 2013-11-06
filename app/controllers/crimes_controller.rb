class CrimesController < ApplicationController
  def stats
    url = "http://data.police.uk/api/crimes-street/all-crime?lat=#{params[:lat]}&lng=#{params[:lng]}"
    render :json => HTTParty.get(url)
  end

  def index
  end
end
