require 'spec_helper'

describe CrimesController do

  describe "GET 'stats'" do
    before do 
      dummy_data = File.read('spec/examples/street_crime.json')

      HTTParty.stubs(:get).returns(dummy_data)

      get :stats, :lat => 51, :lng => 0.1
    end

    it "should successfully return json" do
      response.should be_success
      expect(response.content_type).to eq('application/json')
    end

    it "should actually parse as JSON" do
      #binding.pry
      lambda {
        json = JSON(response.body)
        expect(json[0]["category"]).to eq("anti-social-behaviour")
      }.should_not raise_exception
    end

  end

  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

end
