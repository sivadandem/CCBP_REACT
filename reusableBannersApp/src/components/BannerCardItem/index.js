const BannerCardItem = props => {
  const {bannercard} = props
  const {headerText, description, className} = bannercard
  return (
    <li className={`card ${className}`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="submit">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
