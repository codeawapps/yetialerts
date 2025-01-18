class Yeti {
  constructor() {
    this.alertContainer = this.createYetiContainer();
  }

  /**
   * Generate a custom HTML element
   * @param tag tag name
   * @param classe tag class
   * @param father tag's father
   * @param inner tag's inner text
   * @returns HTML element
   */
  createElement(tag, classe, father, inner) {
    const elem = document.createElement(tag);
    if (classe) {
      typeof classe === 'object' && classe.length 
        ? classe.forEach(c => elem.classList.add(c))
        : elem.classList.add(classe);
    }
    if (inner) {
      elem.innerText = inner;
    }
    if (father) {
      father.appendChild(elem);
    }
    return elem;
  }

  /**
   * Create an HTML container for all alerts
   * @returns HTML container
   */
  createYetiContainer() {
    const container = this.createElement('div', 'yeti-container');
    document.body.appendChild(container);
    return container;
  }

  /**
   * Show an alert
   * @param param0 alert object to be displayed
   * - title: string. Bu default no title
   * - message: string
   * - time in ms (must be positive). By default 0 (infinite duration)
   * - severity can be 'ok', 'nok', 'warn' or by default 'info'
   * - width is a number between 20 and 100. By default 50
   * - fadeOnNext is a boolean. By default true
   * - shadow is a boolean. By default true
   * - border is a number: 0 (no border), 1 (border type one) or 2 (border type 2). By default 0
   * @returns 
   */
  show({
    title = '', 
    message,
    time = 0,
    severity = 'info',
    width = 50,
    fadeOnNext = true,
    shadow = true,
    border = 0,
  }) {
    // Validate params ang log the errors
    if (
      !this.validateYeti({
        title,
        message,
        time,
        severity,
        width,
        fadeOnNext,
        shadow,
        border,
      })
    ) {
      return;
    }

    if (fadeOnNext) {
      this.clearYetis();
    }

    const alert = this.createElement('div', ['yeti', `yeti-${severity}`]);
    alert.style.width = window.innerWidth > 480
      ? `calc(${width}% - 40px)`
      : `100%`;

    // Configurar el atributo data-fade-on-next
    alert.dataset.fadeOnNext = fadeOnNext ? 'true' : 'false';

    // Configurar sombra y borde
    if (shadow) {
      alert.classList.add('yeti-shadow');
    }
    if (border) {
      border === 1
        ? alert.classList.add('yeti-border-1')
        : alert.classList.add('yeti-border-2');
    }

    const icon = this.getYetiIcon(severity);
    alert.appendChild(icon);

    const textContainer = document.createElement('div');
    textContainer.classList.add('yeti-text');

    if (title) {
      this.createElement('p', 'yeti-title', textContainer, title);
    }

    const alertMessage = document.createElement('p');
    alertMessage.innerText = message;
    textContainer.appendChild(alertMessage);

    alert.appendChild(textContainer);

    // Add close button if the time is 0 or undefined
    if (!time || time === 0) {
      const closeButton = this.createCloseButton();
      closeButton.addEventListener('click', () => alert.remove());
      alert.appendChild(closeButton);
    }

    this.alertContainer.appendChild(alert);

    // Set fade-in animation class after a tiny timeout so the trasition can be applied
    setTimeout(() => {
      alert.classList.add('fade-in');
    }, 10); 

    // If a time is specified the alert will be auto removed
    if (time > 0) {
      this.autoRemoveYeti(alert, time);
    }
  }

  /**
   * Validate the alert params
   * @param param0 validation object (alert params)
   * @returns true if it is valid, false otherwise
   */
  validateYeti({
    title,
    message,
    time,
    severity,
    width,
    fadeOnNext,
    shadow,
    border,
  }) {
    let isValid = true;

    const logError = (e) => {
      console.error(`[YETI] - ${e}`);
      isValid = false;
    };

    if (typeof title !== 'string') {
      logError("The 'title' must be a string.");
    }
    if (typeof message !== 'string' || message.trim() === '') {
      logError("The 'message' must be a non-empty string.");
    }
    if (typeof time !== 'number' || time < 0) {
      logError("The 'time' must be a non-negative number.");
    }
    const validSeverities = ['ok', 'nok', 'warn', 'info'];
    if (!validSeverities.includes(severity)) {
      logError(`The 'severity' must be one of: ${validSeverities.join(', ')}.`);
    }
    if (typeof width !== 'number' || width < 20 || width > 100) {
      logError("The 'width' must be a number between 20 and 100.");
    }
    if (typeof fadeOnNext !== 'boolean') {
      logError("The 'fadeOnNext' must be a boolean.");
    }
    if (typeof shadow !== 'boolean') {
      logError("The 'shadow' must be a boolean.");
    }
    if (typeof border !== 'number' || border < 0 || border > 2) {
      logError("The 'border' must be a number between 0 and 2.");
    }
    return isValid;
  }

  /**
   * Clear the alerts whose have a fadeOnNext property, when the next alert appear
   */
  clearYetis() {
    Array.from(this.alertContainer.children).forEach(alert => {
        if (alert.dataset.fadeOnNext === 'true') { // validates if fadeOnNext is active
            alert.classList.remove('fade-in'); // Remove the fade-in animation class
            alert.classList.add('fade-out'); // Apply the fade-out animation class
            alert.addEventListener('transitionend', () => alert.remove(), { once: true }); // Delete the element after the animation
        }
    });
}

/**
 * Auto remove alerts whose time is set
 * @param alert alert to be auto removed
 * @param time alert duration
 */
  autoRemoveYeti(alert, time) {
    setTimeout(() => {
      alert.classList.add('fade-out');
      alert.addEventListener('transitionend', () => alert.remove());
    }, time);
  }

  /**
   * Generate the close alert button in case they have no duration
   * @returns close button
   */
  createCloseButton() {
    const closeButton = this.createElement('button', 'yeti-close');
    closeButton.innerHTML = `
            <svg width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
            </svg>`;

    closeButton.addEventListener('click', (event) => {
      const alert = event.target.closest('.yeti');

      if (alert) {
        alert.classList.remove('fade-in'); // Remove the fade-in animation class
        alert.classList.add('fade-out'); // AApply the fade-out animation class
        alert.addEventListener('transitionend', () => alert.remove(), {
          once: true,
        }); // Delete the element after the animation
      }
    });

    return closeButton;
  }

  /**
   * Get the alert's icon depending on its severity
   * @param severity alerts' severity: 'info' (default), 'warn', 'ok' or 'nok'. 
   * @returns 
   */
  getYetiIcon(severity) {
    const icon = this.createElement('div', 'yeti-icon');
    const icons = {
      ok: `
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="transparent"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"/>
                </svg>
            `,
      nok: `
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="transparent"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="currentColor"/>
                </svg>
            `,
      warn: `
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="transparent"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888ZM9.37735 4.66136C10.5204 2.60393 13.4793 2.60393 14.6223 4.66136L21.2233 16.5431C22.3341 18.5427 20.8882 21 18.6008 21H5.39885C3.11139 21 1.66549 18.5427 2.77637 16.5431L9.37735 4.66136Z" fill="currentColor"/>
                </svg>
            `,
      info: `
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12.2666 11C12.8189 11 13.2666 11.4477 13.2666 12V16C13.2666 16.5523 12.8189 17 12.2666 17C11.7143 17 11.2666 16.5523 11.2666 16V12C11.2666 11.4477 11.7143 11 12.2666 11ZM11.2666 8C11.2666 7.44772 11.7143 7 12.2666 7H12.2766C12.8289 7 13.2766 7.44772 13.2766 8C13.2766 8.55228 12.8289 9 12.2766 9H12.2666C11.7143 9 11.2666 8.55228 11.2666 8Z" fill="currentColor"/>
                </svg>
            `,
    };
    icon.innerHTML = icons[severity] || icons.info;

    return icon;
  }
}
