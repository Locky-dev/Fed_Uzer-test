import React from 'react'
import '../Valid/Valid.scss'

function Valid(props) {
  // const isCorrect = isCorrect.props
  // const classNameValid = isCorrect ? 'valid' : 'valid incorrect'
  return (
      <svg  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M4.07573 10.2985L0.175729 6.39855C-0.0585762 6.16424 -0.0585762 5.78435 0.175729 5.55002L1.02424 4.70149C1.25854 4.46716 1.63846 4.46716 1.87277 4.70149L4.49999 7.32869L10.1272 1.70149C10.3615 1.46718 10.7414 1.46718 10.9758 1.70149L11.8243 2.55002C12.0586 2.78432 12.0586 3.16422 11.8243 3.39855L4.92426 10.2986C4.68993 10.5329 4.31003 10.5329 4.07573 10.2985V10.2985Z" fill="#F47000"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="12" height="12" fill="white"/>
        </clipPath>
        </defs>
      </svg>
  )
}

export default Valid
