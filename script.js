const { timeline } = gsap

const animationTimeline = timeline({
    defaults: { duration: 1 }
})

animationTimeline
.from(
    '.header',
    { y: '-100%', ease: 'bounce' }
)
.from(
    '.link',
    { opacity: 0, stagger: 0.5 }
)
.from(
    '.right',
    { x: '-100vw', easy: 'power2.in'},
    1
)
.from(
    '.left',
    { x: '-100%' },
    '<0.5'
)
.to(
    '.footer', { y: 0,  ease: 'elastic' }
)
.fromTo(
    '.button',
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }
)

document.querySelector('.button').addEventListener(
    'click',
    () => {
        animationTimeline.timeScale(3)
        animationTimeline.reverse()
    }
)