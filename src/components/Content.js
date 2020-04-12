import React from "react"

export default function Content(props) {
  return (
    <>
      <SideBar />
      <div className={"content"}>{props.children}</div>
    </>
  )
}
