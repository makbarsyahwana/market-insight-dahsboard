import React, {useState} from 'react'
import CalendarPicker from './calendar-picker.cmp';
import { Dropdown, Button } from 'antd';
import { DownOutlined, CalendarOutlined} from '@ant-design/icons'
import { intlFormat } from 'date-fns'


export default function DateRange({state, setState, startDate, setStartDate, endDate, setEndDate}) {
    return (
        <>
            <Dropdown  
                overlay={
                    <CalendarPicker 
                        state={state} 
                        setState={setState} 
                        setEndDate={setEndDate} 
                        setStartDate={setStartDate}
                    />
                } 
                placement="bottomLeft" 
                trigger={['click']}
            >
                <Button style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '481px',
                height: '45px',
                padding: '7px',
                fontSize: '19px',
                cursor: 'pointer',
                background: '#ffffff',
                color: '#000000'
                }}>
                    <CalendarOutlined style={{color: '#8B8B8B', padding: '5px', fontSize: '19px'}}/>
                    <p style={{color: '#8B8B8B'}}>Period</p>
                    <p style={{color: '#6A6A6A'}}>
                    {
                        intlFormat(startDate, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        }, { locale: 'id-ID'} )
                    }
                    - 
                    {
                        intlFormat(endDate, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        }, { locale: 'id-ID'} )
                    }
                    </p>
                    <DownOutlined style={{ color: '#757575', padding: '7px', fontSize: '16px'}}/>
                </Button>
            </Dropdown>
        </>
    )
}