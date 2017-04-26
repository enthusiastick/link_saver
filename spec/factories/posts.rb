require "factory_girl"

FactoryGirl.define do
  factory :post do
    summary "#CARMILLAMOVIE"
    url "http://carmillamovie.vhx.tv"
    association :user
  end
end
