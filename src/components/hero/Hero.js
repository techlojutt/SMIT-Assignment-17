import Button from "../button/Button";

export default function () {
  return (
    <div className="hero">

    <div className="container">

      <div className="left">

        <h1 className="h1">
          Hi, I'm <b style={{color:'#667FEA'}}>Julia&nbsp;Walker</b>.
          <br />Web Developer
        </h1>

        <p className="h3" style={{color:'#728197'}}>
          Specialized in <abbr title="Accessibility">a11y</abbr>
          and Core Web Vitals
        </p>

        {/* {blogsData.map((item, index) => {
          return <p key={index} className="h3"> {item.title} </p>
        })} */}

        <div className="btn-group">
          <Button className = "btn button btn-primary   "  title="About Me" style = {{backgroundColor:'hsl(229, 76%, 66%)'}}/>
          <Button className = "btn button btn-primary   " title= "Contact Me" style = {{backgroundColor:'hsl(229, 76%, 66%)'}}/>
        </div>

      </div>

      <div className="right">

        <div className="pattern-bg"></div>
        <div className="img-box">
          <img src={require("../../assets/hero.png")} alt="Julia Walker" className="hero-img" />
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>

      </div>

    </div>

  </div>
  )
}
