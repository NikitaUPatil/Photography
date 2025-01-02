function validateForm() {
  let isValid = true;  
  
  
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('name_error');
  
  
  if (name === '' || name === null) {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  else if (!/[a-zA-Z]/.test(name)|| !/\d/.test(name))
    {
        document.getElementById('name_error').textContent
        ='name must only contain letters';
        console.log("name must only contain letters");
        isValid = false;
    }

    else if (!/^[A-za-z0-9]+$/.test(name))
    {
        document.getElementById('name_error').textContent
        ='name must only contain  and numbers, no spaces or special characters';
        console.log("name must only contain letters and numbers, no spaces or special characters");
        isValid = false;
    }
        
    else if (!/^[A-Za-z\s]+$/.test(name))
    {
        document.getElementById('name_error').textContent='name must only contain letters';
        document.write("name must only contain letters")
        isValid = false;
    }

    else
    {
        document.getElementById('name_error').textContent='';
        isValid = true;
    }
  
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('email_error');
  const emailPattern = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;

  
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email';
    isValid = false;
  } else {
    
    emailError.textContent = '';
  }

  return isValid;
}


const images = document.querySelectorAll('.gallery-item img');
images.forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImg = document.createElement('img');
    modalImg.src = img.src;
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});
