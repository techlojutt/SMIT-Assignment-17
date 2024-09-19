

export default function Card(props) {
  return (
    <div className="blog-card">

              <div className="blog-card-banner">
                <img src = {props.data.cardImage} alt="Fast web page loading on a $20 feature phone" width="250" className="blog-banner-img"/>
              </div>

              <div className="blog-content-wrapper">

                <button className="blog-topic text-tiny">{props.data.topic}</button>

                <h3><a href="" className="h3">{props.data.title}</a></h3>

                <p className="blog-text">
                  {props.data.description}
                </p>

                <div className="wrapper-flex">

                  <div className="profile-wrapper">
                    <img src={props.data.authorDetail.image} alt="Julia walker" width="50"/>
                  </div>

                  <div className="wrapper">
                    <a href="#" className="h4">{props.data.authorDetail.name}</a>

                    <p className="text-sm">
                      <time datetime="2021-12-10">{props.data.authorDetail.date}</time>
                      <span className="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT2M">{props.data.authorDetail.time}</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>
  )
}
