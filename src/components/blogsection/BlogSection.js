import Card from "../card/Card";
import {blogData} from "../../constant/blogs"
import Button from "../button/Button"

export default function BlogSection() {
  let hashtagStyles = {
    background: ' hsl(216, 15%, 52%)',
    color: 'hsl(214, 32%, 91%)'
  }
  return (
    
<main>
<div className="main">

  <div className="container">

    
    <div className="blog">

      <h2 className="h2">Latest Blog Post</h2>

      <div className="blog-card-group">
        {blogData.map((item,index) => {
        return  <Card key={index} data={item} />}
        )}
      </div>
      <Button className = "btn button btn-primary  " title= "Load More" style = {{backgroundColor:'hsl(229, 76%, 66%)',  marginInline: 'auto', margin: 'auto' /* fallback for margin-inline */,padding: '0.6875rem 1.1875rem'}}/>
       </div>

    



   
    <div className="aside">

      <div className="topics">

        <h2 className="h2">Topics</h2>

        <a href="#" className="topic-btn">
          <div className="icon-box">
            <ion-icon name="server-outline"></ion-icon>
          </div>

          <p>Database</p>
        </a>

        <a href="#" className="topic-btn">
          <div className="icon-box">
            <ion-icon name="accessibility-outline"></ion-icon>
          </div>

          <p>Accessibility</p>
        </a>

        <a href="#" className="topic-btn">
          <div className="icon-box">
            <ion-icon name="rocket-outline"></ion-icon>
          </div>

          <p>Web Performance</p>
        </a>

      </div>

      <div className="tags">

        <h2 className="h2">Tags</h2>

        <div className="wrapper">

          <button className="hashtag" style={hashtagStyles}>#mongodb</button>
          <button className="hashtag" style={hashtagStyles}>#nodejs</button>
          <button className="hashtag" style={hashtagStyles}>#a11y</button>
          <button className="hashtag" style={hashtagStyles}>#mobility</button>
          <button className="hashtag" style={hashtagStyles}>#inclusion</button>
          <button className="hashtag" style={hashtagStyles}>#webperf</button>
          <button className="hashtag" style={hashtagStyles}>#optimize</button>
          <button className="hashtag" style={hashtagStyles}>#performance</button>

        </div>

      </div>

      <div className="contact">

        <h2 className="h2">Let's Talk</h2>

        <div className="wrapper">

          <p>
            Do you want to learn more about how I can help your company overcome problems? Let us have a
            conversation.
          </p>

          <ul className="social-link">

            <li>
              <a href="#" className="icon-box discord">
                <ion-icon name="logo-discord"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="icon-box twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="icon-box facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </div>

      <div className="newsletter">

        <h2 className="h2">Newsletter</h2>

        <div className="wrapper">

          <p>
            Subscribe to our newsletter to be among the first to keep up with the latest updates.
          </p>

          <form action="#">
            <input type="email" name="email" placeholder="Email Address" required style={{border:'2px solid #EAEAEA'}}/>

            <Button className = "btn button btn-primary   " title= "Subscribe" style = {{backgroundColor:'hsl(229, 76%, 66%)'}}/>
          </form>

        </div>

      </div>

    </div>

  </div>

</div>

</main>
  )
}
