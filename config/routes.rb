Rails.application.routes.draw do
    
    resources :prayers
    
  root 'prayers#home'

 
  
end
