import _ from 'lodash'

import DB from './index'

export const fetchRanking = async () => {
  return (await DB.collection('sit-rela').doc('ranking').get()).data()
}

export const fetchTimeTable = async () => {
  return (await DB.collection('sit-rela').doc('schedule').get()).data()
}
