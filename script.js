const formBox = document.querySelector('.form-box');
const switchBtns = document.querySelectorAll('.switch-btn');
const togglePasswordIcons = document.querySelectorAll('.toggle-password');
const signupPassword = document.getElementById('signup-password');
const strengthFill = document.getElementById('strength-fill');
const strengthText = document.getElementById('strength-text');
const emailInput = document.getElementById('signup-email');
const themeToggle = document.getElementById('theme-toggle');
const shootingStar = document.querySelector('.shooting-star');
const modal = document.getElementById('terms-modal');
const openTerms = document.getElementById('open-terms');
const closeTerms = document.getElementById('close-terms');
const clickSound = document.getElementById('click-sound');


switchBtns.forEach(btn => btn.addEventListener('click', e => {
  e.preventDefault();
  formBox.classList.toggle('flipped');
  clickSound.play();
}));


togglePasswordIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const target = document.getElementById(icon.dataset.target);
    if (target.type === "password") {
      target.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      target.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});

// Strength password
signupPassword.addEventListener('input', () => {
  const val = signupPassword.value;
  let strength = 0;
  if (val.length > 5) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  const colors = ["red","orange","yellow","green"];
  const labels = ["Weak","Okay","Good","Strong"];
  const width = ["25%","50%","75%","100%"];

  strengthFill.style.width = val ? width[strength-1] : "0%";
  strengthFill.style.background = colors[strength-1] || "transparent";
  strengthText.textContent = "Strength: " + (labels[strength-1] || "None");
});

// Email check live
emailInput.addEventListener('input', () => {
  if (!emailInput.value.includes('@')) {
    emailInput.style.border = "2px solid red";
  } else {
    emailInput.style.border = "none";
  }
});

openTerms.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});
closeTerms.addEventListener('click', () => {
  modal.style.display = "none";
});

// Captcha
function generateCaptcha() {
  return Math.random().toString(36).substring(2,7).toUpperCase();
}
document.getElementById('captcha-code').textContent = generateCaptcha();
document.getElementById('captcha-code2').textContent = generateCaptcha();


function shooting() {
  shootingStar.style.opacity = 1;
  shootingStar.style.left = Math.random()*80 + "%";
  shootingStar.animate([
    { transform: 'translateY(0) translateX(0)', opacity: 1 },
    { transform: 'translateY(300px) translateX(-300px)', opacity: 0 }
  ], { duration: 1200, easing: 'ease-out' });
}
setInterval(shooting, 5000);


document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => clickSound.play());
});
