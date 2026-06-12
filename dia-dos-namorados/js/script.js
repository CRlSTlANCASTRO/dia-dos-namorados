// ============================================
// PARTICLE ANIMATION
// ============================================
function createParticles() {
    const container = document.getElementById('particles-container');
    const particles = ['❤️', '💕', '✨', '💖', '🌸'];
    
    function addParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.fontSize = (Math.random() * 15 + 15) + 'px';
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 7000);
    }
    
    setInterval(addParticle, 500);
}

// ============================================
// TIME COUNTER
// ============================================
function updateCounter() {
    // CONFIGURE A DATA DE INÍCIO DO RELACIONAMENTO AQUI
    const startDate = new Date('2024-07-28'); // Altere para a data real
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// ============================================
// INTERACTIVE LETTERS
// ============================================
const letterMessages = {
    'saudades': {
        title: '💕 Quando você estiver com saudades...',
        message: 'Saudade é o sentimento de querer te ter por perto, mesmo quando estamos longes. Cada momento longe de você é um momento que eu espero ansiosamente pra te ver. Você está sempre no meu pensamento, no meu coração e no meu coração. Te amo mais do que palavras podem expressar.'
    },
    'dia-dificil': {
        title: '💪 Quando você tiver um dia difícil...',
        message: 'Nunca esqueça de que você é mais forte do que imagina. Em cada momento difícil e desafiador, eu tenho certeza que voce é 100% capaz de superar meu amor, e eu estarei sempre aqui para te apoiar, te ouvir e te ajudar. Você é incrível, capaz e merecedora de todo o amor do mundo. Respira fundo, eu estou contigo.'
    },
    'rir': {
        title: '😄 Quando você quiser rir...',
        message: 'Lembra todas as vezes em que eu fiz alguma careta, idiotice ou agi de uma maneira muito esquisita tentando arrancar um sorriso seu ?   Rir é o melhor remédio pra momentos difíceis, e adoro ver seu sorriso perfeito iluminar o mundo inteiro!. Você é paz, é luz e tudo de melhor que esse pode existir nesse mundo.'
    },
    'amor': {
        title: '❤️ Quando você quiser se sentir amada...',
        message: 'Você é a pessoa mais especial que já conheci. Seu olhos tem o poder de melhorar o meu dia em 1 segundo, sua voz acalma meu coração e seu abraço é meu lugar favorito no mundo. Eu te amo não apenas pelo que você é, mas pelo que eu sou quando estou com você. Você é meu tudo, hoje e sempre.'
    }
};

function setupLetters() {
    const envelopes = document.querySelectorAll('.envelope');
    const modal = document.getElementById('letter-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalClose = document.getElementById('modal-close');
    
    envelopes.forEach(envelope => {
        envelope.addEventListener('click', () => {
            const letter = envelope.dataset.letter;
            const content = letterMessages[letter];
            
            modalTitle.textContent = content.title;
            modalMessage.textContent = content.message;
            modal.classList.add('active');
        });
    });
    
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// ============================================
// MUSIC PLAYER
// ============================================
function setupMusicPlayer() {
    const toggle = document.getElementById('music-toggle');
    const audio = document.getElementById('background-music');
    const volumeSlider = document.getElementById('volume-slider');
    let isPlaying = false;
    
    // Set initial volume
    audio.volume = 0.5;
    
    // Check if audio file loads correctly
    audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        console.error('Audio src:', audio.src);
        alert('Erro ao carregar música. Verifique se o arquivo está em assets/audio/music.mp3');
    });
    
    audio.addEventListener('loadeddata', () => {
        console.log('Audio loaded successfully');
    });
    
    toggle.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            toggle.textContent = '▶';
        } else {
            audio.play().then(() => {
                console.log('Audio playing');
                toggle.textContent = '⏸';
            }).catch(e => {
                console.error('Audio play failed:', e);
                alert('Erro ao tocar música. Verifique se o arquivo music.mp3 está na pasta assets/audio/');
            });
        }
        isPlaying = !isPlaying;
    });
    
    // Volume control
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value;
        audio.volume = volume;
        console.log('Volume set to:', volume);
    });
}

