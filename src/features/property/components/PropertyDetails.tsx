type PropertyDetailsProps = {
  address: string;
  rent: number;
  date: string;
};

export default function PropertyDetails({
  address,
  rent,
  date,
}: PropertyDetailsProps) {
  return (
    <div className="space-y-2">
      <p className="text-center">{address}</p>

      <p className="text-primary text-center font-medium">
        &pound;{rent} / month
      </p>

      <p className="text-center">Available from: {date}</p>
    </div>
  );
}
