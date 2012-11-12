/*
 * A snippet to find the longest palindrome in a string
 * The search is case sensitive, so a string like 'Racecar' 
 * will not be considered a palindrome.
 * If more than one palindromes are found with equal 
 * length, return only the first one found.
 *
 * Author: Andy Kurniadi (http://github.com/nomoredistance)
 */

var s = "FourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinzLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";

var lIdx, rIdx, lChar, rChar;
var charSpan, maxCharSpan = 1;
var maxPal = '', maxPalIdxStart = 0, maxPalIdxEnd = 0, maxPalLen = 1;

for (var i=1; i < s.length-1; i+=0.5) {
	lChar = rChar = '';
	charSpan = 1;

	while (lChar === rChar) {
		lIdx   = Math.ceil(i)  - charSpan;
		rIdx   = Math.floor(i) + charSpan;
		lChar  = s[lIdx];
		rChar  = s[rIdx];
		if (typeof(lChar) === 'string' && typeof(rChar) === 'string'
				&& lChar === rChar) {
			if (charSpan > maxCharSpan) {
				maxPalIdxStart = lIdx;
				maxPalIdxEnd   = rIdx;
				maxPalLen = charSpan *2 +1;
				maxCharSpan = charSpan;
			}
		} else {
			break;
		}
		charSpan += 1;
	}
}

for (i=maxPalIdxStart; i<=maxPalIdxEnd; i++) {
	maxPal += s[i];
}

console.log('longest palindrom length: ' 	 + maxPalLen);
console.log('longest palindrom is: '       + maxPal);
console.log('start index in the string: '  + maxPalIdxStart);
console.log('ending index in the string: ' + maxPalIdxEnd);
