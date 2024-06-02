function share(){
  var Share = new NativeShare({
    wechatConfig: {
      appId: '',
      timestamp: '',
      nonceStr: '',
      signature: '',
    },
    syncDescToTag: false,
    syncIconToTag: false,
    syncTitleToTag: false,
  });
  Share.setShareData({
    icon: '',
    link: '',
    title: '分享',
    desc: shiju + xinxi,
    from: '@Adpro adproqwq.top',
  });
  try {
    Share.call('default');
  }
  catch (err) {
    alert('分享失败，请更换浏览器或稍后再试！');
  }
}