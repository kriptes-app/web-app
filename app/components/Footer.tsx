export default function Footer() {
  return (
    <footer className="bg-[#101111] text-white">
      <div className="footer-container flex gap-[7rem] flex-row justify-between py-[3rem] lg:max-w-[960px] m-auto">
        <div className="row">
          <img src="/assets/logo.svg" alt="Bramo Logo" width={170} />
        </div>
        <div className="row ft-rw-wrp">
          <h3 className="text-lg text-slate-300">WEBSITE MAP</h3>
          <ol className="list-none text-left text-lg">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="mailto:support@zenon.com">Get in Touch</a>
            </li>
          </ol>
        </div>
        <div className="row ft-rw-wrp lg:mb-[1.5rem]">
          <h3 className="text-lg text-slate-300">PROJECT</h3>
          <ol className="list-none text-left text-lg">
            <li>
              <a href="https://discord.gg/">Organization</a>
            </li>
            <li>
              <a href="#features">Make a donation</a>
            </li>
            <li>
              <a href="#features">Organization</a>
            </li>
          </ol>
        </div>
        <div className="row ft-rw-wrp lg:mb-[3.2rem]">
          <h3 className="text-lg text-slate-300">SUPPORT</h3>
          <ol className="list-none text-left text-lg">
            <li>
              <a href="https://discord.gg/">Join us</a>
            </li>
            <li>
              <a href="#features">Staff Members</a>
            </li>
          </ol>
        </div>
      </div>
      <div className="socials flex m-auto justify-end max-w-[1100px] mb-3">
        <img src="/icons/socials/instagram.png" alt="Instagram" width={35} />
        <img src="/icons/socials/twitter.png" alt="Twitter" width={35} />
        <img src="/icons/socials/tiktok.png" alt="Tik Tok" width={35} />
        <img src="/icons/socials/reddit.png" alt="Reddit" width={35} />
        <img src="/icons/socials/discord.png" alt="Discord" width={35} />
      </div>
      <div className="border-b border-slate-600 m-auto w-2/3"></div>
      <div className="legal-stuff lg:max-w-[1100px] mt-2 py-3 text-slate-300 m-auto flex justify-between gap-5">
        <div className="links flex gap-5">
          <a href="/legal/privacy-policy">Privacy Policy</a>
          <a href="/legal/tos">Terms of Service</a>
          <a href="/legal/cookies-policy">Cookies Policy</a>
        </div>
        <span className="">
          Copyright &#169; {new Date().getFullYear()} Kriptes
        </span>
      </div>
    </footer>
  );
}
