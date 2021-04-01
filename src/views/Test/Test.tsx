import './index.scss'
import React, {useState} from "react";

const Test: React.FC<any> = (props) => {
  const [ pageNum, setPageNum ] = useState(1)
  const scrollHandle = (e: React.WheelEvent) => {
    e.deltaY > 0 && scrollDown()
    e.deltaY < 0 && scrollUp()
  }
  const scrollUp = () => {
    pageNum > 1 && setPageNum(pageNum - 1)
  }
  const scrollDown = () => {
    pageNum < 2 && setPageNum(pageNum + 1)
  }
  return (
    <>
      <div
        className={["container", `page-${pageNum}`].join(' ')}
        onWheel={(e) => scrollHandle(e)}
      >
        <div className="first" />
        <div className="second" />
      </div>
    </>
  )
}

export default Test
