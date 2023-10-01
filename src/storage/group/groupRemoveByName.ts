import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLECTION, PLAYER_COLECTION } from "@storage/storageConfig";

import groupGetAll from "./groupGetAll";

export async function groupRemoveByName(groupDeleted: string){
  try{
    const storageGroups = await groupGetAll();
    const groups = storageGroups.filter(group => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLECTION}-${groupDeleted}`);
  } catch(err){
    throw err;
  }
}
