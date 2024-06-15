import style from "./Comentario.module.css";

function Comentario() {
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className={style.comments}>
      <div className={style.write}>
        <img
          src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
          alt=""
        />
        <input type="text" placeholder="write a comment" />
        <button>Enviar</button>
      </div>
      {comments.map((comment) => (
        <div className={style.comment}>
          <img src={comment.profilePicture} alt="" />
          <div className={style.info}>
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className={style.date}>1 hour ago</span>
        </div>
      ))}
    </div>
  );
}

export default Comentario;
