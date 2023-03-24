import React, { useState, useEffect } from "react";
import Highest from '../../components/highest';
import axios from 'axios'
import qs from 'qs'
import "./index.css"
import du from "../../imgs/du.png"
import yj from "../../imgs/yj.png"
import lj from "../../imgs/laji.png"
import lun from "../../imgs/lun.png"
import zan from "../../imgs/zan.png"
import zanle from "../../imgs/zanle.png"
import ma from "../../imgs/ma.png"
import xin from "../../imgs/xin.png"
import xing from "../../imgs/xing.png"
import { withRouter } from 'react-router-dom'


function Detail(props) {
    const [id, setId] = useState(props.match.params.id)
    const [postid, setPostid] = useState(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [contentme, setContentme] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const [nickname, setNickname] = useState("")
    const [avatar, setAvatar] = useState()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [viewCount, setViewCount] = useState()
    const [replyCount, setReplyCount] = useState()
    const [likebool, setLikebool] = useState()
    const [likeCount, setLikeCount] = useState()
    const [favorite, setFavorite] = useState()
    const [favoriteCount, setFavoriteCount] = useState()
    const [tiezi, setTiezi] = useState([])
    const [total, setTotal] = useState([])
    const [parentId, setParentId] = useState(0)
    const [zhuang, setZhuang] = useState(0)

    useEffect(() => {

        if (parentId == 0) {
            ziji()

        }
        else {
            ziji()
            sj()

        }
       
        tie()
    }, [page, limit, replyCount,])
    function showpage() {

        const pageTotal = Math.ceil(total / limit)


        let numbers = []

        for (let i = 1; i <= pageTotal; i++) {
            numbers.push(<span key={i} className={page == i ? "arr" : ""}
                onClick={(e) => {
                    setPage(i)


                    console.log(i)
                }}>{i}</span>)

        }
        return numbers
    }

    // function jia(){
    //     let token = window.localStorage.getItem("token")


    //     axios.get(`http://xueba.it266.com:8081/api/post/replyList?token=${token}`,
    //         {
    //             params: {
    //                 id: id,
    //                 limit: limit,
    //                 page: page
    //             }
    //         }
    //     )

    //         .then((response) => { //记得要使⽤箭头函数
    //             //服务器响应的数

    //             setTiezi(response.data.data.replyList)
    //             setTotal(response.data.data.pagination.total)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })












    // }

    function tie() {
        let token = window.localStorage.getItem("token")


        axios.get(`http://xueba.it266.com:8081/api/post/replyList?token=${token}`,
            {
                params: {
                    id: id,
                    limit: limit,
                    page: page
                }
            }
        )

            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数

                setTiezi(response.data.data.replyList)
                setTotal(response.data.data.pagination.total)
            })
            .catch((error) => {
                console.log(error)
            })








    }

    function shan(value) {
        let token = window.localStorage.getItem("token")

        let data = {
            id: value,
        }

        data = qs.stringify(data)
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(`http://xueba.it266.com:8081/api/post/delete?token=${token}`,
            data, config
        )

            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数


                alert("删帖成功")
                tie()
            })
            .catch((error) => {
                console.log(error)
            })








    }

    function rp() {
        let token = window.localStorage.getItem("token")
        let data = {
            id: props.match.params.id,
            content: contentme
        }
        data = qs.stringify(data)
        axios.post(`http://xueba.it266.com:8081/api/post/reply?token=${token}`,
            data
        )

            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数
                alert("回帖成功")
                ziji()

            })
            .catch((error) => {
                console.log(error)
            })








    }
    function like(value) {
        let token = window.localStorage.getItem("token")
        let data = {
            id: value,
        }
        data = qs.stringify(data)
        axios.post(`http://xueba.it266.com:8081/api/post/like?token=${token}`,
            data
        )

            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数
                tie()
                ziji()

            })
            .catch((error) => {
                console.log(error)
            })



    }




    function sc() {
        let token = window.localStorage.getItem("token")
        let data = {
            id: props.match.params.id,
        }
        data = qs.stringify(data)
        axios.post(`http://xueba.it266.com:8081/api/post/favorite?token=${token}`,
            data
        )

            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数

                ziji()

            })
            .catch((error) => {
                console.log(error)
            })

    }
    function sj() {
        let token = window.localStorage.getItem("token")
        axios.get(`http://xueba.it266.com:8081/api/post/view?token=${token}`,
            {
                params: {
                    id: parentId,
                    limit: 5,
                    page: 1,
                }
            }
        )

            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数



                setTitle(response.data.data.postDto.post.title)


            })
            .catch((error) => {
                console.log(error)
            })





    }




















    function ziji() {
        let token = window.localStorage.getItem("token")
        axios.get(`http://xueba.it266.com:8081/api/post/view?token=${token}`,
            {
                params: {
                    id: props.match.params.id,
                    limit: 5,
                    page: 1,
                }
            }
        )

            .then((response) => { //记得要使⽤箭头函数
                //服务器响应的数
                setParentId(response.data.data.postDto.post.parentId)
                setContent(response.data.data.postDto.post.content)
                setLikebool(response.data.data.like)
                setFavorite(response.data.data.favorite)
                setTitle(response.data.data.postDto.post.title)
                setNickname(response.data.data.postDto.nickname)
                setAvatar(response.data.data.postDto.avatar)
                setCreatedAt(response.data.data.postDto.post.createdAt)
                setViewCount(response.data.data.postDto.post.viewCount)
                setReplyCount(response.data.data.postDto.post.replyCount)
                setLikeCount(response.data.data.postDto.post.likeCount)
                setFavoriteCount(response.data.data.postDto.post.favoriteCount)

            })
            .catch((error) => {
                console.log(error)
            })



    }




    return (
        <div>
            <Highest></Highest>
            <div className="detail">
                <div className="content">
                    <div className="left">
                        <div className="postdetail" >
                            <div className={parentId == 0 ? "row1" : "box2"}>{title}</div>
                            <div className={parentId != 0 ? "row1" : "box2"}>回复自：{title}</div>
                            <div className="row2">
                                <div className="left">
                                    <span className="category">提问</span>
                                </div>
                                <div className="rightt">
                                    <span className="dialogue"><img src={lun} />{replyCount}</span>
                                    <span><img src={yj} />{viewCount}</span>
                                </div>
                            </div>
                            <div className="row3">
                                <div className="lefttt">
                                    <div>
                                        <img className="avatar" src={avatar} />

                                    </div>
                                </div>
                                <div className="righttt">
                                    <div className="up">
                                        <span className="username">{nickname}</span>
                                        <span className="lv">LV0</span>
                                        <span className="date">{createdAt} 发表</span>
                                    </div>
                                    <div className="down">
                                        <span className="adv">点击群号免费加入社区交流群：</span>
                                        <span>12345</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row4"><span>{content}</span></div>
                            <div className="row5"><span className="like" onClick={(e) => {
                                like(props.match.params.id)


                            }}><img className={likebool == false ? "" : "box2"} src={zan} />
                                <img className={likebool == true ? "" : "box2"} src={zanle} />点赞({likeCount})</span>
                                <span className={parentId == 0 ? "star" : "box2"} onClick={(e) => {

                                    sc()

                                }}><img className={favorite == false ? "" : "box2"} src={xin} />
                                    <img className={favorite == true ? "" : "box2"} src={xing} />收藏({favoriteCount})</span>
                                <span className="like"><img />分享</span>
                            </div>
                            <div className={parentId == 0 ? "row6" : "box2"}>相关标签：<span>12</span></div>
                            <div className="row7">
                                <textarea name="" id="" onInput={(e) => [
                                    setContentme(e.target.value)

                                ]}></textarea>
                                <div className="postReply">
                                    <button onClick={(e) => {
                                        rp()

                                    }}>回复</button>
                                </div>
                            </div>
                        </div>
                        <div className="replyCount">
                            <div className="line"></div>
                            <div className="line line2"></div>
                            <div className="standard">
                                <span className="replynumbers">{replyCount} 个回复</span>
                            </div>
                        </div>
                        {
                            tiezi.map(((item, index) => {

                                return <div key={index} className="postreply">
                                    <div className="reply">
                                        <div className="user">
                                            <div className="zuo">
                                                <div>
                                                    <img src={item.avatar} />
                                                </div>
                                            </div>
                                            <div className="you">
                                                <div className="up">
                                                    <span className="username">{item.nickname}</span>
                                                    <span className="lv">LV0</span>
                                                    <span className={item.nickname == nickname ? "status" : "box2"} >(楼主)</span>
                                                </div>
                                                <div className="down">
                                                    <span className="date">{item.post.createdAt}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="replyContent">{item.post.content}</div>
                                        <div className="likeAndReply">
                                            <span onClick={(e) => {


                                                like(item.post.id)



                                            }}><img className={item.like == false ? "me" : "box2"} src={zan} />
                                                <img className={item.like == true ? "me" : "box2"} src={zanle} />{item.post.likeCount}</span>
                                            <span><img className="me" src={lun} onClick={(e) => {



                                                window.open(`http://localhost:3000/#/detail/${item.post.id}`);


                                            }} />{item.post.replyCount}</span>
                                            <span onClick={(e) => {



                                                shan(item.post.id)


                                            }}><img className={item.nickname == nickname ? "box2" : "me"} src={lj} /></span>
                                        </div>
                                    </div>
                                </div>
                            }))
                        }

                        <div className='pagebtn' >共{total}条
                            <span className={page == 1 ? "dead" : "xiao"} onClick={(e) => {

                                setPage(page - 1)
                                if (page == 1) {
                                    setPage(1)
                                }

                            }}>&lt;</span>
                            {showpage()}
                            <span className={page == Math.ceil(total / limit) ? "dead" : "xiao"}
                                onClick={(e) => {

                                    setPage(page + 1)
                                    if (page == Math.ceil(total / limit)) {
                                        setPage(Math.ceil(total / limit))
                                    }
                                }}>&gt;</span>
                            <select name="" id="" onChange={(e) => {
                                setLimit(e.target.value)
                                console.log(e.target.value)

                            }}>
                                <option value="5">5条/页</option>
                                <option value="10">10条/页</option>
                                <option value="15">15条/页</option>

                            </select>跳至
                            <input type="text" onKeyDown={(e) => {
                                switch (e.keyCode) {
                                    case 13://回车事件
                                        setPage(e.target.value)



                                }

                            }} />页

                        </div>





                    </div>
                    <div className="right">
                        <div className="kuai3">
                            <div className="topic"> 相关帖子</div>
                        </div>
                        <div className="kuai3">
                            <div className="adv">
                                <div className="topic">广告招募哦~</div>
                                <div className="daimaku">
                                    <span>代码酷</span>
                                </div>
                            </div>
                        </div>
                        <div className="kuai3">
                            <div className="kuai4">
                                <div className="topic">点击图片或者QQ扫码加社区官方交流群~</div>
                                <div className="qrcode">
                                    <div>
                                        <img src={ma} alt="" />
                                    </div>
                                    <div>
                                        <span>扫码添加作者微信</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kuai5">
                            <div className="adv">
                                <div className="topic">友情链接</div>
                                <div className="daimaku2">
                                    <span className="yi">代码酷</span>
                                    <span className="yi">官方Q群</span>
                                    <span className="yi">申请友链</span>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>




    )
}

export default withRouter(Detail)