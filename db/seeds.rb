# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#   
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Major.create(:name => 'Daley', :city => cities.first)


activity = Activity.create({ :title => 'Motion Without Words' })

pages = ActivityPage.create([
  { :activity => activity, 
    :name => 'Introductory Page',
    :index => 1,
    :intro_text => '<h1>How can you tell a story about motion without using words?</h1>'+
      '<p>The picture at right communicates direction of traffic using recognizable symbols. In this activity, you '+
      'will explore how motions in two opposite directions appear on a position-time graph. By doing so, you will '+
      'learn conventional methods of motion storytelling and analysis.</p>'
  },
  
  { :activity => activity, 
    :name => 'Second Page',
    :index => 2,
    :intro_text => '<p>Let’s start by demonstrating what you already know about representing motion on a graph. Imagine a '+
      'straight walking path that is 5 meters long. Point A is at the 0-meter mark. Point B is at the 4-meter mark.'+
      '</p>'
  },
    
  { :activity => activity, 
    :name => 'Third Page',
    :index => 3,
    :intro_text => '<p>Let’s practice collecting data with the motion sensor so you can see whether your sketches were '+
      'accurate. You will walk on a 5-meter walking path like the one described earlier.</p>'
  },
  
  { :activity => activity, 
    :name => 'Third Page',
    :index => 4,
    :intro_text => '<p>How did the actual graph of your motion compare to your prediction?<p>'
  }
])

steps = ActivityStep.create([])
    
    