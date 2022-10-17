export default function TitleBar ({children, title}) {
    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '48px',
                    backgroundColor: '#37B04C',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 16px 0',
                    fontWeight: '600',
                    fontSize: '20px'
                }}
                >
                {title}
                {children}
            </div>
        </>
    )
}