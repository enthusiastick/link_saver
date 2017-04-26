require "factory_girl"

FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "carmilla#{n}@example.com" }
    password "laura2theletter"
  end
end
