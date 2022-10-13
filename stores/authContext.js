import {createContext, useState} from "react";

// 현재 사용자의 인증상태를 추적하는 파일

// 인증 상태를 기본값으로 설정하는 AuthContext 구성요용
const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    isAuth: false
});

// children: _app.js에서 인증 모듈에 적용된 페이지 및 컴포넌트들을 뜻함
export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        // user 정보 전달
        <AuthContext.Provider value={user}>
            { children }
        </AuthContext.Provider>
    )
};

export default AuthContext