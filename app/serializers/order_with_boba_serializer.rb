class OrderWithBobaSerializer < ActiveModel::Serializer
  attributes :id, :date, :comment, :user_id
  belongs_to :boba
end
