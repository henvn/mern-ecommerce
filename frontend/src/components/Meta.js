import React from "react"
import { Helmet } from "react-helmet"
const Meta = ({ title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </div>
  )
}

Meta.defaultProps = {
  title: "Welcome to Proshop",
  description: "We sell the best products",
  keywords: "electronics, buy electronics, cheap",
}

export default Meta
