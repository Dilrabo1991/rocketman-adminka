import React from 'react'
import style from './client.module.scss'
import Table from 'rc-table'
import { Plusicon, RowL, RowR } from '../../svg'
import { Link } from 'react-router-dom'

export default function Mijozlar() {

    const dataClient = [

        {
            id: 6,
            name: 'Bobur Mavlonov',
            phoneNumber: +"998901234567",
            buyurtmalar: 1,
        },
        {
            id: 5,
            name: 'Shuhratbek Qobulov',
            phoneNumber: +"998901234567",
            buyurtmalar: 2,
        },
        {
            id: 4,
            name: 'Farruhbek Abbosov',
            phoneNumber: +"998901234567",
            buyurtmalar: 5,
        },
        {
            id: 3,
            name: 'Usmon Mas’udjonov',
            phoneNumber: +"998901234567",
            buyurtmalar: 15,
        },
        {
            id: 2,
            name: 'Abdulmajidxonov Abdulfattohxon',
            phoneNumber: +"998901234567",
            buyurtmalar: 42,
        },
        {
            id: 1,
            name: 'Ali Zairov',
            phoneNumber: +"998901234567",
            buyurtmalar: 3,
        }

    ]
    const columsClient = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: 100,
        },
        {
            title: 'isim',
            dataIndex: 'name',
            key: 'name',
            width: 100,
        },
        {
            title: 'telefon raqam',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            width: 100,
        },
        {
            title: 'buyurtmalar',
            dataIndex: 'buyurtmalar',
            key: 'buyurtmalar',
            width: 100,
        }
    ]



    return <>
        <div className={style.body}>
            <div className={style.topSidebar}>
                <div className={style.title}>
                    <Link>home / </Link>
                    kategoriya
                </div>

                <button className={style.button}>Qo'shish
                    <Plusicon />
                </button>
            </div>
            < Table footer={() => (
                <div className={style.footerBtns}>
                    <button className={style.btn}>
                        <RowL />
                    </button>
                    <button className={style.btn}>
                        <RowR />
                    </button>
                </div>
            )}

                columns={columsClient} data={dataClient} />


        </div>


    </>

}