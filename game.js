// ===== Our Love Story - 3 Years Adventure Game =====

const GAME_DATA = [
    {
        id: 1,
        title: "COVID Connection",
        badge: "Chapter 1",
        story: "During the pandemic, when the world was locked down, we met online. I have to admit, I used to ignore your messages at first. Little did I know that the person I was brushing off would become the most important part of my life. Sometimes the best things come when we least expect them.",
        challenge: "memory",
        challengeTitle: "Find the Matching Pairs",
        instruction: "Match all the pairs to unlock our connection! Each pair represents a message we exchanged.",
        victoryMsg: "We found each other, even when I was being difficult! 💕"
    },
    {
        id: 2,
        title: "College & The Birthday Cake",
        badge: "Chapter 2",
        story: "When COVID finally eased and we went to college, our paths crossed in person for the first time. It was your birthday, and I came for the cake! That first real meeting was special. Your smile, your presence... I should have known then that you were someone extraordinary.",
        challenge: "click",
        challengeTitle: "Light the Birthday Candles",
        instruction: "Click the candle 10 times to light it up for that baby girl's birthday!",
        victoryMsg: "The sweetest first meeting, over birthday cake! 🎂"
    },
    {
        id: 3,
        title: "A New Beginning",
        badge: "Chapter 3",
        story: "You went through a difficult time with someone who didn't deserve you. I was there to help you heal and move on. And then, you proposed to me! August 1st, 2022. The day our official journey began. I said yes, and I've never looked back.",
        challenge: "typing",
        challengeTitle: "Our Special Date",
        instruction: "Type our anniversary date: AUGUST 1 2022 (or august 1 2022)",
        victoryMsg: "August 1, 2022, the best yes I ever said! 💍"
    },
    {
        id: 4,
        title: "College Days Together",
        badge: "Chapter 4",
        story: "Our first year of dating was magical. We went to classes together, shared countless moments, and celebrated Diwali side by side. Those college days with you were some of the happiest, walking the campus, studying together, and building our foundation.",
        challenge: "sequence",
        challengeTitle: "Diwali Lights Sequence",
        instruction: "Follow the sequence of Diwali lights! Click the buttons in the order they light up.",
        victoryMsg: "College days with you = pure magic! ✨"
    },
    {
        id: 5,
        title: "Dubai & Long Distance",
        badge: "Chapter 5",
        story: "Year 2 brought change. I moved to Dubai for my Petrofac internship. The distance was hard, we had our fights. But we never gave up. Long distance taught us that love isn't about being in the same place; it's about choosing each other every single day.",
        challenge: "slider",
        challengeTitle: "Bridge the Distance",
        instruction: "Slide to connect our hearts across the miles!",
        victoryMsg: "Distance couldn't keep us apart! 🌍"
    },
    {
        id: 6,
        title: "UKUSA Reunion",
        badge: "Chapter 6",
        story: "Before I left for the USA, we met at UKUSA. That reunion was emotional, and you had a surprise for me that I'll never forget. Seeing you there, feeling your presence before the long separation... it meant everything. Your surprises always touch my heart.",
        challenge: "maze",
        challengeTitle: "Find the Right Path",
        instruction: "Help her (👩) navigate the maze from left to right using the arrow keys and reach the right memory: UKUSA.",
        victoryMsg: "That UKUSA surprise, I'll cherish it forever! 💝"
    },
    {
        id: 7,
        title: "USA & Reconnection",
        badge: "Chapter 7",
        story: "I was in the USA, you were in India. We hadn't talked for a while. Then came your graduation. When I saw you in that cap and gown, I realized how much I had missed you. Our online call, the laughter, the tears, the anger, we worked through it all. We never left each other's side.",
        challenge: "dots",
        challengeTitle: "Connect Our Graduation",
        instruction: "Connect the dots in order to sketch your little graduation cap. Every dot is a moment that brought us back together.",
        victoryMsg: "We found our way back to each other! 🎓"
    },
    {
        id: 8,
        title: "Urban Company & The Surprise",
        badge: "Chapter 8",
        story: "Summer in Dubai, Urban Company internship. We had fights about me not giving enough time. But I had a secret: I planned a surprise visit to you in India! It didn't go perfectly, but I hope you know how much I wanted to see you. Those 3 days together were the best. I missed you so much when I left.",
        challenge: "order",
        challengeTitle: "Perfect 3-Day Plan",
        instruction: "Tap the emojis in the right order for our 3 days together: travel → stay → love.",
        victoryMsg: "Those 3 days with you, unforgettable! ✈️"
    },
    {
        id: 9,
        title: "Unbreakable Bond",
        badge: "Chapter 9",
        story: "Back in the USA, you motivated me to apply for jobs. When I had my accident and broke my collarbone, you were there, supporting me emotionally when I needed it most. You've always been my rock. Your encouragement, your belief in me... I'm so grateful. You still support and motivate me every day.",
        challenge: "hold",
        challengeTitle: "Hold On To Me",
        instruction: "Press and hold the button to show how strongly we hold onto each other.",
        victoryMsg: "You've always been my strength! 💪"
    },
    {
        id: 10,
        title: "Our Forever",
        badge: "Final Chapter",
        story: "Three years. COVID to college. Dubai to USA. Fights and forgiveness. Distance and devotion. Through it all, we've stuck together. I promise to keep you happy. I promise to be there. This is just the beginning of our forever.",
        challenge: "sudoku",
        challengeTitle: "Our Forever Sudoku",
        instruction: "Solve this little love sudoku (4x4), every correct number is a piece of our future falling into place. When you finish, your birthday wish will appear.",
        victoryMsg: "Happy Birthday! I love you! 🎉"
    }
];

