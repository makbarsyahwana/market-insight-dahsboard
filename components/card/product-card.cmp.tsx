import Image from "next/image"

export default function ProductCard ({image, name, price, sold}) {
    return (
        <>
            <div
                  style={{
                    width: '100%',
                    height: '80px',
                    backgroundColor: 'transparant',
                    display: 'flex',
                    flexDirection: 'row',
                    boxShadow: '0px 2px 6px #0000000A',
                    border: '0.5px solid #C5C5C59C',
                  }}
                >
                  <Image alt={'product-image'} width={'100%'} height={'100%'} src={image} />
                  <div style={{
                    padding: '10px',
                    lineHeight: '10px'
                  }}>
                    <p style={{color: '#000000DE', fontSize: '16px'}}>{name}</p>
                    <div style={{
                      display: 'flex',
                      color: '#00000099',
                      gap: '50px'
                    }}>
                      <p>{price}</p>
                      <p>{sold}</p>
                    </div>
                  </div>
                </div>
        </>
    )
}