import React, { useEffect, useState } from 'react';
import './index.less'
import Highest from '../../components/highest';
import axios from 'axios'
import qs from 'qs'
import { Button, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import du from "../../imgs/du.png"
import yan from "../../imgs/yan.png"
import mao from "../../imgs/mao.png"
import qq from "../../imgs/qq.png"
import { withRouter } from 'react-router-dom'
export default function Regist() {
    const [nickname, setNickname] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const [error, setError] = useState()
    useEffect(() => {



    }, [username])

    function pd() {
        if (password == null || username == null || nickname == null) {
            alert('请完整信息')
            return
        }
        else{
            if (password.length < 6 || password.length > 16) {
                alert('密码请输入6到16个字符')
                return
            }
    
            if (isNaN(username[0]) ==false) {
                alert('第一位必须为英文字母')
                return
            }
    
        }
      


    }
    return (
        <div className='regist'>
            <div className='head'>
                <Highest></Highest>
            </div>
            <div className='body'>
                <div className='clie'>
                    <div className="content">
                        <div className="namelogin">
                            <div className="namelogin2">
                                <div className="coderow1">
                                    <span className="active">用户名注册</span>
                                </div>
                                <div className="registrow">
                                    <div className="registmessage">用户名</div>
                                    <div className="registinput">
                                        <input type="text" placeholder="请输入您的用户名"
                                            onInput={(e) => {
                                                setUsername(e.target.value)

                                            }} />
                                    </div>
                                </div>
                                <div className="registrow">
                                    <div className="registmessage">昵称</div>
                                    <div className="registinput">
                                        <input type="text" placeholder="请输入您的昵称"
                                            onInput={(e) => {

                                                setNickname(e.target.value)
                                            }} />
                                    </div>
                                </div>
                                <div className="registrow">
                                    <div className="registmessage">设置密码</div>
                                    <div className="registinput">
                                        <input type="text" placeholder="请输入6到16个字符" onClick={(e) => {

                                            setPassword(e.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div className="registrow">
                                    <div className="registmessage">确认密码</div>
                                    <div className="registinput">
                                        <input type="text" placeholder="请再次输入您的密码" onClick={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div className="coderow3">
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#4b9387',
                                            },
                                        }}
                                    >
                                        <Button className='smb' type="primary" onClick={() => {
                                            pd()
                                        }}>提交</Button>
                                    </ConfigProvider>
                                    <span className="gotoregist">已有账号？点击此处去注册</span>
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
                </div>
            </div>
        </div>



    )







}