import {} from './playerAddByGroup';
import playersGetByGroup from './playersGetByGroups';

export async function playersGetByGroupAndTeam(group: string, team: string){
  try{
    const storage = await playersGetByGroup(group);

    const players = await storage.filter(player => player.team === team);

    return players;
  } catch(err){
    throw err;
  }
}
