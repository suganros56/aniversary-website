import React from 'react'
import Timeline from '../components/Timeline'
import Slideshow from '../components/Slideshow'
import PlaylistEmbed from '../components/PlaylistEmbed'
import CountdownWidget from '../components/CountdownWidget'
import LoveConfessionModal from '../components/LoveConfessionModal'
import SecretMessageUnlock from '../components/SecretMessageUnlock'
import AudioGift from '../components/AudioGift'

const MemoryPage = () => {
  return (
    <>
    <div>MemoryPage</div>
    <Timeline/>
    <>Test</>
    <div className="w-full my-12 flex items-center">
  <div className="flex-1 border-t border-pink-200"></div>
  <span className="mx-6 text-pink-500 font-cursive text-xl">Next Chapter…</span>
  <div className="flex-1 border-t border-pink-200"></div>
</div>

<div className="animate-fadeIn duration-1000 delay-300">
    <Slideshow/>
</div>

  
    <>Test 333</>
    <PlaylistEmbed/>
    <>attttttttttt</>
    <CountdownWidget/>
    <>aassssssss</>
    <LoveConfessionModal/>
    <>tess</>
    <SecretMessageUnlock/>
    <>tesssssssssssss</>
    <AudioGift/>
    </>



  )
}

export default MemoryPage