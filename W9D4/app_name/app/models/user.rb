class User < ApplicationRecord
    validates :username, :session_token, presence: true
    validates :password, length: { minimum: 6 }
end
