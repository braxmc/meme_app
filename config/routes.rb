Rails.application.routes.draw do
  
  namespace :api do
    resources :posts do
      resources :comments
    end
    resources :posts do
      resources :likes
    end
  end

end