// Configure photo reel images here (put your files in /photos)
// Using 1.JPG through 36.JPG (paths work on GitHub Pages and locally)
function getPhotoBase() {
    if (typeof window === 'undefined' || !window.location) return '';
    const path = window.location.pathname || '';
    const dir = path.replace(/\/[^/]*$/, '/');
    return dir;
}
const PHOTO_REELS = Array.from({ length: 36 }, (_, i) => getPhotoBase() + `Photos/${i + 1}.JPG`);

const LOVE_LETTER_TEXT = `
Happy Birthday, My Love ❤️

Congratulations on completing all the challenges!
Now the game has ended, there’s something I want to tell you!

Three years ago, during a strange time when the world was shut down because of COVID, I met a girl online… a girl I honestly used to ignore. I never imagined that the same girl would one day become the most important person in my life.

Then life moved on, college started, and the first time I truly saw you in person was on your birthday when we cut your cake. Back then, I didn’t know that this moment was the beginning of a story that would completely change my life.

We went through so many phases together. There were moments when life took us in different directions, even when you were in a difficult relationship and going through a lot. But somehow, fate kept bringing us back to each other.

And then came the moment that changed everything.

August 1st, 2022.
The day you proposed to me.
The day we started.

Our first year together in college was simple but beautiful. Walking to classes together, spending random moments on campus, celebrating Diwali together, laughing over the smallest things. Those moments are memories I will always hold close to my heart.

Then life tested us.

I moved to Dubai for my internship at Petrofac and suddenly distance became part of our story. We had fights, misunderstandings, and tough days, but we also had love that refused to give up. I will never forget the moment I saw you at UKUSA before leaving for the US. That surprise you gave me meant more to me than I can ever explain. It made me emotional because it reminded me how lucky I am to have you.

Then I came to the United States for my master’s, and life became even harder. A new country, struggles, pressure, and long distances. There were times we barely talked. But when I saw you during your graduation, something hit me deeply. I realized how much I had missed you.

And from that moment, we found our way back again.

Through laughter, tears, anger, late night calls, and honest conversations, we stayed. We did not leave each other’s side.

When I came to Dubai again for my internship at Urban Company, we still had our fights, especially about time and distance. But I wanted to see you so badly that I planned a surprise trip to India. Even though the plan did not go perfectly, those three days we spent together were some of the happiest moments of my life.

Then I came back to the US again, chasing my dreams and trying to build a future. Through everything, applications, stress, and uncertainty, you were always there motivating me.

When I had my accident and broke my collarbone, you stayed beside me emotionally even though you were thousands of miles away.

That is when I realized something very important.

You are not just my girlfriend.
You are my strength, my peace, my support system, and the person who believes in me even when I doubt myself.

You have been there through three countries, countless challenges, long distance calls, and moments where it would have been easier to give up.
But we did not.
And that is what makes us special.

Today is your birthday, but honestly I feel like I am the one who received the greatest gift. You.

Thank you for loving me.
Thank you for supporting me.
Thank you for fighting for us.
Thank you for never giving up on me.

No matter where life takes us next, whether it is the US, India, Dubai, or anywhere in the world, I promise one thing.
I will always try my best to keep you happy, support your dreams, and stand beside you just like you stood beside me.

So after completing all these little adventures in this game, here is the final message.

✨ Happy Birthday to the girl who turned my life into the most beautiful adventure. ✨

I love you more than words can ever explain.
And I cannot wait to create many more years, memories, and adventures with you.

Happy Birthday, my love ❤️

- Forever Yours
`;

// Game State
let currentLevel = 1;
let completedLevels = new Set();

// DOM Elements
const screens = {
    landing: document.getElementById('landing'),
    intro: document.getElementById('intro-screen'),
    map: document.getElementById('map-screen'),
    story: document.getElementById('story-screen'),
    challenge: document.getElementById('challenge-screen'),
    victory: document.getElementById('victory-screen'),
    birthday: document.getElementById('birthday-screen')
};

// Sound effects (Web Audio API - no external files)
let audioCtx = null;
function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}
function playClickSound() {
    try {
        const ctx = getAudioCtx();
        if (ctx.state === 'suspended') ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 680;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.08);
    } catch (_) {}
}
function playConfettiSound() {
    try {
        const ctx = getAudioCtx();
        if (ctx.state === 'suspended') ctx.resume();
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 - cheerful chord run
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = freq;
            osc.type = 'sine';
            const t = ctx.currentTime + i * 0.08;
            gain.gain.setValueAtTime(0.15, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
            osc.start(t);
            osc.stop(t + 0.2);
        });
    } catch (_) {}
}
document.body.addEventListener('click', function (e) {
    if (e.target.closest('button')) playClickSound();
});

