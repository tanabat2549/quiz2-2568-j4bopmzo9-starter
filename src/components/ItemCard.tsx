import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
//import { stringify } from "uuid";

type FoodProps = {
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
  onDelete: () => void;
};

export default function ItemCard(props: FoodProps) {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  
  
  

  return (
    <Card>
      <Group>
        {props.name}
        {props.price}
        <Text>Baht X</Text>
        {props.quantity}
        <Text>=</Text>
        {props.price}*{props.quantity}
        <Text>Baht</Text>
        <Badge color="green">{props.category}</Badge>
        <ActionIcon variant="light" color="red" title="Delete task">
          {" "}
          <IconTrash size={18} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
