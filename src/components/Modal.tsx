import { useState } from "react";
import { Modal, TextInput, NumberInput, Button } from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({
  opened,
  onClose,
}: //onAdd,
AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  //const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name.trim() || !String(price).trim() || !String(quantity).trim())
      return;

    setName("");
    setPrice(0);
    setQuantity(0);
    onClose();
  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  // let val_number: number = Number("500.0");
  // console.log(val_number + 100); // 600.0

  return (
    <>
      <Modal opened={opened} onClose={close} title="AddFood">
        <TextInput
          label="Input Name"
          error={!name.trim() && "Name of item is required"}
          placeholder="Input Name"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />

        <NumberInput
          label="Input Price"
          error={!String(price).trim() && "Price per dish is required"}
          placeholder="0"
          value={price}
          //onChange={(event) => setPrice(event.currentTarget.value)}
        />

        <NumberInput
          label="Input Quantity"
          error={!String(price).trim() && "Number of dishes is required"}
          placeholder="0"
        />
      </Modal>

      <Button variant="default" onClick={handleSubmit}>
        Add Food Item
      </Button>
    </>
  );
}
