class User < ApplicationRecord
    has_secure_password
    # Email regex pattern
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  # Validate the presence and format of the email attribute
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }

  # Username regex pattern
  VALID_USERNAME_REGEX = /\A[a-zA-Z0-9_]+\z/

  # Validate the presence and format of the username attribute
  validates :username, presence: true, format: { with: VALID_USERNAME_REGEX }

    # # Password regex pattern
    # VALID_PASSWORD_REGEX = /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}\z/
  
    # # Validate the presence and format of the password attribute
    # validates :password, presence: true
    # , format: { with: VALID_PASSWORD_REGEX }
    has_many :orders, dependent: :destroy
    
    

  end