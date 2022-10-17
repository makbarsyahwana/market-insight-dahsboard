import React, {ReactElement, useState} from 'react'
import Image from 'next/image'
import LayoutDefault from '../components/layout'
import { Typography, Dropdown, Button } from 'antd';
const { Title } = Typography;
import {UpOutlined, BulbOutlined } from '@ant-design/icons'

import productData from '../utils/product-data';

import DateRange from '../components/date/date-range.cmp';
import TitleBar from '../components/section/title-bar.cmp';
import GrowthCard from '../components/card/growth-card.cmp';
import AnalyticsCard from '../components/card/analytics-card.cmp';
import ProductCard from '../components/card/product-card.cmp';
import PurchaseChart from '../components/chart/purchase-chart.cmp';



function Home() {

  const [startDate, setStartDate ] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [state, setState] = useState([
      {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
      }
  ])


  return (
    <LayoutDefault>
      <>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Title>Dashboard</Title>
          <DateRange 
            state={state} 
            setState={setState} 
            startDate={startDate} 
            setStartDate={setStartDate} 
            endDate={endDate} 
            setEndDate={setEndDate} 
          />
        </div>

        {/* ------------------------------------------------------------------------------------- */}
        <TitleBar 
          title={'MARKET INSIGHT'}
        >
          <div>
            <BulbOutlined style={{padding: '5px', fontSize: '16px'}} />
            <a style={{
              textDecoration: 'underline',
              fontSize: '14px',
              fontWeight: '300'
            }}>
              Click Here For Help
            </a>
            <UpOutlined style={{padding: '5px', fontSize: '14px'}} />
          </div>
        </TitleBar>

        {/* ------------------------------------------------------------------------------------- */}

        <GrowthCard 
          ratio={'Sales Turnover'} 
          amount={'Rp 3,600,000'} 
          percentage={'13,8%'} 
          description={'last period in product sold'} 
          icon={'/sales-turnover@2x.png'}  
        />

        {/* ------------------------------------------------------------------------------------- */}


        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '16px'
        }}>

          <AnalyticsCard 
            title={'AVARAGE PURCHASE VALUE'}
            width={'670px'}
            height={'424px'}
          >
            <PurchaseChart />
          </AnalyticsCard>

          {/*---------------*/}
          
          <AnalyticsCard 
            title={'BEST SELLING SKU'}
            width={'375px'}
            height={'424px'}
          >
            {
              productData.map((data, idx) => (
                <ProductCard
                  key={idx}
                  image={data.image} 
                  name={data.name} 
                  price={data.price} 
                  sold={data.sold} />
              ))
            }
          </AnalyticsCard>

          {/*---------------*/}

          <AnalyticsCard 
            title={'TOP COMPETITOR SKU'}
            width={'375px'}
            height={'424px'}
          >
            {
              productData.map((data, idx) => (
                <ProductCard
                  key={idx}
                  image={data.image} 
                  name={data.name} 
                  price={data.price} 
                  sold={data.sold} />
              ))
            }
          </AnalyticsCard>

        </div>
      </>
    </LayoutDefault>
  )
}

Home.getLayout = function getLayout(Home: ReactElement) {
  return (
      <LayoutDefault>
          {Home}
      </LayoutDefault>
  )
}

export default Home


