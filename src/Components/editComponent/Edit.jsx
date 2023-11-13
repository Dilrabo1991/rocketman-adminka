import React from 'react'
import cls from './cls.molodule.scss'
const EditModal = () => {
    return (
        <div className={cls.bg}>
            <div className={cls.wrapForm}>
                <h1>Qo'shish</h1>
                <form>
                    <label>Kategoriya nomi
                        <input placeholder='masalan: texnika' />
                    </label>
                    <h3>Holat</h3>
                    <label>  <input type='checkbox' />on</label>
                    <label> <input type='checkbox' />off</label>
                    <button>Qo'shish</button>
                </form>
            </div>

        </div>
    )
}

export default EditModal
