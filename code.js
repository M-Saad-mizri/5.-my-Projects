document.getElementById('thumbnail').addEventListener('click', function() {
    document.getElementById('overlayyyy').style.display = 'flex';
    document.getElementById('thumbnail').style.display = 'none';
    document.getElementById('name').style.display = 'none';
    document.getElementById('social-media').style.display = 'none';
  });
  
  document.getElementById('closeBtnnnn').addEventListener('click', function() {
      document.getElementById('overlayyyy').style.display = 'none';
      document.getElementById('thumbnail').style.display = 'block';
      document.getElementById('name').style.display = 'block';
      document.getElementById('social-media').style.display = 'flex';
  });

  document.getElementById('overlayyyy').addEventListener('click', function(event) {
    if (event.target.id === 'overlayyyy') {
      document.getElementById('overlayyyy').style.display = 'none';
      document.getElementById('thumbnail').style.display = 'block';
      document.getElementById('name').style.display = 'block';
      document.getElementById('social-media').style.display = 'flex';
    }
  });