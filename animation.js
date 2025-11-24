// Enhanced calculator animations

class CalculatorAnimation {
  constructor() {
    this.display = document.getElementById('display');
    this.buttons = document.querySelectorAll('button');
  }

  // Button press animation
  animateButtonPress(button) {
    button.style.transform = 'scale(0.95)';
    button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    
    setTimeout(() => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = 'none';
    }, 100);
  }

  // Display value change animation
  animateDisplayChange(newValue) {
    this.display.style.opacity = '0.5';
    this.display.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      this.display.style.opacity = '1';
      this.display.style.transform = 'scale(1)';
    }, 150);
  }

  // Error animation
  animateError() {
    this.display.style.color = '#ff4444';
    this.display.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
      this.display.style.color = '#fff';
      this.display.style.animation = 'none';
    }, 500);
  }

  // Add CSS animations to the page
  addAnimationsToPage() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-5px); }
        40%, 80% { transform: translateX(5px); }
      }
      
      .button-press {
        animation: buttonPress 0.1s ease-out;
      }
      
      @keyframes buttonPress {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize animations
  init() {
    this.addAnimationsToPage();
    
    // Add click event listeners to buttons
    this.buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.animateButtonPress(e.target);
      });
    });
  }
}

// Initialize animations when page loads
window.addEventListener('load', () => {
  const calculatorAnim = new CalculatorAnimation();
  calculatorAnim.init();
});
