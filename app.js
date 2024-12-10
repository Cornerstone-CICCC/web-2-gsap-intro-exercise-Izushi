// PUT YOUR CODE HERE
const boxTimeLine = gsap.timeline();

boxTimeLine
  .from(".red", { x: '-100vw', y: '-100vh', duration: 1 })
  .from(".green", { x: '100vw', y: '-100vh', duration: 1 })
  .from(".blue", { x: '100vw', y: '100vh', duration: 1 })
  .from(".yellow", { x: '-100vw', y: '100vh', duration: 1 })

  .to(".red", { x: '-100%', left: '100vw', duration: 1, borderRadius: '50%', backgroundColor: 'green'})
  .to(".green", { top: '100vh', y: '-100%', duration: 1, borderRadius: '50%', backgroundColor: 'blue'}, '<')
  .to(".blue", { x: '100%', right: '100vw', duration: 1, borderRadius: '50%', backgroundColor: 'yellow'}, '<')
  .to(".yellow", { bottom: '100vh', y: '100%', duration: 1, borderRadius: '50%', backgroundColor: 'red'}, '<')

  .to(".red", { x: '100%', duration: 1})
  .to(".green", { x: '100%', duration: 1}, '<')
  .to(".blue", { x: '-100%', duration: 1}, '<')
  .to(".yellow", { x: '-100%', duration: 1}, '<');