const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: 0.1,
    y: 20,
    opacity: 0,
    duration: 2.5,
    delay: 0.5,
    ease: "power3.easeInOut"
})
Shery.textAnimate(".heading h1", {
    style: 1,
    y: 20,
    delay: 0.1,
    opacity: 0,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
})

gsap.from("#anim2", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power4.easeInOut"
})

Shery.imageEffect(".images img", {
    style: 3,
    config: { "uFrequencyX": { "value": 26.45, "range": [0, 100] }, "uFrequencyY": { "value": 27.27, "range": [0, 100] }, "uFrequencyZ": { "value": 27.27, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 17.66 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7500050834782914 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },

})
Shery.imageEffect("#imgsustain img", {
    style: 5,
    config: { "uFrequencyX": { "value": 26.45, "range": [0, 100] }, "uFrequencyY": { "value": 27.27, "range": [0, 100] }, "uFrequencyZ": { "value": 27.27, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 17.66 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7500050834782914 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
})
gsap.from("#motive ", {
    y: 200,
    opacity: 0,
    duration: 5,
    stagger: 0.9,
    ease: "power4.easeInOut"
})
Shery.imageEffect("#imgff", {
    style: 5,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6399987309771608 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 1 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
})


const btn = document.querySelector(".infovideo button");
btn.addEventListener("mouseover", function () {
    gsap.to(".lastcontainer video", {
        opacity: 1,
        duration: 2,
        ease: "power4.easeInOut",
        stagger: "linear"
    })
}

)
btn.addEventListener("mouseleave", function () {
    gsap.to(".lastcontainer video", {
        opacity: 0,
        duration: 2,
        ease: "power4.easeInOut",
        stagger: "linear"
    })
}

)
Shery.imageEffect(".imageforhero3", {
    style: 4,
    config: { "uColor": { "value": false }, "uSpeed": { "value": 0.73, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 2.11, "range": [0, 5] }, "uFrequency": { "value": 4.05, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 15.06 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.9233898249343373 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    gooey: true

})
