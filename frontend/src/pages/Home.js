import '../assets/css/home.css'
import Navigation from '../components/Navigation';
import ImageThumbnail from '../assets/img/HaGiang.jpg';
import url from '../assets/img/suggest.jpg'
import Footer from '../components/Footer';
function Home() {
    return (
        <div>
       <Navigation />
       <div className="thumbnail">
           <div>
               <img src={ImageThumbnail} alt="" ></img>
           </div>
       <div className="thumbnailTitle">
           <p className="thumbnailPara">TRẢI NGHIỆM TOUR DU LỊCH TUYỆT VỚI DÀNH CHO BẠN</p>
           <a href="/products">
           <button className="btn primaryBackground thumbnailBtn">
           Khám phá ngay
           </button>
           </a>
       </div>
        </div>
        <div className="suggestCategory">
        <h2 className="suggestCategoryTitle">Discovery</h2>
        <div className="suggestWapperItem dFlex">
            <div className="suggestItem">
                <div className="suggestImageItem">
                    <div>
                    <img src={url} alt="" />

                    </div>
                </div>
                <h3 className="suggestTitleItem">Made for you</h3>
            </div>
            <div className="suggestItem">
                <div className="suggestImageItem">
                    <div>
                    <img src={url} alt="" />
                    </div>
                </div>
                <h3 className="suggestTitleItem">Trending </h3>
            </div>
            <div className="suggestItem">
                <div className="suggestImageItem">
                    <div>
                    <img src={url} alt="" />

                    </div>
                </div>
                <h3 className="suggestTitleItem">Popular</h3>
            </div>
            <div className="suggestItem">
                <div className="suggestImageItem">
                    <div>
                    <img src={url} alt="" />

                    </div>
                </div>
                <h3 className="suggestTitleItem">Wild</h3>
            </div>
        </div>

    </div>
    <div className="blog">
        <h1 className="blogTitle"> Blog</h1>
        <div className="blogWapper">
            <div className="blogItem">
                <h2 className="blogItemTitle">Chill with me</h2>
                <p className="blogItemDate">11/4/2022</p>
            </div>
            <div className="blogItem">
                <h2 className="blogItemTitle">Chill with me</h2>
                <p className="blogItemDate">11/4/2022</p>
            </div>
            <div className="blogItem">
                <h2 className="blogItemTitle">Chill with me</h2>
                <p className="blogItemDate">11/4/2022</p>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
    );
  }
  
export default Home;