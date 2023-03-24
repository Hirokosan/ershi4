import React, { useEffect, useState } from 'react';
import './index.css'
import logo from '../../imgs/logo.png'
import banshen from '../../imgs/banshen.png'
import { withRouter } from 'react-router-dom'

export default withRouter(Highest)
function Highest(props) {
    useEffect(() => {

    }, [])
    function jc() {

    }

    return (
        <div className='first'>
            <div className='head'>
                <div className='left'>
                    <div>
                        <img src={logo} />
                    </div>
                    <div onClick={(e) => {
                        props.history.push("/")
                    }
                    }>代码库社区练习完成U•ェ•*U</div>
                </div>
                <div className='right'>
                    <div><img src={banshen} /></div>
                    <div onClick={(e) => {
                        props.history.push('/login')
                    }}>登录</div>
                    <div onClick={(e) => {
                        props.history.push('/regist')
                    }}>注册</div>
                </div>
            </div>




        </div>
    )



}



