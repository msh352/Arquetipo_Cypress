export default class Utils {

    /******LLEVAR A UTILS*******/
    randomDni() {
        var num = Math.floor( ( Math.random() * 100000000 ) );
        var sNum = this.formatNumberLength( num, 8 );
        return sNum + this.charDNI( sNum );
    }

    formatNumberLength(num, length) {
      var r = "" + num;
      while ( r.length < length ) {
        r = "0" + r;
      }
      return r;
    }

    charDNI(dni) {
      var chain = "TRWAGMYFPDXBNJZSQVHLCKET";
      var pos = dni % 23;
      var letter = chain.substring( pos, pos + 1 );
      return letter;
    }

    randomName(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;

        for (var i = 0; i < length; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

}