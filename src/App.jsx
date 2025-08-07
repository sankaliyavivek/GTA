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
          <div className='main w-full rotate-[-10deg] scale-[1.7] '>
            <div className='landing relative overflow-hidden w-full h-screen bg-black'>
              <div className='navbar absolute top-0 left-0 z-[10]  w-full py-10 px-10 '>
                <div className='logo flex gap-6 '>
                  <div className='lines flex flex-col gap-2 '>
                    <div className='line w-15 h-1 bg-white'></div>
                    <div className='line w-8 h-1 bg-white'></div>
                    <div className='line w-5 h-1 bg-white'></div>
                  </div>
                  <h2 className='text-4xl -mt-[10px] leading-none text-white'>Rockstar</h2>
                </div>

              </div>

              <div className='imagesdiv text relative w-full h-screen '>
                <img src="./sky.png" className='absolute sky scale-[1.3] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' alt="" />
                <img src="./bg.png" className='absolute bg scale-[1.4] rotate-[-3deg] top-0 left-0 w-full h-full object-cover' alt="" />

                <div className='text absolute text-white top-10 left-1/2 -translate-x-1/2'>
                  <h1 className='text-[7rem] leading-none  -ml-10'>grand</h1>
                  <h1 className='text-[7rem] leading-none  ml-10'>theft</h1>
                  <h1 className='text-[7rem] leading-none  -ml-5'>auto</h1>

                </div>


                <img
                  src="./girlbg.png"
                  alt=""
                  className="absolute character scale-[3] rotate-[-20deg]  bottom-[-150%] left-1/2 -translate-x-1/2 w-[400px] max-w-full h-auto"
                />

                <div className='btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent'>
                  <div className=''>
                    <div className='flex gap-4 items-center'>
                      <i className="text-3xl ri-arrow-down-line"></i>
                      <h3 className='text-1xl'>Scroll Down</h3>
                    </div>
                    <img className='h-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
                  </div>
                </div>
              </div>


            </div>

            <div className='w-full  h-screen flex bg-black px-10  items-center justify-center'>
              <div className='contar flex text-white w-full h-[80%] '>
                <div className='limg relative w-1/2 h-full'>
                  <img className=' absolute w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   scale-[1.2] ' src="./imag.png" alt="" />
                </div>

                <div className='rg w-[30%]'>
                  <h1 className='text-3xl'>Still Running,</h1>
                  <h1 className='text-3xl'>Not Hunting</h1>
                  <p className='mt-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus quia id fuga eaque nisi quisquam repellat, porro voluptates sequi optio necessitatibus adipisci.</p>
                  <p className='mt-3 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore odio natus quisquam.</p>
                  <p className='mt-3 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus quia id fuga eaque nisi quisquam repellat, porro voluptates sequi optio necessitatibus adipisci.</p>

                  <button className='bg-yellow-500 py-3 px-3 text-2xl text-black mt-10'>Download Now</button>
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
