import Image from "next/image";

interface CategoryCardProps {
  imageSrc: string;
  alt: string;
  text: string;
}

const CategoryCardLists: React.FC<CategoryCardProps> = ({
  imageSrc,
  alt,
  text,
}) => (
  <div className="hover:text-primary w-full h-[200px] md:h-[262px] flex flex-col justify-center items-center gap-4 border rounded-md hover:border-2 hover:border-primary hover:shadow-sm">
    <Image
      src={imageSrc}
      alt={alt}
      width={50}
      height={50}
      className="md:w-[176px] md:h-[160px]"
    />
    <p className="text-sm md:text-lg mt-4">{text}</p>
  </div>
);

export default CategoryCardLists;
