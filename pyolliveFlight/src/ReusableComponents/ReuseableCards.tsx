type OfferCardProps = {
  image: string;
  title: string;
  title2: string;
  subtitle: string;
  description?: string;
  logo: string;
  couponCode: string;
};

const OfferCard = ({
  image,
  title,
  title2,
  subtitle,
  description,
  logo,
  couponCode,
}: OfferCardProps) => {
  return (
    <div className="relative w-full max-w-[300px] h-[160px] rounded-xl overflow-hidden cursor-pointer">

      {/* BACKGROUND IMAGE */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 p-3 flex flex-col justify-between h-full">

        {/* TOP TEXT */}
        <div>
          <p className="text-white font-semibold text-sm">
            {title}
          </p>
          <p className="text-white font-semibold text-sm">
            {title2}
          </p>
          <p className="text-white text-xs mt-1">
            {subtitle}
          </p>
          {description && (
            <p className="text-white text-[10px] opacity-80">
              {description}
            </p>
          )}
        </div>

        {/* BOTTOM ROW */}
        <div className="flex items-center justify-between">
          <div className="bg-white px-2 py-1 rounded">
            <img src={logo} alt="logo" className="h-4" />
          </div>

          <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded">
            {couponCode}
          </span>
        </div>

      </div>
    </div>
  );
};

export default OfferCard;
