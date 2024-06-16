import Pedidos from "../amizades/Pedidos";
import style from "./RightBar.module.css";

function RightBar() {
  return (
    <div className={style.rightBar}>
      <div className={style.container}>
        <div className={style.item}>
          <span>Pedidos de amizades</span>
          <Pedidos />
        </div>

        <div className={style.item}>
          <span>Contactos</span>

          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://miro.medium.com/v2/resize:fit:1024/1*cfH7VlZfdpP4OnBI1Ze7sQ.png"
                alt=""
              />
              <div className={style.online} />
              <span>Bad Jerex</span>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://images.unsplash.com/photo-1525875975471-999f65706a10?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDY4NjkxNnx8ZW58MHx8fHx8"
                alt=""
              />
              <div className={style.online} />
              <span>Deolinda Marcelo</span>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://www.statnews.com/wp-content/uploads/2020/11/Starghill201027_0329-645x645.jpg"
                alt=""
              />
              <div className={style.online} />
              <span>Mamã Diaconisa</span>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://miro.medium.com/v2/resize:fit:1024/1*cfH7VlZfdpP4OnBI1Ze7sQ.png"
                alt=""
              />
              <div className={style.online} />
              <span>Bad Jerex</span>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://images.unsplash.com/photo-1525875975471-999f65706a10?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDY4NjkxNnx8ZW58MHx8fHx8"
                alt=""
              />
              <div className={style.online} />
              <span>Deolinda Marcelo</span>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://www.statnews.com/wp-content/uploads/2020/11/Starghill201027_0329-645x645.jpg"
                alt=""
              />
              <div className={style.online} />
              <span>Mamã Diaconisa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
