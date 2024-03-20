import { Label, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
export type AddProduct = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
type ErrorType = {
  title?: string;
  price?: string;
};
type CreateProductFormProps = {
  getDataForm: (product: AddProduct) => void;
};
const FormAddNew: React.FC<CreateProductFormProps> = ({ getDataForm }) => {
  const [product, setProduct] = useState<AddProduct>({
    title: "",
    price: 0,
    description: "",
    image: "https://i.pravatar.cc",
    category: "electronic",
  });
  useEffect(() => {
    getDataForm(product);
  }, [product, getDataForm]);
  const [error, setError] = useState<ErrorType>({});
  useEffect(() => {
    const newError: ErrorType = {};
    if (product.title.length < 3 && product.title.length) {
      newError.title = "Title must be at least 3 Character!!";
    }
    if (product.price && Number(product.price) <= 0) {
      newError.price = "Price can not be 0 should be greater than zero";
    }
    setError(newError);
  }, [product.title, product.price]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [id]: value,
    }));
  };
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Product's Title" />
        </div>
        <TextInput
          id="title"
          type="text"
          placeholder="Dada-sumi"
          value={product.title}
          onChange={handleChange}
          required
        />
        {error.title && <p className="text-red-500 text-xs">{error.title}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Product's Price" />
        </div>
        <TextInput
          id="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          required
        />
        {error.price && <p className="text-red-500 text-xs">{error.price}</p>}
        <div className="mb-2 block">
          <Label htmlFor="description" value="Product's Description" />
        </div>
        <Textarea
          id="description"
          placeholder="ADD discription product "
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
};
export default FormAddNew;
