import style from "./RightBar.module.css";

function RightBar() {
  return (
    <div className={style.rightBar}>
      <div className={style.container}>
        <div className={style.item}>
          <span>Pedidos de amizades</span>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg"
                alt=""
              />
              <span>Walter Santos</span>
            </div>
            <div className={style.buttons}>
              <button>Confirmar</button>
              <button>Eliminar</button>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://www.goldmansachs.com/our-commitments/sustainability/one-million-black-women/impact-grants/multimedia/masthead.jpg"
                alt=""
              />
              <span>Fernanda Chituta</span>
            </div>
            <div className={style.buttons}>
              <button>Confirmar</button>
              <button>Eliminar</button>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.userInfo}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/86/Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg"
                alt=""
              />
              <span>Makanaka Pearl</span>
            </div>
            <div className={style.buttons}>
              <button>Confirmar</button>
              <button>Eliminar</button>
            </div>
          </div>
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
