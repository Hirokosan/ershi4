import React, { useEffect, useState } from 'react';
import './index.less'
import Highest from '../../components/highest';
import { Button, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import du from "../../imgs/du.png"
import yan from "../../imgs/yan.png"
import mao from "../../imgs/mao.png"
import qq from "../../imgs/qq.png"
import { OmitProps } from 'antd/es/transfer/ListBody';
import qs from 'qs'
import common from '../../common';
import axios from 'axios'
export default function Login(props) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    useEffect(() => {

        let token = window.localStorage.getItem("token")
        console.log(token)
    }, [])

    function login() {
        let data = {
            username: username,
            password: password
        }

        common.ajax('post', '/api/token/create', data)


            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数据
                console.log(response)
                window.localStorage.setItem("token", response.token)

                alert("恭喜你登录成功")
                props.history.push('/')

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='login'>
            <div className='head'>
                <Highest></Highest>
            </div>
            <div className='body'>
                <div className='clie'>
                    <div className='ml'>
                        <span>密码登录</span>
                        <span>邮箱登录</span>
                        <span>扫码登录</span>
                    </div>
                    <div className='srk'>
                        <div className='srkmb'>
                            <div className='sph1'>用户名</div>
                            <div className='sph2'>  <input type='text' placeholder='请输入您的用户名' onInput={(e) => {
                                setUsername(e.target.value)
                            }}></input></div>

                            <div>使用第三方账号注册过的用户需先绑定手机/邮箱号</div>

                        </div>
                        <div className='srkmb'>
                            <div className='sph1'>密码</div>
                            <div className='sph2'>  <input type='text' placeholder='请输入您的密码' onInput={(e) => {
                                setPassword(e.target.value)
                            }}></input></div>

                            <div>使用第三方账号注册过的用户需先绑定手机/邮箱号</div>

                        </div>

                    </div>
                    <div className='third'>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#4b9387',
                                },
                            }}
                        >
                            <Button className='smb' type="primary" onClick={() => {
                                login()
                            }}>提交</Button>
                        </ConfigProvider>

                        <div onClick={() => {
                            props.history.push("/regist")
                        }}>尚无账号？点击此处去注册</div>

                    </div>
                    <div className="coderow4">
                        <span>或者使用社交账号注册</span>
                        <img src={qq} />
                        <img src={yan} />
                        <img src={du} />
                        <img src={mao} />
                    </div>
                </div>
            </div>


        </div>
    )







}