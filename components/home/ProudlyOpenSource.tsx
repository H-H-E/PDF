import Image from 'next/image';

const ProudlyOpenSource = () => {
  return (
    <div className="container pt-[55px] mx-auto pb-[53px] sm:pb-[174px] px-8 sm:px-0">
      <h2 className="text-center text-3xl sm:text-[60px] font-normal leading-[72px] tracking-[-0.6px] sm:tracking-[-1.2px] bg-clip-text text_bg pb-3 sm:pb-[30px]">
        Proudly Open-Source
      </h2>
      <p className="text-primary text-center text-[17px] sm:text-3xl font-light sm:leading-[34.5px] sm:tracking-[-0.6px] leading-[22px] tracking-[-0.34px] max-w-[728px] mx-auto pb-[18px] sm:pb-11">
        Our project, PDFPete, stands on the shoulders of giants, being a fork of the innovative work done by Nutlope. We extend our gratitude and encourage you to explore and star Nutlope's repository to support and acknowledge their foundational contributions.
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <a
          className="shadow-[0px_0.5px_4px_0px_rgba(0,0,0,0.15)_inset] drop_shadow rounded-full flex items-center gap-[3px] sm:gap-2 py-0.5 sm:py-3 px-6"
          href="https://github.com/Nutlope/pdftochat"
          target="_blank" rel="noopener noreferrer"
        >
          <Image
            src="/github.png"
            alt="GitHub Nutlope"
            width={37}
            height={37}
            className="w-[19px] h-[19px] sm:w-[37px] sm:h-[37px]"
          />
          <span className="text-primary text-center text-[17px] sm:text-3xl font-light leading-[37px] tracking-[-0.3px]">
            Visit Nutlope
          </span>
        </a>
        <a
          className="shadow-[0px_0.5px_4px_0px_rgba(0,0,0,0.15)_inset] drop_shadow rounded-full flex items-center gap-[3px] sm:gap-2 py-0.5 sm:py-3 px-6"
          href="https://github.com/YourGitHub/PDFPete"
          target="_blank" rel="noopener noreferrer"
        >
          <Image
            src="/github.png"
            alt="GitHub PDFPete"
            width={37}
            height={37}
            className="w-[19px] h-[19px] sm:w-[37px] sm:h-[37px]"
          />
          <span className="text-primary text-center text-[17px] sm:text-3xl font-light leading-[37px] tracking-[-0.3px]">
            Explore PDFPete
          </span>
        </a>
      </div>
      <p className="text-primary text-center text-[17px] sm:text-3xl font-light sm:leading-[34.5px] sm:tracking-[-0.6px] leading-[22px] tracking-[-0.34px] max-w-[728px] mx-auto">
        Dive into our repository to see how PDFPete evolves and contributes back to the open-source community. Your insights, issues, and pull requests are welcome!
      </p>
    </div>
  );
};

export default ProudlyOpenSource;

