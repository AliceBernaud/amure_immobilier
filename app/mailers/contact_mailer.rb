class ContactMailer < ApplicationMailer
  def formulaire_contact(nom, email, telephone, message)
    @nom = nom
    @email = email
    @message = message
    @telephone = telephone

    mail(to: 'contact@amure-immobilier.com', subject: 'Nouveau message du formulaire de contact')
  end
end
