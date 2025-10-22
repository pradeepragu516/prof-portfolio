// src/utils/helpers.js

/**
 * Validates if a string is a valid email.
 * @param {string} email 
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

/**
 * Dynamically sets page title and meta description.
 * @param {Object} params
 * @param {string} params.title - Document title
 * @param {string} params.description - Meta description
 */
export function seoMeta({ title, description }) {
  if (title) document.title = title;

  let meta = document.querySelector('meta[name="description"]');

  if (meta) {
    meta.setAttribute('content', description || '');
  } else if (description) {
    meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }
}
