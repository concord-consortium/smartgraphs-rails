ActionController::Routing::Routes.draw do |map|

  map.root :controller => 'home'
  

  # index, create, new actions go to /activities; create, update, edit, destroy actions go to /activity/nnn
  plural_actions = [:index, :create, :new]
  
  # activities_path -> /activities
  map.resources :activities, :only => plural_actions                            

  # activity_path(@activity) -> /activity/nnn
  map.resources :activities, :except => plural_actions, :as => 'activity' do |activity|
    # activity_pages_path(@activity) -> /activity/nnn/pages
    activity.resources :activity_pages, :only => plural_actions, :as => 'pages', :name_prefix => nil
    # activity_page_path(@activity) -> /activity/nnn/page/nnn
    activity.resources :activity_pages, :except => plural_actions, :as => 'page', :name_prefix => nil
  end
  
  # The priority is based upon order of creation: first created -> highest priority.

  # Sample of regular route:
  #   map.connect 'products/:id', :controller => 'catalog', :action => 'view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   map.purchase 'products/:id/purchase', :controller => 'catalog', :action => 'purchase'
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   map.resources :products

  # Sample resource route with options:
  #   map.resources :products, :member => { :short => :get, :toggle => :post }, :collection => { :sold => :get }

  # Sample resource route with sub-resources:
  #   map.resources :products, :has_many => [ :comments, :sales ], :has_one => :seller
  
  # Sample resource route with more complex sub-resources
  #   map.resources :products do |products|
  #     products.resources :comments
  #     products.resources :sales, :collection => { :recent => :get }
  #   end

  # Sample resource route within a namespace:
  #   map.namespace :admin do |admin|
  #     # Directs /admin/products/* to Admin::ProductsController (app/controllers/admin/products_controller.rb)
  #     admin.resources :products
  #   end

  # You can have the root of your site routed with map.root -- just remember to delete public/index.html.
  # map.root :controller => "welcome"

  # See how all your routes lay out with "rake routes"

  # Install the default routes as the lowest priority.
  # Note: These default routes make all actions in every controller accessible via GET requests. You should
  # consider removing or commenting them out if you're using named routes and resources.
end
