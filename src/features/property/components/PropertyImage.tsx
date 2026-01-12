type PropertyImageProps = {
  image: string;
  address: string;
  children: React.ReactNode;
};

export default function PropertyImage({
  image,
  address,
  children,
}: PropertyImageProps) {
  return (
    <div className="relative">
      <img
        src={image}
        alt={address}
        className="w-full aspect-video object-cover object-center"
      />

      {children}
    </div>
  );
}
