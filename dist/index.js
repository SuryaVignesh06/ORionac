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
// Bronn Animation Logic
document.addEventListener('DOMContentLoaded', () => {
    const visualSection = document.getElementById('bronn-visual-section');
    const inputEl = document.getElementById('bronn-auto-input');
    const inputContainer = document.getElementById('cinematic-input');
    const overlay = document.getElementById('cinematic-overlay');
    const macbookContent = document.getElementById('macbook-content-area');
    const submitBtn = document.getElementById('bronn-auto-submit');
    const initialState = document.getElementById('bronn-initial-state');
    const analyzingLoader = document.getElementById('bronn-analyzing-loader');
    const resultsView = document.getElementById('bronn-results-view');
    const resultsView2 = document.getElementById('bronn-results-view-2');
    if (!visualSection || !inputEl || !inputContainer || !overlay || !macbookContent || !initialState || !analyzingLoader || !resultsView)
        return;
    let hasTriggered = false;
    const textToType = "Ask Bronn about competitors, market trends...";
    const typeText = (text_1, element_1, ...args_1) => __awaiter(void 0, [text_1, element_1, ...args_1], void 0, function* (text, element, speed = 40) {
        element.value = '';
        for (let i = 0; i < text.length; i++) {
            element.value += text.charAt(i);
            yield new Promise(r => setTimeout(r, speed));
        }
    });
    const runAnimationSequence = () => __awaiter(void 0, void 0, void 0, function* () {
        if (hasTriggered)
            return;
        hasTriggered = true;
        // Reset states
        inputEl.value = '';
        analyzingLoader.classList.add('hidden');
        resultsView.classList.add('hidden');
        if (resultsView2)
            resultsView2.classList.add('hidden');
        initialState.classList.remove('hidden');
        // ==== SEQUENCE 1 ====
        // 1. Wait a moment, then trigger cinematic spotlight
        yield new Promise(r => setTimeout(r, 600));
        overlay.classList.add('active');
        visualSection.classList.add('in-cinematic');
        inputContainer.classList.add('spotlight');
        // 2. Type text 1 while in spotlight
        yield new Promise(r => setTimeout(r, 800));
        yield typeText("Analyze Q3 market trends for AI SaaS", inputEl);
        // 3. Briefly press button (simulate)
        yield new Promise(r => setTimeout(r, 400));
        if (submitBtn) {
            submitBtn.style.transform = 'scale(0.9)';
            submitBtn.style.backgroundColor = '#0284c7';
            setTimeout(() => {
                submitBtn.style.transform = 'scale(1)';
                submitBtn.style.backgroundColor = '#0ea5e9';
            }, 150);
        }
        // 4. Zoom out (remove cinematic mode) and show loader
        yield new Promise(r => setTimeout(r, 200));
        overlay.classList.remove('active');
        visualSection.classList.remove('in-cinematic');
        inputContainer.classList.remove('spotlight');
        initialState.classList.add('hidden');
        analyzingLoader.classList.remove('hidden');
        analyzingLoader.classList.add('state-fade-in');
        // 5. Hide loader, show Result 1 (Graph)
        yield new Promise(r => setTimeout(r, 1500));
        analyzingLoader.classList.add('hidden');
        resultsView.classList.remove('hidden');
        // ==== SEQUENCE 2 ====
        yield new Promise(r => setTimeout(r, 3000));
        // 6. Trigger spotlight 2
        inputEl.value = '';
        overlay.classList.add('active');
        visualSection.classList.add('in-cinematic');
        inputContainer.classList.add('spotlight');
        // 7. Type text 2
        yield new Promise(r => setTimeout(r, 800));
        yield typeText("Compare performance with top 3 competitors", inputEl);
        // 8. Press button
        yield new Promise(r => setTimeout(r, 400));
        if (submitBtn) {
            submitBtn.style.transform = 'scale(0.9)';
            submitBtn.style.backgroundColor = '#0284c7';
            setTimeout(() => {
                submitBtn.style.transform = 'scale(1)';
                submitBtn.style.backgroundColor = '#0ea5e9';
            }, 150);
        }
        // 9. Zoom out, show loader again
        yield new Promise(r => setTimeout(r, 200));
        overlay.classList.remove('active');
        visualSection.classList.remove('in-cinematic');
        inputContainer.classList.remove('spotlight');
        resultsView.classList.add('hidden');
        analyzingLoader.classList.remove('hidden');
        // 10. Hide loader, show Result 2 (Dark Dashboard Grid)
        yield new Promise(r => setTimeout(r, 1500));
        analyzingLoader.classList.add('hidden');
        if (resultsView2) {
            resultsView2.classList.remove('hidden');
        }
    });
    // Intersection Observer to trigger when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            runAnimationSequence();
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    observer.observe(visualSection);
});
