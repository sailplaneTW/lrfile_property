
import * as types from './action/types'

const initialState = {
  isLogin: false,
  expireTime: 1513582299121,
  userName: '',
  accessToken: '',
  refreshToken: '',
  info: {
    name: '',
    phone: '',
    email: '',
    corporation: '',
    receiveAddress: {
      code: '',
      city: '',
      detail: '',
    },
    receiptInfo: {
      title: '',
      id: '',
      address: {
        code: '',
        city: '',
        detail: '',
      },
    },
  },
  production: {

  },

}


export default function member(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      const now = new Date().getTime()
      newState.isLogin = true
      newState.userName = action.userName
      newState.accessToken = action.accessToken
      newState.refreshToken = action.refreshToken
      newState.expireTime = now + (action.expireTime * 1000)
      return newState

    case types.REFRESH_TOKEN:
      newState.accessToken = action.accessToken
      newState.expireTime = new Date().getTime() + (action.expireTime * 1000)
      return newState

    case types.REFRESH_TOKEN_EXPIRED:
      return initialState

    case types.ACCESS_TOKEN_EXPIRED:
      newState.accessToken = ''
      newState.expireTime = new Date().getTime() - 1000
      return newState

    case types.LOGOUT:
      newState.isLogin = false
      newState.isRefresh = false
      newState.accessToken = ''
      newState.refreshToken = ''
      newState.expireTime = 0
      return newState

    case types.USER_PROFILE:
      const info = {
        name: action.name,
        phone: action.phoneNumber,
        email: action.email,
        company: action.company,
        receiveAddress: {
          code: action.receiveAddrInfo.receiveAddrPostcode,
          city: action.receiveAddrInfo.receiveAddrCity,
          district: action.receiveAddrInfo.receiveAddrDistrict,
          detail: action.receiveAddrInfo.receiveAddrDetail,
        },
        receiptInfo: {
          title: action.invoiceTitle,
          id: action.invoice,
          address: {
            code: action.invoiceAddrInfo.invoiceAddrPostcode,
            city: action.invoiceAddrInfo.invoiceAddrCity,
            district: action.invoiceAddrInfo.invoiceAddrDistrict,
            detail: action.invoiceAddrInfo.invoiceAddrDetail,
          },
        },
      }
      newState.info = info
      return newState
    break

    case types.PRODUCT_LIST:
      newState.production = {
        back: action['boxBack'],
        box: action['boxBuy'],
        boxSave: action['boxBuySave'],
        save: action['boxSave']
      }
      return newState
    break

    default:
      return state
  }
}