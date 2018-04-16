import config from './config';
import conn from './conn';

const register = (data) => {
  const url = `https://${config.host}${config.resource.register}`;
  const options = Object.assign({}, config.option);
  options.body = JSON.stringify({
    email: data.email || ' ',
    password: data.password || ' ',
    name: data.name || ' ',
    phoneNumber: data.phone || ' ',
    company: data.companyInfo.name || ' ',
    companyInvoice: data.companyInfo.code || ' ',
    receiveAddrPostcode: data.companyInfo.zip || ' ',
    receiveAddrCity: data.companyInfo.city || ' ',
    receiveAddrDistrict: data.companyInfo.district || ' ',
    receiveAddrDetail: data.companyInfo.address || ' ',
    invoice: data.receiptInfo.code || ' ',
    invoiceTitle: data.receiptInfo.title || ' ',
    invoiceAddrPostcode: data.receiptInfo.zip || ' ',
    invoiceAddrCity: data.receiptInfo.city || ' ',
    invoiceAddrDistrict: data.receiptInfo.district || ' ',
    invoiceAddrDetail: data.receiptInfo.address || ' ',
    inviteCode: data.invite || ' ',
  });
  return conn(url, options);
}


const login = (username, password) => {
  const url = `https://${config.host}${config.resource.login}`;
  const options = Object.assign({}, config.option);
  options.body = JSON.stringify({
    email: username,
    password: password,
  });
  return conn(url, options);
}

const getNewAccessToken = (refreshToken) => {
  const url = `https://${config.host}${config.resource.refresh}`;
  const options = { ...config.option };
  options.body = JSON.stringify({
    refreshToken: refreshToken,
  });
  return conn(url, options);
}

const getUserInfo = (accessToken) => {
  const url = `https://${config.host}${config.resource.userInfo}`;
  const options = { ...config.option };
  options.headers.set('Authorization', accessToken);

  return conn(url, options);
}

const getProductInfo = (accessToken) => {
  const url = `https://${config.host}${config.resource.productList}`;
  const options = Object.assign({}, config.option);
  options.headers.set('Authorization', accessToken);

  return conn(url, options);

}

const getCompanyInfo = (code) => {
  const url = `https://${config.host}${config.resource.companyInfo}`;
  const options = Object.assign({}, config.option);
  options.body = JSON.stringify({
    invoice: code,
  });
  return conn(url, options);
}

const checkInvite = (invite) => {
  const url = `https://${config.host}${config.resource.inviteCheck}`;
  const options = Object.assign({}, config.option);
  options.body = JSON.stringify({
    inviteCode: invite,
  });
  return conn(url, options);
}

export {
  register,
  login,
  getNewAccessToken,
  getUserInfo,
  getProductInfo,
  getCompanyInfo,
  checkInvite,
}
