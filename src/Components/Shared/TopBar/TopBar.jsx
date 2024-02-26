import styles from "./TopBar.module.css";
const TopBar = () => {
  const getCurrentFormattedDate = () => {
    const currentDate = new Date();

    // Options for formatting the date
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };

    // Format the current date using Intl.DateTimeFormat
    return new Intl.DateTimeFormat("en-US", options).format(currentDate);
  };

  // Get and display the current formatted date
  const formattedDate = getCurrentFormattedDate();

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.branding}>
          <img src="/logo.svg" alt="Logo" />
          <h1>SPAS</h1>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <button className={styles.searchButton}>
            <img src="/Icons/search.svg" alt="SearchButton" />
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <p>{formattedDate}</p>
        <div className={styles.navLinks}>
          <img src="/Icons/darkmode.svg" alt="Toggle" />
          <img src="/Icons/upload.svg" alt="upload" />
          <img src="/Icons/account.svg" alt="account" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
