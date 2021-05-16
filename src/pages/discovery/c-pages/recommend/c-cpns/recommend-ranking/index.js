import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'


import MWThemeHeaderRCM from '@/components/theme-header-rcm'
import MWTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreators'

export default memo(function MWRecomendRanking() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <MWThemeHeaderRCM title="榜单" />
      <div className="tops">
        <MWTopRanking info={upRanking}/>
        <MWTopRanking info={newRanking}/>
        <MWTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
