import React from 'react'

const LoveInterface = () => {
  return (
    <>
    <div className="h-screen flex items-center justify-center bg-white">
  <button className="bg-white border-0 shadow-none hover:bg-white relative">
    <div className="indicator">
      <span className="indicator-item badge badge-secondary">10000+</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[50vw] h-[50vh] text-black"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
        <polyline points="22,7 12,13 2,7"></polyline>
      </svg>
    </div>
  </button>
</div>

    </>
  )
}

export default LoveInterface