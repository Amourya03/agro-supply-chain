import React from 'react'
import "../docs.css"

const Docs = () => {
  return (
    <body className='bg-gradient-to-tr from-sky-100 via-cyan-100 to-emerald-50'>
      <div className="container" >
        <div className="sidebar m-4/5">
          {/* {items.map((item, index) => <SidebarItems key={index} item={item} />)} */}
          <div className="sidebar-items"><a href='#intro-1'>Introduction</a></div>
          <hr/>
          <div className="sidebar-items"><a href='#intro-2'>Crop Detection</a></div>
          <hr />
          <div className="sidebar-items"><a href='#intro-3'>Fertilizer Prediction</a></div>
          <hr />
          <div className="sidebar-items"><a href='#intro-4'>Model-3</a></div>
          <hr />
          <div className="sidebar-items"><a href='#intro-5'>Supply Chain</a></div>
          <hr />
          <div className="sidebar-items"><a href='#intro-6'>FAQ ?</a></div>
        </div>

        <div className="doc-section">
          <div id="intro-1">

            <h2>Introduction</h2>
            <p>Web development is the process of creating and building websites using programming languages,
              frameworks, and tools. It involves designing the user interface, implementing functionality, and
              ensuring the website is responsive, visually appealing, and user-friendly.</p>

          </div>
          <div id="intro-2">

            <h2>Crop Detection</h2>
            <p>App development involves creating software applications for mobile devices such as smartphones
              and tablets. It encompasses designing and coding the application, integrating features and
              functionalities, and optimizing it for a seamless user experience, resulting in powerful and
              engaging mobile applications</p>
          </div>
          <div id="intro-3">

            <h2>Fertilizer Prediction</h2>
            <p>Machine learning is a branch of artificial intelligence that focuses on developing algorithms and
              models that enable computer systems to learn from data and make predictions or decisions without
              being explicitly programmed. By analyzing patterns and extracting insights from vast amounts of
              data, machine learning enables computers to continuously improve and adapt their performance.
            </p>
          </div>
          <div id="intro-4">

            <h2>Model - 3</h2>
            <p>Web development is the process of creating and building websites using programming languages,
              frameworks, and tools. It involves designing the user interface, implementing functionality, and
              ensuring the website is responsive, visually appealing, and user-friendly.</p>

          </div>
          <div id="intro-5">

            <h2>Supply Chain</h2>
            <p>App development involves creating software applications for mobile devices such as smartphones
              and tablets. It encompasses designing and coding the application, integrating features and
              functionalities, and optimizing it for a seamless user experience, resulting in powerful and
              engaging mobile applications</p>
          </div>
          <div id="intro-6">

            <h2>FAQ ?</h2>
            <h3>Q. Type your questions here?</h3>
            <p><b>Ans. </b>Machine learning is a branch of artificial intelligence that focuses on developing
              algorithms and
              models that enable computer systems to learn from data and make predictions or decisions without
              being explicitly programmed. By analyzing patterns and extracting insights from vast amounts of
              data, machine learning enables computers to continuously improve and adapt their performance.
            </p>
          </div>
        </div>
      </div>

    </body>
  )
}

export default Docs