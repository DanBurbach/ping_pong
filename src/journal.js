export function counter(body) {
  var vowel_list = 'aeiouAEIOU';
  var consonants_list= 'bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ';
  var vowel_total = 0;
  var consonants_total = 0;
  var trash = 0;
  for (var i = 0; i < body.length; i++) {
    // debugger
    if (vowel_list.indexOf(body[i]) !== -1) {
      vowel_total += 1;
    } else if (consonants_list.indexOf(body[i]) !== -1) {
      consonants_total +=1;
    } else {
      trash +=1;
    }
  }
  return [vowel_total, consonants_total];
}
