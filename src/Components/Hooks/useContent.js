import { useState } from "react";

export const useContent = () => {
    const [openItem, setOpenItem] = useState(null);
    const [openFilter, setOpenFilter] = useState(false);

    return { openItem, setOpenItem, openFilter, setOpenFilter };
}