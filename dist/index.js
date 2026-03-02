"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("TypeScript codebase loaded successfully");
document.addEventListener('DOMContentLoaded', () => {
    // ==== 1. HERO TYPING ANIMATION ====
    const heroTextEl = document.getElementById('hero-typing-text');
    const heroCursor = document.getElementById('hero-cursor');
    const heroFullText = "Research, Engineered\nfor Impact.";
    const typeHeroText = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!heroTextEl)
            return;
        heroTextEl.textContent = '';
        // Wait a beat before starting
        yield new Promise(r => setTimeout(r, 500));
        for (let i = 0; i < heroFullText.length; i++) {
            if (heroFullText.charAt(i) === '\n') {
                heroTextEl.innerHTML += '<br>';
            }
            else {
                heroTextEl.innerHTML += heroFullText.charAt(i);
            }
            // slight random variance for realistic typing
            const speed = 40 + Math.random() * 40;
            yield new Promise(r => setTimeout(r, speed));
        }
        // Optionally hide cursor after done, or keep blinking
        // if (heroCursor) heroCursor.style.display = 'none';
    });
    typeHeroText();
    // ==== 2. SCROLL REVEAL (BOTTOM TO TOP) ====
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
    });
    revealElements.forEach(el => revealObserver.observe(el));
    // ==== 3. BRONN ANIMATION SEQUENCE ====
    const visualSection = document.getElementById('bronn-visual-section');
    const floatInputBox = document.getElementById('bronn-floating-input');
    const floatInput = document.getElementById('bronn-floating-auto-input');
    const floatSubmitBtn = document.getElementById('bronn-floating-submit');
    const macbookWindow = document.getElementById('bronn-macbook-window');
    // Internal macbook elements
    const inputEl = document.getElementById('bronn-auto-input');
    const inputContainer = document.getElementById('cinematic-input');
    const overlay = document.getElementById('cinematic-overlay');
    const submitBtn = document.getElementById('bronn-auto-submit');
    const initialState = document.getElementById('bronn-initial-state');
    const analyzingLoader = document.getElementById('bronn-analyzing-loader');
    const resultsView2 = document.getElementById('bronn-results-view-2');
    if (!visualSection || !floatInputBox || !floatInput || !macbookWindow || !initialState || !analyzingLoader || !overlay || !inputContainer)
        return;
    let bronnHasTriggered = false;
    const typeText = (text_1, element_1, ...args_1) => __awaiter(void 0, [text_1, element_1, ...args_1], void 0, function* (text, element, speed = 40) {
        element.value = '';
        for (let i = 0; i < text.length; i++) {
            element.value += text.charAt(i);
            yield new Promise(r => setTimeout(r, speed));
        }
    });
    const runBronnSequence = () => __awaiter(void 0, void 0, void 0, function* () {
        if (bronnHasTriggered)
            return;
        bronnHasTriggered = true;
        while (true) {
            // ==== RESET STATES FOR LOOP ====
            floatInputBox.style.transition = 'none';
            floatInputBox.style.opacity = '0';
            floatInputBox.style.top = '50%';
            floatInputBox.style.transform = 'translate(-50%, -50%) scale(1.05)';
            floatInputBox.style.pointerEvents = 'none';
            floatInput.value = '';
            macbookWindow.style.opacity = '0';
            macbookWindow.classList.remove('animate-in');
            inputEl.value = 'Compare performance with top 3 competitors';
            analyzingLoader.classList.add('hidden');
            if (resultsView2)
                resultsView2.classList.add('hidden');
            initialState.classList.remove('hidden');
            // Add a small delay between loops
            yield new Promise(r => setTimeout(r, 1000));
            // ==== PART 1: FLOATING INPUT TYPES PROMPT ====
            // 1. Show floating input smoothly
            floatInputBox.style.transition = 'opacity 0.8s ease, top 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
            yield new Promise(r => setTimeout(r, 50)); // let browser paint
            floatInputBox.style.opacity = '1';
            // 2. Type text in floating input
            yield new Promise(r => setTimeout(r, 600));
            yield typeText("Compare performance with top 3 competitors", floatInput);
            // 3. Briefly press floating button
            yield new Promise(r => setTimeout(r, 400));
            if (floatSubmitBtn) {
                floatSubmitBtn.style.transform = 'scale(0.9)';
                floatSubmitBtn.style.backgroundColor = '#a85838';
                setTimeout(() => {
                    floatSubmitBtn.style.transform = 'scale(1)';
                    floatSubmitBtn.style.backgroundColor = '';
                }, 150);
            }
            // ==== PART 2: ANIMATE DOWN & MACBOOK REVEAL ====
            // 4. Animate floating box down directly into the macbook input position
            yield new Promise(r => setTimeout(r, 200));
            // Top depends on exact grid layout, 85% is typically a good match for bottom-docked inputs
            floatInputBox.style.top = '88%';
            floatInputBox.style.transform = 'translate(-50%, -50%) scale(0.95)';
            // Wait for movement to finish
            yield new Promise(r => setTimeout(r, 1000));
            // 5. Crossfade: macbook fades in, floating fades out
            macbookWindow.style.transition = 'opacity 0.6s ease';
            macbookWindow.style.opacity = '1';
            floatInputBox.style.opacity = '0';
            // Show loader inside macbook immediately
            initialState.classList.add('hidden');
            analyzingLoader.classList.remove('hidden');
            analyzingLoader.classList.add('state-fade-in');
            // 6. Hide loader, show Result Dashboard
            yield new Promise(r => setTimeout(r, 1800));
            analyzingLoader.classList.add('hidden');
            if (resultsView2) {
                resultsView2.classList.remove('hidden');
            }
            // ==== PART 3: PAUSE AND RESET ====
            // Wait for user to read the dashboard
            yield new Promise(r => setTimeout(r, 6000));
            // Fade out macbook to prepare for loop
            macbookWindow.style.opacity = '0';
            yield new Promise(r => setTimeout(r, 800));
        }
    });
    // Trigger Bronn sequence when visual section is halfway visible
    const bronnObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            runBronnSequence();
            bronnObserver.disconnect();
        }
    }, { threshold: 0.2 });
    bronnObserver.observe(visualSection);
    // --- Phase 6: GSAP Text Reveal Logic ---
    const initGsapReveal = () => {
        const textWrapper = document.getElementById('gsap-text-wrapper');
        const container = document.getElementById('gsap-reveal-section');
        if (!textWrapper || !container)
            return;
        // 1. Split text into words
        const textContent = textWrapper.textContent || '';
        const words = textContent.trim().split(/\s+/);
        textWrapper.innerHTML = ''; // Clear existing text
        words.forEach(word => {
            const span = document.createElement('span');
            span.className = 'word';
            span.textContent = word + ' ';
            textWrapper.appendChild(span);
        });
        const wordElements = textWrapper.querySelectorAll('.word');
        // Configuration matching user's react component
        const baseOpacity = 0.1;
        const blurStrength = 4;
        // 2. Animate Words (Opacity)
        gsap.fromTo(wordElements, { opacity: baseOpacity, willChange: 'opacity' }, {
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: container,
                start: 'top bottom-=20%',
                end: 'bottom bottom',
                scrub: true
            }
        });
        // 3. Animate Words (Blur)
        gsap.fromTo(wordElements, { filter: `blur(${blurStrength}px)` }, {
            ease: 'none',
            filter: 'blur(0px)',
            stagger: 0.05,
            scrollTrigger: {
                trigger: container,
                start: 'top bottom-=20%',
                end: 'bottom bottom',
                scrub: true
            }
        });
    };
    initGsapReveal();
});
