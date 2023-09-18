import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLECTION } from '@storage/storageConfig';
import groupGetAll from './groupGetAll';

const groupCreate = async (newGroup: string) => {
    try{
      const storageGroups = await groupGetAll();

      const storage = JSON.stringify([...storageGroups, newGroup]);
      await AsyncStorage.setItem(GROUP_COLECTION, storage);
    }catch(err){
      throw err;
    }
}

export default groupCreate;