// Show Screen
function showScreen(screenId) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    if (screen) screen.classList.add('active');
}

// Create Floating Hearts for Landing
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const hearts = ['♥', '💕', '💗', '💖'];
    // Create many hearts so they appear across the whole screen
    for (let i = 0; i < 35; i++) {
        const heart = document.createElement('span');
        heart.textContent = hearts[i % hearts.length];
        heart.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${0.8 + Math.random() * 2.2}rem;
            opacity: ${0.08 + Math.random() * 0.22};
            animation: float ${4 + Math.random() * 6}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(heart);
    }
}

// Build Map
function buildMap() {
    const container = document.getElementById('level-nodes');
    container.innerHTML = '';
    GAME_DATA.forEach(level => {
        const node = document.createElement('div');
        node.className = 'level-node';
        node.textContent = level.id;
        node.dataset.level = level.id;
        if (completedLevels.has(level.id)) node.classList.add('completed');
        else if (level.id === currentLevel) node.classList.add('current');
        else if (level.id > currentLevel) node.classList.add('locked');
        node.addEventListener('click', () => {
            if (level.id <= currentLevel) {
                currentLevel = level.id;
                startLevel(level.id);
            }
        });
        container.appendChild(node);
    });
}

// Start Level
function startLevel(levelId) {
    const level = GAME_DATA.find(l => l.id === levelId);
    if (!level) return;

    document.getElementById('story-level-badge').textContent = level.badge;
    document.getElementById('story-title').textContent = level.title;
    document.getElementById('story-text').textContent = level.story;
    document.getElementById('current-level').textContent = currentLevel;

    buildMap();
    showScreen('map-screen');

    document.getElementById('continue-btn').style.display = 'block';
    document.getElementById('continue-btn').textContent = `Start Chapter ${levelId}`;
    document.getElementById('continue-btn').onclick = () => showStory(levelId);
}

// Show Story
function showStory(levelId) {
    const level = GAME_DATA.find(l => l.id === levelId);
    document.getElementById('story-level-badge').textContent = level.badge;
    document.getElementById('story-title').textContent = level.title;
    document.getElementById('story-text').textContent = level.story;
    document.getElementById('play-challenge-btn').onclick = () => startChallenge(levelId);
    document.getElementById('back-to-map-btn').onclick = () => {
        buildMap();
        document.getElementById('continue-btn').style.display = 'block';
        document.getElementById('continue-btn').textContent = `Start Chapter ${currentLevel}`;
        document.getElementById('continue-btn').onclick = () => showStory(currentLevel);
        showScreen('map-screen');
    };
    showScreen('story-screen');
}

// Start Challenge
function startChallenge(levelId) {
    const level = GAME_DATA.find(l => l.id === levelId);
    document.getElementById('challenge-title').textContent = level.challengeTitle;
    document.getElementById('challenge-instruction').textContent = level.instruction;

    const area = document.getElementById('challenge-area');
    area.innerHTML = '';
    document.getElementById('challenge-submit').style.display = 'none';

    switch (level.challenge) {
        case 'memory':
            createMemoryGame(area, level);
            break;
        case 'click':
            createClickGame(area, level);
            break;
        case 'typing':
            createTypingGame(area, level);
            break;
        case 'sequence':
            createSequenceGame(area, level);
            break;
        case 'slider':
            createSliderGame(area, level);
            break;
        case 'collect':
            createCollectGame(area, level);
            break;
        case 'maze':
            createMazeGame(area, level);
            break;
        case 'dots':
            createDotsGame(area, level);
            break;
        case 'order':
            createOrderGame(area, level);
            break;
        case 'hold':
            createHoldGame(area, level);
            break;
        case 'sudoku':
            createSudokuGame(area, level);
            break;
        case 'final':
            createFinalChallenge(area, level);
            break;
    }

    document.getElementById('challenge-back-btn').onclick = () => showStory(levelId);
    // Convenience button so you can quickly move forward while testing or if she gets stuck
    const skipBtn = document.getElementById('skip-challenge-btn');
    if (skipBtn) {
        skipBtn.onclick = () => completeLevel(levelId);
    }
    showScreen('challenge-screen');
}

// Memory Game
function createMemoryGame(area, level) {
    // Use special emojis for level 1 (our COVID/online connection),
    // and the original heart-themed set for other memory levels.
    const baseSymbols = level.id === 1
        ? ['📱', '♥', '💬', '🎵', '🦠', '✈️']  // phone, heart, text, music, covid germ, flight
        : ['♥', '💕', '🎂', '💗', '💖', '✨'];
    const pairs = [...baseSymbols, ...baseSymbols].sort(() => Math.random() - 0.5);
    let flipped = [];
    let matched = 0;

    const grid = document.createElement('div');
    grid.className = 'memory-grid';

    pairs.forEach((sym, i) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = i;
        card.dataset.symbol = sym;
        card.textContent = '?';
        card.onclick = () => {
            if (flipped.length === 2 || card.classList.contains('matched') || card.classList.contains('flipped')) return;
            card.classList.add('flipped');
            card.textContent = sym;
            flipped.push(card);
            if (flipped.length === 2) {
                if (flipped[0].dataset.symbol === flipped[1].dataset.symbol) {
                    flipped.forEach(c => c.classList.add('matched'));
                    matched += 2;
                    flipped = [];
                    if (matched === pairs.length) setTimeout(() => completeLevel(level.id), 500);
                } else {
                    setTimeout(() => {
                        flipped.forEach(c => { c.classList.remove('flipped'); c.textContent = '?'; });
                        flipped = [];
                    }, 800);
                }
            }
        };
        grid.appendChild(card);
    });
    area.appendChild(grid);
}

