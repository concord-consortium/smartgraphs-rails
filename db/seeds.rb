# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#   
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Major.create(:name => 'Daley', :city => cities.first)

activity = Activity.create({ :title => 'Motion Without Words' })
pages = []


## Page 1

steps = ActivityStep.create([
  { :url => '/backend/activity/1/page/1/step/1/' }
])

page = ActivityPage.create({ 
  :activity => activity, 
  :name => 'Introductory Page',
  :index => 1,
  :intro_text => "<h1>How can you tell a story about motion without using words?</h1>\n\n"+
    '<p>The picture at right communicates direction of traffic using recognizable symbols. In this activity, you '+
    'will explore how motions in two opposite directions appear on a position-time graph. By doing so, you will '+
    'learn conventional methods of motion storytelling and analysis.</p>',
  :first_step => steps[0],
  :activity_steps => steps
})

pages.push(page)


## Page 2

steps = ActivityStep.create([
  { :url => '/backend/activity/1/page/2/step/1/' },
  { :url => '/backend/activity/1/page/2/step/2/' }
])

page = ActivityPage.create({
  :activity => activity, 
  :name => 'Prediction Page',
  :index => 2,
  :intro_text => '<p>Let’s start by demonstrating what you already know about representing motion on a graph. Imagine a '+
    'straight walking path that is 5 meters long. Point A is at the 0-meter mark. Point B is at the 4-meter mark.'+
    '</p>',
  :first_step => steps[0],
  :activity_steps => steps
})

pages.push(page)


## Page 3

steps = ActivityStep.create([
  { :url => '/backend/activity/1/page/3/step/1/' },
  { :url => '/backend/activity/1/page/3/step/2/' }
])

page = ActivityPage.create({
  :activity => activity, 
  :name => 'Motion Sensor Page',
  :index => 3,
  :intro_text => '<p>Let’s practice collecting data with the motion sensor so you can see whether your sketches were '+
    'accurate. You will walk on a 5-meter walking path like the one described earlier.</p>',
  :first_step => steps[0],
  :activity_steps => steps
})

pages.push(page)


## Page 4

steps = ActivityStep.create([
  { :url => '/backend/activity/1/page/4/step/1/' }
])

page = ActivityPage.create({
  :activity => activity, 
  :name => 'Replay Page',
  :index => 4,
  :intro_text => '<p>How did the actual graph of your motion compare to your prediction?<p>',
  :first_step => steps[0],
  :activity_steps => steps
})

pages.push(page)
