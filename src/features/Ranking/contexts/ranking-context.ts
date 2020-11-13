import { action, observable } from 'mobx'
import { createContext } from 'react'

import { fetchRanking } from './../../../core/services/ranking';

class RankingContext {
  @observable ranking: any = null
 

  @action fetchRanking = async () => {
    try{
      var data = await fetchRanking()
      console.log(data)
      this.ranking = data
    }catch(err){
      console.log(err)
    }
  
  }
}

export const rankingContext = createContext(new RankingContext())
