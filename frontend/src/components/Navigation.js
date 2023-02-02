import '../assets/css/navigation.css'
function Navigation() {
    return (
        <div className="navigation">
        <div className="dFlex">
            <div className="navigationLeft">
                <a href="/">Travel Life</a>
            </div>
            <div className="navigationRight">
                <ul className="categories spreadCross">
                    <li className="categoriesItem">
                        <a href="/discovery">Khám Phá</a>
                        </li>
                    <li className="categoriesItem">
                        <a href="/blogs">Blog</a>
                        </li>
                    <li className="categoriesItem">
                        <a href="/contacts">Liên hệ</a>
                        </li>

                </ul>
                <div  className="signLogIn spreadCross ">
                    <button className="signIn btn">Sign In</button>
                    <button className="logIn btn primaryBackground">Log In</button>
                </div>
            </div> 
        </div>
        </div>
    );
  }
  
export default Navigation;