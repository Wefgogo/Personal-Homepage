<template>
  <div class="resume">
    <FaultyTerminal
      class="resume-terminal"
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
    <div class="resume-overlay">
      <div class="container">
        <!-- Page Header -->
        <section class="page-header">
          <h1>Resume</h1>
          <p>My educational background, work experience, and technical skills</p>
          <a href="/resume.pdf" download class="download-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </a>
        </section>
        <!-- Education -->
        <section class="resume-section">
          <h2 class="section-title">
            <span class="icon">🎓</span>
            Education
          </h2>
          <div class="timeline">
            <div v-for="edu in education" :key="edu.id" class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <div>
                    <h3>{{ edu.degree }} in {{ edu.major }}</h3>
                    <h4>{{ edu.school }}</h4>
                  </div>
                  <div class="timeline-meta">
                    <span class="location">📍 {{ edu.location }}</span>
                    <span class="date">{{ edu.startDate }} - {{ edu.endDate }}</span>
                  </div>
                </div>
                <p v-if="edu.gpa" class="gpa">GPA: {{ edu.gpa }}</p>
                <p v-if="edu.description" class="description">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </section>
        <!-- Experience -->
        <section class="resume-section">
          <h2 class="section-title">
            <span class="icon">💼</span>
            Experience
          </h2>
          <div class="timeline">
            <div v-for="exp in experience" :key="exp.id" class="timeline-item">
              <div class="timeline-marker" :class="exp.type"></div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <div>
                    <h3>{{ exp.title }}</h3>
                    <h4>{{ exp.company }}</h4>
                  </div>
                  <div class="timeline-meta">
                    <span class="location">📍 {{ exp.location }}</span>
                    <span class="date">{{ exp.startDate }} - {{ exp.endDate }}</span>
                  </div>
                </div>
                <ul class="description-list">
                  <li v-for="(item, index) in exp.description" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <!-- Skills -->
        <section class="resume-section">
          <h2 class="section-title">
            <span class="icon">🛠️</span>
            Technical Skills
          </h2>
          <div class="skills-grid">
            <div v-for="skillGroup in skills" :key="skillGroup.category" class="skill-group">
              <h3>{{ skillGroup.category }}</h3>
              <div class="skill-tags">
                <span v-for="skill in skillGroup.skills" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FaultyTerminal from '@/components/vue-bits/FaultyTerminal.vue'
import type { Education, Experience, SkillCategory } from '@/types'

const education: Education[] = [
  {
    id: '1',
    degree: "Master's Degree",
    major: 'Computer Technology',
    school: 'Your University',
    location: 'City, Country',
    startDate: '2022',
    endDate: '2025',
    gpa: '3.8/4.0',
    description: 'Focus on Computer Vision, Deep Learning, and AI Systems. Research on 3D Gaussian Splatting and Diffusion Models.'
  },
  {
    id: '2',
    degree: "Bachelor's Degree",
    major: 'Computer Science',
    school: 'Your University',
    location: 'City, Country',
    startDate: '2018',
    endDate: '2022',
    gpa: '3.7/4.0',
    description: 'Comprehensive coursework in algorithms, data structures, and software engineering.'
  }
]

const experience: Experience[] = [
  {
    id: '1',
    title: 'Research Assistant',
    company: 'Computer Vision Lab',
    location: 'University',
    startDate: '2023',
    endDate: 'Present',
    type: 'research',
    description: [
      'Conducted research on 3D Gaussian Splatting for real-time novel view synthesis',
      'Developed novel conditioning mechanisms for diffusion models',
      'Published 2 papers in top-tier computer vision conferences',
      'Collaborated with industry partners on practical AI applications'
    ]
  },
  {
    id: '2',
    title: 'Backend Developer Intern',
    company: 'Tech Company',
    location: 'City, Country',
    startDate: '2023-06',
    endDate: '2023-09',
    type: 'internship',
    description: [
      'Designed and implemented RESTful APIs using Spring Boot',
      'Optimized database queries, reducing response time by 40%',
      'Developed microservices architecture for scalable applications',
      'Collaborated with frontend team to integrate APIs'
    ]
  },
  {
    id: '3',
    title: 'Software Development Intern',
    company: 'Another Company',
    location: 'City, Country',
    startDate: '2022-07',
    endDate: '2022-09',
    type: 'internship',
    description: [
      'Built full-stack web applications using Vue.js and Spring Boot',
      'Implemented authentication and authorization systems',
      'Wrote comprehensive unit and integration tests',
      'Participated in code reviews and agile development processes'
    ]
  }
]

const skills: SkillCategory[] = [
  {
    category: 'Backend Development',
    skills: ['Java', 'Spring Boot', 'Spring Cloud', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes']
  },
  {
    category: 'AI/ML & Computer Vision',
    skills: ['PyTorch', 'TensorFlow', 'Diffusion Models', '3D Gaussian Splatting', 'OpenCV', 'CUDA', 'Python', 'NumPy']
  },
  {
    category: 'Frontend Development',
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite', 'Webpack']
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Gitee', 'Maven', 'Gradle', 'Linux', 'Nginx', 'CI/CD', 'AWS', 'Azure']
  }
]
</script>

<style scoped>
.resume {
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 3rem 0;
  overflow: hidden;
  color: #e2e8f0;
}

.resume-terminal {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.resume-overlay {
  position: relative;
  z-index: 1;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
  background: rgba(15, 23, 42, 0.75);
  padding: 3rem 2rem;
  border-radius: 24px;
  color: #f8fafc;
  box-shadow: 0 20px 60px rgba(2, 6, 23, 0.45);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.resume-section {
  background: rgba(15, 23, 42, 0.7);
  padding: 2.5rem;
  border-radius: 20px;
  margin-bottom: 2.5rem;
  box-shadow: 0 18px 45px rgba(2, 6, 23, 0.4);
  border: 1px solid rgba(148, 163, 184, 0.18);
  backdrop-filter: blur(8px);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.icon {
  font-size: 2rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 0.5rem;
  width: 16px;
  height: 16px;
  background: #667eea;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #667eea;
}

.timeline-marker.research {
  background: #3b82f6;
  box-shadow: 0 0 0 2px #3b82f6;
}

.timeline-marker.internship {
  background: #10b981;
  box-shadow: 0 0 0 2px #10b981;
}

.timeline-marker.work {
  background: #8b5cf6;
  box-shadow: 0 0 0 2px #8b5cf6;
}

.timeline-content {
  background: rgba(15, 23, 42, 0.6);
  padding: 1.5rem;
  border-radius: 14px;
  transition: all 0.3s;
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.timeline-content:hover {
  transform: translateX(5px);
  box-shadow: 0 12px 35px rgba(2, 6, 23, 0.45);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
}

.timeline-header h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.timeline-header h4 {
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 600;
}

.timeline-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: #64748b;
  white-space: nowrap;
}

.gpa {
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.description {
  color: #475569;
  line-height: 1.7;
}

.description-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.description-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #475569;
  line-height: 1.6;
}

.description-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.skills-grid {
  display: grid;
  gap: 2rem;
}

.skill-group h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.25);
  color: #bfdbfe;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s;
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.skill-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(59, 130, 246, 0.35);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .timeline-header {
    flex-direction: column;
  }

  .timeline-meta {
    align-items: flex-start;
  }

  .resume-section {
    padding: 1.5rem;
  }
}
</style>
