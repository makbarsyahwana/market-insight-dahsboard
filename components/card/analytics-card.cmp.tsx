import { DownOutlined, UpOutlined, CalendarOutlined, BulbOutlined, MoreOutlined, ArrowDownOutlined } from '@ant-design/icons'

export default function AnalyticsCard ({children, title, width, height}) {
    return (
        <>
            <div
            style={{
                width: width,
                height: height,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                marginTop: '20px',
                boxShadow: '0px 2px 6px #0000000A'
            }}
            >
                <div 
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#707070C4',
                    fontSize: '20px'
                }}>
                    <p>{title}</p>
                    <MoreOutlined style={{fontSize: '20px', fontWeight: '600'}}/>
                </div>

                <div 
                style={{
                    overflow: 'auto'
                }}>
                    {children}
                </div>

            </div>
        </>
    )
}