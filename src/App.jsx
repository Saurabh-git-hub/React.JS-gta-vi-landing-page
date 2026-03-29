import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

function App() {

    const [ShowContent, setShowContent] = useState(false);

    useGSAP(()=>{
        const tl = gsap.timeline();

        tl.to(".vi-mask-group",{
            rotate: 10,
            duration: 4,
            ease: "Power4.easeInOut",
            transformOrigin: "50% 50%",
        })
        .to(".vi-mask-group",{
            scale: 10,
            duration: 2,
            delay: -1.8,
            ease:"expo.inOut",
            transformOrigin: "50% 50%",
            opacity: 0,
            onUpdate: function()
            {
                if(this.progress() >= .9)
                {
                    document.querySelector(".svg").remove();
                    setShowContent(true);
                    this.kill();
                }
            }
        })
        
    });

    useGSAP(()=>
    {

        if (!ShowContent) return;

        gsap.to(".main" ,{
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: "-1",
            ease: "Expo.eaeInOut"
        })

        gsap.to(".sky" ,{
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: "-0.8",
            ease: "Expo.eaeInOut"
        })

        gsap.to(".bg" ,{
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: "-0.8",
            ease: "Expo.eaeInOut"
        })

        gsap.to(".character" ,{
            scale: 0.8,
            x: "-50%",
            rotate: 0,
            duration: 2,
            delay: "-0.8",
            ease: "Expo.eaeInOut"
        })

        gsap.to(".text" ,{
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: "-0.8",
            ease: "Expo.eaeInOut"
        })



        const main = document.querySelector(".main");

        main ?.addEventListener("mousemove" , function(e)
        {
           console.log(e.clientX , e.clientY);
           const xMove = (e.clientX / window.innerWidth -.5) * 40;
           console.log(xMove);
                
            gsap.to(".imagesdiv .text" ,{
                x: `${xMove * 0.8}%`
                // x: xMove * 0.8
            });

            gsap.to(".sky" ,{
                x: xMove, 
            });

            gsap.to(".bg" ,{
                x: xMove * 1.7, 
            });     

        });
    } , [ShowContent])

    return (
        <>
            <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="viMask">
                        <rect width="100%" height="100%" fill="black" />
                            <g className="vi-mask-group">
                                <text
                                x="50%"
                                y="50%"
                                fontSize="250"
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
                        href="/bg.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                    />
                </svg>
            </div>

            {ShowContent &&
                <div className='main w-full rotate-[-10deg] scale-[1.7] '>
                    <div className='landing w-full h-screen bg-black'>

                        {/* top_navbar */}  
                        <div className='navbar absolute top-0 left-0 z-[10] w-full py-5 px-7 bg-gradient-to-t from-transparent to-black'>
                            <div className="logo flex gap-7">
                                <div className="lines flex flex-col gap-1">
                                    <div className="line w-15 h-2 bg-white"></div>
                                    <div className="line w-10 h-2 bg-white"></div>
                                    <div className="line w-5 h-2 bg-white"></div>
                                </div>
                                <h3 className='text-3xl text-white -mt-[7px] leading-none'>Rockstar</h3>
                                {/* leading-none => This controls line height (space between lines of text) */}
                            </div>        
                        </div>

                        {/* main_image_block and text_background */}                        
                        <div className='imagesdiv overflow-hidden relative w-fulll h-screen'>
                            {/* main background cloud image */}
                            <img 
                                className=' sky rotate-[-20deg] scale-[1.5] absolute top-0 left-0 w-full h-full object-cover' 
                                src="./sky.png" 
                                alt="sky image" 
                            />
                            {/* main background building image */}
                            <img 
                                className='bg rotate-[-3deg] scale-[1.8] absolute top-0 left-0 w-full h-full object-cover' 
                                src="./bg.png" 
                                alt="background image" 
                            />
                            {/* main_text */}
                            <div className="text flex flex-col gap-2 text-white absolute top-10 left-1/2 -translate-x-1/2 rotate-[-10deg] scale-[1.4]">
                                <h1 className='text-9xl -ml-40'>grand</h1>
                                <h1 className='text-9xl ml-20'>theft</h1>
                                <h1 className='text-9xl -ml-40'>auto</h1>
                            </div>
                            {/* character girl image */}
                            <img 
                                className=' character absolute left-1/2 -translate-x-1/2 rotate-[-10deg] scale-70 top-14' 
                                src="girlbg.png" 
                                alt="main girl image" 
                            />

                            {/* bootombar */}
                            <div className='btmbar text-white w-full absolute bottom-0 left-0 py-15 px-10 bg-gradient-to-t from-black to-transparent'>
                                <div className='flex gap-4 items-center'>
                                    <i className="ri-arrow-down-line text-xl"></i>
                                    {/* the arrow icon from =>https://remixicon.com/icon/arrow-down-line */}
                                    <h3 className='text-xl font-[Poppins]'>Scrool Down</h3>
                                    <img  className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60px]' src="./ps5.png" alt="" />
                                </div>                
                            </div> 
                        </div> 
                      
                    </div>

                    {/* for the first Character */}
                    <div className='w-full h-screen flex items-center justify-center px-10 bg-black'>
                        <div className='cntnr w-full flex text-white h-[100%]'>
                            <div className="limg relative w-1/2 h-full">
                                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 ' src="./imag.png" alt="" />
                            </div>
                            <div className="rg w-[40%] py-30">
                                <h1 className='text-8xl'>Still Running,</h1>
                                <h1 className='text-8xl'>Not Hunting</h1>
                                <p className='mt-10  font-[Poppins]'>
                                    She’s got the kind of presence you don’t forget. 
                                    Laid back, fearless, and grinning like she’s already won. 
                                    A vibe that screams street-smart, chill, and totally in control.
                                </p>
                                <p className='mt-3 font-[Poppins]'>
                                   The oversized kicks, gold chains, and confident crouch aren’t just style — they’re statements. 
                                   Her body language tells a story of grit and self-made strength. You can tell she’s been through enough to know who she is. 
                                   She doesn’t need approval. She doesn’t chase. She just moves — and the world watches.
                                </p>
                                <p className='mt-7  font-[Poppins]'>
                                    Behind her playful smile is fire — the kind that turns ambition into motion. 
                                    She's powered by hustle, driven by her own rhythm, and grounded in something real. Her style? Fierce but effortless. 
                                    Her energy? Unmatched. In a world that’s always running, she’s not hunting for attention. She already owns it.
                                </p>
                                <a
                                  href="https://saurabh-s-w-e.vercel.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className='bg-yellow-500 mt-10 px-6 py-6 text-black text-4xl inline-block'
                                >
                                  Download Now
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* for the second Character */}
                    <div className='w-full h-screen flex items-center justify-center px-10 bg-black'>
                        <div className='cntnr w-full flex text-white h-[100%]'>
                            <div className="rg w-[40%] py-30 ml-20">
                                <h1 className='text-8xl'>Never Idle,</h1>
                                <h1 className='text-8xl'>Always On</h1>
                                <p className='mt-10  font-[Poppins]'>
                                    She’s focused, balanced, and always in tune — with the world and with herself. 
                                    Headphones in, confidence up, she moves through life like a beat she’s already mastered.
                                </p>
                                <p className='mt-3 font-[Poppins]'>
                                    With one hand on her hip and the other gripping her phone, 
                                    she owns her space with calm determination. That steady gaze isn’t about proving something — it’s about knowing. 
                                    Whether she’s tracking steps or smashing goals, she carries herself like a quiet storm. No flash, just facts. No noise, just motion.
                                </p>
                                <p className='mt-7  font-[Poppins]'>
                                    Her hoodie’s relaxed, her stride’s grounded, and her vibe is all about control. She’s not showing off; she’s showing up — for herself, 
                                    every time. The numbers behind her aren’t decoration — they’re data, progress, power. She's the kind who doesn't chase trends — she builds momentum. 
                                    One run, one track, one mission at a time.
                                </p>
                                <a
                                  href="https://saurabh-s-w-e.vercel.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className='btn2 bg-red-500  mt-10 px-2 py-6 text-white text-4xl inline-block'
                                >
                                  Subscribe
                                </a>
                            </div>
                            <div className="limg relative py-6 w-1/2 h-full">
                                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-70 ' src="./second..png" alt="" />
                            </div>
                        </div>
                    </div>


                    {/* for the third Character */}
                    <div className='w-full h-screen flex items-center justify-center px-10 bg-black'>
                        <div className='cntnr w-full flex text-white h-[100%]'>
                            <div className="limg relative w-1/2 h-full">
                                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-70 ' src="./third.png" alt="" />
                            </div>
                            <div className="rg w-[40%] py-30">
                                <h1 className='text-8xl'>Born to Ride,</h1>
                                <h1 className='text-8xl'>Not to Hide</h1>
                                <p className='mt-10  font-[Poppins]'>
                                    Bright smile, easy confidence — he’s not chasing perfection, 
                                    just showing up daily. Calm heart, steady pace, and steps that speak louder than talk. 
                                    He’s walking proof of consistency.
                                </p>
                                <p className='mt-3 font-[Poppins]'>
                                    Dressed in relaxed earth tones and laced up in bold sneakers, 
                                    he blends comfort with energy. There’s rhythm in his walk, clarity in his smile. 
                                    Whether it’s 8,000 steps or just the first, he moves forward with purpose. Data on the side, 
                                    joy in the stride — that’s his balance.
                                </p>
                                <p className='mt-7  font-[Poppins]'>
                                   He wears progress on his wrist, but the real story is in how he carries himself. 
                                   No stress, no rush — just alignment between mind, body, and beat. His vibe is soft power. 
                                   Doesn’t need a finish line to prove anything. Each step he takes is already a quiet win.
                                </p>
                                <a
                                  href="https://saurabh-s-w-e.vercel.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className='btn3 bg-blue-500 mt-10 px-6 py-6 text-white text-4xl inline-block'
                                >
                                  Follow
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* for the fourth Character */}
                    <div className='w-full h-screen flex items-center justify-center px-10 bg-black'>
                        <div className='cntnr w-full flex text-white h-[100%]'>
                            <div className="rg w-[40%] py-30 ml-20">
                                <h1 className='text-8xl'>Silence Loud,</h1>
                                <h1 className='text-8xl'>Moves Louder</h1>
                                <p className='mt-10  font-[Poppins]'>
                                    She jumps before she walks — fearless, fun, and full of spark. 
                                    With joy in her veins and fire in her soul, she doesn’t just move — she soars.
                                </p>
                                <p className='mt-3 font-[Poppins]'>
                                    Decked in cozy neutrals with a pop of red, she’s energy in motion. 
                                    Every step she takes is a celebration. Stats rise, laughter echoes. 
                                    Whether hitting new heights or just feeling the rhythm, she owns her moment. Confidence isn’t what she wears — it’s how she flies through the day.
                                </p>
                                <p className='mt-7  font-[Poppins]'>
                                   You don’t measure her in steps or feet climbed — you feel her in the vibe she brings. 
                                   She’s powered by passion, not pressure. Her moves? Loud. Her spirit? Louder. 
                                </p>
                                <a
                                  href="https://saurabh-s-w-e.vercel.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className='btn4 bg-green-500 mt-10 px-6 py-6 text-black text-4xl inline-block'
                                >
                                  Like & Share
                                </a>
                            </div>
                            <div className="limg relative py-6 w-1/2 h-full">
                                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-120 ' src="./fourth.png" alt="" />
                            </div>
                        </div>
                    </div>

