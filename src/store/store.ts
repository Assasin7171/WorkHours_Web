import {create} from "zustand"

type ShowUiMobile = {
    state: boolean,
    open: () => void,
    close: () => void,
}

export const StoreShowUiMobile = create<ShowUiMobile>((set) => ({
    state: false,

    open: () => set({state: true}),
    close: () => set({state: false}),
}));