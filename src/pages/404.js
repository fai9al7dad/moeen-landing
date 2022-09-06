import * as React from "react"

import Seo from "../components/seo"

const NotFoundPage = () => (
  <div className="h-screen flex flex-col items-center justify-center">
    <h1>عذرا.. هذه الصفحة غير موجودة</h1>
    <a href="/" className="mt-10">
      عودة إلى الصفحة الرئيسية
    </a>
  </div>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
