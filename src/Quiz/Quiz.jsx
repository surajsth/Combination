import Technology from "./field/Technology"
import "../App.css"
import { useState } from "react";
import Place from "./field/Place";
import Geographic from "./field/Geographic";
import Space from "./field/Space";
import Sports from "./field/Sports";
import Entertainment from "./field/Entertainment";
import { Link } from "react-router-dom";

function Quiz() {
    const [activeTab, setActiveTab] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
        tab5: false,
        tab6: false,
    });
    const handleTab1 = () => {
        setActiveTab({
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
            tab6: false,
        });
    };
    const handleTab2 = () => {
        setActiveTab({
            tab1: false,
            tab2: true,
            tab3: false,
            tab4: false,
            tab5: false,
            tab6: false,
        });
    };
    const handleTab3 = () => {
        setActiveTab({
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false,
            tab5: false,
            tab6: false,
        });
    };
    const handleTab4 = () => {
        setActiveTab({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: true,
            tab5: false,
            tab6: false,
        });
    };
    const handleTab5 = () => {
        setActiveTab({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: true,
            tab6: false,
        });
    };
    const handleTab6 = () => {
        setActiveTab({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
            tab6: true,
        });
    };

    return (
        <>
            <div className="quiz" >
                <div className="insidePopup--div">
                    <ul>

                        <li
                            className={activeTab.tab1 === true ? "active" : ""}
                            onClick={handleTab1}
                        >
                            <i className="mx-5"></i>Technology{" "}
                        </li>
                        <li
                            className={activeTab.tab2 === true ? "active" : ""}
                            onClick={handleTab2}
                        >
                            <i className="mx-5"></i>Place{" "}
                        </li>
                        <li
                            className={activeTab.tab3 === true ? "active" : ""}
                            onClick={handleTab3}
                        >
                            <i className="mx-5"></i>Geographic{" "}
                        </li>
                        <li
                            className={activeTab.tab4 === true ? "active" : ""}
                            onClick={handleTab4}
                        >
                            <i className="mx-5"></i>Space{" "}
                        </li>
                        <li
                            className={activeTab.tab5 === true ? "active" : ""}
                            onClick={handleTab5}
                        >
                            <i className="mx-5"></i>Sports{" "}
                        </li>
                        <li
                            className={activeTab.tab6 === true ? "active" : ""}
                            onClick={handleTab6}
                        >
                            <i className="mx-5"></i>Entertainment{" "}
                        </li>

                    </ul>
                </div>
                <div>
                    <button className='btn btn-primary position-absolute start-0 mt-4 mx-4 text-white' style={{
                        // mixBlendMode: "multiply"
                    }}>
                        <Link className='text-white text-decoration-none' to="/" >Home</Link>
                    </button>

                </div>
            </div>



            <div className="content-section main-content">
                {activeTab.tab1 && <Technology />}
                {activeTab.tab2 && <Place />}
                {activeTab.tab3 && <Geographic />}
                {activeTab.tab4 && <Space />}
                {activeTab.tab5 && <Sports />}
                {activeTab.tab6 && <Entertainment />}
            </div>


        </>
    )
}

export default Quiz