import { create} from "zustand"

const useGlobalState = create((set) => ({
    isLoading: false,
    setIsLoading: (state) => set(() => ({ isLoading: state})),
}))



export default useGlobalState;