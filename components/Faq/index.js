import React, { useEffect, useState } from "react";
import FaqComponent from "./FaqComponent";
import styles from "./faq.module.css"

const Faq = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    console.log("ran or running")
    setData(props.data)
  }, [props.data])

    const mappedData = data.map((props, i) => <FaqComponent key={i} {...props} />)

  return (
    <> 
      <h2>FAQS</h2>
      {mappedData}
    </> 
  )
}

export default Faq;