// Click Game
function createClickGame(area, level) {
    const target = level.id === 2 ? 10 : 15;
    let count = 0;

    const candle = document.createElement('div');
    candle.className = 'click-target';
    candle.textContent = level.id === 2 ? '🕯️' : '🧳';
    // For level 2, start with a dark background to represent an unlit candle
    if (level.id === 2) {
        candle.style.background = 'linear-gradient(135deg, #111, #333)';
    }
    candle.onclick = () => {
        count++;
        candle.style.transform = `scale(${0.9 + (count / target) * 0.2})`;
        if (count >= target) completeLevel(level.id);
    };
    area.appendChild(candle);

    const counter = document.createElement('p');
    counter.style.marginTop = '1rem';
    counter.textContent = `Progress: ${count}/${target}`;
    candle.onclick = () => {
        count++;
        counter.textContent = `Progress: ${count}/${target}`;
        const progress = Math.min(count / target, 1);
        candle.style.transform = `scale(${0.9 + progress * 0.2})`;
        // Increase glow, brightness and color toward bright yellow as the candle is \"lit\"
        const glowSize = 10 + progress * 25;
        const glowOpacity = 0.3 + progress * 0.5;
        candle.style.boxShadow = `0 0 ${glowSize}px rgba(255, 230, 150, ${glowOpacity})`;
        candle.style.filter = `brightness(${1 + progress * 0.8})`;
        if (level.id === 2) {
            // Blend from dark grey to warm yellow using progress
            const yellowStrength = progress;
            const baseR = 30, baseG = 30, baseB = 30;
            const targetR = 255, targetG = 220, targetB = 120;
            const r = Math.round(baseR + (targetR - baseR) * yellowStrength);
            const g = Math.round(baseG + (targetG - baseG) * yellowStrength);
            const b = Math.round(baseB + (targetB - baseB) * yellowStrength);
            candle.style.background = `radial-gradient(circle at 50% 30%, rgba(255, 240, 200, ${0.2 + yellowStrength * 0.5}), rgb(${r}, ${g}, ${b}))`;
        }
        if (count >= target) completeLevel(level.id);
    };
    area.appendChild(counter);
}

// Typing Game
function createTypingGame(area, level) {
    const wrapper = document.createElement('div');
    wrapper.className = 'typing-challenge';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type AUGUST 1 2022';
    wrapper.appendChild(input);

    const btn = document.createElement('button');
    btn.className = 'btn-primary';
    btn.textContent = 'Submit';
    btn.style.marginTop = '1rem';
    btn.onclick = () => {
        const val = input.value.trim().toUpperCase().replace(/,/g, '').replace(/\s+/g, ' ');
        if (val === 'AUGUST 1 2022') {
            completeLevel(level.id);
        } else {
            alert('Try again! Format: AUGUST 1 2022');
        }
    };
    wrapper.appendChild(btn);
    area.appendChild(wrapper);
}

// Sequence Game
function createSequenceGame(area, level) {
    // For the Diwali chapter (4), use Diwali-themed emojis
    const symbols = level.id === 4
        ? ['🪔', '✨', '🎆', '🎇', '💥']
        : ['♥', '💕', '💗', '💖', '✨'];
    const sequence = [];
    for (let i = 0; i < 5; i++) sequence.push(symbols[Math.floor(Math.random() * symbols.length)]);

    const display = document.createElement('p');
    display.textContent = 'Press \"Start Sequence\" to see the pattern.';
    display.style.marginBottom = '1rem';
    area.appendChild(display);

    const buttons = document.createElement('div');
    buttons.className = 'sequence-buttons';
    const btns = symbols.map(s => {
        const b = document.createElement('button');
        b.className = 'sequence-btn';
        b.textContent = s;
        return b;
    });
    btns.forEach(b => buttons.appendChild(b));

    let step = 0;
    let showing = true;

    function showNext() {
        if (step < sequence.length) {
            display.textContent = `Step ${step + 1} of ${sequence.length}`;
            const idx = symbols.indexOf(sequence[step]);
            btns[idx].classList.add('correct');
            setTimeout(() => {
                btns[idx].classList.remove('correct');
                step++;
                setTimeout(showNext, 300);
            }, 600);
        } else {
            showing = false;
            display.textContent = 'Your turn! Repeat the sequence.';
            step = 0;
        }
    }

    btns.forEach((btn, idx) => {
        btn.onclick = () => {
            if (showing) return;
            if (symbols[idx] === sequence[step]) {
                btn.classList.add('correct');
                setTimeout(() => btn.classList.remove('correct'), 200);
                step++;
                if (step === sequence.length) completeLevel(level.id);
            } else {
                btn.classList.add('wrong');
                setTimeout(() => btn.classList.remove('wrong'), 500);
                step = 0;
            }
        };
    });

    const startBtn = document.createElement('button');
    startBtn.className = 'btn-primary';
    startBtn.textContent = 'Start Sequence';
    startBtn.style.marginTop = '1rem';
    startBtn.onclick = () => {
        startBtn.disabled = true;
        startBtn.style.opacity = '0.7';
        step = 0;
        showing = true;
        showNext();
    };

    area.appendChild(buttons);
    area.appendChild(startBtn);
}

