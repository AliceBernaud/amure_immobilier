import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="metiers"
export default class extends Controller {
  connect() {
    this.duplicateContent()
  }

  duplicateContent() {
    const content = this.element.innerHTML
    this.element.innerHTML += content // Duplique le contenu pour le défilement infini

    // Écoute la fin de l'animation pour réinitialiser la position
    this.element.addEventListener('animationend', () => {
      this.element.style.animation = 'none' // Arrête l'animation
      this.element.offsetHeight // Provoque un reflow
      this.element.style.animation = null // Redémarre l'animation
    })
  }
}
