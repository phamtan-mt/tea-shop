function showContent(id) {
    
  var contents = document.querySelectorAll('.content');
  contents.forEach(function(content) {
    content.classList.remove('active');
  });

  
  var selectedContent = document.getElementById(id);
  selectedContent.classList.add('active');
}

function openLoginForm() {
  document.getElementById('modal').style.display = 'flex';
  document.querySelector('.auth-form--login').style.display = 'block';
  document.querySelector('.auth-form--signup').style.display = 'none';
}

function openSignupForm() {
  document.getElementById('modal').style.display = 'flex';
  document.querySelector('.auth-form--login').style.display = 'none';
  document.querySelector('.auth-form--signup').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.querySelector('.auth-form--login').style.display = 'none';
  document.querySelector('.auth-form--signup').style.display = 'none';
}


function toggleForm() {
  const loginForm = document.querySelector('.auth-form--login');
  const signupForm = document.querySelector('.auth-form--signup');

  if (loginForm.style.display === 'block') {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  } else {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  }
}






