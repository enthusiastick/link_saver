class Post < ApplicationRecord
  belongs_to :user
  validates_presence_of :summary
  validates_format_of :url, with: URI::regexp(["http", "https"]), message: "must be a valid URL"
end
