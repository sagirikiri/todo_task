import appConst from '@/const.js'

export default {
  /**
   * 指定されたフォーマットの本日日付を返却する。
   * @param {string} format 日付フォーマット
   *    指定できるフォーマットは'yyyyMMdd', 'yyyy-MM-dd', 'yyyy/MM/dd'
   *    const経由で指定すること。
   * @returns {string} 指定フォーマットの本日日付文字列
   */
  getTodayYmd: function (format) {
    const todayYmd = new Date()
    return this.getYmd(todayYmd, format)
  },

  /**
   * 指定されたフォーマットの日付を返却する。
   * @param {Date|string} date 日付
   * @param {string} format 日付フォーマット
   *    指定できるフォーマットは'yyyyMMdd', 'yyyy-MM-dd', 'yyyy/MM/dd'
   *    const経由で指定すること。
   * @returns {string} 指定フォーマットの日付文字列
   */
  getYmd: function (date, format) {
    let paddedYear, paddedMonth, paddedDay

    // dateがstringだった場合の処理
    if (typeof date === 'string') {
      if (date.length === 8) { // '20190316'の形は認める
        date = date.substring(0, 4) + '-' + date.substring(4, 6) + '-' + date.substring(6, 8)
      }
      date = new Date(date)
    }
    if (!(date instanceof Date) || date.toString() === 'Invalid Date') { // Invalid Date
      return null
    }

    // 桁数調整
    paddedYear = this.leftZeroPadding(date.getFullYear().toString(), 4)
    paddedMonth = this.leftZeroPadding((date.getMonth() + 1).toString(), 2) // jsのMonthは0が1月のため調整
    paddedDay = this.leftZeroPadding(date.getDate().toString(), 2)

    // 指定されたフォーマットで分岐
    switch (format) {
      // 'yyyyMMdd'
      case appConst.YMDFORMAT_YYYYMMDD_PLAIN:
        return paddedYear + paddedMonth + paddedDay
      // 'yyyy-MM-dd'
      case appConst.YMDFORMAT_YYYYMMDD_HYPHEN:
        return paddedYear + '-' + paddedMonth + '-' + paddedDay
      // 'yyyy/MM/dd'
      case appConst.YMDFORMAT_YYYYMMDD_SLASH:
        return paddedYear + '/' + paddedMonth + '/' + paddedDay
      default:
        return null
    }
  },

  /**
   * 対象文字列を指定された桁数になるまで左詰めでゼロパディングする。
   * @param {string} str パディング対象文字列
   * @param {Number} digit 桁数
   * @returns {string} ゼロパディング済み文字列
   */
  leftZeroPadding: function (str, digit) {
    return str.padStart(digit, '0')
  }
}
