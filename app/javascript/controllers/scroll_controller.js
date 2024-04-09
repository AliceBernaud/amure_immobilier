import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroll"
export default class extends Controller {
  connect() {
    this.showOrHideButton()
    window.addEventListener('scroll', () => {
      this.showOrHideButton()
    })
  }

  showOrHideButton() {
    if (window.pageYOffset > 100) {
      this.element.style.display = "block";
    } else {
      this.element.style.display = "none";
    }
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
