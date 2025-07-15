// Parallax scrolling effect
window.addEventListener('scroll', () => {
    console.log("scrolling!!!");
    const scrolled = window.pageYOffset;
    
    // Update scroll indicators
    const progress = Math.round((scrolled / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    // document.getElementById('progress').textContent = progress + '%';
    // document.getElementById('position').textContent = scrolled + 'px';
    
    // Apply parallax to planets (different speeds)
    const planets = document.querySelectorAll('.parallax-layer');
    planets.forEach((planet, index) => {
        // Each planet moves at a different speed
        const speed = 0.2 + (index * 0.15); // 0.2, 0.35, 0.5
        const yPos = scrolled * speed;
        planet.style.transform = `translateY(${yPos}px)`;
    });
    
    // Apply parallax to stars (slower movement)
    const stars = document.querySelectorAll('.star-layer');
    stars.forEach((star, index) => {
        // Stars move slower than planets
        const speed = 0.1 + (index * 0.02); // 0.1, 0.12, 0.14, 0.16, 0.18
        const yPos = scrolled * speed;
        star.style.transform = `translateY(${yPos}px)`;
    });
});

// Optional: Add mouse parallax effect 
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Subtle mouse-based parallax
    const planets = document.querySelectorAll('.parallax-layer');
    planets.forEach((planet, index) => {
        const intensity = 10 + (index * 5); // Different intensities
        const x = (mouseX - 0.5) * intensity;
        const y = (mouseY - 0.5) * intensity;
        
        // Combine with scroll parallax
        const scrolled = window.pageYOffset;
        const scrollSpeed = 0.2 + (index * 0.15);
        const scrollY = scrolled * scrollSpeed;
        
        planet.style.transform = `translateX(${x}px) translateY(${scrollY + y}px)`;
    });
});