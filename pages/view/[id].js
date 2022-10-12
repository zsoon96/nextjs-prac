import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import Item from '../../src/component/Item'
import {Loader} from "semantic-ui-react";

const Post = () => {
    const router = useRouter();
    const {id} = router.query;

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    useEffect(() => {
        axios.get(API_URL).then((res) => {
            setItem(res.data)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            {isLoading ? (
                <div style={{ padding: "300px 0" }}>
                    <Loader inline="centered" active />
                </div>
            ) : (
                <Item item={item} />
            )}
        </>
    )
}

export default Post;