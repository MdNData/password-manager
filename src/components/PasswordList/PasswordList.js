//Individual password container
const PasswordContainer = ({ data }) => {
  const { siteSrc, siteName, username, pass } = data;
  return (
    <article>
      <div className="identifier">
        <img src={siteSrc} alt="" />
        <p>
          Usage :
          <input type="text" defaultValue={siteName} />
        </p>
      </div>
      <div className="data-container">
        <p>
          User :
          <input type="text" defaultValue={username} />
        </p>
        <p>
          Password :
          <input type="text" defaultValue={pass} />
        </p>
      </div>
    </article>
  );
};

//passwords row data container
const listData = [
  {
    siteSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    siteName: "testontestbytestintest.com",
    username: "testontestbytestintest@gmail.com",
    pass: "TestingonTest01.Tests",
  },
  {
    siteSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    siteName: "testontestbytestintest.com",
    username: "testontestbytestintest@gmail.com",
    pass: "TestingonTest01.Tests",
  },
  {
    siteSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    siteName: "testontestbytestintest.com",
    username: "testontestbytestintest@gmail.com",
    pass: "TestingonTest01.Tests",
  },
  {
    siteSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    siteName: "testontestbytestintest.com",
    username: "testontestbytestintest@gmail.com",
    pass: "TestingonTest01.Tests",
  },
  {
    siteSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    siteName: "testontestbytestintest.com",
    username: "testontestbytestintest@gmail.com",
    pass: "TestingonTest01.Tests",
  },
  {
    siteSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    siteName: "testontestbytestintest.com",
    username: "testontestbytestintest@gmail.com",
    pass: "TestingonTest01.Tests",
  },
  {
    siteSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    siteName: "testontestbytestintest.com",
    username: "testontestbytestintest@gmail.com",
    pass: "TestingonTest01.Tests",
  },
  {
    siteSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    siteName: "testontestbytestintest.com",
    username: "testontestbytestintest@gmail.com",
    pass: "TestingonTest01.Tests",
  },
];

//Complete list of passwords to be displayed
export const PasswordList = () => {
  return (
    <section className="password-container">
      {listData.map((item, key) => {
        return <PasswordContainer data={item} key={key} />;
      })}
    </section>
    
  );
};
