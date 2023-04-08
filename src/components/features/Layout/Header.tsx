import { ReactComponent as KickLogo } from 'src/assets/kick_logo.svg';

const Header = () => {
  return (
    <div>
      <KickLogo />
      <h1 style={{ display: 'none' }}>Kick</h1>
    </div>
  );
};

export default Header;
