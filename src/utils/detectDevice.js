function DetectDevice() {
  if (window.innerWidth >= 768) {
    return 'desktop'
  } else if (window.innerWidth <= 768 && window.innerWidth >= 576) {
    return 'tablet'
  } else if (window.innerWidth <= 576) {
    return 'mobile'
  }
}
export default DetectDevice