// Slider Game (Bridge the Distance - Level 5)
function createSliderGame(area, level) {
    const container = document.createElement('div');
    container.className = 'arrow-hearts';
    container.style.minWidth = '300px';

    const playerHeart = document.createElement('div');
    playerHeart.className = 'arrow-heart player';
    playerHeart.textContent = '💗';

    const targetHeart = document.createElement('div');
    targetHeart.className = 'arrow-heart target';
    targetHeart.textContent = '💗';

    container.appendChild(playerHeart);
    container.appendChild(targetHeart);
    area.appendChild(container);

    const hint = document.createElement('p');
    hint.style.marginTop = '1rem';
    hint.textContent = 'Use the left and right arrow keys to move the heart to the other one.';
    area.appendChild(hint);

    let position = 0;
    const step = 20;
    let completed = false;

    function checkOverlap() {
        if (completed) return;
        const playerRect = playerHeart.getBoundingClientRect();
        const targetRect = targetHeart.getBoundingClientRect();
        if (playerRect.right >= targetRect.left - 10) {
            completed = true;
            document.removeEventListener('keydown', handleKey);
            completeLevel(level.id);
        }
    }

    function updatePosition() {
        playerHeart.style.transform = `translate(${position}px, -50%)`;
        requestAnimationFrame(checkOverlap);
    }

    function handleKey(e) {
        if (completed) return;
        if (!screens.challenge.classList.contains('active') || currentLevel !== level.id) return;
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            position += step;
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            position -= step;
        } else {
            return;
        }
        const w = container.clientWidth || 320;
        const maxOffset = Math.max(w - 50, 200);
        if (position < 0) position = 0;
        if (position > maxOffset) position = maxOffset;
        updatePosition();
    }

    document.addEventListener('keydown', handleKey);
    updatePosition();
}

// Collect Game
function createCollectGame(area, level) {
    const hearts = ['♥', '💕', '💗', '💖', '✨'];
    let collected = 0;

    const container = document.createElement('div');
    container.className = 'hearts-collect';

    hearts.forEach((h, i) => {
        const heart = document.createElement('div');
        heart.className = 'heart-item';
        heart.textContent = h;
        heart.onclick = () => {
            if (!heart.classList.contains('collected')) {
                heart.classList.add('collected');
                collected++;
                if (collected === 5) completeLevel(level.id);
            }
        };
        container.appendChild(heart);
    });

    area.appendChild(container);
}

// Maze Game (Chapter 6)
function createMazeGame(area, level) {
    // 0 = path, 1 = wall. Three exits on the right:
    // top: College, middle: UKUSA (correct), bottom: Dubai
    const layout = [
        [0,1,0,0,1,0,1,0,0],
        [0,1,0,1,0,0,1,0,0],
        [0,0,0,1,0,1,0,0,0],
        [0,1,0,0,0,1,0,1,0],
        [0,0,0,1,0,0,0,1,0],
    ];

    const exitRows = {
        0: { label: 'College', correct: false },
        2: { label: 'UKUSA', correct: true },
        4: { label: 'Dubai', correct: false },
    };

    const gridEl = document.createElement('div');
    gridEl.className = 'maze-grid';
    area.appendChild(gridEl);

    const info = document.createElement('p');
    info.textContent = 'Use the arrow keys to move 👩 through the maze and reach UKUSA on the right.';
    info.style.marginBottom = '0.5rem';
    area.appendChild(info);

    const hint = document.createElement('p');
    hint.textContent = 'Top exit: College • Middle: UKUSA • Bottom: Dubai';
    hint.style.fontSize = '0.9rem';
    hint.style.color = '#8b4d57';
    area.appendChild(hint);

    const rows = layout.length;
    const cols = layout[0].length;
    const cells = [];

    for (let r = 0; r < rows; r++) {
        cells[r] = [];
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.className = 'maze-cell';
            if (c === cols - 1 && exitRows[r]) {
                cell.classList.add('maze-exit');
                cell.textContent = exitRows[r].label;
            } else if (layout[r][c] === 1) {
                cell.classList.add('maze-wall');
            } else {
                cell.classList.add('maze-path');
            }
            gridEl.appendChild(cell);
            cells[r][c] = cell;
        }
    }

    let playerRow = 2;
    let playerCol = 0;

    function renderPlayer() {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (cells[r][c].dataset.player === 'true') {
                    cells[r][c].dataset.player = '';
                    cells[r][c].classList.remove('maze-player');
                    if (!cells[r][c].classList.contains('maze-exit')) {
                        cells[r][c].textContent = '';
                    }
                }
            }
        }
        const cell = cells[playerRow][playerCol];
        cell.dataset.player = 'true';
        cell.classList.add('maze-player');
        cell.textContent = '👩';
    }

    renderPlayer();

    function handleKey(e) {
        if (!screens.challenge.classList.contains('active') || currentLevel !== level.id) return;
        const key = e.key;
        let nextRow = playerRow;
        let nextCol = playerCol;
        if (key === 'ArrowUp') nextRow--;
        else if (key === 'ArrowDown') nextRow++;
        else if (key === 'ArrowLeft') nextCol--;
        else if (key === 'ArrowRight') nextCol++;
        else return;

        e.preventDefault();

        if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) return;
        if (layout[nextRow][nextCol] === 1) return;

        playerRow = nextRow;
        playerCol = nextCol;
        renderPlayer();

        if (playerCol === cols - 1 && exitRows[playerRow]) {
            const exit = exitRows[playerRow];
            document.removeEventListener('keydown', handleKey);
            if (exit.correct) {
                completeLevel(level.id);
            } else {
                alert('That\'s not where our special reunion happened. Try to guide her to UKUSA in the middle. 💕');
                playerRow = 2;
                playerCol = 0;
                renderPlayer();
                document.addEventListener('keydown', handleKey);
            }
        }
    }

    document.addEventListener('keydown', handleKey);
}

