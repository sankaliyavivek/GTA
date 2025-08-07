import { useState } from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'


function App() {

  let [showContent, setShowContent] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power1.easeinOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        }
      })
  })

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easaInOut"
    })

    gsap.to(".sky", {
      // scale:1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easaInOut"
    })

    gsap.to(".bg", {
      // scale:1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easaInOut"
    })

    gsap.to(".character", {
      scale: 1.2,
      x: "0%",
      bottom: "-30%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easaInOut"
    })

    const main = document.querySelector('.main')

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      console.log(xMove)

      gsap.to('.imagesdiv .text', {
        x: `${xMove * 0.4}%`
      })

      gsap.to('.sky', {
        x: `${xMove * 0.4}%`
      })

      gsap.to('.bg', {
        x: `${xMove * 0.4}%`
      })
    })
  }, [showContent])




  return (
    <>
      <div className='svg fixed top-0 left-0 z-[100] w-full h-screen overflow-x-hidden bg-[#000]'>
        <svg viewBox="0 0 1366 607" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="300"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>

      </div>

      {
        
          showContent && (
          <div className='main w-full rotate-[-10deg] scale-[1.7] md:scale-[1.5] lg:scale-[1.2]'>
            <div className='landing relative overflow-hidden w-full h-screen bg-black'>

              {/* Navbar */}
              <div className='navbar absolute top-0 left-0 z-[10] w-full py-6 px-4 md:px-10'>
                <div className='logo flex gap-4 md:gap-6 items-center'>
                  <div className='lines flex flex-col gap-1'>
                    <div className='line w-6 h-1 bg-white'></div>
                    <div className='line w-4 h-1 bg-white'></div>
                    <div className='line w-3 h-1 bg-white'></div>
                  </div>
                  <h2 className='text-2xl md:text-4xl text-white'>Rockstar</h2>
                </div>
              </div>

              {/* Images and Text */}
              <div className='imagesdiv relative w-full h-screen text-white'>
                <img src="./sky.png" className='absolute sky scale-[1.2] md:scale-[1.3] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' alt="" />
                <img src="./bg.png" className='absolute bg scale-[1.2] md:scale-[1.4] rotate-[-3deg] top-0 left-0 w-full h-full object-cover' alt="" />

                {/* GTA Text */}
                <div className='text absolute top-16 left-1/2 -translate-x-1/2 text-center'>
                  <h1 className='text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] leading-none -ml-4'>grand</h1>
                  <h1 className='text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] leading-none ml-4'>theft</h1>
                  <h1 className='text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] leading-none -ml-2'>auto</h1>
                </div>

                {/* Character Image */}
                <img
                  src="./girlbg.png"
                  alt=""
                  className="absolute character scale-[2] sm:scale-[2.5] md:scale-[3] rotate-[-20deg] bottom-[-100%] left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-auto"
                />

                {/* Bottom bar */}
                <div className='btmbar absolute bottom-0 left-0 w-full py-6 px-4 md:px-10 bg-gradient-to-t from-black to-transparent'>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                      <i className="text-2xl md:text-3xl ri-arrow-down-line"></i>
                      <h3 className='text-base md:text-xl'>Scroll Down</h3>
                    </div>
                    <img className='h-8 sm:h-10' src="./ps5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className='w-full h-auto md:h-screen flex flex-col md:flex-row bg-black px-6 md:px-10 py-10 items-center justify-center'>
              <div className='contar flex flex-col md:flex-row text-white w-full max-w-screen-xl gap-10'>

                {/* Left Image */}
                <div className='limg relative w-full md:w-1/2 h-[300px] md:h-full flex justify-center items-center'>
                  <img className='w-[200px] sm:w-[250px] md:w-[300px] scale-[1.2]' src="./imag.png" alt="" />
                </div>

                {/* Right Text */}
                <div className='rg w-full md:w-[40%]'>
                  <h1 className='text-2xl md:text-3xl'>Still Running,</h1>
                  <h1 className='text-2xl md:text-3xl'>Not Hunting</h1>
                  <p className='mt-4 md:mt-6 text-base md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus quia id fuga eaque nisi quisquam repellat, porro voluptates sequi optio necessitatibus adipisci.</p>
                  <p className='mt-2 text-base md:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore odio natus quisquam.</p>
                  <p className='mt-2 text-base md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus quia id fuga eaque nisi quisquam repellat, porro voluptates sequi optio necessitatibus adipisci.</p>
                  <button className='bg-yellow-500 py-2 px-4 md:py-3 md:px-6 text-lg md:text-2xl text-black mt-6'>Download Now</button>
                </div>

              </div>
            </div>
          </div>
        )
      

      }
    </>
  )
}

export default App
