class Api::VariableRangeResource < JSONAPI::Resource
  attributes :name, :max, :min 
  exclude_links :default
end