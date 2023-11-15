
import React from 'react'

import { IconEdit, Plusicon, RowL, RowR } from '../../svg';
import style from './style.module.css'
import Table from 'rc-table';
import Switches from '../../Switch/switch';
import { Link } from 'react-router-dom';
export default function Maxsulotlar() {

    const data = [
        { cotegoriya: 'Fast food', dokon: 2, status: 'enebled' },
        { cotegoriya: 'Texnika', dokon: 12, status: 'enebled' },
        { cotegoriya: 'Kiyimlar', dokon: 3, status: 'enebled' },
        { cotegoriya: 'Telefonlar', dokon: 10, status: 'enebled' },
        { cotegoriya: 'Oziq-ovqat', dokon: 3, status: 'enebled' }
    ]
    const columns = [
        { title: 'kategoriya', dataIndex: 'cotegoriya', key: 'kategoriya', width: 100, },
        { title: 'Dokonlar', dataIndex: 'dokon', key: 'Dokonlar', width: 100, },
        { title: 'tahrirlash', render: (row) => <button className={style.editIconButton}><IconEdit /></button> },
        { title: 'holat', width: 200, render: (row) => <Switches /> }
    ]

    return <>
        <div className={style.bodyProduct}>
            <div className={style.topSidebar}>
                <div className={style.title}>
                    <Link>home / </Link>
                    kategoriya
                </div>

                <button className={style.button}>Qo'shish
                    <Plusicon />
                </button>
            </div>
            <Table className={style.table} footer={() => (
                <div className={style.footerBtns}>
                    <button className={style.btn}>
                        <RowL />
                    </button>
                    <button className={style.btn}>
                        <RowR />
                    </button>
                </div>
            )}
                columns={columns} data={data} />

        </div>


    </>
}




