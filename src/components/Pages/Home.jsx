import { useEffect, useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

function FetchFunction() {
    let [data, setdata] = useState("");
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
        const override = {
            display: "block",
            margin: "0 auto",
            borderColor: "red",
        };

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        axios.get(url).then((res) => {
        setdata(res.data);
        setLoading(false);
        console.log(res.data);
        });
    }, []);
    return (
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col d-flex justify-content-center align-item-center flex-wrap">
                {loading && data.length === 0 && (
                    <ClipLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
            {!loading && data.length > 0 && (
                <table className="table table-light border border-5">
                <thead  className="table table-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">title</th>
                        <th scope="col">body</th>
                    </tr>
                    </thead>
                    {data.map((item) => {
                return (
                    <tbody>
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    </tbody>
                    );
                })}
            </table>
            )}
        </div>
        </div>
    </div>
    </>
);
}
export default FetchFunction
