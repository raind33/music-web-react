import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import MWTopBanner from './c-cpns/top-banner'
import MWHotRecommend from './c-cpns/hot-recommend'
import MWNewAlbum from './c-cpns/new-album'
import MWRecommendRanking from './c-cpns/recommend-ranking'
// import MWUserLogin from './c-cpns/user-login';
import MWSettleSinger from './c-cpns/settle-singer'
// import MWHotAnchor from './c-cpns/hot-anchor'
import { changeTest } from './store/actionCreators'
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

function MWRecommend(props) {
  const [test] = useSelector(state => {
    return [state.getIn(['recommend', 'test'])]
  }, shallowEqual)
  return (
    <RecommendWrapper>
      {test}
      <MWTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <MWHotRecommend/>
          <MWNewAlbum/>
          <MWRecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          {/* <MWUserLogin/> */}
          {/* <MWSettleSinger/> */}
          {/* <MWHotAnchor/> */}
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(MWRecommend)


// function MWRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//     <div>
//       <h2>MWRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }



