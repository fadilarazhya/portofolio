interface CardSliderButtonProps {
  direction: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}

const CardSliderButton = ({ direction, onClick, disabled }: CardSliderButtonProps) => (
  <button
    className={`card-slider-btn card-slider-btn--${direction}`}
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === 'prev' ? 'Previous' : 'Next'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      {direction === 'prev' ? (
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      ) : (
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      )}
    </svg>
  </button>
)

export default CardSliderButton
