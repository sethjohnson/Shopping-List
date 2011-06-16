class PagesController < ApplicationController
  def home
  end

  def help
  end

  def ajax
    @text = params[:q];

    @fetch = Net::HTTP.get_response(URI.parse("http://seths-foodmart.heroku.com/takeout"+"?q="+@text)).body
    @data = ActiveSupport::JSON.decode(@fetch)
    render :layout => false
  end

end
