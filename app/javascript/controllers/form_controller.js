import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ["nom", "email", "telephone", "message", "text", "textEmail", "textTel", "textMessage"];

  handleBlur(event) {
    const inputTarget = event.target;
    const messageTarget = this.findMessageTarget(inputTarget);

    if (inputTarget.value === "") {
      inputTarget.classList.add("is-invalid");
      messageTarget.classList.remove("d-none");
    } else {
      inputTarget.classList.remove("is-invalid");
      messageTarget.classList.add("d-none");
    }
  }

  findMessageTarget(inputTarget) {
    // Méthode pour trouver le message d'erreur associé à l'élément de formulaire
    if (inputTarget.dataset.formTarget === "nom") {
      return this.textTarget;
    } else if (inputTarget.dataset.formTarget === "email") {
      return this.textEmailTarget;
    } else if (inputTarget.dataset.formTarget === "telephone") {
      return this.textTelTarget;
    } else if (inputTarget.dataset.formTarget === "message") {
      return this.textMessageTarget;
    }

    // Si aucune correspondance n'est trouvée, retourner null ou l'élément de message par défaut
    return this.textTarget;
  }
}