// Connect the Dots (Chapter 7)
function createDotsGame(area, level) {
    const text = document.createElement('p');
    text.textContent = 'Click the dots in order (1 → 6) to draw your tiny graduation cap.';
    text.style.marginBottom = '0.5rem';
    area.appendChild(text);

    const container = document.createElement('div');
    container.className = 'dots-container';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'dots-lines');
    svg.setAttribute('viewBox', '0 0 260 180');
    container.appendChild(svg);

    area.appendChild(container);

    // Simple cap-like shape coordinates (x,y) in pixels
    const points = [
        { x: 40,  y: 70 },
        { x: 130, y: 40 },
        { x: 220, y: 70 },
        { x: 130, y: 100 },
        { x: 130, y: 135 },
        { x: 180, y: 150 },
    ];

    let nextIndex = 0;

    points.forEach((pt, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot-point';
        dot.textContent = String(index + 1);
        dot.style.left = `${pt.x - 10}px`;
        dot.style.top = `${pt.y - 10}px`;

        dot.onclick = () => {
            if (index !== nextIndex) {
                alert('Start with 1 and go in order, just like all the steps that led to your graduation. 🎓');
                return;
            }
            dot.classList.add('connected');
            if (nextIndex > 0) {
                const prev = points[nextIndex - 1];
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', prev.x);
                line.setAttribute('y1', prev.y);
                line.setAttribute('x2', pt.x);
                line.setAttribute('y2', pt.y);
                line.setAttribute('stroke', '#b76e79');
                line.setAttribute('stroke-width', '3');
                line.setAttribute('stroke-linecap', 'round');
                svg.appendChild(line);
            }
            nextIndex++;
            if (nextIndex === points.length) {
                const cap = document.createElement('p');
                cap.textContent = '🎓';
                cap.style.fontSize = '2.4rem';
                cap.style.marginTop = '0.5rem';
                area.appendChild(cap);
                completeLevel(level.id);
            }
        };

        container.appendChild(dot);
    });
}

// Order Game (Chapter 8)
function createOrderGame(area, level) {
    const text = document.createElement('p');
    text.textContent = 'Tap these in the correct order of our 3 days together: ✈️ → 🏡 → ❤️';
    text.style.marginBottom = '1rem';
    area.appendChild(text);

    const sequence = ['✈️', '🏡', '❤️'];
    const emojis = ['✈️', '🏡', '❤️'];

    const grid = document.createElement('div');
    grid.className = 'hearts-collect';
    area.appendChild(grid);

    let step = 0;

    emojis.forEach(emoji => {
        const cell = document.createElement('div');
        cell.className = 'heart-item';
        cell.textContent = emoji;
        cell.onclick = () => {
            if (cell.classList.contains('collected')) return;
            if (emoji === sequence[step]) {
                cell.classList.add('collected');
                step++;
                if (step === sequence.length) {
                    completeLevel(level.id);
                }
            } else {
                alert('That’s not the next step. Try again from the start 😄');
                step = 0;
                document.querySelectorAll('.heart-item').forEach(el => el.classList.remove('collected'));
            }
        };
        grid.appendChild(cell);
    });
}

