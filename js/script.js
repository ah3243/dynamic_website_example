// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;
    
//     // Get elements by ID
//     const box1 = document.getElementById('box1');
//     const box2 = document.getElementById('box2');
//     const image1 = document.getElementById('image1');
//     const image2 = document.getElementById('image2');
    
//     // Set scale based on scroll position
//     const scale = Math.min(scrolled / 500, 1);
    
//     // Apply scale transformation
//     box1.style.transform = `scale(${1 + scale})`;
//     box2.style.transform = `scale(${1 + scale / 2})`; // Different rate for demonstration
//     image1.style.transform = `scale(${1 + scale})`;
//     image2.style.transform = `scale(${1 + scale / 2})`; // Different rate for demonstration
//   });

  

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;

  // Adjust the scaling factor here
  const scaleFactor = scrolled / 500;

  // Select your images
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');

  // Apply the scale transformation
  image1.style.transform = `scale(${1 + scaleFactor})`;
  image2.style.transform = `scale(${1 + scaleFactor})`;
});
  