import React, {ReactNode, useEffect, useState} from 'react'
import Head from 'next/head'
// import {signOut, useSession} from 'next-auth/react'
import {Grid, Image, Layout, Menu, Tag, Typography, Breadcrumb, Badge, Avatar } from 'antd';
import Link from "next/link"
const {Header, Content, Footer, Sider} = Layout;
import { BarChartOutlined } from '@ant-design/icons'



export default function LayoutDefault({children}) {


    const [collapsed, setCollapsed] = React.useState(true);
    const [collapsedWidth, setCollapsedWidth] = React.useState("72px");

    const menuItems = [
        {
            key: '/',
            icon: <BarChartOutlined style={{fontSize: '30px'}}/>,
            label: 'Dashboard',
        } 
    ]


    const toggle = () => {
        setCollapsed(!collapsed)
    };

      
    return (
        <Layout>
            <Head>
                <title>Market Insight Dashboard</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap"
                    rel="stylesheet"
                /> */}
            </Head>
            <Layout>
                <Header className="site-layout-sub-header-background header">
                    <Image width={'374px'} height={'60px'} src={'/logo-advotics.png'} alt={"logo-epn"} className="logo-left-header"  preview={false} />
                    <div className='header-right-cnt'>
                        <div>
                            {/* <Image src={user.avatar} alt={""} className="avatar-right-header-img"  preview={false} /> */}
                        </div>
                        <div style={{fontWeight:600}}>Username</div>
                    </div>
                  
                </Header>
                <Layout>
                    <Sider 
                        trigger={null}
                        width={225}
                        className="site-layout-background-side"
                        collapsible
                        collapsedWidth={collapsedWidth}
                        collapsed={collapsed}
                        style={{top:-7, maxHeight: "100vh"}}
                        
                    > 
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['9']}
                            style={{ borderRight: 0, width: '90%', fontSize: '50px'}}
                            // onClick={handleMenuOnClick}
                            items={menuItems}
                        /> 
                        
                        {/* <div style={{background:'white', paddingLeft:14, textAlign:"left"}}>
                            {React.createElement(collapsed ? ">" : "<", {
                                className: 'trigger',
                                onClick: toggle,
                            })}
                        </div> */}
                    </Sider>
                    <Layout style={{ padding: '30px 34px 24px', maxHeight: "90vh", overflow: "auto"}}>
                            <Content>
                                {children}
                            </Content> :
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    )
}