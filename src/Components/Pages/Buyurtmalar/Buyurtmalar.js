import React from 'react'
import style from './main.module.scss'
import MyTable from '../../myTable/myTable'
import SidebarTop from '../../SidebarTop.jsx/Sidebar'
export default function Buyurtmalar() {
    return (
        <div className={style.body}>
            <div className={style.mainWrap}>
                <SidebarTop />
                <MyTable />
            </div>
        </div>
    )
}
