function Footer() {
  const hours = new Date().getHours();
  const OpenHour = 9;
  const CloseHour = 22;
  const isOpen = hours >= OpenHour && hours <= CloseHour;

  return (
    <div className="footer">
      {isOpen ? (
        <p>
          We are open at {OpenHour} to {CloseHour}, you can order now
        </p>
      ) : (
        <p>
          sorry we are now closed ,We are open at {OpenHour} to {CloseHour}, you
          can order online
        </p>
      )}
    </div>
  );
}
export default Footer;
