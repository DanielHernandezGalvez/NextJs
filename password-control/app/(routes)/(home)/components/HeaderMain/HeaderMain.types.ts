type TypeElement = "" | "password" | "folder" 

export type DataHeaderMainItemsProps = {
    icon: React.ComponentType<{className? : string}>
    typeElement: TypeElement,
    text: string;
}

