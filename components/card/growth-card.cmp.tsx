import { DownOutlined, UpOutlined, CalendarOutlined, BulbOutlined, MoreOutlined, ArrowDownOutlined } from '@ant-design/icons'
import Image from 'next/image'

export default function GrowthCard ({ratio, amount, percentage, description, icon}) {
    return (
        <>
             <div
                style={{
                    width: '276px',
                    height: '104px',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                    marginTop: '20px',
                    boxShadow: '0px 2px 6px #0000000A'
                }}
                >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#707070C4',
                    fontSize: '12px'
                }}>
                    <p>{ratio}</p>
                    <MoreOutlined style={{fontSize: '19px', fontWeight: '600'}}/>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '25px'
                }}>
                    <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: '10px',
                    }}>
                    <p style={{fontSize: '18px', fontWeight: '700', color: '#000000'}}>{amount}</p>
                    <div style={{
                        display: 'flex'
                    }}>
                        <p style={{color: "red", fontSize: '10px'}}><ArrowDownOutlined />{percentage}</p> 
                        <p style={{color: "#707070C4", fontSize: '10px'}}>{description}</p>
                    </div>
                    </div>
                    <Image width={'49px'} height={'43px'} src={icon} />
                </div>
            </div>
        </>
    )
}