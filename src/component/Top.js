import {Header} from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{display: "flex", paddingTop: 10}}>
                <div style={{flex: "100px 0 0"}}>
                    <img
                        src="/images/dev_soon.png"
                        alt="logo"
                        style={{display: "block", width: 80}}
                    />
                </div>
                <Header as="h1">양지순</Header>
            </div>
            <Gnb/>
        </div>
    )
}