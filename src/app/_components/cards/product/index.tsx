import Image from 'next/image'
import Button from '@components/button'
import Heart from '@assets/svgs/heart.svg'
import { ProductCardType } from '@/types/props'
import GetPaidTag from '@assets/svgs/get-paid-same-day-tag.svg'

export default function ProductCard({
  header,
  footer,
  product,
}: ProductCardType) {
  const { startContent, endContent = <Heart /> } = header || {}
  const {
    startContent: f_startContent,
    endContent: f_endContent = <GetPaidTag />,
  } = footer || {}
  const { brandImage, brandName, name, options, price, productImage } = product

  return (
    <div className="product-card-container">
      <div className="image-container">
        <div className="header">
          <div className="start-content">{startContent}</div>
          <div className="end-content">{endContent}</div>
        </div>
        <Image alt="" width={250} height={300} src={productImage} />
        <div className="footer">
          <div className="start-content">{f_startContent}</div>
          <div className="end-content">{f_endContent}</div>
        </div>
      </div>
      <div className="details">
        <div className="brand">
          <Image
            src={brandImage}
            alt={brandName}
            width={100}
            height={100}
            className="image"
          />
          <h4>{brandName}</h4>
        </div>
        <div className="info">
          <h5>{name}</h5>
          <p>{options} options</p>
          <span>${price}</span>
        </div>
      </div>
      <div className="actions">
        <Button type="bordered">Add to Shelf</Button>
        <Button type="primary">Add to Bag</Button>
      </div>
    </div>
  )
}
