class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :avatar, :first_name, :last_name, :email
end
