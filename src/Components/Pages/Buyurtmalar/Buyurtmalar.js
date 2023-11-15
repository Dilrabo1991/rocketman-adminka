import React, { useState } from 'react'
import style from './main.module.scss'
import MyTable from '../../myTable/myTable'
import { Link } from 'react-router-dom'
import { Plusicon } from '../../svg'
export default function Buyurtmalar() {

    const [open, setOpen] = useState(false)

    const hendleopen = () => {
        setOpen(!open)
    }

    return (
        <div className={style.wpapper}>
            <div className={style.body}>
                <div className={style.mainWrap}>
                    <div className={style.topSidebar}>
                        <div className={style.title}>
                            <Link>home / </Link>
                            kategoriya
                        </div>

                        <button onClick={hendleopen} className={style.button}>Qo'shish
                            <Plusicon />
                        </button>
                    </div>
                    <MyTable />
                </div>
            </div>
            {open ?
                <div className={style.modal} >
                    <div className={style.modalContent}>
                        <div className={style.modalHeader}>
                            <div className={style.modalTitle}>Qo'shish</div>
                            <button className={style.modalClose}
                                onClick={hendleopen}>X
                            </button>
                        </div>
                        <div className={style.modalBody}>
                            <div className={style.modalInput}>
                                <label>Kategoriya nomi</label>
                                <input type="text" placeholder='masalan: texnika' />
                            </div>
                            <div>
                                <label>Holat</label>
                                <input type='checkbox' /><label>on</label>
                                <input type='checkbox' /><label>off</label>
                            </div>

                        </div>
                    </div>

                </div>
                : null}

        </div >
    )
}
