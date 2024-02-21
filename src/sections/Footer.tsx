import Link from "next/link";


function Footer() {

  return (
    <footer>
      <Link
        href="https://github.com/JayArindam"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Hopefully you liked this page! 😊</span>
      </Link>
    </footer>
  );
}

export default Footer;
