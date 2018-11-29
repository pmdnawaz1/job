require 'nokogiri'
require 'open-uri'
require 'json'

class Zipscrape < ApplicationRecord
  def self.grab_data(page = 1, name, location, state)
    html = open("https://www.ziprecruiter.com/candidate/search?page=#{page}&search=#{name}&location=#{location}+#{state}",'User-Agent' => 'Nooby')
    doc = Nokogiri::HTML(html)

    job_titles = doc.css(".just_job_title").map do |job_title|
      job_title.text
    end

    job_snippets = doc.css('#job_list .job_snippet a').map do |job_snippet|
      job_snippet.text.strip()
    end

    job_locations = doc.css('#job_list .job_org .location').map do |job_location|
      job_location.text
    end

    job_companies = doc.css('#job_list .job_org').map do |job_company|
      job_company.text.strip().split("\n")[0]
      # job_company['href'].split('/')[2]
    end

    job_links = doc.css('.job_content .job_link').map do |job_link|
      job_link['href']
    end

    arr = []

    job_titles.each_with_index do |element, index|
      arr.push(
        {
           title: element,
           company_name: job_companies[index],
           snippet: job_snippets[index],
           location: job_locations[index],
           links: job_links[index]
         }
      )
    end

    # {
    #   title: job_titles,
    #   title_count: job_titles.length,
    #   locations: job_locations,
    #   locations_count: job_locations.length,
    #   snippets: job_snippets,
    #   snippets_count: job_snippets.length,
    #   links: job_links,
    #   links_count: job_links.length
    # }
    arr
  end
end
