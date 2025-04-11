const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-6 p-2">
      <div className="border-t border-primary-foreground w-full py-18 max-w-[1440px] p-8 space-y-6">
        <p className="">
          Ovalpay is a product of Web3 Global conference LLC. A comprehensive
          blockchain ecosystem company, offering a diverse range of products and
          services tailored to your needs.
        </p>
        <div className="space-y-2">
          <p>Phone number:</p>
          <p>Official website:</p>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="">
            <p>© 2025 Web3 Global Conference LLC. All rights reserved.</p>
          </div>
          <div className="flex gap-2">
            <img src="/socials/x.svg" alt="" />
            <img src="/socials/linkedin.svg" alt="" />
            <img src="/socials/telegram.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
