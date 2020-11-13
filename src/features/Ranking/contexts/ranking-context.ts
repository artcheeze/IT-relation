import _ from 'lodash'
import { action, observable } from 'mobx'
import { createContext } from 'react'

import { fetchRanking, fetchTimeTable } from './../../../core/services/ranking'
import DB from '../../../core/services/index'

class RankingContext {
  @observable ranking: any = []
  @observable timeTable: any = null
  @observable defaultTimeTable: any = null
  @observable field: any = 0

  constructor() {
    DB.collection('sit-rela')
      .doc('schedule')
      .onSnapshot((doc) => {
        this.handleTimeTableChange(doc.data())
      })
  }

  @action handleTimeTableChange = (data: any) => {
    this.defaultTimeTable = data?.match || []
    this.handleSelectField()
    this.sortedRanking()
  }

  @action handleSelectField = () => {
    if (this.field === 0) {
      this.timeTable = this.defaultTimeTable
    } else if (this.field === 1) {
      this.timeTable = _.filter(this.defaultTimeTable, (item) => {
        return item.field === 1
      })
    } else if (this.field === 2) {
      this.timeTable = _.filter(this.defaultTimeTable, (item) => {
        return item.field === 2
      })
    }
  }

  @action setField = (n: any) => {
    this.field = n
    this.handleSelectField()
  }

  @action sortedRanking() {
    var sortedKey = Object.keys(this.ranking).sort((a: any, b: any) => {
      return this.ranking[b] - this.ranking[a]
    })
    var obj: any = {}
    _.map(sortedKey, (item) => {
      obj[item] = this.ranking[item]
    })
    this.ranking = obj
  }

  @action fetchRanking = async () => {
    try {
      var data = await fetchRanking()
      this.ranking = data
      this.sortedRanking()
    } catch (err) {
      console.log(err)
    }
  }
  @action fetchTimeTable = async () => {
    try {
      var data = await fetchTimeTable()
      this.defaultTimeTable = data?.match
      this.timeTable = data?.match
    } catch (err) {
      console.log(err)
    }
  }
}

export const rankingContext = createContext(new RankingContext())
