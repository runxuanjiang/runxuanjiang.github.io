import React, {useState} from 'react';
import {
    Link,
  } from "react-router-dom";
import './quest.css';
let s1 = "/mffZVqRoW5hcpzYTOYE21EDSoLqr03eyyQ3bjKCloTQxF0Z34ewQfgi3ZDhu5pmSxFu3nllYLr9KiloNPA7gJUnL1f7Lfq7Vvi1mosh1jwpP5k3Gyf8U19JE4n8Z2kpISZULOG49hPNv37GdHswaKCQUAZHhzTwY1Pf7ou9ivOT05ZGrHlotN59MfWgCiMiTuyzFm75s";
let s2 = "/E54SDsly5BpiA0qS76a0NgBPGwUe4HrxLGsd3EYOQ8SFdnt4oFQBSrznj5w2MmuC9XEHG2TrzEoRzNrtLAedVmhYWDYuyFntEYWLr9zL4w36HoExHFIZPx06xQZv1wAULg0VYPjCp2UEiDuXxEqxi0d7C6p0VuDqpmacIyYI19tJsLdP5NyyjeeM7NfgPc5aEj5YLd0vEDsZbcDYu8B6O2dOP3nPV13iTIGlCeZFfLonZDVh";

function Quest() {
    const [display, setdisplay] = useState(false);


    return (
        <div className="quest">
            <div className="questText" onClick={() => setdisplay(!display)}>?</div>
            {display ? <Questform/> : null}
        </div>
    )
}

function Questform() {
    const [a1, set1] = useState("");
    const [a2, set2] = useState("");
    const [a3, set3] = useState("");
    const [a4, set4] = useState("");
    const [a5, set5] = useState("");
    const [a6, set6] = useState("");

    return (
        <div>
            Enter Password:
            <div>
                1. &nbsp;
                <input type="text" value={a1} onChange={(e) => set1(e.target.value)}/>
            </div>
            <div>
                2.&nbsp;
                <input type="text" value={a2} onChange={(e) => set2(e.target.value)}/>
            </div>
            <div>
                3.&nbsp;
                <input type="text" value={a3} onChange={(e) => set3(e.target.value)}/>
            </div>
            <div>
                4.&nbsp;
                <input type="text" value={a4} onChange={(e) => set4(e.target.value)}/>
            </div>
            <div>
                5.&nbsp;
                <input type="text" value={a5} onChange={(e) => set5(e.target.value)}/>
            </div>
            <div>
                6.&nbsp;
                <input type="text" value={a6} onChange={(e) => set6(e.target.value)}/>
            </div>

            {
                (a1 == 0.5 && a2 == 0.5 && a3 == 0.5 && a4 == 0.5 && a5 == 0.5 && a6 == 0.5) ? 
                <button classname="questSubmit">
                    <Link to={s1}>Go</Link>
                </button>

                : null
            }
        </div>
    )
}

export {s1, s2, Quest};