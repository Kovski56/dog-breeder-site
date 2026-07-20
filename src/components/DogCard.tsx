import Image from "next/image";

type Detail = {
  label: string;
  value: string;
};

type DogCardProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  details: Detail[];
  note?: string;
  /** Tailwind object-position class, e.g. "object-top". Defaults to centered. */
  imagePosition?: string;
  /** "cover" (default) crops to fill the square; "contain" shows the whole image. */
  imageFit?: "cover" | "contain";
};

export default function DogCard({
  name,
  imageSrc,
  imageAlt,
  details,
  note,
  imagePosition = "object-center",
  imageFit = "cover",
}: DogCardProps) {
  return (
    <div className="rounded-[1.4rem] bg-brand p-1.5 shadow-md">
      <div className="overflow-hidden rounded-2xl bg-light-green ring-1 ring-black/5">
      <div
        className={`relative aspect-square w-full ${
          imageFit === "contain" ? "bg-light-green" : ""
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`${imageFit === "contain" ? "object-contain" : "object-cover"} ${imagePosition}`}
          sizes="(max-width: 640px) 100vw, 384px"
        />
      </div>
      <div className="p-5">
        <h2 className="mb-3 text-2xl font-bold text-brand">{name}</h2>
        <ul className="space-y-1">
          {details.map((detail) => (
            <li key={detail.label} className="text-sm text-foreground">
              <span className="font-bold">{detail.label}:</span>{" "}
              <span className="font-normal">{detail.value}</span>
            </li>
          ))}
        </ul>
        {note && (
          <p className="mt-4 text-xs italic text-foreground/60">{note}</p>
        )}
      </div>
      </div>
    </div>
  );
}
