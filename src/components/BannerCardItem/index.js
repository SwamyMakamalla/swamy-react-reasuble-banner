// Write your code here.
import './index.css'

const BannerItem = Props => {
  const {bannerCardsList} = Props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <div className="item-container">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerItem
