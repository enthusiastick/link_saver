user = User.find_or_initialize_by(email: "foob@example.com")
unless user.persisted?
  user.password = "password"
  user.save!
end

%w(facebook reddit tumblr).each do |site|
  print "#{site}. " if Post.create(summary: site, url: "https://www.#{site}.com", user: user)
end
