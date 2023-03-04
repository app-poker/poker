import React from 'react'
import Textbox from '../../atoms/textbox/Textbox'
import joinImg from "../../../image/join.jpg";

export default function Join() {
  return (
    <div
        style={{
          backgroundImage: `url(${joinImg})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        {/* <Textbox /> */}
    </div>
  )
}
