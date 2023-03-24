import React, { useEffect, useState } from 'react';
import './index.less'
import logo from '../../imgs/logo.png'
import banshen from '../../imgs/banshen.png'
import { withRouter } from 'react-router-dom'
import common from '../../common';
import fangda from "../../imgs/fangda.png"
import { Button, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
export default withRouter(Daohang)
function Daohang(props) {
    const [dhxx, setDhxx] = useState([])
    const [states, setStates] = useState(0)
    useEffect(() => {
        jz()
        console.log(states)
     
    }, [states])
    function jz() {
        common.ajax('get', '/api/post/categories')

            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数据
                console.log(response)
                setDhxx(response)



            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='second'>
            <div className='head'>
                <div className={states == 0 ? 'fb' : 'fb2'} onClick={(e) => {
                    setStates(0)
                    props.set1(0)
                    props.set2('')
                }}>首页</div>

                {
                    dhxx.map(((item, index) => {
                        return <div key={index} className={states == item.id ? 'fb' : 'fb2'}
                            onClick={(e) => {
                                setStates(item.id)
                                props.set1(item.id)
                                props.set2(item.name)
                            }}
                        >
                            {item.name}
                        </div>

                    }))
                }
                <div className='seach'>

                    <input type='text' placeholder='搜索帖子'></input>

                    <img src={fangda}></img>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#4b9387',
                            },
                        }}
                    >
                        <Button className='smb' type="primary" onClick={() => {

                        }}>发表新帖</Button>
                    </ConfigProvider>
                </div>


            </div>
        </div>
    )



}

