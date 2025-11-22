// document.addEventListener('DOMContentLoaded', function() {
//     const mainNav = document.getElementById('mainNav');
//     const navLinks = document.querySelectorAll('.nav-link');
    
//     // 1. Sticky Navbar on Scroll (سکول کرنے پر نیو بار کو فکس کرنا)
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//             mainNav.classList.add('scrolled');
//         } else {
//             mainNav.classList.remove('scrolled');
//         }
//     });

//     // 2. Character Hover Animation for Navbar Links (نیو بار کے لنکس پر کریکٹر اینیمیشن)
//     navLinks.forEach(link => {
//         // हर कैरेक्टर को एक स्पैन (span) में रैप करते हैं
//         const text = link.textContent;
//         link.innerHTML = ''; // Clear original text
        
//         // Split text and wrap in spans
//         text.split('').forEach(char => {
//             const span = document.createElement('span');
//             span.textContent = char === ' ' ? '\u00A0' : char; // Space के लिए non-breaking space
//             span.style.display = 'inline-block';
//             span.style.transition = 'transform 0.3s ease, color 0.3s ease';
//             link.appendChild(span);

//             // होवर इफेक्ट (Hover effect)
//             link.addEventListener('mouseover', () => {
//                 span.style.transform = 'translateY(-2px)'; // थोड़ा ऊपर मूव करना
//                 span.style.color = '#fff';
//             });
//             link.addEventListener('mouseout', () => {
//                 span.style.transform = 'translateY(0)';
//                 span.style.color = ''; // रीसेट
//             });
//         });

//         // पेरेंट लिंक के लिए कलर लॉजिक (Color logic for the parent link)
//         link.addEventListener('mouseover', () => {
//             link.style.color = 'var(--primary-color)';
//         });
//         link.addEventListener('mouseout', () => {
//             link.style.color = '';
//         });
//     });

//     // 3. Simple Typing Effect for Hero Section (ہیڈ لائن کے لیے ٹائپنگ ایفیکٹ)
//     const typedTextElement = document.querySelector('.typed-text');
//     const roles = ["Frontend Developer", "Full-Stack Enthusiast", "UI/UX Specialist", "Freelance Developer"];
//     let roleIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;

//     function type() {
//         const currentRole = roles[roleIndex];
//         let display = currentRole.substring(0, charIndex);
        
//         // Boldness (बोल्डनेस)
//         display = display.replace("Frontend Developer", "**Frontend Developer**").replace("Full-Stack Enthusiast", "**Full-Stack Enthusiast**");
//         typedTextElement.innerHTML = display;

//         if (!isDeleting && charIndex < currentRole.length) {
//             charIndex++;
//             setTimeout(type, 100); // Typing speed
//         } else if (isDeleting && charIndex > 0) {
//             charIndex--;
//             setTimeout(type, 50); // Deleting speed
//         } else if (!isDeleting && charIndex === currentRole.length) {
//             setTimeout(() => isDeleting = true, 1500); // डिलीट करने से पहले रुकना
//             setTimeout(type, 50);
//         } else if (isDeleting && charIndex === 0) {
//             isDeleting = false;
//             roleIndex = (roleIndex + 1) % roles.length;
//             setTimeout(type, 500); // अगली भूमिका से पहले रुकना
//         }
//     }

//     type(); // Start the typing effect
// });



document.addEventListener('DOMContentLoaded', function() {
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 1. Sticky Navbar on Scroll (Scroll karne par Navbar ko fix karna)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });

    // 2. Character Hover Animation for Navbar Links (Navbar links par har character ki animation)
    navLinks.forEach(link => {
        // Har character ko ek span mein wrap karte hain (Wrap each character in a span)
        const text = link.textContent;
        link.innerHTML = ''; // Clear original text
        
        // Split text and wrap in spans
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Space ke liye non-breaking space
            span.style.display = 'inline-block';
            span.style.transition = 'transform 0.3s ease, color 0.3s ease';
            link.appendChild(span);

            // Hover effect (Slightly move up)
            link.addEventListener('mouseover', () => {
                span.style.transform = 'translateY(-2px)'; // Thoda upar move karna
                span.style.color = '#fff';
            });
            link.addEventListener('mouseout', () => {
                span.style.transform = 'translateY(0)';
                span.style.color = ''; // Reset
            });
        });

        // Parent link ke liye color logic (Color logic for the parent link)
        // Ye CSS mein bhi handle ho raha hai, lekin JS bhi ensure karega
        link.addEventListener('mouseover', () => {
            link.style.color = 'var(--primary-color)';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });

    // 3. Simple Typing Effect for Hero Section (Headliner ke liye typing effect)
    const typedTextElement = document.querySelector('.typed-text');
    const roles = ["Frontend Developer", "Full-Stack Enthusiast", "UI/UX Specialist", "Freelance Developer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        let display = currentRole.substring(0, charIndex);
        
        // Boldness (Bolding for better appearance)
        display = display.replace("Frontend Developer", "**Frontend Developer**").replace("Full-Stack Enthusiast", "**Full-Stack Enthusiast**");
        typedTextElement.innerHTML = display;

        if (!isDeleting && charIndex < currentRole.length) {
            charIndex++;
            setTimeout(type, 100); // Typing speed
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50); // Deleting speed
        } else if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => isDeleting = true, 1500); // Delete karne se pehle rukna
            setTimeout(type, 50);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500); // Agli role se pehle rukna
        }
    }

    type(); // Start the typing effect
});