// Hold Game (Chapter 9)
function createHoldGame(area, level) {
    const info = document.createElement('p');
    info.textContent = 'Press and hold the spacebar to fill the bar and remove the space between us.';
    info.style.marginBottom = '1rem';
    area.appendChild(info);

    const wrapper = document.createElement('div');
    wrapper.className = 'progress-wrapper';

    const barContainer = document.createElement('div');
    barContainer.className = 'progress-bar-container';
    const barFill = document.createElement('div');
    barFill.className = 'progress-bar-fill';
    barContainer.appendChild(barFill);

    const button = document.createElement('button');
    button.className = 'hold-button';
    button.textContent = 'Hold (with spacebar)';

    wrapper.appendChild(barContainer);
    wrapper.appendChild(button);
    area.appendChild(wrapper);

    let progress = 0;
    let isHolding = false;
    let intervalId = null;

    function updateBar() {
        barFill.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(intervalId);
            document.removeEventListener('keydown', handleKey);
            document.removeEventListener('keyup', handleKey);
            completeLevel(level.id);
        }
    }

    function handleKey(e) {
        if (!screens.challenge.classList.contains('active') || currentLevel !== level.id) return;
        if (e.code === 'Space' || e.key === ' ') {
            e.preventDefault();
            if (e.type === 'keydown') {
                isHolding = true;
            } else if (e.type === 'keyup') {
                isHolding = false;
            }
        }
    }

    document.addEventListener('keydown', handleKey);
    document.addEventListener('keyup', handleKey);

    intervalId = setInterval(() => {
        if (isHolding) {
            progress = Math.min(progress + 2.5, 100);
        } else {
            progress = Math.max(progress - 1.5, 0);
        }
        updateBar();
    }, 80);
}

// Sudoku Game (Final Chapter)
function createSudokuGame(area, level) {
    // 4x4 sudoku to keep it cozy and not stressful
    // 0 means empty cell in the puzzle
    const puzzle = [
        [1, 0, 0, 4],
        [0, 4, 1, 0],
        [0, 1, 4, 0],
        [3, 0, 0, 2]
    ];

    const solution = [
        [1, 2, 3, 4],
        [2, 4, 1, 3],
        [4, 1, 4, 1], // placeholder, will be replaced below
        [3, 3, 2, 2]  // placeholder, will be replaced below
    ];

    // Replace with a valid simple 4x4 sudoku solution and matching puzzle
    // Valid solution:
    // 1 2 3 4
    // 3 4 1 2
    // 2 1 4 3
    // 4 3 2 1
    const validSolution = [
        [1, 2, 3, 4],
        [3, 4, 1, 2],
        [2, 1, 4, 3],
        [4, 3, 2, 1]
    ];
    const validPuzzle = [
        [1, 0, 0, 4],
        [0, 4, 1, 0],
        [2, 0, 4, 0],
        [0, 3, 0, 1]
    ];

    const grid = document.createElement('div');
    grid.className = 'sudoku-grid';
    area.appendChild(grid);

    const cells = [];

    for (let r = 0; r < 4; r++) {
        cells[r] = [];
        for (let c = 0; c < 4; c++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'sudoku-cell';
            const value = validPuzzle[r][c];
            if (value !== 0) {
                cellDiv.classList.add('given');
                cellDiv.textContent = value.toString();
            } else {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.inputMode = 'numeric';
                input.placeholder = '';
                cellDiv.appendChild(input);
                cells[r][c] = input;
            }
            grid.appendChild(cellDiv);
        }
    }

    const note = document.createElement('p');
    note.style.marginTop = '1rem';
    note.textContent = 'Use numbers 1 – 4. Each number can appear only once in every row and column. Just like us, everything fits perfectly when it’s in the right place. 💗';
    area.appendChild(note);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'btn-primary';
    checkBtn.textContent = 'Check Sudoku';
    checkBtn.style.marginTop = '1rem';
    checkBtn.onclick = () => {
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                const expected = validSolution[r][c];
                const given = validPuzzle[r][c];
                if (given !== 0) continue;
                const input = cells[r][c];
                const val = parseInt((input.value || '').trim(), 10);
                if (val !== expected) {
                    alert('Almost there! One or more numbers are off. Try again, love. 🥺');
                    return;
                }
            }
        }
        completeLevel(level.id);
    };
    area.appendChild(checkBtn);
}

// Final Challenge
function createFinalChallenge(area, level) {
    const heart = document.createElement('div');
    heart.className = 'click-target';
    heart.textContent = '♥';
    heart.style.fontSize = '4rem';
    heart.onclick = () => completeLevel(level.id);
    area.appendChild(heart);
}

// Complete Level
function completeLevel(levelId) {
    completedLevels.add(levelId);
    const level = GAME_DATA.find(l => l.id === levelId);

    if (levelId === 10) {
        showScreen('birthday-screen');
        createBirthdayHearts();
        createConfetti();
        createPhotoReels();
        initLoveLetter();
        const audio = document.getElementById('birthday-audio');
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => {
                // If autoplay is blocked, she'll be able to tap to start it manually
            });
        }
        return;
    }

    document.getElementById('victory-message').textContent = level.victoryMsg;
    document.getElementById('next-level-btn').onclick = () => {
        currentLevel = levelId + 1;
        if (currentLevel <= 10) {
            showStory(currentLevel); // Go directly to next chapter
        }
    };
    showScreen('victory-screen');
    createConfetti();
}

