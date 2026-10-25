const currentYear = document.getElementById('current-year');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
const sections = Array.from(document.querySelectorAll('main section[id], header section[id]'));

// Keep the mobile menu state synchronized with the button's accessibility state.
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Let keyboard users dismiss the mobile menu and return to its button.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const updateActiveLink = () => {
  if (!sections.length) {
    return;
  }

  const scrollPosition = window.scrollY + 160;
  let currentId = sections[0].id;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navAnchors.forEach((link) => {
    const isCurrent = link.getAttribute('href') === `#${currentId}`;
    link.setAttribute('aria-current', isCurrent ? 'true' : 'false');
  });
};

// Highlight the section that is closest to the current reading position.
if (navAnchors.length) {
  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

const initializeProjectFilters = () => {
  const filters = document.querySelector('.project-filters');
  const filterButtons = Array.from(document.querySelectorAll('.project-filter-button'));
  const projectCards = Array.from(document.querySelectorAll('.project-card[data-category]'));
  const filterStatus = document.querySelector('.project-filter-status');

  if (!filters || !filterButtons.length || !projectCards.length || !filterStatus) {
    return;
  }

  const updateProjects = (selectedCategory) => {
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const isVisible = selectedCategory === 'all' || card.dataset.category === selectedCategory;
      card.hidden = !isVisible;
      visibleCount += Number(isVisible);
    });

    filterButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === selectedCategory));
    });

    filterStatus.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'}.`;
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => updateProjects(button.dataset.filter));
  });

  filters.hidden = false;
  updateProjects('all');
};

initializeProjectFilters();

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const fields = ['name', 'email', 'message'];

const setFieldError = (fieldId, message) => {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);

  if (!field || !error) {
    return;
  }

  field.setAttribute('aria-invalid', message ? 'true' : 'false');
  error.textContent = message;
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getFieldError = (fieldId, value) => {
  if (fieldId === 'name' && value.length < 2) {
    return 'Enter your name using at least 2 non-space characters.';
  }

  if (fieldId === 'email' && !isValidEmail(value)) {
    return 'Enter an email address in the format name@example.com.';
  }

  if (fieldId === 'message' && value.length < 10) {
    return 'Write a message using at least 10 non-space characters.';
  }

  return '';
};

const clearFormStatus = () => {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = '';
  formStatus.classList.remove('is-error', 'is-success');
};

// Validate locally because this static portfolio has no message-delivery backend.
if (form) {
  fields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);

    if (!field) {
      return;
    }

    field.addEventListener('input', () => {
      clearFormStatus();

      if (field.getAttribute('aria-invalid') === 'true') {
        setFieldError(fieldId, getFieldError(fieldId, field.value.trim()));
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const invalidFields = fields.filter((fieldId) => {
      const field = document.getElementById(fieldId);
      const errorMessage = field ? getFieldError(fieldId, field.value.trim()) : '';
      setFieldError(fieldId, errorMessage);
      return Boolean(errorMessage);
    });

    if (invalidFields.length) {
      if (formStatus) {
        formStatus.textContent = 'Please correct the highlighted fields and try again.';
        formStatus.classList.remove('is-success');
        formStatus.classList.add('is-error');
      }

      document.getElementById(invalidFields[0])?.focus();
      return;
    }

    if (formStatus) {
      formStatus.textContent = 'Message accepted — all fields passed validation. Nothing was sent or stored.';
      formStatus.classList.remove('is-error');
      formStatus.classList.add('is-success');
    }

    form.reset();
  });
}
