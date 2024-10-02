import { createContext, useState } from "react";
import Person1 from "../assets/images/person-img1.png"
import Person2 from "../assets/images/person-img2.png"
import Person3 from "../assets/images/person-img3.png"
import Kebab from "../assets/images/kebab-img.png"
export const Context = createContext()

export const AuthContext = ({children}) => {
    const [ token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)
    const [register, setRegister] = useState(JSON.parse(localStorage.getItem("register")) || null)
    localStorage.setItem("token", JSON.stringify(token))

    const [path, setPath] = useState(JSON.parse(localStorage.getItem("path")) ||"/")


    const [userPosts, setUserPosts] = useState([
        {
        id:1,
        avatarIcon:Person1,
        name:"Designsta",
        nick:"@inner · 25m",
        postDeck:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
        commentCount:"10",
        replyCount:"1",
        likeCount:"8",
        postImg:null,
        isCommented: false,
        isReplied: false,
        isLiked: false
        },
        {
        id:2,
        avatarIcon:Person2,
        name:"cloutexhibition",
        nick:"@RajLahoti · 22m",
        postDeck:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
        commentCount:false,
        replyCount:"5",
        likeCount:"9",
        postImg:null,
        isCommented: false,
        isReplied: false,
        isLiked: false
        },
        {
        id:3,
        avatarIcon:Person3,
        name:"CreativePhoto",
        nick:"@cloutexhibition · 1h",
        postDeck:"Обетда..... Кечиринглар",
        commentCount:"10",
        replyCount:"1",
        likeCount:"8",
        postImg:Kebab,
        isCommented: false,
        isReplied: false,
        isLiked: false
        },
    ])

    const [isOpenModal, setIsOpenModal] = useState(false);


    return (
        <Context.Provider value={{token, setToken, register, setRegister, isOpenModal, setIsOpenModal, path, setPath, userPosts, setUserPosts}}>{children}</Context.Provider>
    )
}