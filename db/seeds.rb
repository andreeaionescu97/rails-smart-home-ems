# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

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
category1 = Category.new(name: "Smart Home Assistant")
file1 = URI.open('https://res.cloudinary.com/globaldigitalassetsyergiescorpltd/image/upload/v1606904685/assistant_hrhlcg.svg')
category1.photo.attach(io: file1, filename: 'assistant.svg', content_type: 'image/svg')
category1.save

category2 = Category.create(name: "Smart Thermostat")
file2 = URI.open('https://res.cloudinary.com/globaldigitalassetsyergiescorpltd/image/upload/v1606961536/thermostat_dnt5ti.svg')
category2.photo.attach(io: file2, filename: 'thermostat.svg', content_type: 'image/svg')
category2.save

category3 = Category.create(name: "Smart TV")
file3 = URI.open('https://res.cloudinary.com/globaldigitalassetsyergiescorpltd/image/upload/v1606961536/tv_wrr4q6.svg')
category3.photo.attach(io: file3, filename: 'tv.svg', content_type: 'image/svg')
category3.save

category4 = Category.create(name: "Smart Lock")
file4 = URI.open('https://res.cloudinary.com/globaldigitalassetsyergiescorpltd/image/upload/v1606962287/lock_ll9xhx.svg')
category4.photo.attach(io: file4, filename: 'lock.svg', content_type: 'image/svg')
category4.save

category5 = Category.create(name: "Smart Washing Macine")

category6 = Category.create(name: "Smart Vacuum Cleaner")

category7 = Category.create(name: "Smart Outlet")
file7 = URI.open('https://res.cloudinary.com/globaldigitalassetsyergiescorpltd/image/upload/v1606962287/outlet_v3wgv3.svg')
category7.photo.attach(io: file7, filename: 'outlet.svg', content_type: 'image/svg')
category7.save

category8 = Category.create(name: "Smart Fridge")

category9 = Category.create(name: "Smart Hub")

category10 = Category.create(name: "Smart Lights")
file10 = URI.open('https://res.cloudinary.com/globaldigitalassetsyergiescorpltd/image/upload/v1606962289/lights_bp7jal.svg')
category10.photo.attach(io: file10, filename: 'lightst.svg', content_type: 'image/svg')
category10.save

category11 = Category.create(name: "Smart Curtains")

category12 = Category.create(name: "Smart Mirror")

category13 = Category.create(name: "Smart Vase")
file13 = URI.open('https://res.cloudinary.com/globaldigitalassetsyergiescorpltd/image/upload/v1606962287/vase_fdxjso.svg')
category13.photo.attach(io: file13, filename: 'vase.svg', content_type: 'image/svg')
category13.save

category14 = Category.create(name: "Smart Clock")
file14 = URI.open('https://res.cloudinary.com/globaldigitalassetsyergiescorpltd/image/upload/v1606962287/alarm_upoi8w.svg')
category14.photo.attach(io: file14, filename: 'alarm.svg', content_type: 'image/svg')
category14.save

category15 = Category.create(name: "Smart Security Camera")
file15 = URI.open('https://res.cloudinary.com/globaldigitalassetsyergiescorpltd/image/upload/v1606962287/security_df8xuw.svg')
category15.photo.attach(io: file15, filename: 'security.svg', content_type: 'image/svg')
category15.save



device1 = Device.create(name: "Boston Dynamics Frigo", category: "fridge_freezer", history: "", daily: DateTime.new(2020, 10, 18), category: category1)

device2 = Device.create(name: "Google Alexa", category: "interactive controller", history: "", daily: DateTime.new(2020, 7, 7), category: category3)

device3 = Device.create(name: "Panasonic Corp.", category: "smart tv", history: "", daily: DateTime.new(2020, 11, 18), home: home1, category: category3)

device4 = Device.create(name: "Amstrad", category: "Inteligent bed_warmer", history: "", daily: DateTime.new(2020, 4, 25), home: home2, category: category3)


device5 = Device.create(
    name: "Philips Corp.",
    category: "Smart lights",
    history: "",
    daily: DateTime.new(2020, 11, 11),
    home: home3, category: category3)

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
    home: home1, category: category3)

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
    home: home3, category: category3)

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
    home: home2, category: category3)

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