// Confetti
function createConfetti() {
    playConfettiSound();
    const container = document.querySelector('.confetti-container');
    container.innerHTML = '';
    const colors = ['#b76e79', '#d4a5a5', '#e8a0a8', '#f4c2c2'];

    // Find the center around the \"Level Complete\" title
    const title = document.querySelector('.victory-title');
    let originX = window.innerWidth / 2;
    let originY = window.innerHeight / 2;
    if (title) {
        const rect = title.getBoundingClientRect();
        originX = rect.left + rect.width / 2;
        originY = rect.top + rect.height / 2;
    }

    const totalPieces = 120;
    const maxDistance = Math.max(window.innerWidth, window.innerHeight) * 0.9;
    for (let i = 0; i < totalPieces; i++) {
        const isHeart = Math.random() < 0.45; // ~45% hearts, rest small confetti pieces
        let piece;
        if (isHeart) {
            piece = document.createElement('span');
            piece.textContent = '♥';
            piece.style.color = colors[Math.floor(Math.random() * colors.length)];
            piece.style.fontSize = `${0.9 + Math.random() * 1.4}rem`;
        } else {
            piece = document.createElement('div');
            piece.style.width = '8px';
            piece.style.height = '8px';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        }

        // Start at the title center
        piece.style.position = 'absolute';
        piece.style.left = `${originX}px`;
        piece.style.top = `${originY}px`;

        // Random blast direction and distance
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * maxDistance; // how far each piece flies
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        piece.style.setProperty('--dx', `${dx}px`);
        piece.style.setProperty('--dy', `${dy}px`);

        const duration = 5.5 + Math.random() * 1.0; // around 6 seconds
        piece.style.animation = `confettiBlast ${duration}s ease-out forwards`;
        piece.style.animationDelay = `${Math.random() * 0.3}s`;
        container.appendChild(piece);
    }
}

// Birthday Hearts
function createBirthdayHearts() {
    const container = document.querySelector('.birthday-hearts');
    const hearts = ['♥', '💕', '💗', '💖'];
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('span');
        heart.textContent = hearts[i % hearts.length];
        heart.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${1.5 + Math.random() * 2}rem;
            opacity: ${0.15 + Math.random() * 0.2};
            animation: float ${5 + Math.random() * 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(heart);
    }
}

function pausePhotoReels() {
    document.querySelectorAll('.film-track').forEach(track => {
        track.style.animationPlayState = 'paused';
    });
}

function resumePhotoReels() {
    document.querySelectorAll('.film-track').forEach(track => {
        track.style.animationPlayState = 'running';
    });
}

function createPhotoReels() {
    const left = document.getElementById('left-film-strip');
    const right = document.getElementById('right-film-strip');
    if (!left || !right || PHOTO_REELS.length === 0) return;

    left.innerHTML = '';
    right.innerHTML = '';

    function buildTrack(directionClass) {
        const track = document.createElement('div');
        track.className = `film-track ${directionClass}`;

        // Duplicate list so scrolling looks continuous
        for (let repeat = 0; repeat < 2; repeat++) {
            PHOTO_REELS.forEach(src => {
                const img = document.createElement('img');
                img.alt = 'Our memory together';
                img.className = 'film-photo';
                img.addEventListener('click', () => {
                    showPhotoOverlay(src);
                });
                img.onerror = function () {
                    this.onerror = null;
                    const fallback = src.replace(/\.JPG$/i, '.jpg');
                    if (fallback !== src) this.src = fallback;
                };
                img.src = src;
                track.appendChild(img);
            });
        }
        return track;
    }

    left.appendChild(buildTrack('film-track-down'));
    right.appendChild(buildTrack('film-track-up'));
}

function initLoveLetter() {
    const envelope = document.getElementById('love-letter-envelope');
    const overlay = document.getElementById('love-letter-overlay');
    const letterBox = document.getElementById('love-letter-text');
    const closeBtn = document.getElementById('letter-close');
    if (!envelope || !overlay || !letterBox || !closeBtn) return;

    letterBox.textContent = LOVE_LETTER_TEXT.trim();

    function openLetter() {
        overlay.style.display = 'flex';
    }

    function closeLetter() {
        overlay.style.display = 'none';
    }

    envelope.onclick = openLetter;
    closeBtn.onclick = closeLetter;
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLetter();
    });
}

function initPhotoOverlay() {
    const overlay = document.getElementById('photo-overlay');
    const img = document.getElementById('photo-full');
    const closeBtn = document.getElementById('photo-close');
    if (!overlay || !img || !closeBtn) return;

    function close() {
        overlay.style.display = 'none';
        resumePhotoReels();
    }

    closeBtn.onclick = close;
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    window.showPhotoOverlay = function (src) {
        img.src = src;
        pausePhotoReels();
        overlay.style.display = 'flex';
    };
}

// Init
document.getElementById('start-btn').addEventListener('click', () => {
    showScreen('intro-screen');
});

document.getElementById('intro-start-btn').addEventListener('click', () => {
    currentLevel = 1;
    completedLevels.clear();
    startLevel(1);
});

createFloatingHearts();
initPhotoOverlay();
