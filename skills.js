    function animarSkills() {
        const circles = document.querySelectorAll('.progresso-circular');

        circles.forEach(circle => {
            const target = parseInt(circle.getAttribute('data-percent'));
            const textElement = circle.querySelector('.texto-porcentagem');
            let count = 0;

            const interval = setInterval(() => {
                if (count >= target) {
                    clearInterval(interval);
                }

                textElement.innerText = count + "%";
                circle.style.background = `conic-gradient(
                    #4A7FA7 ${count}%, 
                    #1e2629 ${count}% 100%
                )`;

                count++;
            }, 20);
        });
    }
    
    window.onload = animarSkills;