//passwords row data container
const passwordsRowData = [
  {
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    web: "www.dra.com",
    user: "lallo",
    pass: "ssbrizzo",
  },
  {
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    web: "www.garo.com",
    user: "gionny",
    pass: "smilli",
  },
  {
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    web: "www.fffs.com",
    user: "spizzo",
    pass: "lizzo",
  },
  {
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    web: "www.drfsdfwa.com",
    user: "lawefewfwllo",
    pass: "ssbrwefwffeizzo",
  },
];

//Container for the passwords
const PasswordList = () => {
  return (
    <section>
      {passwordsRowData.map((element, i) => {
        return (
          <Password data={element}>
            <p>Anno 2023</p>
          </Password>
        );
      })}
    </section>
  );
};

//Password element
const Password = ({ data, children }) => {
  const { img, web, user, pass } = data;

  return (
    <article>
      <Image src={img} />
      <Website link={web} />
      <User user={user} />
      <PasswordValue pass={pass} />
      {children}
    </article>
  );
};

//website image
const Image = (props) => {
  return <img src={props.src} alt="GitHub" />;
};

//website link
const Website = (props) => <h3>WebSite : {props.link}</h3>;

//user name
const User = (props) => <p>User : {props.user}</p>;

//password
const PasswordValue = (props) => <p>Password : {props.pass} </p>;

//main element to return
export const PasswordLists = () => {
  return <PasswordList />;
};
