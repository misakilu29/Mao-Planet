import React from 'react'
import { withRouter } from 'react-router-dom'

function Member(props) {
  // const { auth } = props

  // if (!auth) return <Redirect to="/login" />

  //   if (!auth)
  //     return (
  //       <Redirect>
  //         你沒登入，請連到<Link to="/login">登入頁面</Link>
  //       </Redirect>
  //     )

  return (
    <>
      <h1>會員中心</h1>
    </>
  )
}

export default withRouter(Member)