// ============================================
// QUIZ GAME
// ============================================
function setupQuiz() {
    const questions = document.querySelectorAll('.quiz-question');
    const result = document.getElementById('quiz-result');
    let correctAnswers = 0;
    let answeredQuestions = 0;
    
    questions.forEach(question => {
        const options = question.querySelectorAll('.quiz-option');
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                const isCorrect = option.dataset.correct === 'true';
                
                // Disable all options in this question
                options.forEach(opt => {
                    opt.disabled = true;
                    opt.style.cursor = 'not-allowed';
                });
                
                // Show correct/incorrect
                if (isCorrect) {
                    option.classList.add('correct');
                    correctAnswers++;
                } else {
                    option.classList.add('incorrect');
                    // Show correct answer
                    options.forEach(opt => {
                        if (opt.dataset.correct === 'true') {
                            opt.classList.add('correct');
                        }
                    });
                }
                
                answeredQuestions++;
                
                // Check if all questions answered
                if (answeredQuestions === questions.length) {
                    setTimeout(() => {
                        if (correctAnswers === questions.length) {
                            document.getElementById('quiz-questions').style.display = 'none';
                            result.classList.add('active');
                            createConfetti(); // Trigger confetti on success
                        } else {
                            alert(`Você acertou ${correctAnswers} de ${questions.length} perguntas. Tente novamente para desbloquear a surpresa!`);
                            // Reset quiz
                            setTimeout(() => {
                                resetQuiz();
                            }, 1000);
                        }
                    }, 1000);
                }
            });
        });
    });
}

function resetQuiz() {
    const questions = document.querySelectorAll('.quiz-question');
    const result = document.getElementById('quiz-result');
    
    questions.forEach(question => {
        const options = question.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.disabled = false;
            option.style.cursor = 'pointer';
            option.classList.remove('correct', 'incorrect');
        });
    });
    
    result.classList.remove('active');
    document.getElementById('quiz-questions').style.display = 'block';
    correctAnswers = 0;
    answeredQuestions = 0;
}

// ============================================
// FADE-IN ANIMATION ON SCROLL
// ============================================
function setupScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// SCATTERED GALLERY ANIMATION
// ============================================
function setupScatteredGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, {
        threshold: 0.2
    });
    
    galleryItems.forEach(item => {
        observer.observe(item);
    });
}

// ============================================
// CLICKABLE HEARTS WITH EXPLOSION
// ============================================
function setupClickableHearts() {
    const hearts = document.querySelectorAll('.clickable-heart');
    
    hearts.forEach(heart => {
        heart.addEventListener('click', (e) => {
            createHeartExplosion(e.clientX, e.clientY);
            heart.style.animation = 'none';
            setTimeout(() => {
                heart.style.animation = 'floatHeart 4s ease-in-out infinite';
            }, 100);
        });
    });
}

function createHeartExplosion(x, y) {
    const particles = ['❤️', '💕', '💖', '✨', '💗'];
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'heart-particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// ============================================
// LIGHTBOX FOR GALLERY
// ============================================
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const placeholder = item.querySelector('.gallery-placeholder');
            lightboxImage.src = '';
            lightboxImage.alt = placeholder.textContent;
            lightbox.classList.add('active');
        });
    });
    
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

// ============================================
// CONFETTI ANIMATION
// ============================================
function createConfetti() {
    const colors = ['#D4AF37', '#FFB6C1', '#FFD700', '#FF69B4', '#E6E6FA'];
    const shapes = ['❤️', '💕', '✨', '💖', '⭐'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// ============================================
// SHARE FUNCTIONALITY
// ============================================
function setupShareButton() {
    const shareButton = document.getElementById('share-button');
    
    shareButton.addEventListener('click', async () => {
        const shareData = {
            title: 'Para Você, Meu Amor 💕',
            text: 'Cada momento ao seu lado é um presente que eu guardo no coração. Feliz Dia dos Namorados!',
            url: window.location.href
        };
        
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Share failed:', err);
                fallbackShare();
            }
        } else {
            fallbackShare();
        }
    });
}

function fallbackShare() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copiado para a área de transferência! Cole para compartilhar.');
    }).catch(() => {
        alert('Não foi possível compartilhar. Copie o link da página manualmente.');
    });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    updateCounter();
    setInterval(updateCounter, 1000);
    setupLetters();
    setupMusicPlayer();
    setupQuiz();
    setupScrollAnimations();
    setupScatteredGallery();
    setupClickableHearts();
    setupLightbox();
    setupShareButton();
});
