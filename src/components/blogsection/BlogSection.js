import Card from "../card/Card";
import {blogData,topicItems,tags} from "../../constant/blogs"
import Button from "../button/Button"
import TopicItem from "../topicitem/TopicItem";

export default function BlogSection() {
  console.log(topicItems)
  
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

        <h2 className="h2" style={{color:'#728197'}}>Topics</h2>

      {
        topicItems.map((topicItem,index) => {
          return <TopicItem key={index} data={topicItem} />
        })
      }

      </div>

      <div className="tags">

        <h2 className="h2" style={{color:'#728197'}}>Tags</h2>

        <div className="wrapper">

          {tags.map((tagItem,index) =>{
             return(<button style={{color:'#728197',backgroundColor:'#E1E7EF'}} className="hashtag" key = {index}>{tagItem}</button>)
          })}


        </div>

      </div>

      <div className="contact">

        <h2 className="h2" style={{color:'#728197'}}>Let's Talk</h2>

        <div className="wrapper">

          <p style={{color:'#728197'}}>
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

        <h2 className="h2" style={{color:'#728197'}}>Newsletter</h2>

        <div className="wrapper">

          <p style={{color:'#728197'}}>
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
