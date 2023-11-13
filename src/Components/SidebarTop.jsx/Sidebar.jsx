import React from 'react'
import { Plusicon } from '../svg'
import { Link } from 'react-router-dom'
import style from './top.module.scss'


const SidebarTop = () => {
    return (
        <div className={style.topSidebar}>
            <div className={style.title}>
                <Link>home / </Link>
                kategoriya
            </div>

            <button className={style.button}>Qo'shish
                <Plusicon />
            </button>
        </div>
    )
}

export default SidebarTop
