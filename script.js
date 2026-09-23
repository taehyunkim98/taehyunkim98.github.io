const projects = {
  heeltoe: {
    kicker: "Humanoid Robotics · Whole-Body Control",
    title: "Human-Like Heel-to-Toe Walking",
    summary: "A contact-aware whole-body control framework for producing heel-to-toe walking on a flat-foot humanoid without toe joints.",
    problem: "Conventional flat-foot humanoid walking often keeps the entire sole in contact or relies on predefined joint trajectories. This limits natural contact transition and can increase knee loading during longer steps.",
    method: "A finite-state contact strategy coordinates heel strike, loading response, midstance, heel-off, and swing. A real-time QP whole-body controller enforces floating-base dynamics and contact constraints while tracking center-of-mass, base, and swing-foot tasks.",
    contribution: "Heel-line and toe-line contacts are explicitly modeled while foot pitch is released during line contact, enabling human-like roll-over motion and longer steps without adding toe joints.",
    tags: ["Unitree G1", "QP WBC", "LIPM/ZMP", "Contact Transition", "MuJoCo"]
  },
  rl: {
    kicker: "Humanoid Robotics · Reinforcement Learning",
    title: "Unified Humanoid Locomotion Policy",
    summary: "A research direction toward one policy for flat walking, stairs, slopes, and goal-directed locomotion.",
    problem: "Policies trained only with velocity commands on flat terrain do not naturally unify terrain-aware locomotion, navigation, stair climbing, and soft landing behavior.",
    method: "The policy architecture is extended with terrain/task context and model-based priors. Trajectory optimization provides physically meaningful center-of-mass and contact-force behaviors that can be injected as demonstrations, priors, or auxiliary objectives.",
    contribution: "The emphasis is not on copying joint-space demonstrations, but on transferring lower-dimensional dynamic structure such as smooth contact forces, CoM behavior, and task-conditioned locomotion across multiple terrains.",
    tags: ["Reinforcement Learning", "MJLab", "Trajectory Optimization", "Soft Landing", "Sim-to-Real"]
  },
  to: {
    kicker: "Optimization · Humanoid Locomotion",
    title: "Humanoid Trajectory Optimization",
    summary: "SRBD-based trajectory optimization for generating dynamically consistent body motion and contact-force profiles.",
    problem: "Learning locomotion purely from sparse rewards can make contact timing and impact behavior difficult to shape, especially for stairs and soft landing.",
    method: "An SRBD formulation optimizes center-of-mass states, body motion, and contact forces over a finite horizon under dynamics and contact constraints.",
    contribution: "The resulting force trajectories provide smooth physically grounded priors that can guide policy learning without requiring a full joint-space demonstration dataset.",
    tags: ["SRBD", "NLP", "Contact Forces", "Direct Transcription", "Stairs"]
  },
  twipr: {
    kicker: "Wheel-Legged Robotics · MPPI",
    title: "Dynamic Variance MPPI for TWIP-R",
    summary: "Sampling-based nonlinear predictive control for simultaneous trajectory tracking and balancing of a TWIP robot with roll dynamics.",
    problem: "A wheel-legged inverted pendulum must track aggressive translational and yaw motion while maintaining balance despite nonlinear dynamics and disturbances.",
    method: "Partial feedback linearization yields virtual acceleration inputs for pitch-related motion, yaw, and roll. MPPI evaluates thousands of sampled control sequences in parallel, with variance adapted according to tracking error magnitude.",
    contribution: "Large errors induce broader sampling for exploration, while near-equilibrium motion uses reduced variance to suppress control chattering and maintain smooth balancing behavior.",
    tags: ["MPPI", "PFL", "100 Hz", "Underactuated", "Disturbance Recovery"]
  },
  footstep: {
    kicker: "Humanoid Robotics · Model Predictive Control",
    title: "Online Footstep MPC",
    summary: "A receding-horizon step planner based on LIPM dynamics for online foot placement and ZMP-consistent walking.",
    problem: "Fixed footsteps are brittle when timing, state estimates, or desired motion change during walking.",
    method: "The LIPM is discretized over a variable first interval and future step intervals. The optimization updates future foot placements every control cycle under kinematic and step-width constraints.",
    contribution: "Continuous re-optimization incorporates the remaining time to the next step and provides a clean bridge between high-level walking commands and whole-body execution.",
    tags: ["LIPM", "DCM", "MPC", "ZMP", "qpOASES"]
  },
  qpik: {
    kicker: "Whole-Body Motion · Quadratic Programming",
    title: "Floating-Base QP Inverse Kinematics",
    summary: "Velocity-level whole-body motion generation with contact consistency and joint-limit regulation.",
    problem: "Jacobian pseudoinverse IK alone does not naturally handle multiple tasks, contact constraints, or safe joint-limit behavior in floating-base robots.",
    method: "A QP solves for base and joint velocities using weighted task-space objectives. Contact velocity equalities determine compatible floating-base motion, while velocity boxes encode position and velocity limits for actuated joints.",
    contribution: "The formulation integrates contact consistency, task prioritization through weights, and CBF-like joint-limit behavior in one optimization problem suitable for real-time humanoid control.",
    tags: ["QP IK", "Floating Base", "SE(3)", "Contact Equality", "Joint Limits"]
  }
};

const modal = document.getElementById('projectModal');
const modalKicker = document.getElementById('modalKicker');
const modalTitle = document.getElementById('modalTitle');
const modalSummary = document.getElementById('modalSummary');
const modalProblem = document.getElementById('modalProblem');
const modalMethod = document.getElementById('modalMethod');
const modalContribution = document.getElementById('modalContribution');
const modalTags = document.getElementById('modalTags');

function openProject(key) {
  const p = projects[key];
  if (!p) return;
  modalKicker.textContent = p.kicker;
  modalTitle.textContent = p.title;
  modalSummary.textContent = p.summary;
  modalProblem.textContent = p.problem;
  modalMethod.textContent = p.method;
  modalContribution.textContent = p.contribution;
  modalTags.innerHTML = p.tags.map(tag => `<span>${tag}</span>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${pct}%`;
});
