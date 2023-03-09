function  invertColor(hexcolor, inverterToBlackWhiteOnly) {
        if (hexcolor.indexOf('#') === 0) {
            hexcolor = hexcolor.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hexcolor.length === 3) {
            hexcolor = hexcolor[0] + hexcolor[0] + hexcolor[1] + hexcolor[1] + hexcolor[2] + hexcolor[2];
        }
        if (hexcolor.length !== 6) {
            // throw new Error('Invalid HEX color.');
        }
        let r: any = parseInt(hexcolor.slice(0, 2), 16),
            g: any = parseInt(hexcolor.slice(2, 4), 16),
            b: any = parseInt(hexcolor.slice(4, 6), 16);
        if (inverterToBlackWhiteOnly) {
            return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                ? '#000000'
                : '#FFFFFF';
        }

        // invert color components
        r = (255 - r).toString(16);
        g = (255 - g).toString(16);
        b = (255 - b).toString(16);
        // pad each with zeros and return
        return `#${padLeft(r)}${padLeft(g)}${padLeft(b)}`;
    }
	
 function padLeft(str, len: number = 2, charPad) {
	 if(!len){
		 len = 2;
	}
	if(!charPad){
		charPad = '0';
	}
	
	const zeros = new Array(len).join(charPad);
	return (zeros + str.toString()).slice(-len);
}