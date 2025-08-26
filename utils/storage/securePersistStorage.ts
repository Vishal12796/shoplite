import SecureAppStorage from "@/storage/secureStorage";

const securePersistStorage = {
  getItem: (key: string): Promise<string | null> => {
    return SecureAppStorage.getItem(key);
  },
  setItem: (key: string, value: string): Promise<void> => {
    return SecureAppStorage.setItem(key, value);
  },
  removeItem: (key: string): Promise<void> => {
    return SecureAppStorage.deleteItem(key);
  },
};

export default securePersistStorage;
