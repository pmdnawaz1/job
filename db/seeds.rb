# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

User.create({
  email:'test@test.com',
  username: 'test',
  password:'test',
  password_confirmation:'test'
  })

User.create({
  email:'test1@test1.com',
  username: 'test1',
  password:'test1',
  password_confirmation:'test1'
  })

User.create({
  email:'test2@test2.com',
  username: 'test2',
  password:'test2',
  password_confirmation:'test2'
  })
