import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FormAddNew, { AddProduct } from "./FormAddNew";
import SuccessComponent from "./ELSComponent/SuccessComponent";
import { ErrorCreate } from "./ELSComponent/ErrorComponent";

const ButtonCreateProduct = () => {
    const [openModal, setOpenModal] = useState(false);
    const [errorCreate, setErrorCreate] = useState(false);
    const [successCreate, setSuccessCreate] = useState(false);

    function getDataForm(product:AddProduct){
        console.log(product)
    }

    async function createProduct() {
        try {
            const postProduct = await fetch('https://fakestoreapi.com/products', {
                method: "POST",
                body: JSON.stringify({
                    getDataForm
                })
            });

            if (!postProduct.ok) {
                throw new Error('Failed to create product');
            }

            const res = await postProduct.json();
            console.log(res);
            setSuccessCreate(true);
        } catch (error) {
            console.log(error);
            setErrorCreate(true);
        } finally {
            setOpenModal(false);
        }
    }

    return (
        <>
            <div className="flex justify-center m-5 w-full">
                <Button color="green" onClick={() => setOpenModal(true)}>ADD NEW </Button>
            </div>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>ADD New Product</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <FormAddNew getDataForm={getDataForm} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={createProduct}>ADD</Button>
                    <Button color="red" onClick={() => setOpenModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            {successCreate ? (<SuccessComponent />) : (errorCreate ? <ErrorCreate /> : null)}
        </>
    );
};

export default ButtonCreateProduct;
