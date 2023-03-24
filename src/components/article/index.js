import React, { Component, useEffect, useState } from "react";
import qs from 'qs'
import axios from 'axios'
import "./index.css"
import xin from "../../imgs/xin.png"
import yj from "../../imgs/yj.png"
import lun from "../../imgs/lun.png"
import common from '../../common';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
function Art(props) {
    const [art, setArt] = useState([])
    const [user, setUser] = useState([])
    const [liang, setLiang] = useState('')
    const [title, setTitle] = useState('')
    const [recommend, setRecommend] = useState(0)
    const [categoryId, setCategoryId] = useState(0)
    const [page, setPage] = useState(1)
    const [zhong, setZhong] = useState(1)
    const [limit, setLimit] = useState(5)
    const [zhuang, setZhuang] = useState(0)
    const [zhuang2, setZhuang2] = useState(0)
    const [zhuang3, setZhuang3] = useState(1)
    const [zhuang4, setZhuang4] = useState(0)
    const [zhuang5, setZhuang5] = useState(0)
    useEffect(() => {
        if (props.tit == '') {
            setZhuang4(1)
        }
        else {
            setZhuang4(0)
        }
        let token = window.localStorage.getItem("token")

        let data = {
            title: title,
            recommend: recommend,
            categoryId: props.id,
            page: page,
            limit: limit
        }




        common.ajax('get', '/api/post/list', data)
            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数据
                console.log(response)
                setArt(response.postDtoList)
                setZhong(response.postSearchDto.total)
            })
            .catch((error) => {
                console.log(error)
            })
        // let token = window.localStorage.getItem("token")
        // axios.get(`http://xueba.it266.com:8081/api/post/categories?token=${token}`,

        // )

        //     .then((response) => { //记得要使⽤箭头函数
        //         //服务器响应的数据
        //         console.log(response)
        //         setArt(response.data.data)

        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }, [props.id, limit, page, props.tit, props.lei])


    function math1() {
        let pageTotal = Math.ceil(zhong / limit)
        let numbers = []

        for (let i = 1; i <= pageTotal; i++) {
            numbers.push(<span key={i} className={page == i ? "arr" : ""}
                onClick={(e) => {
                    setPage(i)


                    console.log(i)
                }}>{i}</span>)

        }
        if (pageTotal > 7 && page <= 4) {

            let num = numbers.slice(0, 7)
            return num

        }
        else {
            if (pageTotal - page <= 3) {
                let num = numbers.slice(-7)
                return num
            }
            else {
                let num = numbers.slice(page - 4, page + 3)
                return num
            }




        }


    }


    return (
        <div className="art">
            <div className="left">
                <div className={zhuang5 == 0 ? "welcome" : "box2"}>欢迎您的到来</div>
                <div className={zhuang5 == 1 ? "welcome" : "box2"}>当前搜索：{props.tit}</div>
                <div className={zhuang5 == 1 ? "back" : "box2"} onClick={(e) => {
                    setZhuang5(0)
                }}>返回</div>
                <div className="kaishi">
                    <div className="saixuan">
                        <div className="left2">
                            <div className={zhuang == 0 ? "fenxuan2" : "fenxuan"}
                                onClick={(e) => {

                                    setZhuang(0)
                                    setZhuang2(0)
                                    if (props.id != 0) {
                                        setZhuang4(0)
                                    }
                                }}>综合</div>
                            <div className="fenxuan">|</div>
                            <div className={zhuang == 1 ? "fenxuan2" : "fenxuan"}
                                onClick={(e) => {

                                    setZhuang2(1)
                                    setZhuang(1)

                                }}>周榜</div>
                            <div className="fenxuan"> |</div>
                            <div className={zhuang == 2 ? "fenxuan2" : "fenxuan"}
                                onClick={(e) => {

                                    setZhuang2(1)
                                    setZhuang(2)

                                }}>月榜</div>
                            <div className="fenxuan">|</div>
                            <div className={zhuang == 3 ? "fenxuan2" : "fenxuan"}
                                onClick={(e) => {

                                }}>精华</div>
                        </div>
                        <div className="right2">
                            <div className="fenxuan3">按最新</div>
                            <div className="fenxuan">|</div>
                            <div className="fenxuan">抢沙发</div>


                        </div>
                    </div>
                    {
                        art.map(((item, index) => {
                            return <div key={index} className="allposts">
                                <div className="left">
                                    <img src={item.avatar} />
                                </div>
                                <div className="right5">
                                    <div className="essencetitle">
                                        <div className="posttitle">
                                            <span className={zhuang4 == 1 ? "box2" : "share"}>{props.tit}</span>
                                            {console.log(props.lei)}
                                            <Link className="title" to={`/detail/${item.post.id}`}>  <span className="title">{item.post.title}</span></Link >
                                        </div>
                                    </div>
                                    <div>
                                        <div className="info">
                                            <span>/yo</span>
                                            <span className="lv">LV0</span>

                                            <span className="date">{item.post.updatedAt}</span>
                                            <span className="star">
                                                <img src={xin} />{item.post.favoriteCount}</span>
                                        </div>
                                        <div className="see">
                                            <span><img src={yj} />{item.post.viewCount}</span>
                                            <span className="dialogue"><img src={lun} />{item.post.replyCount}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        }))
                    }

                    <div className={zhuang2 == 0 ? "pagebtn" : "box2"}>共{zhong}条
                        <span className={page == 1 ? "dead" : "xiao"} onClick={(e) => {
                            if (page > 1) {
                                setPage(page - 1)
                            }


                        }}>&lt;</span>
                        {math1()}
                        <span className={page == Math.ceil(zhong / limit) ? "dead" : "xiao"} onClick={(e) => {
                            if (page < Math.ceil(zhong / limit)) {
                                setPage(page + 1)
                            }
                        }}>&gt;</span>
                        <select name="" id="" onChange={(e) => {
                            setLimit(e.target.value)

                        }}>
                            <option value="5">5条/页</option>
                            <option value="10">10条/页</option>
                            <option value="15">15条/页</option>

                        </select>跳至
                        <input type="text" onKeyDown={(e) => {
                            switch (e.keyCode) {
                                case 13://回车事件



                            }

                        }} />页

                    </div>
                    <div className={zhuang2 == 0 ? "box2" : "alreadyBottom"}>到底了~~</div>












                </div>
            </div >

        </div>

    )


}
export default Art