<template>
  <div class="contact">
    <FaultyTerminal
      class="contact-terminal"
      :scale="1.9"
      :grid-mul="[2, 1]"
      :speed="0.5"
      :digit-size="1.2"
      :time-scale="1"
      :pause="false"
      :scanline-intensity="0.5"
      :glitch-amount="1"
      :flicker-amount="1"
      :noise-amp="1"
      :chromatic-aberration="0"
      :dither="0"
      :curvature="0.1"
      :mouse-react="true"
      :mouse-strength="0.5"
      :page-load-animation="true"
      :brightness="0.6"
      tint="#8fa7ff"
    />
    <div class="contact-overlay">
      <div class="container">
        <!-- Page Header -->
        <section class="page-header">
          <h1>Get In Touch</h1>
          <p>Feel free to reach out for collaborations, opportunities, or just to say hi!</p>
        </section>

        <div class="contact-content">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>Send a Message</h2>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  id="name"
                  v-model="formData.name" 
                  type="text" 
                  required
                  placeholder="Your Name"
                >
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  id="email"
                  v-model="formData.email" 
                  type="email" 
                  required
                  placeholder="your.email@example.com"
                >
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <input 
                  id="subject"
                  v-model="formData.subject" 
                  type="text" 
                  required
                  placeholder="What's this about?"
                >
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message"
                  v-model="formData.message" 
                  required
                  rows="6"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>

              <div v-if="submitMessage" :class="['submit-message', submitStatus]">
                {{ submitMessage }}
              </div>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <h2>Contact Information</h2>
            
            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">📧</div>
                <h3>Email</h3>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>

              <div class="info-card">
                <div class="info-icon">📍</div>
                <h3>Location</h3>
                <p>City, Country</p>
              </div>

              <div class="info-card">
                <div class="info-icon">💼</div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">
                  linkedin.com/in/yourusername
                </a>
              </div>

              <div class="info-card">
                <div class="info-icon">🐙</div>
                <h3>GitHub</h3>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener">
                  github.com/yourusername
                </a>
              </div>
            </div>

            <div class="social-section">
              <h3>Connect on Social Media</h3>
              <div class="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener" class="social-link github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" class="social-link linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://gitee.com/yourusername" target="_blank" rel="noopener" class="social-link gitee">
                  <span style="font-size: 1.5rem;">🦊</span>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener" class="social-link twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import FaultyTerminal from '@/components/vue-bits/FaultyTerminal.vue'
import type { ContactForm } from '@/types'
const formData = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref<'success' | 'error'>('success')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // TODO: Integrate with EmailJS, Formspree, or your backend API
    // Example with EmailJS:
    // await emailjs.send('service_id', 'template_id', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    submitStatus.value = 'success'
    submitMessage.value = 'Message sent successfully! I\'ll get back to you soon.'
    
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
  } catch (error) {
    submitStatus.value = 'error'
    submitMessage.value = 'Failed to send message. Please try again or email me directly.'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact {
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 3rem 0;
  overflow: hidden;
  color: #e2e8f0;
}

.contact-terminal {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.contact-overlay {
  position: relative;
  z-index: 1;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
  background: rgba(15, 23, 42, 0.75);
  padding: 3rem 2rem;
  border-radius: 24px;
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 55px rgba(2, 6, 23, 0.45);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.page-header h1 {
  color: #f8fafc;
}

.page-header p {
  color: #cbd5f5;
}

.contact-form-section,
.contact-info {
  background: rgba(15, 23, 42, 0.7);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 18px 45px rgba(2, 6, 23, 0.4);
  border: 1px solid rgba(148, 163, 184, 0.18);
  backdrop-filter: blur(8px);
}

.contact-form-section h2,
.contact-info h2 {
  color: #e2e8f0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: #e2e8f0;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.3);
  color: #f8fafc;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.submit-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}

.submit-message.success {
  background: #dcfce7;
  color: #166534;
}

.submit-message.error {
  background: #fee2e2;
  color: #991b1b;
}

.info-cards {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-card {
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 10px;
  transition: all 0.3s;
}

.info-card:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.info-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.info-card h3 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.info-card p,
.info-card a {
  color: #64748b;
  text-decoration: none;
}

.info-card a:hover {
  color: #3b82f6;
}

.social-section {
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
}

.social-section h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(15, 23, 42, 0.7);
  color: #e2e8f0;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 50%;
  transition: all 0.3s;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.social-link.github:hover {
  background: #181717;
  color: white;
}

.social-link.linkedin:hover {
  background: #0a66c2;
  color: white;
}

.social-link.gitee:hover {
  background: #c71d23;
  color: white;
}

.social-link.twitter:hover {
  background: #1da1f2;
  color: white;
}

.contact-content {
    display: grid;
    gap: 3.5rem 2.5rem;
}

@media (max-width: 968px) {
    .contact-content {
        gap: 3rem;
    }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .contact-form-section,
  .contact-info {
    padding: 1.5rem;
  }
}
</style>
