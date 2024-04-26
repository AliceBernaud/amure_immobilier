class ContactController < ApplicationController
  def new
  end

  def create
    nom = params[:nom]
    email = params[:email]
    telephone = params[:telephone]
    message = params[:message]

    ContactMailer.formulaire_contact(nom, email, telephone, message).deliver_now!

    redirect_to root_path, notice: 'Votre message a été envoyé avec succès!'
  end
end
