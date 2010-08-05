# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_SG-Rails_session',
  :secret      => 'b67cece0594a09459904cfbb4f37db5cddd443f8573d1e4e0002e832ed9dd0dc1772c4545132b3bb878a4d2761c6e5f0f7c5680bc124ec25617183b440c3e99c'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
