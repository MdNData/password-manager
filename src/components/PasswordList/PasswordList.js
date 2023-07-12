//Individual password container
const PasswordContainer = () => {
  return (
    <article>
      <div className="identifier">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
        <p>
          Usage :
          <input type="text" value="testontestbytestintest.com" />
        </p>
      </div>
      <div className="data-container">
        <p>
          User :
          <input type="text" value="testontestbytestintest@gmail.com" />
        </p>
        <p>
          Password :
          <input type="text" value="TestingonTest01.Tests" />
        </p>
      </div>
    </article>
  );
};

//Complete list of passwords to be displayed
export const PasswordList = () => {
  return (
    <section className="password-container">
      <PasswordContainer />
    </section>
  );
};

//passwords row data container
const passwordList = [{}];
