// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachDetails, onclickimage, isActive} = props
  const {id, imageUrl, thumbnailAltText} = eachDetails

  const thumbnailclicked = () => {
    onclickimage(id)
    console.log('clicked')
  }
  const btnstyle = isActive ? 'cleanBtn' : ''
  const imge = `image-size ${btnstyle}`

  return (
    <li className="each-image">
      <button className="img-btn" onClick={thumbnailclicked} type="button">
        <img src={imageUrl} alt={thumbnailAltText} className={imge} />
      </button>
    </li>
  )
}
export default ThumbnailItem
