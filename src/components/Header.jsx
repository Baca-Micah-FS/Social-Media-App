//Parent component: App/jsx
// CHild component: Header.jsx

const Header = () => {
  return (
    <header style={headerStyle.header}>
      <h1>classChat</h1>
    </header>
  );
};

export default Header;

const headerStyle = {
  header: {
    border: "1px solid #000",
  },
};
