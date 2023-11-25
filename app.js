let tl = gsap.timeline()

function percentageIncrement(){
    let percent = 0
    setInterval(function(){
        percent += Math.floor(Math.random()*20)
        if(percent < 100){
            document.querySelector('#loader h1').innerHTML = percent + '%'
        } else{
            percent = 100;
            document.querySelector('#loader h1').innerHTML = percent + '%'
        }
    }, 150)

}

tl.to('#loader h1',{
    delay: 0.5,
    duration: 1.5,
    onStart: percentageIncrement()
})

tl.to('#loader',{
    top: '-100vh',
    delay: 0.5,
    duration: 1.5
})

tl.from('#nav img, #nav h2, #nav h3, #nav button',{
    y:-100,
    duration: 1.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
})

tl.from('#main h1',{
    y: 100,
    opacity: 0,
    stagger: 0.3,

})

tl.from('#main>img, h4',{
    scale:0,
    opacity:0,
    stagger: 0.2,
})


tl.to('h4',{
    y: 30,
    repeat: -1,
    duration:0.7,
    yoyo: true,
})

