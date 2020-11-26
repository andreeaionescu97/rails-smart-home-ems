# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Destroying old devices, users and homes"
Device.destroy_all
Home.destroy_all
User.destroy_all

puts "Creating new users"

# userA = User.create(email:"abd@123.com", password: "password")
# userB = User.create(email:"doremi@123.com", password: "qawsed")
# userC = User.create(email:"alphacat@abc.com", password: "123456")
giovanni = User.create(email: "giovanni@123.com", password: "123456")
andreea = User.create(email: "andreea@123.com", password: "123456")
shan = User.create(email: "shan@123.com", password: "123456")
# shahrukh = User.create(email: "shahrukh@123.com", password: "123456")

puts "Finished creating #{User.count} users"
puts "Creating new homes"

home1 = Home.create(name:"the flat", location: "Lewisham, London", eco_function: "off", home_away_function: "off", history: "", daily: DateTime.new(2020, 1, 1), bill: 70, user: giovanni )

home2 = Home.create(name:"the cottage", location: "Lyndhurst, Hampshire", eco_function: "on", home_away_function: "on", history: "", daily: DateTime.new(2020, 3, 8), bill: 60, user: andreea)

home3 = Home.create(name:"the town_house", location: "Colchester, Essex", eco_function: "on", home_away_function: "off", history: "", daily: DateTime.new(2020, 9, 13), bill: 100, user: shan)

puts "Finished creating #{Home.count} homes"
puts "Creating new devices"
# hours = 24.times do 
#     rand(250..750)
# 
# end
device1 = Device.create(name: "Boston Dynamics Frigo", category: "fridge_freezer", history: "", daily: DateTime.new(2020, 10, 18))

device2 = Device.create(name: "Google Alexa", category: "interactive controller", history: "", daily: DateTime.new(2020, 7, 7))

device3 = Device.create(name: "Panasonic Corp.", category: "smart tv", history: "", daily: DateTime.new(2020, 11, 18), home: home1)

device4 = Device.create(name: "Amstrad", category: "Inteligent bed_warmer", history: "", daily: DateTime.new(2020, 4, 25), home: home2)


device5 = Device.create(
    name: "Philips Corp.",
    category: "Smart lights",
    history: "", 
    daily: DateTime.new(2020, 11, 11),
    home: home3)

24.times do |i|
energies1 = Energy.create(
    kilowatts: rand(250..750),
    hours_start_at: DateTime.new(2020, 4, 25, i, 0, 0),
    price: rand(40..50),
    device: device5
)
end

device6 = Device.create(
    name: "Alexa.",
    category: "Smart Speaker",
    history: "", 
    daily: DateTime.new(2020, 11, 12),
    home: home1)

24.times do |i|
energies2 = Energy.create(
    kilowatts: rand(250..750),
    hours_start_at: DateTime.new(2020, 4, 25, i, 0, 0),
    price: rand(40..50),
    device: device6
)
end

device7 = Device.create(
    name: "Samsung.",
    category: "Smart Fridge",
    history: "", 
    daily: DateTime.new(2020, 8, 12),
    home: home3)

24.times do |i|
energies3 = Energy.create(
    kilowatts: rand(250..750),
    hours_start_at: DateTime.new(2020, 4, 25, i, 0, 0),
    price: rand(40..50),
    device: device7
)
end

device8 = Device.create(
    name: "LG.",
    category: "Smart TV",
    history: "", 
    daily: DateTime.new(2020, 12, 12),
    home: home2)

24.times do |i|
energies4 = Energy.create(
    kilowatts: rand(250..750),
    hours_start_at: DateTime.new(2020, 4, 25, i, 0, 0),
    price: rand(40..50),
    device: device8
)
end



# create 4 devices where the watts are displayed 

puts "Finished creating #{Device.count} devices"
