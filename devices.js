var devices = {
//	Mobile devices
	useragentsMobile: {
		"Android":			"Android.*?Mobile",
		"BlackBerry":		"BlackBerry",
		"iPhone":			"iPhone",
		"iPod":				"iPod",
		"Opera":			"Opera Mini",
		"Windows":			"IEMobile"
		
	},
//	Tablets
	useragentsTablet: {
		"Android":			"Android(?!.*Mobile)",
		"BlackBerry":		"BlackBerry",
		"iPad":				"iPad",
		"Kindle":			"\W(kindle|silk)\W"
	},
//	Televisions
	useragentsTv: {
		"Apple":			"AppleTV",
		"Google":			"GoogleTV",
		"Sony":				"SonyDTV"
	},
	
	isMobile: function(){ return ua.matchUseragents(ua.useragentsMobile); },
	
	isTablet: function(){ return ua.matchUseragents(ua.useragentsTablet); },
	
	isTv: function(){ return ua.matchUseragents(ua.useragentsTv); },
	
	matchUseragents: function(useragents){
		var i_ua;
		for(i_ua in useragents) {
			if (navigator.userAgent.match(new RegExp(useragents[i_ua], "i"))) {
			//	Matching useragent found.
				return true;
			}
		}	//	each useragent
	//	No match found
		return false;
	}
	
};
