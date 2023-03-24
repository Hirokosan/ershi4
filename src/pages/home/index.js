import React, { useEffect, useState } from 'react';
import './index.less'
import Highest from '../../components/highest';
import Daohang from '../../components/daohang';
import Art from '../../components/article';
export default function Home() {
    const [id, setid] = useState(0)
    const [title, settitle] = useState('')


    function set1(val) {
        setid(val)
    }
    function set2(val) {
        settitle(val)
    }
    return (
        <div className='home'>
            <div className='head'>
                <Highest ></Highest>
                <Daohang set1={set1} set2={set2}></Daohang>
                <div className='xia'>
                    <Art id={id} tit={title}></Art>
                </div>
            </div>



        </div>
    )







}