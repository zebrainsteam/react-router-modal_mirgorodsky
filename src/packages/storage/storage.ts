let storageLib = localStorage

export const storage = {
    setItem: (name: string, value) => {
        storageLib.setItem(name, value)
    },
    getItem: (name: string) => {
        return storageLib.getItem(name)
    }
}


