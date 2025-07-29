<template>
    <div class="character-reveal text-4xl md:text-6xl lg:text-8xl font-bold text-transparent mb-20 text-center sm:my-20 sm:text-left will-change-transform whitespace-nowrap"
        ref="containerRef">
        <p v-for="(text, textIndex) in texts" :key="`text-${textIndex}`" :ref="el => textRefs[textIndex] = el"
            class="reveal-text">
            <span class="revealed-chars">
                <span v-for="(char, charIndex) in text.slice(0, revealedChars[textIndex])"
                    :key="`${textIndex}-${charIndex}`" class="char-animate"
                    :style="{ animationDelay: `${charIndex * animationDelay}s` }">
                    {{ char === ' ' ? '\u00A0' : char }}
                </span>
            </span>
            <span class="hidden-chars">{{ text.slice(revealedChars[textIndex]) }}</span>
        </p>
    </div>
</template>

<script setup>
// Props
const props = defineProps({
    texts: {
        type: Array,
        default: () => ["And that's a wrap", "What's next?", "Stay in touch!"]
    },
    animationDelay: {
        type: Number,
        default: 0.05
    },
    scrollOffset: {
        type: Number,
        default: -200
    }
})

// Refs
const containerRef = ref()
const textRefs = ref([])
const { y: scrollY } = useWindowScroll()

// Track maximum revealed characters to prevent fade-out
const maxRevealedChars = ref(props.texts.map(() => 0))

// Animation calculation function
const calculateAnimationRate = (element, startOffset = 0, endOffset = 0) => {
    if (!element || !import.meta.client) return 0

    const rect = element.getBoundingClientRect()
    const elementStart = rect.top + scrollY.value - window.innerHeight + startOffset
    const elementEnd = rect.top + scrollY.value + element.offsetHeight + endOffset
    const scrollRange = elementEnd - elementStart

    const rate = (scrollY.value - elementStart) / scrollRange

    return Math.min(Math.max(rate, 0), 1)
}

// Computed character reveal logic with permanent reveal
const revealedChars = computed(() => {
    if (!textRefs.value[0]) return props.texts.map(() => 0)

    const totalProgress = calculateAnimationRate(textRefs.value[0], 0, props.scrollOffset)
    const totalChars = props.texts.reduce((sum, text) => sum + text.length, 0)
    const totalRevealedChars = Math.floor(totalProgress * totalChars)

    const currentResult = []
    let remainingChars = totalRevealedChars

    for (let i = 0; i < props.texts.length; i++) {
        const textLength = props.texts[i].length
        if (remainingChars <= 0) {
            currentResult.push(0)
        } else if (remainingChars >= textLength) {
            currentResult.push(textLength)
            remainingChars -= textLength
        } else {
            currentResult.push(remainingChars)
            remainingChars = 0
        }
    }

    // Update max revealed chars to never go backwards
    for (let i = 0; i < currentResult.length; i++) {
        if (currentResult[i] > maxRevealedChars.value[i]) {
            maxRevealedChars.value[i] = currentResult[i]
        }
    }

    return maxRevealedChars.value
})

// Expose refs for parent component if needed
defineExpose({
    containerRef,
    textRefs
})
</script>

<style scoped>
/* Character reveal animation styles */
.character-reveal {
    position: relative;
}

.reveal-text {
    position: relative;
    display: block;
    overflow: hidden;
    transition: opacity 0.5s ease-in-out;
    line-height: 1.625;
    color: var(--main-color);
}

.revealed-chars {
    position: relative;
}

.hidden-chars {
    color: transparent;
    background: transparent;
    position: relative;
}

/* Character fade-in animation */
.char-animate {
    display: inline-block;
    opacity: 0;
    color: var(--main-color);
    animation: charColorIn 0.6s ease-out forwards;
}

@keyframes charColorIn {
    0% {
        opacity: 0;
        color: transparent;
        transform: translateY(20px) scale(0.8);
        filter: blur(2px);
    }

    25% {
        opacity: 0.3;
        color: var(--tertiary-color);
        transform: translateY(15px) scale(0.85);
        filter: blur(1.5px);
    }

    50% {
        opacity: 0.6;
        color: var(--secondary-color);
        transform: translateY(10px) scale(0.9);
        filter: blur(1px);
    }

    75% {
        opacity: 0.8;
        color: var(--quaternary-color);
        transform: translateY(5px) scale(0.95);
        filter: blur(0.5px);
    }

    100% {
        opacity: 1;
        color: var(--main-color);
        transform: translateY(0) scale(1);
        filter: blur(0);
    }
}

/* Smoother reveal transition */
.reveal-text {
    transition: all 0.1s ease-out;
}
</style>
