import React from "react";

function Card(props) {
    let Views = props.views;

    if (Views >= 10000000) {
        Views = (Views / 10000000).toFixed(1).replace(/\.0$/, "") + "Cr";
    } else if (Views >= 1000000) {
        Views = (Views / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (Views >= 1000) {
        Views = (Views / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return (
        <div className="card text-white bg-dark border-0 px-3 py-4">
            <div
                className="d-flex flex-row w-100 gap-3"
                style={{ height: "110px", width: "60vw" }}
            >
                {/* Image Section */}
                <div className="position-relative" style={{ width: "200px", height:"100%"}}>
                    <span
                        className="position-absolute rounded px-2 py-1 text-white"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            bottom: "7px",
                            right: "10px",
                            fontSize: "13px",
                        }}
                    >
                        12:58
                    </span>
                    <img
                        src="src/assets/card-image.avif"
                        className="img-fluid h-100 w-100 object-fit-cover rounded px-auto py-auto"
                        alt="Card"
                    />
                </div>

                {/* Text Section */}
                <div
                    className="py-2 d-flex flex-column "
                    style={{ flex: 1 }}
                >
                    <h6 className="fw-semibold">{props.title}</h6>
                    <span style={{ color: "#aaa", fontSize: "14px" }}>
                        CodeWithHarry • {Views} views • {props.time}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;
