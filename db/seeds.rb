# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Christopher')
User.create(name: 'Viviano')
User.create(name: 'Cesar')
User.create(name: 'Lian')
User.create(name: 'Maxito')
User.create(name: 'Mayra')

Score.create(score:2000 , user_id: 1, success_rate: '45')
Score.create(score:1000 , user_id: 2, success_rate: '35')
Score.create(score:4000 , user_id: 3, success_rate: '80')
Score.create(score:3000 , user_id: 4, success_rate: '65')
Score.create(score:7000 , user_id: 5, success_rate: '30')
Score.create(score:5000 , user_id: 6, success_rate: '40')

#Ranges
VariableRange.create(name: 'Recycling', min: 86, max:87)
VariableRange.create(name: 'Sorting', min: 90, max:94)
VariableRange.create(name: 'Washing', min: 83, max:85)
VariableRange.create(name: 'Melt & Cut', min: 80, max:82)
VariableRange.create(name: 'Distribution', min: 95, max:99)
VariableRange.create(name:'Demand', min:190, max: 200)
VariableRange.create(name:'DemandReduced', min:30, max: 40)

p "Seeds were uploaded"