<footer className="w-full bg-yellow-500 text-black py-12 px-4 border-t-8 border-black relative overflow-hidden font-[Poppins]">
  {/* Animated highway lines (unchanged) */}
  <div className="highway-lines absolute top-0 left-0 w-full h-2 flex gap-8">
    {[...Array(20)].map((_, i) => (
      <div key={i} className="w-16 h-full bg-black opacity-30"></div>
    ))}
  </div>

  <div className="container mx-auto max-w-6xl">
    {/* Social Media Gang (unchanged) */}
    <div className="social-gang grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      {[
        { 
          icon: 'ri-twitter-x-fill', 
          name: 'TWITTER', 
          handle: '@GTAVI_Leaks',
          color: 'bg-black'
        },
        { 
          icon: 'ri-instagram-line', 
          name: 'INSTAGRAM', 
          handle: '@GTAVI_Official',
          color: 'bg-gradient-to-br from-purple-500 to-red-500'
        },
        { 
          icon: 'ri-discord-fill', 
          name: 'DISCORD', 
          handle: 'gtavi-crew',
          color: 'bg-indigo-600'
        },
        { 
          icon: 'ri-youtube-fill', 
          name: 'YOUTUBE', 
          handle: 'GTA VI Channel',
          color: 'bg-red-600'
        }
      ].map((social, i) => (
        <div key={i} className="social-card p-4 border-2 border-black bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-40 transition-all">
          <div className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl text-white mb-3`}>
            <i className={social.icon}></i>
          </div>
          <h4 className="font-bold text-lg tracking-tight">{social.name}</h4>
          <p className="text-sm tracking-tight opacity-90">{social.handle}</p>
          <a
            href="https://saurabh-s-w-e.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block px-3 py-1 bg-black text-yellow-500 text-xs font-bold hover:bg-opacity-80 transition-all tracking-tight"
          >
            FOLLOW
          </a>
        </div>
      ))}
    </div>

    {/* NEW: Video + Wanted Poster Row */}
    <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
      {/* Video Container (NEW ADDITION) */}
      <div className="w-full lg:w-1/2 border-4 border-black bg-black relative group">
        <video 
          src="/video.mp4" // ← Change to your video filename in public folder
          className="w-full h-auto"
          controls
          poster="/thumbnail.jpg" // ← Optional preview image
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <i className="ri-play-fill text-2xl text-white"></i>
          </div>
        </div>
      </div>

      {/* Existing Wanted Poster (unchanged) */}
      <div className="w-full lg:w-1/2">
        <div className="wanted-poster bg-black text-yellow-500 p-8 text-center max-w-2xl mx-auto border-4 border-yellow-500 transform rotate-1 hover:rotate-0 transition-transform">
          <h3 className="text-4xl font-bold mb-2 tracking-tighter">STAY WANTED</h3>
          <p className="mb-6 tracking-tight">Get exclusive updates on GTA VI</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="YOUR EMAIL..." 
              className="flex-1 px-4 py-3 bg-black bg-opacity-10 border border-yellow-500 text-white placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 tracking-tight"
            />
            <a
              href="https://saurabh-s-w-e.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 font-bold transition-all hover:scale-105 tracking-tight inline-block"
            >
              SUBSCRIBE NOW
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Logo and Links (unchanged) */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="logo flex items-center gap-4">
        <div className="lines flex flex-col gap-1">
          <div className="line w-15 h-2 bg-black"></div>
          <div className="line w-10 h-2 bg-black"></div>
          <div className="line w-5 h-2 bg-black"></div>
        </div>
        <h3 className="text-3xl font-bold tracking-tight">ROCKSTAR</h3>
      </div>

      <div className="links flex flex-wrap justify-center gap-4 md:gap-8">
        {['NEWS', 'CAREERS', 'PRESS', 'SUPPORT', 'LEGAL'].map((item, i) => (
          <a key={i} href="#" className="font-bold hover:underline hover:text-black hover:scale-105 transition-all tracking-tight">
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* Copyright (unchanged) */}
    <div className="mt-12 pt-6 border-t border-black border-opacity-30 text-center">
      <p className="text-sm tracking-tight">
        © {new Date().getFullYear()} ROCKSTAR GAMES. ALL RIGHTS RESERVED.
      </p>
      <p className="text-xs mt-2 opacity-80 tracking-tight">
        Grand Theft Auto, Rockstar Games, and all related logos are trademarks of Take-Two Interactive Software, Inc.
      </p>
    </div>
  </div>

  {/* Floating police star (unchanged) */}
  <div className="police-star absolute bottom-4 right-4 w-12 h-12 text-red-500 opacity-20 hover:opacity-100 transition-opacity">
    <i className="ri-star-fill text-4xl"></i>
  </div>
</footer>

                </div>
            }
        </>
    )
}

export default App