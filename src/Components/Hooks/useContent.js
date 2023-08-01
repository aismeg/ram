import { useState } from "react";

export const useContent = () => {
    const [openItem, setOpenItem] = useState(null);

    return { openItem, setOpenItem };
}