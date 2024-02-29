


const FooterItems = ({heading, arr}) => {
  return (
    <div>
      <p className="text-white mb-2">{heading}</p>
      <div className="flex gap-2 text-sm text-[#B6BDC4] flex-col justify-center">
        {arr.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default FooterItems