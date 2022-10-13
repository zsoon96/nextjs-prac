import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

// 현재 사용자의 인증상태를 추적하는 파일

// 인증 상태를 기본값으로 설정하는 AuthContext 구성요용
const AuthContext = createContext({
    user: null,
    login: () => {
    },
    logout: () => {
    },
    isAuth: false
});

// children: _app.js에서 인증 모듈에 적용된 페이지 및 컴포넌트들을 뜻함
export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();

    // const login = () => {
    //     axios.get('/api/isLogin').then((res) => {
    //         if (res.status === 200 && res.data.name) {
    //             // 로그인
    //             setIsAuth(true)
    //             setUser(res.data.name)
    //         } else {
    //             // 로그인 안됨
    //             console.log('로그인 실패')
    //         }
    //     })
    // }

    const login = () => {
        axios.get('/api/isLogin').then((res) => {
            if (res.status === 200 && res.data.name) {
                // 로그인
                setUser(res.data.name)
                setIsAuth(true)
            } else {
                // 로그인 안됨
                router.push('/login')
            }
        })
    }

    const context = {user, isAuth};

    useEffect(() => {
        login()
    }, [])

    return (
        // user 정보 전달
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext